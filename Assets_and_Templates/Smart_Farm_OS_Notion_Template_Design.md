# 🌿 Smart Farm Operator OS: Notion Template Specification
**작성일**: 2026-06-12  
**버전**: 1.1  
**유형**: 무자본 패시브 인컴 에셋 설계서 (Zero-Cost Passive Income Asset)
**타겟 플랫폼**: Gumroad, Notion Template Gallery, Etsy (Digital Downloads)

---

## 🏛️ I. 제품 개요 (Product Overview)
*   **제품명**: **Smart Farm Operator OS (스마트팜 온실 운영 관리 시스템)**
*   **슬로건**: "원예 엔지니어, 시설 재배사, 스마트팜 전공 학생들을 위한 올인원 온실 관리 노션 템플릿"
*   **개발 목적**: 시설 원예(유리온실, 비닐하우스) 운영에 필수적인 센서 교정, 양액 처방 관리, 작물 재배 일지, 장비 유지보수를 체계적으로 연동하여 관리 효율을 극대화합니다.

---

## 🏗️ II. 관계형 데이터베이스 설계 (Relational Database Schema)
노션의 핵심 기능인 **관계형(Relation)** 및 **롤업(Rollup)**을 활용하여 유기적으로 연동되는 5대 데이터베이스를 설계합니다.

```
       ┌────────────────────────┐
       │   1. Greenhouse Zones  │ (온실 구역)
       └───────────┬────────────┘
                    │ (1:N Relation)
       ┌───────────▼────────────┐
       │      2. Crop Logs      │ (작물 재배 일지)
       └───────────┬────────────┘
                    │ (1:N Relation)
    ┌──────────────┴──────────────┐
    ▼                             ▼
┌───────────────────────┐   ┌─────────────────────────┐
│ 3. Sensors & Actuators│   │ 4. Fertigation Recipes  │ (양액/관수 레시피)
└───────────────────────┘   └─────────────────────────┘
            │
            ▼ (1:N Relation)
┌───────────────────────┐
│ 5. Maintenance Log    │ (교정 및 장비 점검)
└───────────────────────┘
```

### 1. 온실 구역 데이터베이스 (Greenhouse Zones DB)
*   **설명**: 온실의 구역(Zone)별 면적, 설비 사양, 재배 환경 정보를 관리합니다.
*   **속성 명세**:

| 속성명 (Property Name) | 속성 타입 (Notion Type) | 설명 / 설정값 |
| :--- | :--- | :--- |
| `Zone Name` | **Title** | 구역명 (예: *Zone A - Tomato Glasshouse*) |
| `Area (㎡)` | **Number** | 재배 면적 (숫자 형식) |
| `Covering Material` | **Select** | `Venlo Glass`, `Double PE Film`, `Polycarbonate` |
| `Hydroponic System` | **Select** | `Coir Slab`, `Rockwool`, `NFT`, `DFT`, `Soil` |
| `Active Crops` | **Relation** | `Crop Logs DB` 연동 (다중 연결 허용) |
| `Installed Devices` | **Relation** | `Sensors & Actuators DB` 연동 (다중 연결 허용) |

---

### 2. 작물 재배 로그 데이터베이스 (Crop Logs DB)
*   **설명**: 정식일(planting date)부터 수확 완료일까지의 작물 생육 지표와 일일 환경 제어 값을 기록합니다.
*   **속성 명세**:

| 속성명 (Property Name) | 속성 타입 (Notion Type) | 설명 / 설정값 |
| :--- | :--- | :--- |
| `Batch ID` | **Title** | 재배 배치명 (예: *[TOM-2026-01] Dafnis Tomato*) |
| `Crop Type` | **Select** | `Tomato`, `Pepper`, `Cucumber`, `Strawberry`, `Leafy Greens` |
| `Planting Date` | **Date** | 정식일 (시작일만 지정) |
| `Harvest Date` | **Date** | 수확 예정일 및 실제 완료일 |
| `Status` | **Status** | `Planning`, `Vegetative`, `Flowering`, `Fruiting`, `Harvested`, `Archived` |
| `Target EC (dS/m)` | **Number** | 목표 공급 양액 EC 수치 (예: `2.5`) |
| `Target pH` | **Number** | 목표 공급 양액 pH 수치 (예: `5.8`) |
| `Target Temp Day (℃)` | **Number** | 주간 설정 관리 온도 (예: `23`) |
| `Target Temp Night (℃)` | **Number** | 야간 설정 관리 온도 (예: `16`) |
| `Irrigation Logs` | **Relation** | 일일 급액/배액량 연동용 일지 테이블 연동 |

---

### 3. 센서 및 제어 장비 데이터베이스 (Sensors & Actuators DB)
*   **설명**: 온실 내 센서와 구동기의 위치, 고유 시리얼 넘버, 최근 점검 정보를 관리합니다.
*   **속성 명세**:

| 속성명 (Property Name) | 속성 타입 (Notion Type) | 설명 / 설정값 |
| :--- | :--- | :--- |
| `Device Name` | **Title** | 장비명 (예: *EC Sensor-01*, *Mixing Valve-A*) |
| `Category` | **Select** | `Sensor-EC`, `Sensor-pH`, `Sensor-Temp/RH`, `Sensor-CO2`, `Actuator-Valve`, `Actuator-Fan` |
| `Greenhouse Zone` | **Relation** | `Greenhouse Zones DB` 연동 (1개만 연결) |
| `Status` | **Select** | `Active`, `Calibration Required`, `Repairing`, `Inactive` |
| `Installation Date` | **Date** | 초기 설치 및 가동일 |
| `Calibration Interval (Days)` | **Number** | 교정 권장 주기 (일 단위, 기본값: `14`) |
| `Maintenance Records` | **Relation** | `Maintenance & Calibration DB` 연동 |
| `Last Calibration Date` | **Rollup** | `Maintenance Records` 관계형 → `Performed Date` 롤업 (최신 날짜 기준) |
| `Next Calibration Date` | **Formula** | **[Notion 2.0 공식 1 적용]** 차기 센서 교정 일자 자동 연산 |
| `Calibration Status Alert` | **Formula** | **[Notion 2.0 공식 2 적용]** 현재 날짜 대비 교정 초과 일수 경보 |

---

### 4. 양액 및 관수 레시피 데이터베이스 (Fertigation Recipes DB)
*   **설명**: 작물 생육 단계별로 조제되는 A/B/C 원액 탱크 처방전과 급액 설정값을 기록합니다.
*   **속성 명세**:

| 속성명 (Property Name) | 속성 타입 (Notion Type) | 설명 / 설정값 |
| :--- | :--- | :--- |
| `Recipe Name` | **Title** | 레시피명 (예: *토마토 개화기 처방전-v1*) |
| `Crop Type` | **Select** | `Tomato`, `Pepper`, `Cucumber`, `Strawberry` |
| `Target Stage` | **Select** | `Seedling`, `Vegetative`, `Early Fruiting`, `Late Fruiting` |
| `A Tank Concentration` | **Text** | A 탱크 주요 비료 성분 (질산칼슘, 질산칼륨 등) |
| `B Tank Concentration` | **Text** | B 탱크 주요 비료 성분 (황산마그네슘, 제1인산암모늄 등) |
| `C Tank (Acid/Base)` | **Select** | `Nitric Acid 60%`, `Phosphoric Acid 85%`, `None` |
| `Dilution Ratio (1:X)` | **Number** | 원액 대비 관수 희석 배수 (예: `100` 배액) |
| `Target Element PPM` | **Number** | 목표 공급 원소 농도 (예: 질산칼슘 중 질소 N 목표 `150` ppm) |
| `Stock Tank Volume (L)` | **Number** | 로컬 원액탱크 용량 (예: `1000` Liters) |
| `Element Purity (%)` | **Number** | 비료 백 내 보증 성분 함량 (예: `15.5` %) |
| `Required Fertilizer Mass` | **Formula** | **[Notion 2.0 공식 3 적용]** 필요한 비료 질량 (kg) 자동 계산 |

---

### 5. 장비 유지보수 및 교정 데이터베이스 (Maintenance & Calibration DB)
*   **설명**: 센서의 오차 교정(Calibration) 및 필터 교체 등 정기 검점 이력을 기록합니다.
*   **속성 명세**:

| 속성명 (Property Name) | 속성 타입 (Notion Type) | 설명 / 설정값 |
| :--- | :--- | :--- |
| `Task Name` | **Title** | 작업명 (예: *EC/pH 센서 2점 표준교정*) |
| `Target Device` | **Relation** | `Sensors & Actuators DB` 연동 |
| `Performed Date` | **Date** | 작업 수행일 (날짜 입력) |
| `Operator` | **Text** | 작업 담당자 이름 |
| `Work Type` | **Select** | `Calibration`, `Filter Replacement`, `Visual Inspection`, `Emergency Repair` |
| `Calibration Result` | **Select** | `Pass`, `Fail - Replacement Needed` |
| `Notes` | **Text** | 비고 및 세부 조정값 기록 (예: *pH 7.00 -> 7.02 보정*) |

---

## 🧪 III. Notion 2.0 복합 수식 설계 (Notion 2.0 Production Formulas)
노션의 최신 **Formula 2.0** 문법에 맞춰, 재배사의 조제 오차를 원천 차단하고 기후/센서 위기를 시각적으로 보여주는 5대 핵심 복합 수식 텍스트 코드입니다.

### [Notion 2.0 공식 1] 차기 센서 교정 일자 (`Next Calibration Date`)
*   **목적**: 가장 최신의 교정 완료 날짜(`Last Calibration Date` 롤업)에 권장 교정 주기(`Calibration Interval (Days)`)를 더해 다음 교정 예정일을 자동으로 도출합니다. 만약 교정 이력이 없다면 초기 설치일(`Installation Date`)을 기준선으로 사용합니다.
*   **복사-붙여넣기 코드**:
```javascript
let(
  baseDate,
  empty(prop("Last Calibration Date")) ? prop("Installation Date") : prop("Last Calibration Date"),
  if(
    empty(baseDate),
    fromTimestamp(toNumber("")),
    dateAdd(baseDate, prop("Calibration Interval (Days)"), "days")
  )
)
```

### [Notion 2.0 공식 2] 교정 기한 초과 알람 (`Calibration Status Alert`)
*   **목적**: 오늘 날짜와 차기 교정 예정일(`Next Calibration Date`)을 실시간 비교하여, 기한이 만료되었거나 임박했을 때 재배사에게 시각적인 경고 이모지와 한/영 텍스트를 출력합니다.
*   **복사-붙여넣기 코드**:
```javascript
let(
  nextCal,
  prop("Next Calibration Date"),
  if(
    empty(nextCal),
    "⚪ No Date Set",
    let(
      daysDiff,
      dateBetween(nextCal, today(), "days"),
      if(
        daysDiff < 0,
        "🚨 OVERDUE BY " + abs(daysDiff) + " DAYS / 교정 기한 " + abs(daysDiff) + "일 초과",
        if(
          daysDiff <= 3,
          "⚠️ Calibration Due in " + daysDiff + " Days / " + daysDiff + "일 내 교정 필요",
          "🟢 Stable / 정상 (Next: " + formatDate(nextCal, "YYYY-MM-DD") + ")"
        )
      )
    )
  )
)
```

### [Notion 2.0 공식 3] 원액 비료 투입량 계산 (`Required Fertilizer Mass`)
*   **목적**: 목표 원소 농도(ppm), 원액탱크 크기(L), 주입비율(1:X), 비료 순도(%)를 입력받아 정확히 탱크에 물과 함께 쏟아 넣어야 할 비료의 무게(kg)를 수학적 오차 없이 산출합니다.
*   **복사-붙여넣기 코드**:
```javascript
let(
  target, prop("Target Element PPM"),
  vol, prop("Stock Tank Volume (L)"),
  dilution, prop("Dilution Ratio (1:X)"),
  purity, prop("Element Purity (%)"),
  if(
    vol == 0 or dilution == 0 or purity == 0,
    0,
    round(((target * vol * dilution) / (purity * 10000)) * 100) / 100
  )
)
```

### [Notion 2.0 공식 4] 급배액량 및 배액률 진단 (`Drainage Ratio Evaluator`)
*   **목적**: 일일 급액량(L) 대비 배액량(L)의 비율(%)을 계산하고, 배액률 수치에 따라 온실 뿌리 존의 함수율 균형을 3단계 진단(Under/Optimal/Over)하여 조치 가이드를 제공합니다.
*   **복사-붙여넣기 코드**:
```javascript
let(
  irr, prop("Daily Irrigation Vol (L)"),
  drain, prop("Daily Drainage Vol (L)"),
  if(
    irr == 0,
    "⚪ No Irrigation Data",
    let(
      ratio,
      round((drain / irr) * 1000) / 10,
      if(
        ratio < 20.0,
        "🔴 Under-irrigated (" + ratio + "%): Root dehydration risk. Increase cycle. / 공급 부족 - 수분 스트레스 위험",
        if(
          ratio >= 20.0 and ratio <= 35.0,
          "🟢 Optimal (" + ratio + "%): Healthy root zone balance. / 적정 배액 수준 유지",
          "🟡 Over-irrigated (" + ratio + "%): Oxygen deficiency risk. Reduce cycle. / 과다 배수 - 뿌리 호흡 억제 및 비료 낭비"
        )
      )
    )
  )
)
```

### [Notion 2.0 공식 5] 실측 양액 EC/pH 오차 경보 (`Target Deviation Alarm`)
*   **목적**: 실제 공급 기기 센서에서 측정된 Measured pH/EC와 재배 로그에 설정된 Target pH/EC를 비교하여, 오차 허용 한계(pH ±0.3 / EC ±0.2)를 벗어날 경우 빨간 경보등을 켜 급액 노즐 막힘이나 Dosing 오작동을 차단합니다.
*   **복사-붙여넣기 코드**:
```javascript
let(
  mPH, prop("Measured pH"),
  tPH, prop("Target pH"),
  mEC, prop("Measured EC (dS/m)"),
  tEC, prop("Target EC (dS/m)"),
  if(
    empty(mPH) or empty(mEC) or empty(tPH) or empty(tEC),
    "⚪ Data Pending / 측정값 대기 중",
    let(
      phErr, round(abs(mPH - tPH) * 100) / 100,
      ecErr, round(abs(mEC - tEC) * 100) / 100,
      let(
        phOk, phErr <= 0.3,
        ecOk, ecErr <= 0.2,
        if(
          phOk and ecOk,
          "🟢 Feed Stable (pH Δ" + phErr + ", EC Δ" + ecErr + " dS/m)",
          if(
            not(phOk) and not(ecOk),
            "🚨 CRITICAL DEV: Check pH (Δ" + phErr + ") & EC (Δ" + ecErr + ")!",
            if(not(phOk), "🟡 pH Drift Alert (Δ" + phErr + ")", "🔵 EC Drift Alert (Δ" + ecErr + ")")
          )
        )
      )
    )
  )
)
```

---

## 🛠️ IV. 센서 교정 가이드 및 점검 체크리스트 (Sensor Calibration Protocols)
템플릿 내부에 탑재될 실무형 체크리스트 콘텐츠입니다. 네덜란드 현지 표준 가이드를 반영합니다.

### 1. EC/pH 센서 2점 교정 프로토콜 (Calibration Protocol)
*   **주기**: 2주에 1회 권장 (또는 드리프트 현상 발생 시 즉시)
*   **준비물**: 표준 교정액 (pH 4.01 / pH 7.00 / EC 1.41 dS/m), 증류수, 세척용 비커, 페이퍼 타월
*   **체크리스트**:
    - [ ] 1. 센서를 배관 또는 배액 통에서 분리한 후 증류수로 깨끗이 세척합니다.
    - [ ] 2. 페이퍼 타월로 센서 끝의 수분을 가볍게 닦아냅니다 (문지르지 말고 톡톡 두드림).
    - [ ] 3. **pH 7.00** 버퍼 용액에 센서를 담그고 판독값이 안정화될 때까지 기다린 후 기기에서 교정(Zero point)을 완료합니다.
    - [ ] 4. 센서를 다시 증류수로 세척하고 수분을 제거합니다.
    - [ ] 5. **pH 4.01** 버퍼 용액에 담그고 기울기(Slope) 교정을 완료합니다.
    - [ ] 6. **EC 1.41 dS/m** 용액에 담가 EC 센서 오차율을 점검하고 보정 계수를 입력합니다.
    - [ ] 7. 교정 일자 및 오차 범위를 `Maintenance & Calibration DB`에 기록합니다.

### 2. CO2 센서 및 온도/습도 센서 관리
*   **CO2 센서 (NDIR 방식)**: 매 6개월마다 실외 대기(약 400~420 ppm)를 기준으로 제로 포인트 교정을 수행합니다.
*   **온도/습도 흡입식 통 (Aspiration Box)**: 
    *   내부 팬(Fan)이 정상 작동하여 공기를 강제 흡입하고 있는지 매월 확인합니다.
    *   습도 센서의 정확한 측정을 위해 통 안의 먼지 필터를 분리하여 세척 또는 교체합니다.

---

## 💰 V. Gumroad 판매용 상세 마케팅 페이지 설계 (Sales Copy Blueprint)
템플릿을 바로 상품화하여 수익 창출 단계로 넘어가기 위한 카피라이팅입니다.

### 1. Product Title
> **Smart Farm Operator OS - All-in-One Notion Template for AgTech Engineers**

### 2. Description (제품 소개글)
```
🌱 스마트팜 온실 관리, 아직도 수첩이나 엑셀 시트에 따로 기록하고 계신가요?

정밀 농업(Precision Agriculture)의 핵심은 체계적인 데이터 관리와 환경 제어입니다. 
네덜란드 유리온실 엔지니어링 표준을 기반으로 설계된 "Smart Farm Operator OS"는
어려운 수식 계산부터 센서 교정 일정, 재배 일지 작성까지 노션 하나로 해결합니다.

이런 분들께 추천합니다:
- 온실 환경 데이터를 체계적으로 기록하고 싶은 스마트팜 운영사
- EC, pH, CO2 센서 오차 관리가 시급한 원예 재배사
- 작물 생육 단계별 양액 계산법과 비료 투입량을 실수 없이 조제하고 싶은 엔지니어
- 농업 대학 및 마이스터고에서 시설 원예를 공부하는 학생

포함된 핵심 기능:
1. Greenhouse Zones Manager: 온실 구역별 피복재 및 배지 사양 관리.
2. Relational Crop Log: 정식부터 수확까지 생육 상태 및 일일 환경 변수 기록.
3. Sensor & Actuator Inventory: EC/pH/CO2 센서의 상태 및 다음 교정일 자동 계산.
4. Smart Fertigation Calculator: A/B 탱크 비료 조제 시 필요한 비료 투입량 자동 계산.
5. Maintenance Calibration Guide: 네덜란드 표준 센서 교정 체크리스트 및 기록 대장.
```

---

## 📈 VI. 상품 배포 및 런칭 전략
1.  **템플릿 복제 링크 생성**: 노션 페이지를 제작한 후 "템플릿으로 복제 허용" 링크를 획득합니다.
2.  **Gumroad 제품 등록**: 무료 Gumroad 계정을 개설하고 디지털 제품(Digital Product)으로 등록합니다.
3.  **PDF Deliverable 제작**: 구매자가 결제하면 다운로드받을 수 있는 PDF 파일을 만듭니다. 
    *   *내용*: "스마트팜 오퍼레이터 OS를 구매해 주셔서 감사합니다. 아래 링크를 클릭하여 템플릿을 복제하세요" + 간단한 사용법 설명.
4.  **트래픽 퍼널 연동**:
    *   앞서 설계한 **X 골드마인 계정**과 **글로벌 농업 신문(Substack)**의 하단에 "온실 데이터를 프로처럼 관리하는 방법 - Smart Farm Operator OS 템플릿 사용하기" 광고 링크를 상시 배치하여 무자본 유입을 발생시킵니다.

---

## 🧪 VII. Notion Formula Verification Manual (Notion 수식 검증 매뉴얼)
노션 템플릿에 작성한 복합 수식이 실제 데이터베이스에서 무결하게 구동되는지 빠르게 확인하기 위해, 다음 가상 데이터 세트를 입력하여 출력값의 일치 여부를 검증합니다.

### 1. 테스트 케이스 1: `Next Calibration Date` 및 `Calibration Status Alert` 검증
*   **설정 조건**: `Calibration Interval (Days)` = `14`
*   **테스트 시나리오**:

| 케이스 ID | `Last Calibration Date` | `Installation Date` | 오늘 날짜 대비 조건 (기준: 오늘) | Expected `Next Calibration Date` | Expected `Calibration Status Alert` |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-CAL-01** | *빈 칸 (Null)* | *빈 칸 (Null)* | 설정 데이터 없음 | *빈 값 (Blank)* | `⚪ No Date Set` |
| **TC-CAL-02** | *빈 칸 (Null)* | 2026-06-01 | 설치일 기준 14일 뒤 | 2026-06-15 | *오늘 날짜 대비 남은 일수에 따른 메시지 출력* |
| **TC-CAL-03** | 2026-06-05 | 2026-06-01 | 최근 교정일 기준 14일 뒤 | 2026-06-19 | (예: 2026-06-12 기준) `🟢 Stable / 정상 (Next: 2026-06-19)` |
| **TC-CAL-04** | 2026-05-20 | 2026-05-01 | 차기 교정일이 과거임 | 2026-06-03 | `🚨 OVERDUE BY 9 DAYS / 교정 기한 9일 초과` (오늘 6/12 기준) |
| **TC-CAL-05** | 2026-06-01 | 2026-05-01 | 차기 교정일이 3일 이내 임박 | 2026-06-15 | `⚠️ Calibration Due in 3 Days / 3일 내 교정 필요` (오늘 6/12 기준) |

### 2. 테스트 케이스 2: `Required Fertilizer Mass` 검증 (나누기 0 시스템 예외 차단)
*   **테스트 시나리오**:

| 케이스 ID | `Target Element PPM` | `Stock Tank Volume (L)` | `Dilution Ratio (1:X)` | `Element Purity (%)` | Expected `Required Fertilizer Mass` |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-FER-01** | `150` | `1000` | `100` | `15.5` | **96.77 kg** |
| **TC-FER-02** | `150` | `0` *(Zero)* | `100` | `15.5` | **0 kg** (시스템 에러 분기 차단 완료) |
| **TC-FER-03** | `150` | `1000` | `0` *(Zero)* | `15.5` | **0 kg** (시스템 에러 분기 차단 완료) |
| **TC-FER-04** | `150` | `1000` | `100` | `0` *(Zero)* | **0 kg** (시스템 에러 분기 차단 완료) |

### 3. 테스트 케이스 3: `Drainage Ratio Evaluator` 검증
*   **테스트 시나리오**:

| 케이스 ID | `Daily Irrigation Vol (L)` | `Daily Drainage Vol (L)` | Calculated Ratio | Expected `Drainage Ratio Evaluator` Output |
| :--- | :--- | :--- | :--- | :--- |
| **TC-DRA-01** | `0` *(Zero)* | `150` | `0.0%` | `⚪ No Irrigation Data` |
| **TC-DRA-02** | `1000` | `150` | `15.0%` | `🔴 Under-irrigated (15%): Root dehydration risk. Increase cycle. / 공급 부족 - 수분 스트레스 위험` |
| **TC-DRA-03** | `1000` | `300` | `30.0%` | `🟢 Optimal (30%): Healthy root zone balance. / 적정 배액 수준 유지` |
| **TC-DRA-04** | `1000` | `400` | `40.0%` | `🟡 Over-irrigated (40%): Oxygen deficiency risk. Reduce cycle. / 과다 배수 - 뿌리 호흡 억제 및 비료 낭비` |

### 4. 테스트 케이스 4: `Target Deviation Alarm` 검증
*   **설정 조건**: `Target pH` = `5.8`, `Target EC` = `2.5`
*   **테스트 시나리오**:

| 케이스 ID | `Measured pH` | `Measured EC (dS/m)` | pH 오차 | EC 오차 | Expected `Target Deviation Alarm` Output |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-DEV-01** | *빈 칸 (Null)* | `2.5` | N/A | N/A | `⚪ Data Pending / 측정값 대기 중` |
| **TC-DEV-02** | `5.8` | `2.5` | `0` | `0` | `🟢 Feed Stable (pH Δ0, EC Δ0 dS/m)` |
| **TC-DEV-03** | `6.2` | `2.5` | `0.4` | `0` | `🟡 pH Drift Alert (Δ0.4)` (pH 임계치 0.3 초과) |
| **TC-DEV-04** | `5.8` | `2.8` | `0` | `0.3` | `🔵 EC Drift Alert (Δ0.3)` (EC 임계치 0.2 초과) |
| **TC-DEV-05** | `6.3` | `2.9` | `0.5` | `0.4` | `🚨 CRITICAL DEV: Check pH (Δ0.5) & EC (Δ0.4)!` (둘 다 임계치 초과) |
