# 📸 AI Agri-Stock Photo Creator: Metadata Schema & Auto-Tagging Registry

본 문서는 생성형 AI로 렌더링한 스마트팜 및 정밀 농업(AgTech) 특화 니치 이미지/비디오 에셋을 Adobe Stock, Freepik 등 글로벌 스톡 플랫폼에 대량 업로드할 때 사용되는 **메타데이터 정합성 스키마(Metadata Schema)** 및 **자동 키워드 매핑 테이블** 기술 참조서입니다.

이 문서는 향후 크리에이터 전용 스톡 태깅 웹 도구(`inwoovation.com` 추가 툴) 및 벌크 메타데이터 동기화 스크립트([rename_and_meta_sync.py](file:///g:/My%20Drive/Antigravity/Headquater/Career/TF-Alpha_Lens/Scripts/rename_and_meta_sync.py))의 참조 규격으로 통합됩니다.

---

## 🏛️ 1. 스톡 플랫폼 업로드용 표준 CSV 필드 스키마

Adobe Stock 및 대다수 에이전시가 승인하는 벌크 업로드 메타데이터 CSV 파일의 필수 열(Column) 구성 및 자료형 정의입니다.

| 열 이름 (CSV Column) | 자료형 (Type) | 필수 여부 (Required) | 설명 및 제약조건 (Description & Constraints) |
| :--- | :---: | :---: | :--- |
| **Filename** | String | **Yes** | 에이전시 서버에 업로드한 이미지 파일명 (예: `smartfarm_vpd_sensor_001.jpg`) |
| **Title** | String | **Yes** | 에셋을 설명하는 직관적인 영어 문장. 최소 5단어, 최대 200자. |
| **Keywords** | String | **Yes** | 검색용 태그. 반점으로 구분된 최소 5개, 최대 50개의 영어 단어/구. |
| **Category** | Integer | **Yes** | Adobe Stock 고유 카테고리 ID 번호 (예: `04` - 환경/자연, `09` - 기술/정밀공학) |
| **Releases** | String | No | 인물/재산권 모델 초상권 동의서(Model Release) 파일명 연결 |

---

## 🌾 2. 스마트팜 테마별 핵심 키워드 매핑 딕셔너리

각 세부 스마트팜 에셋 카테고리에 최적화되어 검색 트래픽을 독점할 수 있는 고신뢰 키워드 세트입니다.

### 1) 온실 설비 및 배관 테마 (Greenhouse Hydraulics)
*   **대표 묘사**: Mixing valve, irrigation manifolds, fertilizer stock tanks, pipe fittings.
*   **필수 검색 키워드 번들 (50개 내 엄선)**:
    ```text
    greenhouse irrigation, hydroponics pipe, mixing valve, water manifold, fertigation tank, smart farm plumbing, agricultural engineering, automatic watering system, 3-way valve, pvc pipes, copper fittings, water pump flow, greenhouse hydraulics, piping system, drip irrigation, greenhouse design, industrial agriculture, modern farming technology, sustainable watering, clean tech.
    ```

### 2) 인공 보광 및 광학 센서 테마 (LED Grow Lights & PPFD)
*   **대표 묘사**: Pink/purple LED grow lights, plant canopy light meters, PPFD sensors, vertical farm shelves.
*   **필수 검색 키워드 번들**:
    ```text
    led grow lights, indoor vertical farming, ppfd sensor, par meter, light spectrum, indoor crop cultivation, smart lighting system, vertical farm lighting, pink light greenhouse, photosynthesis optimization, plant canopy, high tech agriculture, agricultural photonics, energy efficient led, indoor farm rack, hydroponics lighting.
    ```

### 3) 식물 생리 장해 및 병충해 테마 (Plant Disease & Deficiencies)
*   **대표 묘사**: Tomato leaf chlorosis, thrips damage, spider mite webs on rockwool, calcium deficiency leaf tipburn.
*   **필수 검색 키워드 번들**:
    ```text
    plant leaf disease, nutrient deficiency, tomato chlorosis, calcium deficiency, leaf tipburn, spider mite damage, greenhouse pests, thrips marks, plant pathogen, crop disease diagnosis, leaf spots, nitrogen deficiency, agriculture microbiology, plant pathology, crop protection, integrated pest management, organic crop control.
    ```

---

## 🛠️ 3. 자동 변환 스크립트용 JSON 데이터 구조 예시

자동화 툴에서 메타데이터를 저장 및 조립할 때 사용하는 JSON 객체 표준 규격입니다.

```json
{
  "asset_id": "STK_AGI_20260629_001",
  "source_image": "G:/My Drive/Antigravity/System_Archives/TF-Alpha/smartfarm_mixing_valve.png",
  "metadata": {
    "Filename": "smartfarm_mixing_valve_heating_loop.png",
    "Title": "High-precision 3-way mixing valve installed on greenhouse heating loop pipe, smart farm facility",
    "Category": 9,
    "Keywords": [
      "mixing valve", "greenhouse heating", "hydraulics piping", "fertigation manifold",
      "smart farm technology", "precision agriculture", "heating loop", "industrial valve",
      "commercial greenhouse", "water control system", "modern farming", "sustainable energy"
    ]
  },
  "ai_generation_model": {
    "engine": "Midjourney v6.0",
    "prompt": "industrial close-up of a belimo mixing valve on a greenhouse piping manifold, commercial hydroponics heating loop, raw engineering details, photorealistic, 8k --ar 16:9"
  }
}
```
---

## 🚀 4. 메타데이터 CSV 변환 및 정합성 검사 규칙 (Linter)
자동 CSV 빌더는 다음 규칙을 준수하여 에이전시의 거절(Rejection)을 사전 차단합니다.
1.  **키워드 수**: 반점(`,`)으로 구분된 단어가 총 5개 이상 50개 이하인지 검증.
2.  **키워드 포맷**: 대문자, 특수기호(`!`, `@`, `#`)를 제거하고 모두 소문자로 변환하여 일치성 유지.
3.  **파일명 일치**: `Filename` 열의 파일명과 물리적 JPG 파일의 이름이 대소문자까지 완벽히 일치하는지 체크.
