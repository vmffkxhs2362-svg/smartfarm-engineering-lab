# 💧 Closed-Loop Hydroponics: UV & Ozone Sterilization Design Parameters

본 문서는 순환식(Closed-loop) 수경재배 시스템에서 배액을 방류하지 않고 재사용하기 위해 물속의 주요 병원균(곰팡이, 세균, 바이러스)을 살균 소독할 때 필수적으로 검증해야 하는 물리·화학적 설계 상수 및 소독 동역학(Disinfection Kinetics) 공식 매뉴얼입니다.

이 매뉴얼은 `inwoovation.com`에 배포될 배액 살균 계산기 백엔드 모델 및 대규모 시설원예 농가 대상 환경 친화적 수질 관리 엔지니어링 패키지의 공식 자료로 사용됩니다.

---

## ⚡ 1. UV(자외선) 살균 동역학 및 필수 조사량 (UV Dose)

자외선 살균은 일반적으로 포자의 DNA 구조를 이중 결합 파괴함으로써 병원균을 비활성화합니다. 살균 효율은 수질의 자외선 투과율(UV Transmission, UVT)과 UV 램프 노출 시간의 함수로 결정됩니다.

### 비활성화 속도 공식 (Chick-Watson Law)
$$\ln\left(\frac{N_t}{N_0}\right) = -k \times D_{uv}$$

$$D_{uv} = I_{uv} \times t$$

*   $N_0$: 소독 전 병원균의 초기 개체 수 ($\text{CFU/mL}$)
*   $N_t$: $t$ 시간 소독 후 잔존 병원균 개체 수 ($\text{CFU/mL}$)
*   $k$: 병원균 고유의 UV 비활성화 속도 상수 ($cm^2/mJ$)
*   $D_{uv}$: 자외선 조사량 (UV Dose, $mJ/cm^2$ or $\mu W\cdot s/cm^2$)
*   $I_{uv}$: 자외선 조사 강도 (UV Intensity, $mW/cm^2$)
*   $t$: 노출 시간 (Exposure Time, $s$)

### 🚨 주요 스마트팜 병원균별 99.9% 비활성화(Log 3 Reduction) 필수 UV 조사량
수경재배 순환 배수 내 유해균을 사멸하기 위해 필요한 설계 도스 기준입니다.

| 병원균 학명 (Pathogen) | 질병명 (Disease) | 필수 UV Dose ($mJ/cm^2$, Log 3 Reduction) |
| :--- | :--- | :---: |
| *Pythium ultimum* | 피시움 뿌리썩음병 | $120$ |
| *Phytophthora cryptogea* | 역병 | $80$ |
| *Fusarium oxysporum* | 시듦병 (도관 전염성) | $250$ |
| *Erwinia carotovora* | 무름병 (세균성) | $20$ |
| *Tobacco Mosaic Virus (TMV)*| 담배모자이크바이러스 | $1,000$ |

* Fusraium(시듦병)과 TMV(바이러스)는 내성이 매우 강하므로 일반 피시움 대비 최소 2배~10배 이상의 고용량 살균기가 설계되어야 합니다.

---

## 🔍 2. 수질 내 UV 투과율(UVT)에 따른 실제 조사 강도 보정

배액 내에 부유 물질(Suspended Solids)이나 유기화합물(철분, 양액 성분)이 많을수록 자외선이 산란 및 흡수되어 살균력이 떨어집니다.

### 램프 이격 거리 ($x$)에 따른 강도 감쇄 공식 (Beer-Lambert Law)
$$I_x = I_0 \times 10^{-\alpha \times x}$$

$$\alpha = -\log_{10}\left(\frac{\text{UVT}\%}{100}\right)$$

*   $I_0$: 램프 쿼츠 슬리브 표면에서의 초기 UV 강도 ($mW/cm^2$)
*   $I_x$: 램프 표면으로부터 $x$ ($cm$) 거리에서의 보정된 UV 강도 ($mW/cm^2$)
*   $\alpha$: 대기/수중 UV 흡광 계수 (Absorption Coefficient, $cm^{-1}$)
*   $\text{UVT}\%$: $1 \text{ cm}$ 광로 기준의 $254 \text{ nm}$ 자외선 투과율 ($%$)
    *   *참고*: 일반 상수도는 $\text{UVT} \approx 90\%$~$98\%$이나, 여과 후의 순환 배액은 유기물 농도로 인해 $\text{UVT} \approx 50\%$~$70\%$ 수준으로 급격히 저하됩니다.

---

## 💨 3. 오존(Ozone, $O_3$) 산화 살균 CTC 계산식

오존은 강력한 산화력을 통해 세포막을 파괴하여 병원균을 살균합니다. 오존 소독은 주입 농도와 잔류 오존 유지 시간의 곱(CTC)으로 설계됩니다.

$$\text{CT Value} = C_{residual} \times t_{contact}$$

*   $C_{residual}$: 소독조 출구 측의 잔류 오존 농도 ($mg/L$)
*   $t_{contact}$: 접촉조 내부에서의 온수 체류 시간 (Contact Time, $minutes$)

### 🚨 주요 병원균 사멸을 위한 목표 CT Value ($mg\cdot min/L$)
*   **세균류 (Bacteria)**: $\text{CT} \approx 0.5$~$1.0$ (무름병균 등 즉시 사멸)
*   **사상균/곰팡이 포자 (Fungal Spores)**: $\text{CT} \approx 1.5$~$3.0$ (피시움, 역병 등 사멸)
*   **바이러스 및 난포자 (Viruses & Oospores)**: $\text{CT} \ge 4.0$

### 🚨 배액 재사용 전 잔류 오존 파괴 (Ozone Destruction SOP)
주입된 오존이 분해되지 않고 작물 뿌리에 직접 닿으면 뿌리가 산화되어 심각한 생장 장해를 겪습니다.
*   **활성탄 여과기(Carbon Filter)** 또는 **UV 파괴 램프(254nm 고용량)**를 소독조 후단에 필수 배치하여 잔류 오존 농도를 **$0.05 \text{ mg/L}$ 이하**로 안전하게 상쇄 시킨 후 공급해야 합니다.
