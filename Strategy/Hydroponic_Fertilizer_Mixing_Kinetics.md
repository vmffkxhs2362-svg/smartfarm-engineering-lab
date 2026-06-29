# 💧 Hydroponic Nutrient Mixing & EC/pH Chemical Correction Kinetics

본 문서는 수경재배용 A/B액 양액 조제 시 비료 원료별 ppm 농도 및 meq/L 밀리당량 계산, 원수(Source Water) 내 잔류 이온에 따른 배합 보정, 중탄산(Bicarbonate, $HCO_3^-$) 중화를 위한 산(Acid) 주입량, 그리고 EC/pH 센서 판독 오차 보정용 화학적 동역학 공식 매뉴얼입니다.

이 기술 문서는 `inwoovation.com`의 양액 배합 시뮬레이터와 정밀 처방 알고리즘 설계의 공식 참조 규격으로 사용됩니다.

---

## 🧪 1. 비료 원소 원자량 기반 ppm-meq/L 변환 공식

수경재배 양액 설계 시 이온 균형(Cation-Anion Balance)을 맞추기 위해 ppm(parts per million, $mg/L$) 농도와 meq/L(Milliequivalents per Liter, 밀리당량) 농도를 상호 변환합니다.

$$meq/L = \frac{ppm \times \text{Valency}}{\text{Atomic Weight}}$$

$$ppm = \frac{meq/L \times \text{Atomic Weight}}{\text{Valency}}$$

### 💡 주요 다량 원소(Macro-Elements)의 화학 변수
| 원소 (Element) | 대표 이온 형태 | 원자량 (Atomic Wt.) | 가가 (Valency) | $1 \text{ meq/L}$ 당 ppm 농도 |
| :--- | :---: | :---: | :---: | :---: |
| **질소 (N)** | 질산태 질소 ($NO_3^-$) | $14.01$ | $1$ | $14.0 \text{ ppm}$ |
| **인 (P)** | 인산태 인 ($H_2PO_4^-$) | $30.97$ | $1$ | $31.0 \text{ ppm}$ |
| **칼륨 (K)** | 칼륨 이온 ($K^+$) | $39.10$ | $1$ | $39.1 \text{ ppm}$ |
| **칼슘 (Ca)** | 칼슘 이온 ($Ca^{2+}$) | $40.08$ | $2$ | $20.0 \text{ ppm}$ |
| **마그네슘 (Mg)**| 마그네슘 이온 ($Mg^{2+}$)| $24.31$ | $2$ | $12.2 \text{ ppm}$ |
| **황 (S)** | 황산태 황 ($SO_4^{2-}$) | $32.06$ | $2$ | $16.0 \text{ ppm}$ |

---

## 💧 2. 중탄산 ($HCO_3^-$) 중화 및 pH 목표 산(Acid) 투입 공식

지하수나 원수 내에 중탄산($HCO_3^-$) 농도가 높으면 완충 작용으로 인해 양액의 pH가 급격히 상승합니다. 작물이 영양소를 원활히 흡수할 수 있는 최적 pH 범위($5.5$~$6.2$)를 유지하기 위해 질산($HNO_3$, $60\%$ 분자량 $63$) 또는 인산($H_3PO_4$, $85\%$ 분자량 $98$)을 투입하여 중탄산을 중화해야 합니다.

### 목표 중탄산 잔류 농도
양액 조제 후 완충 능력을 위해 최종 양액 내 중탄산 농도는 **$0.5$~$1.0 \text{ meq/L}$** ($30$~$61 \text{ ppm}$)로 유지하는 것이 이상적입니다.

### 산(Acid) 요구량 계산 공식
$$Acid_{required} = (HCO_{3, source} - HCO_{3, target}) \times V_{water} \quad [meq]$$

*   $HCO_{3, source}$: 지하수 분석 결과 원수의 중탄산 농도 ($meq/L$)
*   $HCO_{3, target}$: 목표 잔류 중탄산 농도 (일반적으로 $0.5 \text{ meq/L}$)
*   $V_{water}$: 조제할 양액수 체적 ($L$)

### 투입할 액상 산(Acid)의 물리적 체적 ($Vol_{acid}$, $mL$)
$$Vol_{acid} = \frac{Acid_{required} \times \text{ 분자량 } \times 100}{\text{순도}\% \times \text{밀도} \times \text{가해수}}$$

*   *질산(60% 순도, 밀도 1.37g/mL, 1가)* 사용 시 예시:
    $$Vol_{HNO3} \approx \frac{Acid_{required} \times 63}{0.60 \times 1.37 \times 1} \approx Acid_{required} \times 76.6 \quad [mL]$$
*   *주의*: 투입된 산에 포함된 질소(N) 또는 인(P)의 양은 A/B액 조제 처방 시 전체 비료량에서 차감 보정해야 합니다.

---

## 🔌 3. EC(전기전도도) 기반 총용존고형물(TDS) 환산 및 센서 보정

EC 센서는 물속에 녹아있는 총 이온 농도를 측정합니다. 화학 성분에 따라 EC와 ppm(TDS) 간의 변환 계수가 달라집니다.

### 1) 일반적인 변환 계수 모델 (EC to TDS)
$$TDS \ [ppm] = EC \ [dS/m] \times Factor$$

*   **NaCl Curve (수경재배 범용)**: $Factor \approx 500$ (예: $2.0 \text{ dS/m} = 1000 \text{ ppm}$)
*   **442 Curve (자연수/토양수)**: $Factor \approx 700$ (예: $2.0 \text{ dS/m} = 1400 \text{ ppm}$)
*   **KCl Curve (실험실 표준)**: $Factor \approx 650$

### 2) 온도 보정 공식 (Temperature Compensation)
용액의 온도가 $1^\circ\text{C}$ 상승할 때마다 이온 활성도가 증가하여 EC 값이 약 $1.91\%$ 상승합니다. $25^\circ\text{C}$ 기준 표준 EC로 변환하는 공식입니다.

$$EC_{25} = \frac{EC_{measured}}{1 + \beta \times (T_{measured} - 25)}$$

*   $\beta$: 온도 보정 계수 (일반적으로 $0.0191 \ /^\circ\text{C}$ 사용)
*   $T_{measured}$: 현재 용액 온도 ($^\circ\text{C}$)

---

## 🧪 4. A/B 배양액 조제 시 침전 방지 배분 SOP (Chemical Compatibility)

고농도 A/B 원액 조제 시 특정 이온들이 고농도로 만나면 화학 반응을 일으켜 물에 녹지 않는 석고(Gypsum)나 인산칼슘 등의 **불용성 침전물**을 형성합니다. 이를 방지하기 위해 이온들을 두 탱크로 격리 배분해야 합니다.

*   **A 탱크 (Calcium & Iron)**: 질산칼슘, 킬레이트 철 (칼슘과 철 이온 격리)
*   **B 탱크 (Phosphorus & Sulfur)**: 인산암모늄, 황산칼륨, 황산마그네슘, 미량원소 (인산과 황산 이온 격리)

### 🚨 금지 사항 (SOP Rule)
*   질산칼슘(Ca)과 황산마그네슘/황산칼륨(S)을 절대 한 탱크에 섞지 말 것. ($\text{CaSO}_4$ 침전 발생)
*   질산칼슘(Ca)과 인산칼륨/인산암모늄(P)을 절대 한 탱크에 섞지 말 것. ($\text{Ca}_3(\text{PO}_4)_2$ 침전 발생)
