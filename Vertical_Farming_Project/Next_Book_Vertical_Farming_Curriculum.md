# 💡 제2권 KDP 도서 기획 및 교육과정 개요 (Next Book Curriculum Outline)

* **도서명**: 수직농장 및 LED 광생물학 실무 매뉴얼 (Vertical Farming & LED Photobiology: A Practical Operations Manual)
* **포맷**: Kindle eBook 전용 선출시 (Phase 2) + 동반 웹 도구(SaaS Web Tool) 번들 패키지
* **타겟 독자**: 스마트팜 운영자, 시설 원예 엔지니어, 실내 농장 예비 창업자, AgTech 장비 개발자 및 대학원생

---

## 🏛️ I. 도서 개요 및 가치 제안 (Value Proposition)

1. **상호보완적 모트(Moat) 형성**:
   * 제1권(정밀 유체 제어 및 유리온실 자동화)에서 다룬 수리생물학적 기초 위에, 완벽하게 통제된 실내 환경(인공광 수직농장)에서의 **빛(LED)과 공기(VPD), 열(Thermal)의 제어**를 밀도 있게 다룹니다.
   * 독자가 직접 시뮬레이션할 수 있는 **LED PPFD/DLI 계산 및 방열 모니터링 웹 도구**를 번들 제공하여 AI 생성 콘텐츠와의 차별성을 확보합니다.

2. **비즈니스 모델 시너지 (Book + Tool Bundle)**:
   * 아마존 KDP 독점(KDP Select) 등록을 통한 독자 유치.
   * 독일 및 유럽 AgTech 비즈니스 서밋(APK 10월 회의 등)의 타겟 네트워킹 자료로 활용 가능하도록 글로벌 규격(PPFD, DLI, $\mu mol/J$)에 맞춘 정밀 설계.

---

## 📖 II. 상세 교육과정 설계 (Detailed Curriculum)

### Chapter 1: 수직농장 공간 구조 및 미기후 설계 (Micro-climate Dynamics)
* **공간 최적화**: 다단 적재 랙(Multi-tier Racking System)의 기하학적 배치와 식재 밀도 계산.
* **유체 역학적 공기 순환**: 배출류(Exhaust)와 순환팬 배치에 따른 포화수증기압차(VPD, Vapor Pressure Deficit) 관리.
* **수직 농장 전용 공조(HVAC)**: 작물의 증산량(Evapotranspiration)에 따른 잠열/현열 부하 계산 및 결로 방지 설계.

### Chapter 2: LED 광생물학 기초 및 스펙트럼 설계 (Photobiology & Spectra)
* **광량 물리량 계산**:
  * PAR (Photosynthetically Active Radiation) 스펙트럼 분석.
  * PPFD (Photosynthetic Photon Flux Density, $\mu mol/m^2/s$) 매핑 기법.
  * 일일 광량 적산값 DLI (Daily Light Integral) 공식 수립:
    $$DLI = PPFD \times Photoperiod (Hours) \times 0.0036$$
* **파장별 생리 반응**:
  * **적색광(Red, 660nm)**: 엽록소 A/B 흡수 피크 및 광합성 활성화.
  * **청색광(Blue, 450nm)**: 기공 개폐 조절 및 작물 소형화(컴팩트 성장) 제어.
  * **원적색광(Far-Red, 730nm)**: 음지 회피 반응(Shade Avoidance)과 개화 유도 조절.
  * **녹색광(Green, 550nm)**: 다단 잎사귀 하부 침투력 분석.

### Chapter 3: LED 전기적 성능 및 방열 열역학 설계 (Electrical & Thermal Engineering)
* **광효율 검증**: LED 바의 에너지 효율 파라미터($\mu mol/J$ 혹은 $lm/W$) 분석 및 정전류 드라이버(Constant Current Driver) 매칭.
* **열 소산(Heat Dissipation)**: high-power LED 구동 시 발생하는 열 흐름 분석 및 접합부 온도($T_j$, Junction Temperature) 계산 공식.
* **에너지 소비 예측 및 OPEX 모델링**: 광주기(Photoperiod)에 따른 전기 요금 테이블 매핑 및 수지타선 분석.

### Chapter 4: 양액 공급 시스템과 광주기 연동 제어 (Irrigation & Automation)
* **폐쇄형 순환 양액 제어**: EC(전기전도도) 및 pH 센서 데이터를 활용한 자동 PID 공급 로직.
* **DLI-양액 농도 연동 알고리즘**: 광량이 높은 시간대와 낮은 시간대의 증산작용 변화에 맞춘 양액 공급 가중치 조절.
* **PLC 제어 시스템**: 광원 스위칭 및 조도 디밍(Dimming) 제어를 위한 Structured Text(ST) 코딩 실무 예제.

---

## ⚙️ III. 동반 웹 도구 기획: "Vertical Farm Light & Power Analyzer"

제2권 도서 구매자에게 무료 제공할 프리미엄 단일 페이지 웹 애플리케이션(SPA) 기획입니다.

```
┌────────────────────────────────────────────────────────┐
│             Vertical Farm Light & Power Analyzer       │
├────────────────────────────────────────────────────────┤
│  [Tab 1: PPFD & DLI Calc] [Tab 2: LED Thermal & OPEX]  │
├────────────────────────────────────────────────────────┤
│                                                        │
│  ■ Inputs:                                             │
│    - Target Crop: Leafy Greens (Target DLI: 16 mol)   │
│    - Measured PPFD: 250 umol/m²/s                      │
│                                                        │
│  ■ Results (Real-time Chart.js):                       │
│    - Required Photoperiod: 17.8 Hours                  │
│    - Energy Cost Forecast: €12.4 / m² / Month           │
│                                                        │
│  [Dynamic LED Spectrum Bar / Dial Widget Chart]        │
└────────────────────────────────────────────────────────┘
```

1. **Tab 1: PPFD & DLI 계산기**:
   * 작물 선택(엽채류, 딸기, 허브류)에 따른 목표 DLI 가이드라인 제공.
   * 사용자 측정 PPFD 값을 기반으로 최적 광주기(Photoperiod) 역계산 및 스펙트럼 비율 가시화.

2. **Tab 2: LED 열량 및 방열 설계기**:
   * LED 바 사양(전력, Efficacy) 입력 시 방열판(Heatsink) 필요 면적 및 접합 온도 실시간 연동 계산.

3. **Tab 3: 전기요금 및 가동 OPEX 시뮬레이터**:
   * 한전 및 독일/유럽 지역별 전력 요금 누진/시간대별 단가를 반영한 연간 고정 에너지 비용 그래프화.

---

## 📅 IV. 향후 진행 로드맵 (Roadmap)

1. **Drafting Curriculum & Marketing Plan** (현재 단계 완료):
   * 본 제2권 기획서를 기반으로 독자 유치를 위한 구조 확립.
2. **eBook 원고 집필 및 MathJax Bake 빌드**:
   * 7~8월 중 상세 챕터 구성 및 수식 적용.
3. **Vertical Farm Light Analyzer 웹앱 설계**:
   * 9월 초 툴킷 개발 완료 및 Playwright 크로스 브라우저 검증.
4. **10월 Asien-Pazifik-Konferenz 비즈니스 미팅 연계 출시**:
   * 스마트팜 하드웨어 인프라 및 에너지 효율 최적화 솔루션으로 마케팅 개시.
