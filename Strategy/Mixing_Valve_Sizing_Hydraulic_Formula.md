# ⚙️ Greenhouse Heating Loop: Mixing Valve Sizing & Hydraulic Integrity Formula

본 문서는 온실 내 온수 순환식 난방 시스템에서 3방향 혼합 밸브(3-way Mixing Valve)를 정밀 사이징하고 배관 계통의 수리학적 무결성(Hydraulic Integrity)을 검증하기 위한 엔지니어링 공식 및 물리적 상수 매뉴얼입니다. 

이 매뉴얼은 `inwoovation.com`의 밸브 계산기 백엔드 수식 및 B2B 온실 시공사 기술 검증용 표준 운영 절차(SOP)의 핵심 알고리즘으로 활용됩니다.

---

## 📐 1. 열 부하 기반 순환 유량 산출 공식

온실의 목표 난방 부하를 충족하기 위해 공급해야 하는 온수 순환 유량은 물의 비열과 설계 온도차를 기반으로 계산됩니다.

$$q_m = \frac{Q}{C_p \times \Delta T}$$

$$V = \frac{q_m}{\rho} = \frac{Q \times 3600}{\rho \times C_p \times \Delta T}$$

*   $Q$: 온실 설계 난방 부하 (Heating Demand, $kW$)
*   $C_p$: 물의 비열 ($4.186 \text{ kJ/kg}\cdot\text{K}$)
*   $\Delta T$: 설계 공급/환수 온도차 ($\text{Supply Temp} - \text{Return Temp}$, $^\circ\text{C}$ 또는 $K$, 일반적으로 온실 난방 루프는 $15^\circ\text{C}$~$20^\circ\text{C}$ 설계)
*   $\rho$: 온수 밀도 ($80^\circ\text{C}$ 기준 약 $971.8 \text{ kg/m}^3$)
*   $q_m$: 질량 유량 (Mass Flow Rate, $kg/s$)
*   $V$: 체적 유량 (Volumetric Flow Rate, $m^3/h$)

### 💡 실무 근사 수식 (Approximate Formula)
일반적인 온실 온수 범위($60^\circ\text{C}$~$80^\circ\text{C}$)에서 비열과 밀도를 대입하면 다음과 같은 실무 근사 공식이 도출됩니다.

$$V \approx \frac{Q \times 0.86}{\Delta T} \quad [m^3/h]$$

---

## 🔍 2. 밸브 용량 계수 (Kv / Cv) 산출 공식

밸브의 Kv 값은 $1 \text{ bar}$의 압력 차에서 밸브를 통과하는 $5^\circ\text{C}$~$40^\circ\text{C}$ 온수의 유량($m^3/h$)을 나타냅니다.

$$K_v = V \times \sqrt{\frac{\rho_{water}}{\Delta P_v \times \rho_{standard}}}$$

온수를 사용하는 일반적인 제어 시스템에서는 밀도 보정($\frac{\rho_{water}}{\rho_{standard}} \approx 1$)을 생략하고 아래 공식을 사용합니다.

$$K_v = \frac{V}{\sqrt{\Delta P_v}}$$

*   $V$: 체적 유량 ($m^3/h$)
*   $\Delta P_v$: 밸브 전후단 타겟 압력 강하 (Valve Pressure Drop, $bar$, $1 \text{ bar} = 100 \text{ kPa}$)

### 💡 미국식 Cv 단위 변환
$$C_v = 1.156 \times K_v$$

---

## 🛡️ 3. 수리학적 권한 (Valve Authority, $a$) 검증

혼합 밸브가 온실 제어 컴퓨터의 신호에 맞춰 선형적으로 난방 공급 온도를 조절하려면 밸브가 배관 계통에 대해 충분한 압력 지배력(Hydraulic Authority)을 가져야 합니다. 권한이 너무 낮으면 제어 불능(Hunting) 상태가 되거나 밸브 개도율이 0%에 가까울 때 유량이 급격히 감소합니다.

$$a = \frac{\Delta P_v}{\Delta P_v + \Delta P_{pipe}} \ge 0.5$$

*   $\Delta P_v$: 밸브가 완전히 열렸을 때의 압력 강하 ($kPa$)
*   $\Delta P_{pipe}$: 혼합 루프 내의 배관, 피팅, 방열관(Heating Pipes) 전체의 유동 저항 압력 강하 ($kPa$)

### 🚨 판정 기준 (SOP Rule)
*   **$a \ge 0.5$ (Optimal)**: 매우 안정적인 온도 선형 제어 보장.
*   **$0.3 \le a < 0.5$ (Marginal)**: 제어 오차가 다소 발생할 수 있으나 유효함.
*   **$a < 0.3$ (Critical/Fail)**: 밸브의 압력 지배력 상실. 밸브 구경을 한 단계 줄이거나 순환 펌프 양정을 재조정해야 함.

---

## 🚨 4. 공동 현상 (Cavitation) 발생 위험 평가

배관 유속이 너무 빠르거나 밸브 전후단 압력차($\Delta P_v$)가 너무 크면 밸브 내부에서 물의 정압이 포화증기압 이하로 떨어져 기포가 발생하고, 이것이 터지면서 밸브 트림을 파괴하고 극심한 소음을 유발하는 공동 현상(Cavitation)이 발생합니다.

### 캐비테이션 계수 ($\sigma$) 산출식
$$\sigma = \frac{P_{out} - P_{vapor}}{\Delta P_v}$$

*   $P_{out}$: 밸브 출구 측 절대 압력 ($kPa$, 절대압)
*   $P_{vapor}$: 공급 온수 온도 기준 포화증기압 ($kPa$, 절대압)
    *   $80^\circ\text{C}$ 기준 $P_{vapor} \approx 47.4 \text{ kPa}$
    *   $60^\circ\text{C}$ 기준 $P_{vapor} \approx 20.0 \text{ kPa}$
*   $\Delta P_v$: 밸브 전후 압력차 ($kPa$)

### 🚨 안전성 판정
*   **$\sigma > 2.0$ (Safe)**: 캐비테이션 위험 없음.
*   **$1.5 \le \sigma \le 2.0$ (Incipient)**: 기포 발생 시작 단계. 주의 요망.
*   **$\sigma < 1.5$ (Critical Cavitation)**: 밸브 파괴 및 소음 발생. 출구 압력을 높이거나(배관 가압) 전후 압력차를 분산하기 위해 다단 밸브 제어 설계 필요.
