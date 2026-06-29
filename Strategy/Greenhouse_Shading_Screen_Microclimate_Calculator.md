# ☀️ Greenhouse Shading Screen & Micro-Climate Control Simulator

본 문서는 온실의 다중 차광/보온 스크린 조합에 따른 유효 일사 차단율(PAR Transmission), 온실 내부 미세기후(Micro-climate) 온도 저하 폭, 그리고 엽온(Leaf Temperature) 제어를 통한 포차압(VPD) 보정 공식과 제어 알고리즘 기획서입니다.

이 기획안은 향후 `inwoovation.com`에 연동할 차광 설계 시뮬레이터 및 B2B 온실 환경 설계 자문용 RAG 라이브러리의 표준 수식으로 사용됩니다.

---

## 📐 1. 다중 스크린 조합에 따른 종합 광선 투과율 ($\tau_{combined}$) 공식

온실에 상부 차광 스크린, 내부 알루미늄 보온/차광 스크린 등 여러 레이어의 스크린을 교차 전개할 때, 최종 작물 생장점(Canopy)에 도달하는 일사 차단율 계산 공식입니다.

$$\tau_{combined} = \tau_{glazing} \times \prod_{i=1}^{n} \left( \tau_{screen, i} \right) \times (1 - R_{multi})$$

*   $\tau_{glazing}$: 온실 피복재(유리/비닐) 고유 투과율 (예: $0.78$)
*   $\tau_{screen, i}$: $i$번째 스크린의 광선 투과율 (예: $45\%$ 차광 스크린의 투과율은 $0.55$)
*   $R_{multi}$: 다중 레이어 스크린 간의 광선 내부 반사(Internal reflection) 손실 보정 계수 (일반적으로 $0.02$~$0.05$ 적용)

---

## 🌡️ 2. 차광에 의한 온실 내부 공기 및 엽온(Leaf Temp) 저하 모델

강한 태양광(Solar Radiation, $W/m^2$) 유입 시 차광 스크린을 전개하면 온실 내부 공기 온도와 작물 엽온이 하강하여 고온 스트레스를 예방합니다.

### 1) 차광 전개 시 내부 기온 강하량 ($\Delta T_{air}$) 간이 예측 공식
$$\Delta T_{air} = \frac{I_{outside} \times (1 - \tau_{combined}) \times \eta_{evap}}{C_{p, air} \times \rho_{air} \times \text{VentRate}} \quad [K \text{ or } ^\circ\text{C}]$$

*   $I_{outside}$: 외기 일사 강도 ($W/m^2$)
*   $\eta_{evap}$: 작물 증산 및 바닥 가습에 의한 잠열(Latent Heat) 냉각 효율 계수 (보통 $0.5$~$0.7$)
*   $\text{VentRate}$: 온실 환기율 ($m^3/m^2\cdot s$, 바닥면적 대비 환기량)

### 2) 일사 강도와 엽온(Leaf Temp) 오프셋 공식
작물 잎 온도는 일사 강도에 따라 공기 온도보다 높아집니다.
$$T_{leaf} = T_{air} + \left( \alpha \times I_{canopy} - \beta \times \text{VPD} \right)$$

*   $I_{canopy}$: 캐노피에 도달하는 일사량 ($I_{outside} \times \tau_{combined}$)
*   $\alpha$: 일사 가열 계수 (토마토 기준 약 $0.005$)
*   $\beta$: 증산 냉각 계수 (잎의 수분 증발에 따른 체온 저하 가중치)

---

## 💨 3. 차광 연동 미세기후 VPD (포차압) 복원 제어 알고리즘

여름철 한낮에 온실 내부가 고온 건조해지면 VPD가 임계치인 $1.5 \text{ kPa}$를 초과하여 작물이 기공을 닫고 생장을 멈춥니다. 이때 차광 스크린을 전개하여 일사를 줄이고 온도를 낮춰 VPD를 적정 범위($0.8$~$1.2 \text{ kPa}$)로 복원합니다.

### 차광 스크린 제어 트리거 규칙 (Control Loop)
1.  **조건 1**: 캐노피 일사 강도 $I_{canopy} \ge 750 \text{ W/m}^2$ (or PPFD $\ge 1500 \ \mu\text{mol/m}^2\cdot\text{s}$)
2.  **조건 2**: 또는 온실 내 실시간 $\text{VPD} \ge 1.6 \text{ kPa}$
3.  **제어 동작**: 
    *   상부 알루미늄 스크린(알루넷 등)을 **$60\%$~80% 슬라이딩 전개**하여 일사 에너지를 상방 반사.
    *   동시에 포그 분무(Fogging)를 가동하여 내부 상대습도를 $60\%$ 이상으로 보정.
    *   동작 후 엽온 $T_{leaf}$가 공기 온도 대비 $2^\circ\text{C}$ 이상 떨어지고, VPD가 $1.1 \text{ kPa}$로 안정화되는 피드백 제어 가동.

---

## 💶 4. 마이크로 SaaS 및 B2B 자문 솔루션 응용

*   **웹 시뮬레이터 구성**: 사용자가 온실 피복재 종류와 현재 설치된 스크린 모델명을 드롭다운으로 선택하면, 실시간 태양 고도/일사량에 따른 최적 스크린 개폐 시점(시간대)과 예상 최고 VPD 도달 위험 시각을 그래프로 예보.
*   **수익화**: AdSense 배너 수익 및 스크린 제조사(Svensson 등) 기술 자문 리드로 연계.
