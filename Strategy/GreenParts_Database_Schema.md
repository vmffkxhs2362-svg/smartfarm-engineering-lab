# ⚙️ GreenParts.io: Smart Farm Hydraulics & Pipe Fitting Database Schema

본 문서는 온실 배관 설계 및 노후 밸브/펌프 교체 시 필수적인 기자재(혼합 밸브, 순환 펌프, 배관 파이프, 플랜지 피팅) 간의 치수 및 수리학적 호환성 매칭을 전개해 주는 **스마트팜 자재 호환성 디렉토리(GreenParts.io)**의 관계형 데이터베이스(RDB) 테이블 구조 및 속성 기술 명세서입니다.

이 기획안은 향후 `inwoovation.com`에 연동할 B2B 기자재 디렉토리 검색 도구 및 B2B 기자재 제휴 판매 파이프라인의 표준 데이터 스키마로 사용됩니다.

---

## 🏛 &nbsp; 1. RDB 테이블 설계 및 관계도 (ERD Schema)

데이터베이스는 자재 정보, 제조사 정보, 그리고 기자재 간의 물리적 체결부 호환성 규칙을 매핑하는 3대 테이블로 구성됩니다.

```
┌──────────────────────────────┐        ┌──────────────────────────────┐
│  Manufacturers (제조사)      ├───────►│  Products (기자재 정보)      │
│  - manufacturer_id (PK)      │ 1:N    │  - product_id (PK)           │
│  - name (Belimo, Grundfos 등)│        │  - category (Pump, Valve 등) │
│  - support_email             │        │  - connection_type (Flange)  │
└──────────────────────────────┘        │  - connection_size (DN50)    │
                                        │  - manufacturer_id (FK)      │
                                        └──────────────┬───────────────┘
                                                       │
                                                       │ 1:N
                                                       ▼
                                        ┌──────────────────────────────┐
                                        │  Compatibility_Rules         │
                                        │  - rule_id (PK)              │
                                        │  - source_product_id (FK)    │
                                        │  - target_product_id (FK)    │
                                        │  - compatibility_status      │
                                        └──────────────────────────────┘
```

---

## 📋 2. 테이블 속성 상세 정의 (Database Fields)

### 1) 테이블: `Products`
*   `product_id` (VARCHAR, PK): 기자재 고유 관리 번호 (예: `VAL-BEL-050A-001`)
*   `category` (VARCHAR): 기자재 카테고리 (`Mixing_Valve`, `Circulation_Pump`, `Pipe_Fitting`, `Sensor_Well`)
*   `connection_type` (VARCHAR): 물리적 연결 규격 (`Thread_BSP`, `Thread_NPT`, `Flange_DIN`, `Flange_ANSI`, `Socket_Welding`)
*   `connection_size` (VARCHAR): 연결부 호경/구경 규격 (`DN32`, `DN40`, `DN50`, `DN65`, `DN80`)
*   `pressure_rating` (VARCHAR): 허용 설계 압력 등급 (`PN6`, `PN10`, `PN16`, `Sch40`)
*   `kv_value` (FLOAT, Nullable): 혼합 밸브의 고유 유량계수 ($m^3/h$ at $\Delta P = 1 \text{ bar}$)
*   `max_head` (FLOAT, Nullable): 순환 펌프의 최대 양정 ($m$)
*   `max_flow` (FLOAT, Nullable): 순환 펌프의 최대 토출 유량 ($m^3/h$)

### 2) 테이블: `Compatibility_Rules` (상호 체결 검증 로직)
두 자재가 물리적으로 완벽히 결합(볼트 체결 및 압력 무결성)하기 위해 다음 쿼리 검증 조건을 만족해야 합니다.

```sql
SELECT 
    p1.product_id AS valve_id, 
    p2.product_id AS pipe_id,
    CASE 
        WHEN p1.connection_type = p2.connection_type 
             AND p1.connection_size = p2.connection_size 
             AND CAST(REPLACE(p1.pressure_rating, 'PN', '') AS INTEGER) <= CAST(REPLACE(p2.pressure_rating, 'PN', '') AS INTEGER)
        THEN 'FULLY_COMPATIBLE'
        ELSE 'INCOMPATIBLE_ALERT'
    END AS compatibility_status
FROM Products p1
CROSS JOIN Products p2
WHERE p1.category = 'Mixing_Valve' AND p2.category = 'Pipe_Fitting';
```

---

## 📏 3. 밸브-액추에이터(Actuator) 전기적 호환성 매핑

물리적 배관 결합 외에, 밸브를 구동하는 모터 액추에이터의 제어 신호 호환성 컬럼 정보입니다.

| 액추에이터 구동 전원 | 제어 입력 신호 방식 | 환경제어기 출력 채널 요구 조건 | 호환 구동기 예시 (Belimo) |
| :--- | :--- | :--- | :--- |
| **24V AC/DC** | $0 - 10 \text{ VDC}$ (비례제어) | 아날로그 출력 (AO, $0-10\text{V}$) 필수 | LR24A-SR |
| **230V AC** | 3-point (Floating, 온오프) | 디지털 출력 2개 (DO Open, DO Close) | LR230A |
| **24V AC/DC** | Modbus RTU (디지털 통신) | RS-485 통신 포트 및 레지스터 맵핑 필수 | LR24A-MOD |

---

## 💶 4. 디렉토리 웹앱 수익화 및 트래픽 연동
*   **검색 편의성**: 온실 시공 중 노후화된 Wilo 펌프를 떼어내고 Grundfos 펌프로 대체하고자 할 때, "Wilo DN50 플랜지 모델"을 선택하면 치수 및 볼트 홀 개수(PCD 규격)가 완벽히 일치하는 Grundfos 대체 모델 리스트를 호환 등급과 함께 즉시 반환.
*   **수익 모델**: 자재 교체 페이지 내 해외 직구 파트 및 전문 배관 부품 유통사 제휴 링크 삽입 + B2B 시공 견적 의뢰 리드 제너레이션.
