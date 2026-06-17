# 🌿 국내 농산물 가격 분석 및 공급망 프리미엄 서비스 기획서
**작성일**: 2026-06-11  
**버전**: 1.0  
**담당**: 커리어 및 기술 참모 (Career & Tech Staff)  

---

## 🏛️ I. 서비스 개요 (Service Overview)

### 1. Value Proposition (핵심 가치 제안)
*   **배경**: 기후 변화(엘니뇨/라니냐), 우크라이나 전쟁 등 지정학적 위기로 글로벌 원자재 가격이 요동침에 따라 국내 농산물 가격(금배추, 금사과 등) 또한 예측 불가능하게 폭등하고 있습니다. 그러나 소비자 및 B2B 요식업 사업자들은 단순 뉴스 헤드라인 외에 **구체적인 가격 원가 구조 분석 정보**를 얻지 못하고 있습니다.
*   **해결책**: 글로벌 원자재(유가, 가스, 인산가리 등 비료 원료) 추이와 국내 농수산물 도소매가 데이터를 실시간 매핑하여 **농산물 공급망 인텔리전스 및 원가 해체 분석 보고서**를 제공하는 프리미엄 정보 구독 서비스(App 및 Substack 뉴스레터)를 구축합니다.

### 2. Target Audience (타겟 고객)
1.  **B2B 식자재 구매 담당자 및 요식업 자영업자**: 원재료 가격 급등 예측을 통해 선제적인 재고 확보 및 메뉴 단가 조율이 필요한 고객.
2.  **농산물 유통 및 스마트팜 투자자**: 유통망 병목 현상과 원가 트렌드를 기반으로 투자 결정을 내리고자 하는 개인/기관 투자자.
3.  **농축산 가공식품 기업**: 원료 수급 리스크를 선제적으로 모니터링해야 하는 구매/R&D 부서.

---

## 🏗️ II. 비즈니스 모델 및 서비스 구성 (Business Model)

### 1. Premium Newsletter (Substack)
*   **Free Version**: 주간 주요 농산물 도소매가 지표 요약 및 단순 가격 상승 뉴스 브리핑.
*   **Paid Version (월 29,000원 / €20)**:
    *   **원가 구조 해체 보고서(Cost Breakdown Report)**: 품목별 원재료, 비료, 물류비 추정치를 반영한 마진율 추적.
    *   **공급 리스크 조기 경보 지표 (Agricultural Alert System)**: 특정 산지의 작황 부진 또는 유가 급등에 따른 3개월 내 가격 폭등 예상 리포트.
    *   **국내외 가격 차이(Arbitrage) 분석**: 예: 국내 배추/사과 가격과 글로벌 유통가(중국, 일본, 미국)의 괴리율 비교를 통한 수입/대체 수급 분석.

### 2. SaaS Dashboard App (안안티그래비티 애그테크 대시보드)
*   사용자가 관심 품목(예: 토마토, 파프리카, 배추)을 설정하면 실시간으로 도소매 지수와 공급망 리스크 점수를 시각적으로 제공하는 웹/모바일 대시보드 어플리케이션.

---

## 📊 III. 농산물 원가 구조 분석 모델 (Agricultural Cost Architecture)

특정 농산물의 가격(Retail Price)은 단순히 수요-공급에 의해 결정되지 않으며, 공급망 하부의 **4대 원가 드라이버**에 의해 선제 결정됩니다.

```
       [소비자가 (Retail Price)]
                 │
   ┌─────────────┼─────────────┬─────────────┐
   ▼             ▼             ▼             ▼
[원물/종묘]    [비료/농약]    [에너지/난방]  [물류/유통]
  (Seed)     (Fertilizer)    (Energy/Gas)  (Transport)
```

### 1. 원가 해체 공식 (Cost Deconstruction Equation)
$$Price_{Total} = Price_{Seed} + Price_{Fertilizer} + Price_{Energy} + Price_{Logistics} + Margin_{Middleman}$$

1.  **원물/종묘 비용 ($Price_{Seed}$)**: 
    *   특정 작물의 종자 가격 및 초기 모종 육묘 비용.
2.  **비료/농약 비용 ($Price_{Fertilizer}$)**:
    *   글로벌 화학 원료(암모니아, 인산, 염화칼륨) 가격에 연동. 천연가스 가격 급등 시 암모니아(질소질 비료의 원료) 생산 단가가 급등하여 비료 원가가 선제 상승함.
3.  **에너지/난방 비용 ($Price_{Energy}$)**:
    *   시설 원예(유리온실, 비닐하우스)의 겨울철 난방용 가스/등유 가격 및 양액 펌프 구동 전력비.
4.  **물류/유통 비용 ($Price_{Logistics}$)**:
    *   디젤 유가와 연동되는 내륙 운송비 + 가락시장 등 도매시장 수수료(평균 5~7%) + 중간 유통 벤더 마진.

### 2. 시나리오 분석 예시: 가스 가격 급등에 따른 토마토 원가 시뮬레이션
*   *조건*: 유럽/러시아 가스 공급 제한으로 인해 글로벌 천연가스 가격이 30% 폭등.
*   *공급망 파급 효과*:
    1.  천연가스 폭등 ➡️ 질소질 비료 원료인 암모니아 생산 단가 상승 ➡️ 국내 비료 가격 15% 인상.
    2.  온실 난방용 유가/가스 단가 동반 상승 ➡️ 겨울철 시설 토마토 난방비 20% 폭등.
    3.  **결과**: 토마토 생산 원가가 kg당 3,200원에서 4,100원으로 상승. 유통 마진을 포함한 최종 소비자가는 최소 25% 폭등할 것으로 예측됨. 대시보드는 이 예측을 2달 전에 경고 알림으로 제공.

---

## 💾 IV. 데이터 수집 체계 및 데이터베이스 스키마 (Data Architecture)

### 1. External Data Sources (데이터 수집 API 대상)
*   **국내 가격 데이터**: **KAMIS API** (농수산물유통정보 오픈 API - 실시간 도소매 가격, 일별/부류별/품목별 시세).
*   **원자재 및 에너지**: **한국석유공사 Opinet API** (면세유 및 일반 경유 가격), **FRED API** (글로벌 천연가스 및 비료 원재료 지수).
*   **글로벌 농산물 가격**: **FAO Food Price Index** (세계식량가격지수), 미국 농무부(USDA) 해외 농업 서비스 데이터베이스.
*   **기상 데이터**: **기상청 공공데이터 포털 API** (주요 산지별 강수량, 일조량, 적설량 관측 데이터).

### 2. DB Schema (SQLite / PostgreSQL)

#### 1) `crop_master` (품목 기준 테이블)
```sql
CREATE TABLE crop_master (
    crop_id INTEGER PRIMARY KEY AUTOINCREMENT,
    crop_code VARCHAR(20) UNIQUE,        -- KAMIS 품목 코드 (예: '111' - 쌀, '211' - 배추)
    crop_name VARCHAR(50) NOT NULL,      -- 품목명
    variety_name VARCHAR(50),            -- 품종명 (예: '봄배추', '후지 사과')
    unit VARCHAR(10)                     -- 거래 단위 (예: '10kg', '1kg')
);
```

#### 2) `global_commodity_index` (글로벌 원자재 지표 테이블)
```sql
CREATE TABLE global_commodity_index (
    date DATE PRIMARY KEY,
    brent_crude_oil REAL,                -- 브렌트유 가격 (USD/배럴)
    natural_gas REAL,                    -- 천연가스 가격 (USD/MMBtu)
    potash_fertilizer REAL,              -- 인산가리 비료 지수
    urea_fertilizer REAL,                -- 요소를 포함한 질소비료 가격
    usd_krw_rate REAL                    -- 원/달러 환율
);
```

#### 3) `crop_price_history` (국내 가격 히스토리 테이블)
```sql
CREATE TABLE crop_price_history (
    price_id INTEGER PRIMARY KEY AUTOINCREMENT,
    crop_id INTEGER,
    date DATE,
    market_type VARCHAR(10),             -- 'WHOLESALE' (도매) 또는 'RETAIL' (소매)
    region_name VARCHAR(20),             -- '서울', '대전', '부산' 등
    price INTEGER,                       -- 원화 가격
    FOREIGN KEY(crop_id) REFERENCES crop_master(crop_id)
);
```

#### 4) `crop_cost_structure` (품목별 원가 분석 추정 테이블)
```sql
CREATE TABLE crop_cost_structure (
    cost_id INTEGER PRIMARY KEY AUTOINCREMENT,
    crop_id INTEGER,
    date DATE,
    seed_cost_ratio REAL,                -- 종묘 원가 비중 (0.00 ~ 1.00)
    fertilizer_cost_ratio REAL,          -- 비료/농약 원가 비중
    energy_cost_ratio REAL,              -- 난방/동력 에너지 원가 비중
    logistics_cost_ratio REAL,           -- 유통/운송비 원가 비중
    estimated_margin REAL,               -- 추정 중간 마진율
    risk_score INTEGER,                  -- 공급망 리스크 점수 (1 ~ 100)
    FOREIGN KEY(crop_id) REFERENCES crop_master(crop_id)
);
```

---

## ⚙️ V. 개발 및 배포 단계별 로드맵 (Development Roadmap)

### Phase 1: MVP 데이터 파이프라인 개발 (1개월)
- Python 기반 KAMIS API 및 원자재 인덱스 수집 스크립트 구축.
- SQLite DB 적재 루틴 자동화.
- 주간 원가동향 요약 뉴스레터 (Substack) 론칭 및 무료 구독자 모집.

### Phase 2: 원가 추정 알고리즘 및 예측 모델링 (2개월)
- 각 작물별 에너지/비료 사용량 계수(농진청 표준 영농 교본 기준)를 대입하여 유가/가스 변동에 따른 원가 시뮬레이션 알고리즘 설계.
- 공급망 리스크 점수(Risk Score) 산출 알고리즘 연동.
- 유료 구독 요금제 오픈 및 B2B 고객 타겟 홍보.

### Phase 3: SaaS 대시보드 웹앱 배포 (3개월)
- Next.js 및 Vanilla CSS(유저 피드백 기반 모던 UI) + Chart.js를 결합한 모니터링 웹앱 구축.
- 실시간 가격 알림 및 원가 경보 텔레그램/이메일 연동.
- 도소매 매칭 도구 및 수급 이상 징후 알림 서비스 정식 출시.
