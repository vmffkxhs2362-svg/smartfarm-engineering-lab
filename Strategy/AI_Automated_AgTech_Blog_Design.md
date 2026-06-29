# 📰 AI Automated AgTech Blog: RSS Mining & Jekyll Static Site Architecture

본 문서는 글로벌 메이저 스마트팜/시설 원예 정보원으로부터 최신 뉴스 피드(RSS)를 실시간 수집하고, LLM(대형 언어 모델)을 통해 한국어/영어/독일어로 자동 요약·포스팅을 생성하여 GitHub Pages 및 Jekyll 기반의 무료 정적 사이트에 자동 배포하기 위한 **글로벌 스마트팜 자동 요약 블로그(AI-Powered Blog)** 기술 설계 명세서입니다.

이 기획안은 향후 `inwoovation.com`에 연동할 서브 블로그 및 B2B 마켓 센싱 데이터 크롤러 설계의 공식 가이드로 사용됩니다.

---

## 🔌 1. 타겟 뉴스 소스 및 RSS 피드 채널 정의 (RSS Sources)

정밀 농업 및 스마트 온실 관련 공신력 있는 글로벌 5대 뉴스 포털의 RSS 주소를 활용합니다.

| 뉴스 소스 (Publisher) | RSS 피드 주소 (RSS URL) | 뉴스 성격 및 타겟 키워드 |
| :--- | :--- | :--- |
| **HortiDaily** | `https://www.hortidaily.com/rss/` | 글로벌 유리온실 시설 원예 시장 동향, 기업 뉴스 |
| **Greenhouse Grower** | `https://www.greenhousegrower.com/feed/` | 온실 재배 생리, 관수/조명 장비 신기술 트렌드 |
| **WUR News** | `https://www.wur.nl/en/news-wur/show/rss.htm` | 네덜란드 바헤닝언 대학의 최첨단 아그리테크 연구 결과 |
| **USDA AgResearch** | `https://www.ars.usda.gov/news-events/rss/` | 미국 농무부 산하 기후변화 및 노지/온실 작물 보호 기술 |
| **Fraunhofer IMW** | `https://www.imw.fraunhofer.de/de/presse.rss` | 독일 프라운호퍼 연구소의 산업 자동화 및 로봇 농업 |

---

## ⚙️ 2. 파이프라인 자동화 아키텍처 및 LLM 프롬프트 템플릿

```
[원천 뉴스 RSS] ──► [Python Crawler] ──► [LLM 요약/번역 API] ──► [Jekyll Markdown 생성] ──► [GitHub Action Auto Deploy]
```

### 1) Python RSS 마이너 핵심 로직
Python `feedparser` 라이브러리를 구동하여 주기적으로 최신 기사를 수집하고, 중복 포스팅 방지를 위해 기사 고유 링크(URL)의 해시값을 파일 또는 로컬 DB에 비교 대조합니다.

### 2) LLM 자동 요약 및 포스팅 생성 프롬프트 템플릿
```text
You are a senior horticultural engineer and AgTech journalist.
Your task is to summarize the following smart farming news article into a professional blog post.

[Target Article Title]: {Article_Title}
[Target Article Body]: {Article_Body}

[Instructions]:
1. Write a compelling, SEO-optimized title containing keywords (e.g., smart greenhouse, hydroponics, automation).
2. Write a 3-bullet-point summary ("Key Takeaways") in clear English.
3. Write a 2-paragraph deep-dive analysis explaining the technological impact (e.g., Kv valves, VPD control, LED spectra).
4. Output the result strictly in Jekyll Markdown format with frontmatter like this:
---
layout: post
title: "SEO Optimized Title"
date: YYYY-MM-DD HH:MM:SS +0900
categories: [technology, greenhouse]
tags: [led, sensor, automation]
---
# Content starts here...
```

---

## 🏃‍♂️ 3. $0 비용 블로그 배포 인프라 및 수익화 배치

### 1) GitHub Pages & Jekyll을 통한 무료 서버 구성
*   Jekyll 정적 사이트 테마를 GitHub Repository에 세팅.
*   하루 1회 작동하는 **GitHub Actions 워크플로우(Cron)**를 가동하여 Python 스크립트 실행 -> 뉴스 요약 마크다운 자동 생성 -> Git Commit & Push -> GitHub Pages가 정적 사이트 실시간 빌드 및 무료 배포 실행.

### 2) 구글 애드센스 (AdSense) 및 제휴 마케팅 레이아웃
*   **포스트 본문 상단**: 요약 바로 아래 반응형 디스플레이 애드센스 광고 차트 삽입.
*   **관련 하드웨어 자동 링크 (Affiliate)**: 포스팅 내부 키워드를 파싱하여 매칭되는 홈가드닝/산업용 기자재 추천 링크 자동 삽입.
    *   *예시*: 기사 본문에 "LED light spectrum" 단어 감지 시, 하단에 `[추천 풀스펙트럼 식물 LED 조명 상세 정보](https://www.amazon.com/dp/.../?tag=inwoovation20-20)` 문구 자동 앵커 삽입.
*   **뉴스레터 전환 배너**: 본문 하단에 주간 가격 예측 뉴스레터 구독 전환용 Substack 가입 폼 위젯 삽입.
