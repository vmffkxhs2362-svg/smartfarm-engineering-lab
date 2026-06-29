# 🔗 Home Gardening & Hydroponics Affiliate Directory: Architecture Blueprint

본 문서는 아파트 발코니나 실내에서 식물을 재배하고자 하는 홈가드너들을 위해 검증된 수경재배 장치, 식물용 LED 조명, 소형 EC/pH 측정기, 그리고 전용 액체 비료를 선별하여 제공하는 **홈가드닝 제어 자재 제휴 마케팅(Affiliate Marketing) 포털**의 디렉토리 구조 및 검색엔진 최적화(SEO) 상세 기획서입니다.

이 기획안은 향후 `inwoovation.com`의 제휴 마케팅 하위 도메인 또는 허브 페이지 설계의 공식 가이드로 사용됩니다.

---

## 🏛️ 1. 추천 상품 카테고리 및 고성능 큐레이션 기준

아파트 거주 환경의 공간적 제약(일조량 부족, 환기 불량)과 초보자가 겪는 주요 진입장벽을 극복해 줄 수 있는 4대 카테고리 자재를 선정합니다.

### 1) 실내 일체형 수경재배 기기 (Active Hydroponic Kits)
*   **추천 유형**: 에어로가든(AeroGarden) 스타일의 LED 일체형 스마트 재배기.
*   **큐레이션 기준**: 물 순환 조소음 모터 탑재, 수위 센서 경보음 내장, 높이 조절 가능한 LED 포스트.

### 2) 식물 생장 전용 LED 조명 (Full-Spectrum LED Grow Lights)
*   **추천 유형**: 거실 인테리어를 해치지 않는 백색(Sunlike) 풀스펙트럼 LED 스탠드 및 바(Bar) 조명.
*   **큐레이션 기준**: 연색지수($CRI \ge 90$), 적색광($660 \text{ nm}$) 강화 스펙트럼, 타이머 제어 기능 내장.

### 3) 초소형 수질 측정기 (Pocket EC/pH Testers)
*   **추천 유형**: 양액 농도 측정을 위한 휴대용 디지털 EC/pH 펜 미터.
*   **큐레이션 기준**: 자동 온도 보정(ATC) 탑재, 2점 자동 교정식, 방수 등급(IP67).

### 4) 홈가드닝 전용 종합 액체비료 (Concentrated Nutrient Solutions)
*   **추천 유형**: A/B액 분리형 액상 비료 또는 가정용 1액형 완효성 액비.
*   **큐레이션 기준**: 미량원소(킬레이트 철, 붕소 등) 완비, 질소 원료 중 암모늄태($NH_4^+$) 비율 $10\%$ 이하 제품 (실내 pH 급격 저하 예방).

---

## 🔌 2. 제휴 마케팅 (Affiliate) 코드 매핑 스키마 및 URL 구조

아마존 어소시에이트(Amazon Associates) 및 쿠팡 파트너스의 파라미터를 동적으로 제어하여 이탈 없이 트래픽당 커미션을 수취합니다.

### 1) 제휴사별 표준 링크 파라미터 규격
*   **Amazon Associates**: `https://www.amazon.com/dp/{ASIN}/?tag={Affiliate_ID}`
    *   *ASIN*: 아마존 고유 상품 번호
    *   *tag*: 사령관님의 어소시에이트 고유 ID (예: `inwoovation20-20`)
*   **쿠팡 파트너스**: API로 생성된 독점 리디렉션 링크 연동.

### 2) DB 스키마 예시 (JSON 데이터 규격)
```json
{
  "product_id": "HG_LED_001",
  "category": "grow_light",
  "title": "Sunlike Full Spectrum 100W Grow Light with Timer",
  "features": ["3 timer modes", "Dimmable", "IP65 waterproof"],
  "specifications": {
    "PPFD": "150 umol/m2/s at 30cm",
    "Power_Consumption": "15W actual draw",
    "Spectrum": "Red-blue-white mixed"
  },
  "affiliate_links": {
    "amazon_us": "https://www.amazon.com/dp/B07T8H5N/&tag=inwoovation20-20",
    "coupang_kr": "https://link.coupang.com/a/abcde123"
  }
}
```

---

## 🏃‍♂️ 3. 롱테일 키워드 기반 SEO 유입 전략

일반 상업용 키워드("식물 조명 추천")는 대형 몰들이 선점하고 있으므로, 초보자의 **구체적인 페인 포인트(Pain Point)**를 해결하는 정보형 롱테일 키워드를 타겟팅하여 광고비 $0로 유기적 구글 유입을 유치합니다.

1.  **"아파트 베란다 상추 팁번 해결하는 방법"**
    *   *컨텐츠 전략*: 칼슘 결핍과 바람(증산) 부족이 원인임을 밝히고, 해결책으로 미니 서큘레이터와 액상 칼슘제 추천 링크 연동.
2.  **"가정용 수경재배기 물 이끼(녹조) 차단 팁"**
    *   *컨텐츠 전략*: 빛 노출 차단이 핵심임을 설명하고, 검은색 마스킹 테이프 및 수경재배 전용 알루미늄 포일 스티커 추천 링크 연동.
3.  **"바질 키울 때 LED 식물등 하루에 몇 시간 켜야 하나요?"**
    *   *컨텐츠 전략*: 바질 최적 DLI 15몰 수식을 활용한 시간 계산법 설명 후 타이머 기능이 탑재된 스마트 플러그 및 LED 조명 추천 링크 연동.
