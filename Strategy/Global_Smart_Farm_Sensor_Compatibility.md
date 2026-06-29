# 🔌 Global Smart Farm Climate Computer & Industrial Sensor Compatibility Registry

본 문서는 Priva, Hoogendoorn, Ridder 등 글로벌 메이저 환경제어 컴퓨터와 다양한 메이저 산업용 센서(온습도, 일사, 토양 함수율 등) 간의 전기적 호환성, 결선 규격(Wiring Schematics), 신호 변환 공식을 정리한 현장 엔지니어링 기술 참조서입니다.

이 사전은 향후 `inwoovation.com`에 연동할 센서-제어기 결선 매칭 앱 및 B2B 스마트팜 기술 지원 RAG 라이브러리의 핵심 스키마로 사용됩니다.

---

## ⚡ 1. 아날로그 및 디지털 센서 인터페이스 개요

온실 환경 제어기는 전기 신호를 읽어 물리 값으로 디코딩합니다. 대표적인 4가지 신호 체계 규격입니다.

### 1) 4-20 mA 전류 루프 (Current Loop)
*   **특징**: 전압 강하가 심한 장거리 배선(50m 이상)에 적합하며 노이즈에 강함.
*   **작동 원리**: 센서가 4mA(최소값)에서 20mA(최대값) 사이의 전류를 송출하면 제어기가 이를 측정.
*   **수식 (Decoding)**:
    $$Value = \text{Min} + \left( \frac{I_{measured} - 4}{16} \right) \times (\text{Max} - \text{Min})$$
*   *결선 팁*: 제어기가 전압 입력(0-10V)만 지원할 경우, $500 \ \Omega$ 정밀 저항을 입력 채널에 병렬 연결하여 $2 - 10 \text{ V}$ 전압으로 변환하여 수신 가능.

### 2) 0-10 V 전압 신호 (Voltage Signal)
*   **특징**: 직관적이고 결선이 쉬우나, 배선이 길어지면 도선 저항으로 인해 전압 강하(오차) 발생.
*   **수식 (Decoding)**:
    $$Value = \text{Min} + \left( \frac{V_{measured}}{10} \right) \times (\text{Max} - \text{Min})$$

### 3) RS-485 Modbus RTU (디지털 통신)
*   **특징**: 단 2가닥의 통신선(A, B)으로 수십 개의 센서를 직렬 연결(Daisy Chain)하여 데이터 전송 가능.
*   **물리 계층**: Half-Duplex, 9600 bps, 8 Data bits, 1 Stop bit, None Parity (표준 세팅).
*   *결선 팁*: 통신선 종단에 $120 \ \Omega$ 종단 저항(Termination Resistor)을 연결하여 신호 반사 및 감쇄 예방.

### 4) SDI-12 (정밀 농업용 디지털 통신)
*   **특징**: 기상 및 토양 센서(Decagon/Meter 등)에서 주로 사용되는 저전력 3선식 디지털 인터페이스.

---

## 🖥️ 2. 메이저 복합환경제어기 호환성 및 채널 설정

### 1) PRIVA Connext (네덜란드)
*   **입력 모드 지원**: 기본적으로 Universal Input Board(UIB)를 사용하여 채널별 소프트웨어 설정 지원.
*   **센서 결선 매핑**:
    *   **2선식 4-20mA 센서**: 외부 24VDC 전원(+) -> 센서 (+) / 센서 (-) -> UIB 채널 (+) / UIB 채널 (-) -> 외부 전원 GND. (수동 루프 결선)
    *   **0-10V 센서**: 센서 신호 (+) -> UIB 채널 (+) / 센서 GND -> UIB 채널 (-) 및 컨트롤러 공통 GND.

### 2) HOOGENDOORN iSii (네덜란드)
*   **입력 모드 지원**: I/O 모듈의 하드웨어 점퍼(Jumper) 핀 설정을 통해 Current(I) / Voltage(U) 입력 물리 분기 선택 필수.
*   **센서 호환 정보**: 센서 출력 임피던스가 최소 $10 \ \text{k}\Omega$ 이상이어야 제어기 내부 전압 왜곡이 발생하지 않음.

### 3) 아두이노/라즈베리파이 (DIY 스마트팜)
*   **제약 사항**: 아두이노 ADC는 기본적으로 0-5V 입력만 받으므로 0-10V 센서 연결 시 **분압 저항 회로(Voltage Divider)** 가 필수적임.
    *   *분압 회로 설계*: $R_1 = 10 \ \text{k}\Omega$, $R_2 = 10 \ \text{k}\Omega$를 직렬 구성하여 10V 입력을 5V로 정확히 1/2 감쇄시켜 ADC 핀에 입력.

---

## 📏 3. 대표 센서별 호환 규격 및 디코딩 파라미터

| 센서 종류 (Sensor) | 모델명 (Model) | 출력 신호 (Signal) | 측정 범위 (Range) | 디코딩 수식 파라미터 |
| :--- | :--- | :--- | :--- | :--- |
| **일사량 센서** | Apogee SP-110 | $0 - 350 \text{ mV}$ | $0 - 2000 \text{ W/m}^2$ | $Value = V_{mV} \times 5.714$ |
| **온습도 센서** | Rotronic HC2-S3 | $0 - 1 \text{ V}$ | $-40 \sim 60^\circ\text{C}$ / $0 \sim 100\%$ | $T = (V \times 100) - 40$ |
| **토양 함수율** | METER TEROS 12 | RS-485 / SDI-12| $0 \sim 100\%$ VWC | 디지털 레지스터 직접 판독 |
| **이산화탄소** | Vaisala GMD20 | $4 - 20 \text{ mA}$ | $0 - 2000 \text{ ppm}$ | $CO_2 = (I_{mA} - 4) \times 125$ |
