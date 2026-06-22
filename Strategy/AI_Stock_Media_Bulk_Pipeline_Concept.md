# 🖼️ AI 스톡 이미지 1,000장 대량 생성 및 메타데이터 주입 자동화 파이프라인 기획서
**작성일**: 2026-06-22  
**버전**: 1.0  
**담당**: 기술 및 프로세스 자동화 참모 (Tech & Automation Staff)  
**상태**: 기획 및 설계 완료 (비비용/기획 전용 자산)  

---

## 🏛️ I. 기획 배경 및 비즈니스 보틀넥 (Background & Bottleneck)

### 1. 배경 (The AI Stock Gold Rush)
*   사령관님은 이미 Adobe Stock, Freepik, Shutterstock 규격에 맞춘 **3,000개 이상의 정밀 스마트팜 이미지 프롬프트 및 메타데이터 CSV**를 확보하고 계십니다.
*   이 에셋들을 스톡 사이트에 수동으로 하나씩 생성하고, 업로드하고, 제목과 키워드를 복사-붙여넣기 하는 것은 **수백 시간의 단순 반복 노동**을 야기하여 파이프라인 가동의 핵심 보틀넥이 됩니다.

### 2. 해결책: 100% 무비용 자동화 파이프라인 (The Automation Flow)
*   컴퓨터 자원(로컬 GPU 또는 무료 구글 코랩)을 활용해 **[CSV 리딩 ➡️ 이미지 생성 ➡️ 4K 업스케일 ➡️ EXIF 메타데이터 주입 ➡️ SFTP 벌크 업로드]**를 원클릭으로 처리하는 무비용 자동화 공정을 설계합니다.

---

## 🏗️ II. 파이프라인 아키텍처 및 공정 설계 (Pipeline Architecture)

전체 공정은 파이썬(Python) 기반의 데이터 처리 및 네트워크 스크립트를 중심으로 순차 작동하도록 기획되었습니다.

```
[CSV 파일 로드]
       │
       ▼
[Stable Diffusion API] ➡️ 1024x576 이미지 생성
       │
       ▼
[RealESRGAN Upscaler] ➡️ 4096x2304 (4K 해상도 만족)
       │
       ▼
[ExifTool Metadata Injector] ➡️ JPG 내부에 Title, Keywords 태그 주입
       │
       ▼
[SFTP Bulk Uploader] ➡️ Adobe Stock / Freepik 기여자 서버로 일괄 전송
```

### 1. 4대 공정 세부 설계

#### ① 이미지 생성 자동화 (Generation Engine)
*   **구동 방식**: 로컬 PC에 설치된 Stable Diffusion WebUI(또는 ComfyUI)의 API 모드 활성화 (`--api` 옵션).
*   **자동화 스크립트 로직**:
    1.  [adobe_stock_bulk_1000.csv](file:///g:/My%20Drive/Antigravity/Headquater/Career/TF-Alpha_Lens/Data/adobe_stock_bulk_1000.csv) 파일을 읽어 `Filename`, `Prompt`, `Title`, `Keywords` 컬럼을 파싱합니다.
    2.  로컬 API 주소(`http://127.0.0.1:7860/sdapi/v1/txt2img`)로 POST 요청을 보냅니다.
    3.  프롬프트를 전송하여 이미지를 생성하고, 지정된 `Filename`(예: `smart_farm_stock_0001.jpg`)으로 로컬 폴더에 저장합니다.

#### ② 4K 강제 업스케일링 (Upscaling Module)
*   **스톡 사이트 규격 검증**: Adobe Stock 등은 최소 4000만 화소(4MP) 이상을 요구합니다. 기본 1024px 해상도는 업로드 시 반려됩니다.
*   **해결책**: 무료 오픈소스 AI 업스케일러인 **RealESRGAN_x4plus** 모델을 파이썬 코드로 구동하여 이미지 화질 손상 없이 해상도를 4096 x 2304로 4배 선명하게 확대합니다.

#### ③ EXIF 메타데이터 자동 주입 (Metadata Embedding)
*   **보틀넥 분석**: 1,000장 이미지의 제목과 태그를 스톡 웹사이트에서 수동 타이핑하는 것은 불가능합니다.
*   **해결책**: 파이썬 `piexif` 또는 `PyExifTool` 라이브러리를 사용해, 이미지 파일 자체의 EXIF 헤더에 CSV의 `Title`과 `Keywords`를 직접 주입합니다.
    *   `XPTitle` / `Description` 영역 ➡️ `Title` 주입.
    *   `Subject` / `Keywords` 영역 ➡️ `Keywords` 주입.
*   **효과**: 스톡 기여자 사이트는 **업로드된 이미지의 내부 메타데이터를 자동으로 파싱**합니다. 즉, 업로드만 하면 제목과 태그가 자동으로 채워져 있게 됩니다.

#### ④ SFTP 벌크 업로드 (SFTP Bulk Upload)
*   Adobe Stock 및 Freepik이 기여자에게 무료로 제공하는 **고유 SFTP 서버 주소**와 계정 자격 증명을 파이썬 `paramiko` 라이브러리로 연동합니다.
*   지정된 출력 폴더 안의 모든 완성된 4K 메타데이터 주입 완료 JPEGs를 백그라운드에서 한 번에 일괄 업로드합니다.

---

## 💰 III. 경제성 및 비용 구조 분석 (Cost & Legality)

*   **서버/가동 비용**: **$0**
    *   로컬 RTX GPU 자원 사용 시 전력량 비용 외 추가 비용 $0.
    *   무료 구글 코랩(Google Colab T4) 및 캐글(Kaggle) GPU 가동 시 완전히 $0의 인프라 비용 유지.
*   **저작권 안정성**:
    *   오픈소스 모델(Stable Diffusion XL 또는 SD 1.5 Base)의 상업적 사용 권한 허용 라이선스 준수.
    *   메타데이터 CSV 내 키워드 스팸 필터링 적용(스톡 제재 방지).

---

## 📢 IV. 린 론칭 및 파이프라인 검증 계획 (Action Plan)

1.  **샘플 5장 검증 (Dry Run)**:
    *   실제 대량 생산 전, 5장의 프롬프트를 수동으로 로컬 WebUI에서 뽑아 RealESRGAN으로 4배 확대합니다.
    *   무료 메타데이터 뷰어 툴로 EXIF 태그가 깨짐 없이 들어갔는지 교차 점검합니다.
    *   Adobe Stock SFTP로 업로드하여 대시보드상에서 제목과 키워드가 자동으로 파싱되는지 정합성을 1차 검증합니다.
2.  **안전 누적 가동**:
    *   스톡 사이트 계정의 스팸 필터링 차단을 방지하기 위해, 하루 최대 **100장**씩 자동 분할 업로드 스케줄링을 세팅합니다.
