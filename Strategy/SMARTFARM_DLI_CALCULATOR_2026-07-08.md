# 💡 Smartfarm B2B Asset Strategy: DLI & PPFD Calculator
**Date**: 2026-07-08
**Domain**: `smartfarm.inwoovation.com` (B2B AgTech)

## 1. Asset Overview
- **Name**: Daily Light Integral (DLI) & PPFD Scheduler
- **Target Audience**: 실내 농업(Indoor Farming), 수경재배(Hydroponics), 대마/특용작물 재배자 및 스마트팜 엔지니어.
- **Value Anchor**: 
  - **신뢰 보증**: 원예학 광합성 수식 (DLI = PPFD × 광주기(시간) × 0.0036) 적용.
  - **아날로그 실행**: 계산 후 작물별 요구 DLI(상추 12~17, 토마토 22~30 등)와 직관적으로 대조하여 광주기를 실질적으로 스케줄링.

## 2. Monetization (Ad & Affiliate)
- **Google AdSense**: 스케줄링 세팅을 위해 체류 시간이 긴 UI 하단/사이드에 고정 배너 배치.
- **Affiliate (제휴 링크)**:
  - B2B 고출력 LED 식물생장등 (Spider Farmer, Mars Hydro 등) Amazon/AliExpress 레퍼럴 링크 1:1 매칭. (단가가 높아 수익성 극대화)

## 3. UI/UX & Execution
- **Input**: PPFD (µmol/m²/s), Photoperiod (Hours).
- **Output**: DLI (mol/m²/d) 실시간 계산 및 시각적 게이지 바 제공.
- **Target Crops Guide**: 계산된 DLI 값에 알맞은 작물군 하이라이트.
- **Air-Gap Lock**: 로컬 개발 후 `git commit`까지만 수행. 사령관 승인 전 실서버 `git push` 금지.
