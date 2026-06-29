# 💧 Greenhouse Transpiration & Crop Water Demand: Calculation Formula

본 문서는 온실 재배 환경에서 작물의 증산량(Crop Transpiration)을 물리학 및 식물 생리학 수식을 기반으로 예측하고, 배지(Substrate) 종류별 실시간 적정 관수 요구량(Daily Irrigation Demand)을 산출하기 위한 공학 공식 매뉴얼입니다.

이 공식은 `inwoovation.com`에 배포할 증산량/관수 계산기 엔진 및 스마트팜 농가 맞춤형 관수 제어 시나리오 빌더의 핵심 로직으로 통합됩니다.

---

## ☀️ 1. 기상 요인 기반 잠재 증산량 (Potential Transpiration)

온실 내 작물의 증산은 태양 복사 에너지(Radiation)와 대기 포차압(VPD)의 복합 작용으로 일어납니다. 온실 내부 환경에 특화하여 간소화된 **Penman-Monteith 수정 모델**은 다음과 같습니다.

$$ET_p = \alpha \times \frac{\Delta \times R_n + \rho \times C_p \times \text{VPD} \times g_a}{\lambda \times (\Delta + \gamma \times (1 + g_a / g_s))}$$

*   $ET_p$: 잠재 증산 속도 (Potential Transpiration Rate, $kg/m^2\cdot s$ or $mm/s$)
*   $R_n$: 작물 군락이 흡수하는 순 복사 에너지 (Net Radiation, $W/m^2$)
*   $\text{VPD}$: 엽면 기준 포차압 (Vapor Pressure Deficit, $kPa$)
*   $g_s$: 엽소 기공 전도도 (Stomatal Conductance, $m/s$, 일반적으로 수경재배 파프리카 기준 $0.005$~$0.02 \text{ m/s}$)
*   $g_a$: 경계층 전도도 (Boundary Layer Conductance, $m/s$, 팬/환기창 가동 속도에 비례)
*   $\Delta$: 온도에 따른 포화증기압 곡선의 기울기 ($kPa/^\circ\text{C}$)
*   $\gamma$: 건습계 상수 (Psychrometric Constant, 약 $0.067 \text{ kPa/}^\circ\text{C}$)
*   $\lambda$: 물의 증발 잠열 (Latent Heat of Vaporization, 약 $2.45 \text{ MJ/kg}$)
*   $\rho$: 공기 밀도 ($kg/m^3$)
*   $C_p$: 공기 비열 ($J/kg\cdot K$)
*   $\alpha$: 작물 피복 계수 및 엽면적 지수(LAI) 보정 인자

---

## 📊 2. 누적 일사량 기반 실무 증산량 예측식 (Simplified Radiation Model)

복잡한 물리 변수 측정이 어려운 실제 농가 현장에서는 일일 누적 일사량(Daily Solar Radiation)과 증산량의 선형적 상관관계를 활용한 간이 모델이 주로 사용됩니다.

$$ET_{daily} = \text{LAI} \times \left( k_{rad} \times \sum R_{solar} + k_{vpd} \times \text{VPD}_{avg} \right)$$

*   $ET_{daily}$: 작물의 일일 누적 증산량 ($L/m^2\cdot day$)
*   $\text{LAI}$: 엽면적 지수 (Leaf Area Index, $m^2_{leaf}/m^2_{ground}$, 일반적으로 온실 토마토 성숙기 기준 $3.0$~$4.5$)
*   $\sum R_{solar}$: 온실 내부로 투과된 일일 누적 외부 일사량 (Solar Radiation Integral, $MJ/m^2\cdot day$)
    *   *참고*: 온실 유리의 투과율($\tau$)이 $70\%$인 경우, 외부 일사량에 $0.7$을 곱해 계산.
*   $k_{rad}$: 일사-증산 변환 계수 (일반적으로 $0.25$~$0.35 \text{ L/MJ}$)
*   $k_{vpd}$: VPD-증산 변환 계수 (일반적으로 $0.15$~$0.25 \text{ L/kPa}\cdot\text{day}$)

---

## 💧 3. 배지별 실시간 관수 요구량 및 함수율 관리 (Irrigation Target)

작물이 증산하여 배지에서 뽑아 쓰는 수분량을 실시간으로 공급하기 위해, 1회 관수당 적정 배액율(Drainage Ratio)을 고려하여 관수량을 산출합니다.

### 일일 총 관수량 산출 공식
$$I_{total} = \frac{ET_{daily}}{1 - DR} \times (1 + S_{leach})$$

*   $I_{total}$: 일일 총 관수량 ($L/m^2\cdot day$)
*   $DR$: 목표 배액율 (Drainage Ratio, 일반적으로 $20\%$~$35\%$ 설정. 배액을 통해 배지 내 염류 축적 방지)
*   $S_{leach}$: 세척 보정 계수 (Leaching Fraction, 축적된 나트륨/염소 배출용 보정치, $0$~$0.1$)

### 1회 관수량(Shot Volume) 및 횟수 설계
기온이 높고 광량이 강한 낮 시간대에는 배지 내 급격한 수분 변화를 막기 위해 관수를 여러 번 쪼개서 주는 '분할 관수'를 시행합니다.

$$V_{shot} = \frac{I_{total}}{N_{shot}}$$

$$N_{shot} = \text{Round}\left(\frac{\sum R_{solar}}{R_{trigger}}\right)$$

*   $V_{shot}$: 1회 관수량 ($L/m^2\cdot shot$)
*   $N_{shot}$: 일일 관수 횟수 (Shots/day)
*   $R_{trigger}$: 관수 트리거 누적 일사량 (보통 $100$~$150 \text{ J/cm}^2$ 누적 시 1회 관수 시작)

---

## 📈 4. 배지별 Dry-back(야간 수분 감쇄) 제어 매커니즘

수경재배에서 기온이 낮아지고 해가 지는 저녁부터 다음 날 아침까지 배지 수분 함량(Water Content, WC)이 자연적으로 감소하는 현상을 **Dry-back**이라고 합니다. 야간 Dry-back 크기를 조절하여 작물의 생식 생장(Generative)과 영양 생장(Vegetative)을 제어합니다.

$$\Delta \text{WC}_{night} = \text{WC}_{sunset} - \text{WC}_{sunrise}$$

### 🚨 생장 제어 SOP 판정 기준
1.  **Generative (생식 생장 유도: 과실 비대 및 개화 촉진)**
    *   **목표 Dry-back**: $\Delta \text{WC}_{night} \approx 8\%$~$12\%$
    *   **조치**: 일몰 2시간 전에 관수를 완전히 종료하여 야간 배지 내부 산소 농도를 높이고 뿌리 발달 촉진.
2.  **Vegetative (영양 생장 유도: 줄기 굵기 성장 및 엽면 확대)**
    *   **목표 Dry-back**: $\Delta \text{WC}_{night} \approx 4\%$~$6\%$
    *   **조치**: 일몰 직전 또는 필요시 야간 추가 관수(Night-watering)를 극소량 시행하여 배지 내 높은 수분 유지.
