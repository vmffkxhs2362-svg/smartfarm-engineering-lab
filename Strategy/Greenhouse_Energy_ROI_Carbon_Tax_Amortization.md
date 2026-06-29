# 📉 Greenhouse Energy Upgrade: ROI & German Carbon Tax Amortization Model

본 문서는 온실의 에너지 보존 시설(다중 스크린, 피복재 업그레이드) 및 친환경 난방 장치(지열/공기열 히트펌프) 도입 시 발생하는 연간 에너지 절감량, 독일 연료탄소세(BEG CO2-Abgabe) 절감분, 초기 투자비(CapEx) 회수 기간을 정밀 시뮬레이션하기 위한 공학적 투자 분석 기술 참조서입니다.

이 규격은 향후 `inwoovation.com`에 연동될 온실 에너지 ROI 시뮬레이션 엔진 및 프리미엄 엑셀 패키지 설계의 공식 뼈대로 사용됩니다.

---

## 📐 1. 온실 관류 열손실 및 절감량 산출 공식

온실의 난방에너지는 주로 피복재를 통한 관류 열손실(Transmission heat loss)과 환기에 의한 열손실로 나뉩니다.

### 피복재 U-value(열관류율) 기반 열손실 공식
$$Q_{loss} = A_{envelope} \times U_{avg} \times (T_{inside} - T_{outside}) \quad [W]$$

*   $A_{envelope}$: 온실 피복재 전체 표면적 ($m^2$)
*   $T_{inside}, T_{outside}$: 온실 내부 목표 온도 및 외부 기외 온도 ($^\circ\text{C}$ 또는 $K$)
*   $U_{avg}$: 피복재 및 스크린 상태를 반영한 가중 열관류율 ($W/m^2\cdot K$)
    *   *단층 유리*: $U \approx 5.8 \text{ W/m}^2\cdot K$
    *   *이중 플라스틱 비닐*: $U \approx 3.2 \text{ W/m}^2\cdot K$
    *   *단층 유리 + 알루미늄 보온스크린 1레이어 밀폐 가동*: $U \approx 2.5 \text{ W/m}^2\cdot K$

### 스크린/피복 교체 시 연간 에너지 절감량 ($E_{saved}$)
$$E_{saved} = A_{envelope} \times (U_{old} - U_{new}) \times \text{HDD} \times 24 \times 10^{-6} \quad [MWh/year]$$

*   $\text{HDD}$: 난방도일 (Heating Degree Days, 독일 Straelen 지역 기준 연간 약 $3200 \text{ K}\cdot\text{days}$)
*   $U_{old}, U_{new}$: 개조 전후의 평균 열관류율 ($W/m^2\cdot K$)

---

## 💶 2. 독일 연료탄소세 (CO2-Steuer / BEG) 회피액 계산

독일은 2021년부터 국가 연료탄소 배출권 거래제(BEG)에 따라 난방용 화석연료(가스, 난방유)에 이산화탄소 세금을 차등 부과하고 있습니다.

### 연도별 독일 $CO_2$ 톤당 단가 전망 (BEG Price)
*   **2025년**: €55 / $t\text{CO}_2$
*   **2026년**: €65 / $t\text{CO}_2$ (현 시점 기준 단가)
*   **2027년**: €85 ~ €120 / $t\text{CO}_2$ (시장 거래 가격 대기)

### 연료별 이산화탄소 배출 계수
*   **난방용 경유 (Heating Oil)**: $0.267 \text{ kg CO}_2 / kWh$ (or $2.68 \text{ kg CO}_2 / Liter$)
*   **천연가스 (Natural Gas)**: $0.202 \text{ kg CO}_2 / kWh$

### 탄소세 절감액 ($Tax_{saved}$) 산출식
$$Tax_{saved} = \left( \frac{E_{saved}}{\eta_{boiler}} \right) \times EF_{fuel} \times P_{co2} \quad [€/year]$$

*   $\eta_{boiler}$: 보일러 평균 연소 효율 (일반적으로 $0.85$~$0.92$)
*   $EF_{fuel}$: 연료 고유 $CO_2$ 배출 계수 ($t\text{CO}_2/MWh$)
*   $P_{co2}$: 당해 연도 이산화탄소 톤당 단가 ($€/t\text{CO}_2$)

---

## ⚡ 3. 히트펌프 전환 시 전력-연료비 마진 분석 (COP/COP)

가스/유류 보일러를 전기 구동 히트펌프(Geothermal/Air-source Heat Pump)로 전환할 때의 운용비 개선 계산 공식입니다.

### 보일러 열량 대비 필요 전력량 ($El_{required}$)
$$El_{required} = \frac{Q_{demand}}{\text{COP}} \quad [MWh]$$

*   $\text{COP}$: 히트펌프 평균 성적계수 (Coefficient of Performance, 지열 기준 연평균 $3.5$~$4.5$)

### 연간 순 연료비 절감액 ($\Delta OpEx$)
$$\Delta OpEx = \left( \frac{Q_{demand} \times Price_{oil}}{\eta_{boiler}} + Tax_{saved} \right) - \left( \frac{Q_{demand}}{\text{COP}} \times Price_{electricity} \right) \quad [€/year]$$

---

## 📊 4. 투자 회수 기간 (Simple Payback & Net Present Value)

초기 투자 비용(CapEx) 대비 순운용비 개선액($\Delta OpEx$)을 바탕으로 투자의 경제성을 평가합니다.

### 1) 단순 투자 회수 기간 (Simple Payback Period, $SPP$)
$$SPP = \frac{\text{CapEx} - \text{Subsidy}}{\Delta OpEx} \quad [years]$$

*   $\text{Subsidy}$: 독일 연방경제수출통제청(BAFA) 또는 KfW 은행으로부터 지원받는 친환경 설비 보조금 (최대 CapEx의 $30\%$~$40\%$ 지원 신청 가능)

### 2) 할인율을 고려한 순현재가치 (Net Present Value, $NPV$)
$$\text{NPV} = \sum_{t=1}^{N} \frac{\Delta OpEx_t}{(1 + r)^t} - (\text{CapEx} - \text{Subsidy})$$

*   $r$: 할인율 (Discount Rate, 농가 기준 보통 $4\%$~$6\%$ 적용)
*   $N$: 설비 기대 수명 ($years$, 히트펌프 기준 15년~20년)
*   **합격 판정**: $\text{NPV} > 0$ 이면 경제적 타당성 확보.
