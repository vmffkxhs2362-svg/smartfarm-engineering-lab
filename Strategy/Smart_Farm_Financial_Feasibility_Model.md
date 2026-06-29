# 📊 Smart Farm Financial Feasibility Model: CapEx & EBITDA Solver (Excel Blueprint)

본 문서는 시설원예 스마트 온실 신축 및 창업 시 발생하는 초기 자본 지출(CapEx), 연간 운영 비용(OpEx), 작물 수확량 기반 예상 매출을 연동하여 10개년 현금흐름, EBITDA, 순현재가치(NPV), 내부수익률(IRR), 투자 회수 기간(Payback Period)을 산출해 주는 **스마트팜 창업 예비타당성 분석 엑셀 모델**의 설계 청사진 및 공식 매뉴얼입니다.

이 설계안은 향후 크몽/Fivver 등을 통해 판매할 고마진 디지털 스프레드시트 상품의 사양서 및 B2B 예비창업농 비즈니스 플래닝 지원 RAG 데이터베이스의 표준 수식으로 사용됩니다.

---

## 🏗️ 1. 초기 투자 비용 (CapEx) 및 감가상각 구조 설계

온실 신축 및 설비 도입에 소요되는 초기 자본 지출과 감가상각(Depreciation) 연한 설정 기준입니다.

### 1) CapEx 분류 및 입력 변수
*   **온실 골조 및 피복 시공비 ($C_{struct}$)**: 유리온실 또는 다연동 비닐온실 평당 단가 $\times$ 총 면적. (감가상각 연한: $20$년, 정액법)
*   **ICT 환경제어 및 관수 기계 설비 ($C_{equip}$)**: 복합환경제어 컴퓨터, 배액 살균기, 양액 공급기, 유동팬 등. (감가상각 연한: $10$년, 정액법)
*   **보일러 및 난방 배관 설비 ($C_{heat}$)**: 유류/가스 보일러, 3방향 밸브, 난방 파이프 등. (감가상각 연한: $10$년, 정액법)
*   **초기 생육 인프라 ($C_{infra}$)**: 재배 베드, 배지(코코피트/암면 슬래브), 초기 묘목 구입비. (감가상각 연한: $1$년, 당해 연도 전액 비용 처리)

### 2) 연간 감가상각비 ($D_{annual}$) 산출식 (정액법 - Straight-line Method)
$$D_{annual} = \frac{C_{struct}}{20} + \frac{C_{equip}}{10} + \frac{C_{heat}}{10} \quad [KRW/year]$$

---

## ⚙️ 2. 연간 운영 비용 (OpEx) 및 매출액 (Revenue) 산출 공식

### 1) 연간 운영 비용 (OpEx) 항목
*   **에너지 비용 ($O_{energy}$)**: 난방용 면세유/가스 요금 + LED 보광 및 설비 구동용 농업용 전기 요금.
*   **양액 비료 및 농자재 소모품비 ($O_{material}$)**: 비료 원료(질산칼슘, 황산마그네슘 등), 배지 교체비, 친환경 약제 및 천적 구입비.
    *   *수식*: $\text{재배 면적} (m^2) \times \text{헤드당 연간 비료비}$
*   **인건비 ($O_{labor}$)**: 상시 재배사 및 수확기 임시 일용직 인건비.
*   **기타 제비용 ($O_{misc}$)**: 시설 유지 보수비(CapEx의 $1\%$), 농작물 재해보험료 등.

### 2) 연간 수확량 기반 예상 매출액 ($R_{annual}$) 산출식
$$R_{annual} = A_{ground} \times \eta_{eff} \times Y_{m2} \times P_{wholesale} \quad [KRW/year]$$

*   $A_{ground}$: 온실 총 바닥 면적 ($m^2$)
*   $\eta_{eff}$: 실제 식재 유효 면적 비율 (일반적으로 통로 및 기계실을 제외한 $80\%$~$85\%$)
*   $Y_{m2}$: 평당 또는 제곱미터당 연간 작물 수확량 (예: 완숙토마토 기준 $45 \text{ kg/m}^2\cdot year$)
*   $P_{wholesale}$: 해당 작물의 연평균 도매 낙찰 단가 (KAMIS 3개년 평균 도매 단가 적용, $KRW/kg$)

---

## 📊 3. 10개년 재무 예측 및 EBITDA 분석 (Financial Metrics)

매년 발생하는 매출액과 OpEx 데이터를 연동하여 법인세, 이자, 감가상각비 차감 전 영업이익(EBITDA)을 산출합니다.

### 1) 연간 EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization)
$$\text{EBITDA}_t = R_{annual, t} - \left( O_{energy, t} + O_{material, t} + O_{labor, t} + O_{misc, t} \right)$$

### 2) 영업이익 (EBIT) 및 순이익 (Net Income)
$$\text{EBIT}_t = \text{EBITDA}_t - D_{annual}$$

$$\text{Net Income}_t = (\text{EBIT}_t - \text{Interest}_t) \times (1 - \tau_{tax})$$

*   $\text{Interest}_t$: 농업 정책 자금 대출(예: 연리 $1.5\%$~2.0% 시설 자금 대출)에 따른 연간 이자 비용
*   $\tau_{tax}$: 법인세 또는 소득세율

---

## 📈 4. 투자 경제성 지표 산출 공식 (NPV, IRR & Payback)

예비창업농이 정부 지원 정책 자금을 신청하거나 금융권 대출 심사를 받을 때 제출해야 하는 핵심 타당성 수식입니다.

### 1) 순현금흐름 (Free Cash Flow, $FCF$)
$$\text{FCF}_t = \text{Net Income}_t + D_{annual} - \text{Principal Repayment}_t$$

*   $\text{Principal Repayment}_t$: 대출 원금 상환액 (거치 기간 이후 발생하는 원금 분할 상환액)

### 2) 내부수익률 (Internal Rate of Return, $IRR$)
$$\sum_{t=1}^{10} \frac{\text{FCF}_t}{(1 + \text{IRR})^t} - \text{Initial Outlay} = 0$$

*   $\text{Initial Outlay}$: 자부담 초기 투자금 ($\text{Total CapEx} - \text{Government Grant} - \text{Bank Loan}$)
*   **합격 판정**: $\text{IRR} > \text{자본 비용 (대출 금리)}$ 일 때 사업 타당성 확보.

### 3) 할인 수입/지출 비 (Benefit-Cost Ratio, B/C Ratio)
$$\text{B/C Ratio} = \frac{\sum_{t=1}^{10} \frac{R_{annual, t}}{(1+r)^t}}{\sum_{t=1}^{10} \frac{\text{OpEx}_t}{(1+r)^t} + \text{Initial Outlay}} \ge 1.0$$
