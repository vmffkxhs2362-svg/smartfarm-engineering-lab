# -*- coding: utf-8 -*-
"""
Google Analytics 4 (GA4) 및 Google Search Console (GSC) API 연동 트래픽 수집 스크립트
작성일: 2026-06-29
설명: G: 드라이브 내에 배치될 서비스 계정 키(credentials.json)를 활용해 
      두 API에서 주간 실시간 트래픽 및 검색 쿼리를 수집한 후, SEO_LOG.md에 자동 주입합니다.
"""

import os
import sys
import json
from datetime import datetime, timedelta

# Google API 클라이언트 라이브러리 임포트 시도
try:
    from google.oauth2 import service_account
    from googleapiclient.discovery import build
    from google.analytics.data_v1beta import BetaAnalyticsDataClient
    from google.analytics.data_v1beta.types import RunReportRequest, DateRange, Metric, Dimension
except ImportError:
    print("[ERROR] 필수 라이브러리가 누락되었습니다. 아래 명령어로 설치해 주십시오:")
    print("pip install google-api-python-client google-auth-httplib2 google-auth-oauthlib google-analytics-data")
    sys.exit(1)

# 절대 경로 기준 설정
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CREDENTIALS_PATH = os.path.join(BASE_DIR, "data", "gsc_ga4_credentials.json")
SEO_LOG_PATH = os.path.join(BASE_DIR, "SEO_LOG.md")

# API 스코프 정의
SCOPES = [
    "https://www.googleapis.com/auth/webmasters.readonly",  # GSC Read
    "https://www.googleapis.com/auth/analytics.readonly"   # GA4 Read
]

def load_credentials():
    if not os.path.exists(CREDENTIALS_PATH):
        print(f"[WARNING] 구글 API 서비스 계정 키 파일이 존재하지 않습니다: {CREDENTIALS_PATH}")
        print("G: 드라이브 내에 'gsc_ga4_credentials.json' 이름으로 서비스 계정 키 파일을 배치해야 자동 수집이 가동됩니다.")
        return None
    return service_account.Credentials.from_service_account_file(CREDENTIALS_PATH, scopes=SCOPES)

def fetch_gsc_data(creds, site_url, days=7):
    """Google Search Console API를 호출하여 검색 키워드 및 노출수 수집"""
    try:
        service = build("webmasters", "v3", credentials=creds)
        end_date = datetime.today() - timedelta(days=2)  # GSC 데이터는 보통 2일 지연 반영
        start_date = end_date - timedelta(days=days)
        
        request = {
            "startDate": start_date.strftime("%Y-%m-%d"),
            "endDate": end_date.strftime("%Y-%m-%d"),
            "dimensions": ["query"],
            "rowLimit": 5
        }
        
        response = service.searchanalytics().query(siteUrl=site_url, body=request).execute()
        rows = response.get("rows", [])
        
        queries = []
        for r in rows:
            query = r.get("keys", [""])[0]
            clicks = r.get("clicks", 0)
            impressions = r.get("impressions", 0)
            queries.append(f"{query} (클릭: {clicks}/노출: {impressions})")
        
        return ", ".join(queries) if queries else "검색어 데이터 없음"
    except Exception as e:
        print(f"[GSC API ERROR] {e}")
        return "GSC API 수집 실패"

def fetch_ga4_data(creds, property_id, days=7):
    """Google Analytics 4 Data API를 호출하여 총 사용자 수 및 세션 수 수집"""
    try:
        # 서비스 계정 키 환경변수 임시 설정 (GA4 클라이언트 호환성용)
        os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = CREDENTIALS_PATH
        client = BetaAnalyticsDataClient()
        
        end_date = datetime.today()
        start_date = end_date - timedelta(days=days)
        
        request = RunReportRequest(
            property=f"properties/{property_id}",
            dimensions=[],
            metrics=[
                Metric(name="activeUsers"),
                Metric(name="sessions")
            ],
            date_ranges=[DateRange(
                start_date=start_date.strftime("%Y-%m-%d"),
                end_date=end_date.strftime("%Y-%m-%d")
            )]
        )
        
        response = client.run_report(request)
        
        active_users = 0
        sessions = 0
        
        if response.rows:
            active_users = int(response.rows[0].metric_values[0].value)
            sessions = int(response.rows[0].metric_values[1].value)
            
        return active_users, sessions
    except Exception as e:
        print(f"[GA4 API ERROR] {e}")
        return 0, 0

def update_seo_log(period_str, users, sessions, top_queries):
    """SEO_LOG.md의 표 데이터를 파싱하여 최신 수치로 동적 주입"""
    if not os.path.exists(SEO_LOG_PATH):
        print(f"[ERROR] SEO_LOG.md 파일을 찾을 수 없습니다: {SEO_LOG_PATH}")
        return
        
    with open(SEO_LOG_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    # 테이블에 새로 입력될 데이터 라인 빌드
    new_row = f"| {period_str} | {users} | {sessions} | {top_queries} | API 자동 수집 갱신 |"
    
    # "## 3. 📊 키워드 유입 및 트래픽 분석 로그" 섹션 위치 파싱
    target_header = "## 3. 📊 키워드 유입 및 트래픽 분석 로그 (GA4 & GSC 연동 데이터)"
    
    if target_header not in content:
        print("[ERROR] SEO_LOG.md 내에 대상 테이블 헤더를 찾을 수 없습니다.")
        return
        
    parts = content.split(target_header)
    table_part = parts[1].split("\n\n")[0] # 헤더 뒤 테이블 내용 추출
    
    # 테이블 행 구조를 분리
    table_lines = table_part.strip().split("\n")
    
    # 만약 '대기 중' 행만 있다면 교체하고, 기존에 기록이 있다면 하단에 누적
    if "대기 중" in table_part:
        # 헤더 2줄(칼럼명, 구분선) 뒤에 새로운 행 삽입
        updated_table_lines = table_lines[:2] + [new_row]
    else:
        # 기존 누적 데이터 끝에 새로운 수집 결과 추가
        updated_table_lines = table_lines + [new_row]
        
    updated_table_part = "\n".join(updated_table_lines)
    
    # 전체 파일 내용 조립
    new_content = parts[0] + target_header + "\n" + updated_table_part + "\n\n" + "\n\n".join(parts[1].split("\n\n")[1:])
    
    with open(SEO_LOG_PATH, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"[SUCCESS] SEO_LOG.md의 트래픽 분석 데이터가 안전하게 업데이트되었습니다.")

def main():
    creds = load_credentials()
    if not creds:
        print("[INFO] 서비스 계정 연동 전이므로 수집 단계를 스킵합니다.")
        return
        
    # 설정 상수 (GSC 및 GA4 연동 정보)
    # ※ 이 부분은 사령관님의 실제 GA4 Property ID 및 GSC URL로 설정하여 실행합니다.
    GSC_SITE_URL = "https://smartfarm.inwoovation.com/"
    GA4_PROPERTY_ID = "449174092"  # 사령관님의 실제 GA4 속성 ID (설정 메뉴에서 조회 가능)
    
    print("[INFO] Google APIs 트래픽 실데이터 수집 시작...")
    
    # 최근 7일 기간 정의
    today_str = datetime.today().strftime("%Y.%m.%d")
    seven_days_ago_str = (datetime.today() - timedelta(days=7)).strftime("%Y.%m.%d")
    period_str = f"{seven_days_ago_str} ~ {today_str}"
    
    # 1. GSC 데이터 수집
    top_queries = fetch_gsc_data(creds, GSC_SITE_URL, days=7)
    
    # 2. GA4 데이터 수집
    users, sessions = fetch_ga4_data(creds, GA4_PROPERTY_ID, days=7)
    
    # 3. 마크다운 로그 갱신
    update_seo_log(period_str, users, sessions, top_queries)

if __name__ == "__main__":
    main()
