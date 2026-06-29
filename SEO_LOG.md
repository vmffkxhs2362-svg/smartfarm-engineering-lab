# 📈 Smart Farm Engineering Lab - SEO & Traffic Optimization Log

이 문서는 스마트팜 엔지니어링 랩 계산기 서비스([index.html](file:///g:/My%20Drive/Antigravity/Headquater/Career/Passive_Income_Hub/index.html))의 검색 엔진 최적화(SEO), 구글 애널리틱스(GA4), 구글 서치 콘솔(GSC) 연동 이력 및 키워드 개선 히스토리를 정량적으로 기록하는 지속성 보존 문서입니다.

## 1. ⚙️ 연동 및 마케팅 인프라 설정 내역

| 일자 (KST) | 내역 | 상태 | 세부 내용 |
| :--- | :--- | :--- | :--- |
| 2026-06-13 | **GA4 추적 태그 연동** | 완료 | `G-V4RYJBMEDE` 추적 코드 적용 및 이벤트 바인딩 완료 |
| 2026-06-13 | **Google Search Console 연동** | 완료 | URL 접두사 속성 매칭 및 GA4 웹스트림 최종 바인딩 완료 (`VERKNÜPFUNG ERSTELLT`) |
| 2026-06-13 | **1차 한국어 메타데이터 최적화** | 완료 | 한/영 병기 타이틀 및 메타 디스크립션 국문 키워드 추가 완료 |
| 2026-06-27 | **캐노니컬 및 사이트맵 최적화** | 완료 | 각 계산기 페이지의 Canonical Tag를 자기 참조로 복구하고, sitemap.xml의 index.html 중복 제거 및 동적 링크 리라이터 구현 완료 |
| 2026-06-29 | **커스텀 도메인 GSC 등록 및 사이트맵 제출** | 완료 | `https://smartfarm.inwoovation.com/` URL 접두사 추가 및 GA4 연동을 통한 자동 소유권 인증 완료. `sitemap.xml` 제출 성공 (15개 페이지 발견) |

## 2. 📝 메타데이터 변경 이력

### 2026-06-27 (구글 애드센스 대비 SEO 및 Canonical 최적화)
* **목적**: 구글 애드센스 거절(콘텐츠 부족 등)을 방지하기 위해 크롤러가 각 계산기 페이지의 독립적인 고유 콘텐츠를 올바르게 색인하도록 교정.
* **변경 내역**:
  * **Canonical Tags**: 모든 서브 페이지(`vpd.html`, `mixing_valve.html`, `fertigation.html`, `heat_loss.html`, `roi_simulator.html`, `transpiration.html`, `diagnosis.html`, `vertical_dli.html`, `about.html`, `contact.html`, `terms.html`, `privacy.html`)의 캐노니컬 URL을 자기 자신을 가리키도록 정밀 교정 및 추가.
  * **Sitemap**: `sitemap.xml` 내의 `index.html` 중복 엔트리를 제거하고 루트 `/`만 남김으로써 중복 콘텐츠 인덱싱 경고 해제.
  * **Dynamic URL Rewrite**: 로컬 `file://` 오프라인 실행의 호환성을 해치지 않으면서 라이브 웹 환경에서 `/` 표준 경로를 서빙하기 위해, `common.js`에 웹 프로토콜(HTTP/HTTPS) 감지 시 모든 `index.html` 링크를 루트 `/`로 동적 치환하는 스크립트 적용.

### 2026-06-13 (1차 한국어 SEO 최적화)
* **목적**: 국내 농업인 및 스마트팜 엔지니어 대상 검색 유입(VPD 계산기, 양액 희석, 혼합 밸브 등) 극대화.
* **변경 내역**:
  * **Title**:
    - *기존*: `AgTech Precision Calculator | VPD, Mixing Valve & Fertigation`
    - *변경*: `스마트팜 정밀 계산기 (VPD, 양액 희석, 혼합 밸브) | AgTech Precision Calculator`
  * **Description**:
    - *기존*: `Free premium online calculator for Vapor Pressure Deficit (VPD), Greenhouse Mixing Valve Sizing, and Fertigation Stock Tank Dilution. Built for smart farm engineers and growers.`
    - *변경*: `온실 기후 제어 및 유압 설계를 위한 무료 스마트팜 정밀 계산기. 엽면 포차(VPD), 비료 양액 희석 비율, 난방 혼합 밸브(Kv), 온실 열손실 계산기를 무료로 이용해 보세요.`

### 2026-06-25 (SEO & 보안 최종 보강)
* **목적**: 검색엔진 언어 적합성 강화, 소셜 마케팅 공유 카드 확장, 비공개 베타 페이지 크롤링 원천 차단.
* **변경 내역**:
  * **HTML Lang**: `<html lang="en">` -> `<html lang="ko">`로 변경하여 구글 및 네이버 검색 봇의 한국어 인덱싱 적합성 개선.
  * **Keywords**: `<meta name="keywords">`를 추가하여 온실 기후 제어, VPD 등 핵심 AgTech 키워드 색인 신호 강화.
  * **Twitter Card**: 트위터 공유용 메타 태그 추가 (`summary_large_image`, title, description, cover.png).
  * **Robots.txt**: 미승인 베타 계산기 페이지(`hydroponics_calculator.html`, `home_gardening_directory.html`)의 구글/네이버 수집을 완전히 차단하는 `Disallow` 규칙 추가.

## 3. 📊 키워드 유입 및 트래픽 분석 로그 (GA4 & GSC 연동 데이터)
*※ 향후 `analyze_ga4_traffic.py` 스크립트 실행 후 수집되는 실데이터를 주기적으로 업데이트할 예정입니다.*

| 측정 기간 | 총 사용자 수 | 세션 수 | 주요 유입 키워드 (Top 5) | 비고 |
| :--- | :---: | :---: | :--- | :--- |
| 2026.06.22 ~ 2026.06.29 | 17 | 24 | 검색어 데이터 없음 | API 자동 수집 갱신 |

---
*마지막 업데이트: Antigravity AI Operations | 2026-06-25*
