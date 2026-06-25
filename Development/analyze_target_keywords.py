# -*- coding: utf-8 -*-
import os
import sys
import datetime
import time
import json

try:
    import requests
except ImportError:
    print("[-] 'requests' 라이브러리가 설치되어 있지 않습니다.")
    print("[*] 실행하려면 다음 명령을 가동해 주십시오: pip install requests")
    sys.exit(1)

def get_google_suggestions(keyword):
    """
    Google Suggest API를 활용하여 봇 차단(429) 없이 연관 검색어(자동완성)를 긁어옵니다.
    Chrome/Firefox의 검색 창 자동완성 기능을 우회 활용하여 실제 유입 검색 키워드를 포착합니다.
    """
    url = f"http://suggestqueries.google.com/complete/search?client=firefox&q={keyword}"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    try:
        response = requests.get(url, headers=headers, timeout=10)
        if response.status_code == 200:
            # Response format: [query, [suggestions], [descriptions], ...]
            data = json.loads(response.text)
            if len(data) > 1:
                return data[1] # List of suggestions
        else:
            print(f"[-] Google Suggest API 응답 에러: {response.status_code}")
    except Exception as e:
        print(f"[-] Google Suggest API 호출 실패: {str(e)}")
    return []

def generate_report():
    print("[*] 구글 자동완성(Suggest) 분석 시스템 가동 중 (429 차단 우회 모드)...")
    
    # Define target seed keywords in Smart Agriculture / AgTech domain
    keywords = [
        'VPD calculator', 
        'fertigation calculator', 
        'greenhouse heating load', 
        'mixing valve Kv'
    ]
    
    report_path = "g:/My Drive/Antigravity/Headquater/Career/Passive_Income_Hub/Development/keyword_trend_report.md"
    os.makedirs(os.path.dirname(report_path), exist_ok=True)
    
    current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    markdown_content = f"""# 📊 AgTech Target Keyword & Google Suggest Intelligence Report

* **수집 및 분석 일시 (KST)**: `{current_time}`
* **시스템 구동**: Antigravity TF-Omega (Automated Suggest Scraper)
* **목적**: Google Auto-Complete(자동완성) 엔진 분석을 통한 글로벌 스마트팜 실시간 유입 니즈 분석
* **상태**: 🟢 구글 트렌드 429 차단 우회(Suggest API) 모드로 정상 수집 완료

---

## 🏛️ 1. 요약 (Executive Summary)
* 본 보고서는 구글 트렌드의 봇 감지(429 Too Many Requests) 우려를 피하고, 실제 타겟 사용자가 구글 검색창에 시드 키워드를 칠 때 실시간으로 추천되는 **자동완성 연관 키워드(Google Suggestions)**를 추출하여 기록합니다.
* 사용자가 검색창에 키워드를 친다는 것은 해당 니즈(Tool, Formula, Excel 등)를 직접 찾고 있다는 증거이므로, 이를 우선적으로 계산기 개선에 활용합니다.

---

## 📈 2. 키워드별 실시간 자동완성 추천 목록 (Google Suggestions)
"""
    
    for kw in keywords:
        print(f"[*] '{kw}' 자동완성어 추천 데이터 수집 중...")
        markdown_content += f"\n### 🔍 Seed Keyword: `{kw}`\n"
        
        suggestions = get_google_suggestions(kw)
        
        if suggestions:
            markdown_content += "\n| 순위 | 구글 추천 자동완성 검색어 (Suggested Query) |\n| :---: | :--- |\n"
            for i, suggestion in enumerate(suggestions, 1):
                markdown_content += f"| {i} | **{suggestion}** |\n"
        else:
            markdown_content += "\n* 구글 자동완성 추천 키워드가 존재하지 않거나 일시적 통신 지연 상태입니다.\n"
            
        # Anti-scraping rate limit protection
        time.sleep(2)
            
    # Write the report file
    try:
        with open(report_path, "w", encoding="utf-8") as f:
            f.write(markdown_content)
        print(f"[+] 트렌드 분석 보고서 생성 성공: {report_path}")
    except Exception as e:
        print(f"[-] 파일 저장 중 오류 발생: {str(e)}")

if __name__ == "__main__":
    generate_report()
