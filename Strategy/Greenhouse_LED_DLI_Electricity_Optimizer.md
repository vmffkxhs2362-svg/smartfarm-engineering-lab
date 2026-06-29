# 💡 Greenhouse LED Supplemental Lighting: DLI & Electricity Cost Optimizer

본 문서는 온실 내 인공 광원(LED 보광등) 도입 시, 자연 일사량과 보광 시간의 연동을 통해 목표 일사누적량(Daily Light Integral, DLI)을 충족하면서 전기 요금을 최소화하기 위한 **보광 제어 알고리즘 및 비용 최적화 수식** 기술 설계서입니다.

이 규격은 향후 `inwoovation.com`에 연동할 보광 설계 계산기 및 B2B 스마트 온실 에너지 절감 자문용 RAG 라이브러리의 표준 수식으로 사용됩니다.

---

## 📐 1. PPFD (광양자속밀도)와 DLI (일사누적량) 상호 변환 공식

식물이 광합성에 사용하는 빛의 파장대(PAR, $400 - 700 \text{ nm}$) 영역의 강도는 PPFD로 측정되며, 하루 동안 누적된 총 빛의 양은 DLI로 환산하여 작물 생육 지표로 삼습니다.

### 인공 광원(LED) DLI 산출 공식
$$DLI_{artificial} = \text{PPFD} \times t_{lighting} \times 3600 \times 10^{-6} \quad [\text{mol/m}^2\cdot\text{day}]$$

*   $\text{PPFD}$: 작물 캐노피(생장점) 높이에서의 평균 광양자속밀도 ($\mu\text{mol/m}^2\cdot\text{s}$)
*   $t_{lighting}$: 일일 보광 시간 ($hours/day$)
*   $3600$: 시간 단위를 초 단위로 환산
*   $10^{-6}$: 마이크로몰($\mu\text{mol}$) 단위를 몰($\text{mol}$) 단위로 환산

### 자연 일사광선(Solar Radiation)의 PAR 및 DLI 환산 공식
외부 일사 센서가 측정하는 총 일사량 에너지($W/m^2$)는 가시광선 외 열에너지를 포함하므로, 광합성 유효 파장(PAR)으로 변환해야 합니다.

$$PPFD_{natural} = \text{Solar Radiation} \ [W/m^2] \times 2.07 \times \tau_{glazing}$$

*   $2.07$: 태양광 기준 $1 \text{ W/m}^2$ 에너지의 PAR 변환 계수 ($\mu\text{mol/m}^2\cdot\text{s}$ per $W/m^2$)
*   $\tau_{glazing}$: 온실 피복재(유리/비닐)의 일사 투과율 (일반 유리: $0.7$~$0.8$, 노후 비닐: $0.6$)

$$DLI_{natural} = \sum_{hour=1}^{24} \left( PPFD_{natural, hour} \times 3600 \times 10^{-6} \right) \quad [\text{mol/m}^2\cdot\text{day}]$$

---

## 🌿 2. 작물별 목표 DLI 및 필수 보광 광량 산출 수식

각 작물은 정상 생육 및 최대 수확량을 내기 위해 필요한 **최소 목표 DLI**가 있습니다.

| 작물명 (Crop) | 임계 DLI (Minimum DLI) | 최적 DLI (Optimal DLI) | 팁번(Tipburn) 민감도 |
| :--- | :---: | :---: | :---: |
| **토마토 (Tomato)** | $15 \text{ mol/m}^2\cdot\text{d}$ | $22 - 30 \text{ mol/m}^2\cdot\text{d}$ | 낮음 |
| **파프리카 (Sweet Pepper)**| $12 \text{ mol/m}^2\cdot\text{d}$ | $18 - 25 \text{ mol/m}^2\cdot\text{d}$ | 중간 |
| **딸기 (Strawberry)** | $8 \text{ mol/m}^2\cdot\text{d}$ | $12 - 17 \text{ mol/m}^2\cdot\text{d}$ | 높음 (칼슘 결핍 주의) |
| **상추 (Lettuce)** | $10 \text{ mol/m}^2\cdot\text{d}$ | $14 - 17 \text{ mol/m}^2\cdot\text{d}$ | 극도로 높음 (DLI 17 초과 시 팁번 발생) |

### 필수 보광 시간 ($t_{supplement}$) 결정 공식
자연광 유입이 부족한 날(겨울철, 흐린 날), 부족한 DLI 차이만큼 LED를 켜야 하는 시간입니다.

$$t_{supplement} = \frac{\text{DLI}_{optimal} - DLI_{natural}}{\text{PPFD}_{LED} \times 3600 \times 10^{-6}} \quad [hours]$$

*   *제약 조건*: $0 \le t_{supplement} \le (24 - t_{darkness})$ (작물의 암기/수면 시간 $t_{darkness}$ 확보 필수. 예: 토마토는 하루 최소 6시간의 완전한 어둠이 필요함).

---

## 💶 3. 한전/독일 계통 전기요금 시간대별 보광 비용 최적화

전기 요금 단가가 가장 저렴한 시간대에 집중 보광하여 운용비(OpEx)를 절감합니다.

### 시간대별 부하 요금제 매핑 (한국 전력 농업용 을 고압 기준 예시)
*   **경부하 시간대 (심야 23:00 ~ 09:00)**: 단가 매우 저렴 ($53.2 \text{ 원/kWh}$)
*   **중간부하 시간대 (09:00 ~ 23:00 중 일부)**: 중간 단가 ($74.3 \text{ 원/kWh}$)
*   **최대부하 시간대 (계절별 특정 피크 시간)**: 최고 단가 ($88.4 \text{ 원/kWh}$)

### 비용 최적화 제어 알고리즘 규칙
보광 제어기는 부족한 $t_{supplement}$ 시간을 채울 때 아래 우선순위 순으로 LED 가동 시간대를 예약 배치합니다.

1.  **우선순위 1**: 경부하 시간대 (23:00 ~ 09:00) 내에서 먼저 배치.
2.  **우선순위 2**: 식물 생리적 암기 요구 시간(예: 00:00 ~ 04:00)을 침범하는 경우, 해당 시간을 제외한 나머지 경부하 시간대로 분산 배치.
3.  **우선순위 3**: 그래도 시간이 부족할 경우에만 중간부하 시간대로 가동을 연장. 최대부하 피크 시간은 가동을 원천 차단.

$$Cost_{lighting} = \text{Power}_{LED} \ [kW] \times \sum \left( t_{lighting, class} \times Price_{class} \right) \quad [KRW/day]$$
