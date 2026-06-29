# 🇩🇪 German Income Tax & Social Security Calculation Model

본 문서는 독일 아우스빌둥(Ausbildung) 교육생 및 취업 이민자들이 매월 수령하는 총급여(Brutto)에서 소득세(Lohnsteuer), 연대기여금(Solidaritätszuschlag), 종교세(Kirchensteuer) 및 4대 사회보험료(Sozialversicherungsbeiträge)를 차감한 세후 실수령액(Netto)을 모의 계산하기 위한 **독일 세무 역학 산출 공식** 기술 참조서입니다.

이 기획안은 향후 `inwoovation.com`에 탑재할 독일 실수령액 계산 마이크로 웹앱의 핵심 수학적 백엔드 알고리즘으로 사용됩니다.

---

## 💶 1. 4대 사회보장 기여금 (Social Security Contributions) 산출 공식

독일 사회보장세는 근로자와 고용주가 절반씩 부담(Employer-Employee Split)하는 것을 원칙으로 합니다. 아래 요율은 근로자 본인 부담분(Brutto 급여 기준) 기준입니다.

### 1) 연금 보험 (Rentenversicherung, RV)
*   **요율**: **$9.3\%$**
*   **수식**:
    $$RV_{deduction} = \min(Brutto, Limit_{RV}) \times 0.093$$
    *   *Limit_RV (소득 상한선)*: 연방 주별 상이 (서독 기준 월 약 €7,550)

### 2) 실업 보험 (Arbeitslosenversicherung, AV)
*   **요율**: **$1.3\%$**
*   **수식**:
    $$AV_{deduction} = \min(Brutto, Limit_{AV}) \times 0.013$$

### 3) 건강 보험 (Krankenversicherung, KV)
*   **요율**: 기본 **$7.3\%$** + 법정 건강보험사별 추가 요율의 절반 (Zusatzbeitrag, 평균 약 **$0.85\%$** 부담)
*   **수식**:
    $$KV_{deduction} = \min(Brutto, Limit_{KV}) \times (0.073 + 0.0085)$$

### 4) 요양 보험 (Pflegeversicherung, PV)
*   **요율**: 기본 **$2.3\%$** (자녀가 있는 경우)
    *   *무자녀 할증 (Kinderlosenzuschlag)*: 만 23세 이상 무자녀인 경우 본인 부담분 $0.6\%$ 추가 부과 (총 **$2.9\%$**).
*   **수식**:
    $$PV_{deduction} = \min(Brutto, Limit_{PV}) \times 0.023 \quad (\text{With Children})$$
    $$PV_{deduction} = \min(Brutto, Limit_{PV}) \times 0.029 \quad (\text{Childless, } \ge 23)$$

---

## 📈 2. 과세 대상 소득 (Zu versteuerndes Einkommen) 및 세액 계산

근로소득세(Lohnsteuer)는 총소득에서 사회보장세 공제액 및 세무상 공제(광고비, 기본 공제 등)를 차감한 과세표준을 기준으로 누진 적용됩니다.

### 1) 기본 인적 공제 (Grundfreibetrag)
독일 정부는 최소한의 생계 보장을 위해 일정 수준 이하의 소득에는 소득세를 부과하지 않습니다.
*   **2026년 기준 면세 한도**: 싱글 기준 연간 약 **€11,784** (월 평균 €982 이하 소득은 소득세 $0$원 적용)
    *   *참고*: 아우스빌둥 1~2년 차 급여는 대개 이 면세 한도 내외에 위치하므로 소득세가 거의 부과되지 않으며 사회보장세만 납부하는 경우가 많습니다.

### 2) 세금 등급 (Steuerklasse) 영향
*   **Steuerklasse I**: 미혼, 이혼, 별거 중인 1인 가구 (기본 세율 적용).
*   **Steuerklasse III**: 기혼자 중 배우자보다 소득이 훨씬 높은 경우 (낮은 세율 적용, 배우자는 자동 V등급).
*   **Steuerklasse IV**: 기혼자 중 부부 소득이 비슷한 경우 (동일 세율 분할 적용).

---

## ⛪ 3. 종교세 (Kirchensteuer) 및 연대기여금 (Solidaritätszuschlag)

### 1) 종교세 (Kirchensteuer)
*   독일 세무서에 가톨릭이나 개신교 신자로 등록한 경우 부과되는 세금.
*   **산출 공식**:
    $$Kirchensteuer = Lohnsteuer \times Rate$$
    *   *NRW, Straelen 주 세액 요율 (Rate)*: **$9\%$** (바이에른, 바덴뷔르템베르크는 $8\%$)
    *   *팁*: 무교인 지원자는 입국 후 안멜둥 시 반드시 무교(Keine Religion)로 기입해야 이 세금($9\%$ 추가 할증)을 면제받을 수 있습니다.

### 2) 연대기여금 (Solidaritätszuschlag - 통일세)
*   연간 근로소득세액이 일정 한도(약 €18,130) 이하인 서민층은 **전액 면제** 처리됩니다. (따라서 아우스빌둥 및 초급 재배사는 면제 대상).

---

## 📊 4. 실수령액 (Netto) 도출 최종 산식
$$\text{Netto} = Brutto - (RV + AV + KV + PV) - Lohnsteuer - Kirchensteuer$$
