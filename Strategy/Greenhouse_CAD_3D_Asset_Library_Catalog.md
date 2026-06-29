# 📐 Greenhouse CAD Blocks & 3D Assets: Stock Catalog Design Blueprint

본 문서는 온실 구조 설계 회사, 스마트팜 시공 엔지니어, 그리고 농학/기계공학 전공생들이 설계 및 3D 시각화 시 사용하는 온실 표준 기자재의 **CAD 도면 블록(2D) 및 3D 그래픽 모델링 에셋** 라이브러리 카탈로그 기획서입니다.

이 설계안은 CGTrader, TurboSquid, CADBlocks 등 글로벌 3D/CAD 에셋 스톡 플랫폼을 통해 판매할 고마진 디지털 상품의 품목 규격서로 사용됩니다.

---

## 🏛️ 1. 스톡 등록을 위한 표준 파일 포맷 규격

전 세계 바이어들이 각자의 소프트웨어(AutoCAD, SolidWorks, Blender, Rhino 등)에서 즉시 가져와 쓸 수 있도록 다음 4대 표준 포맷으로 패키징하여 제공합니다.

1.  **2D CAD Blocks**: `.dwg`, `.dxf` (AutoCAD 2010 호환 버전 포맷)
2.  **Manufacturing 3D CAD**: `.step`, `.iges` (SolidWorks, Inventor 등 엔지니어링 툴 호환)
3.  **Visualization 3D Assets**: `.fbx`, `.obj` (Blender, Unity, Unreal Engine 등 그래픽 툴 호환, 로우폴리곤 최적화)
4.  **텍스처 및 매핑**: `.png` (PBR 텍스처 맵 - Albedo, Metallic, Roughness, Normal)

---

## 📋 2. 에셋 라이브러리 핵심 카탈로그 리스트 (10대 핵심 모델)

### Category A: 관수 및 양액 계통 (Irrigation & Fertigation)

#### 1) 3방향 비례 혼합 밸브 조립체 (3-way Mixing Valve Assembly)
*   **세부 구성**: 밸브 본체(Kv 25 규격), 비례 제어 액추에이터(Actuator), 결선 정션 박스.
*   **포맷**: STEP (정밀 솔리드 모델), DWG (2D 정면/측면/평면도 블록)

#### 2) 양액 공급용 벤투리 흡입 보드 (Venturi Injector Manifold Board)
*   **세부 구성**: 벤투리 인젝터 관, 유량 조절 밸브, 체크 밸브, 유량계(Rotameter) 조립 레이아웃.
*   **포맷**: FBX (PBR 텍스처 입혀진 3D 모델), STEP

#### 3) 고압 포그 노즐 분무기 (High-Pressure Fogging Nozzle)
*   **세부 구성**: 이중 필터 헤드, 1/4인치 나사 피팅부, 미세 분무 오리피스 단면.
*   **포맷**: STEP (클로즈업 렌더링용 초정밀 모델)

---

### Category B: 구조 및 프레임 계통 (Structural Frames)

#### 4) 베드 및 스탠드 지지대 (Grow Bed Support Racks)
*   **세부 구성**: 아연도금 파이프 프레임, 높이 및 수평 조절 나사산 볼트, 롤링 벤치용 슬라이딩 롤러 구조.
*   **포맷**: DWG (시공 단면 설계용), FBX

#### 5) 유리온실 알루미늄 거터 블록 (Venlo Greenhouse Aluminum Gutter)
*   **세부 구성**: 빗물 배출 수로 단면, 유리 피복 고정용 패킹 홈, 결로수(Condensate) 회수 트랙 디테일.
*   **포맷**: DWG (2D 캐드 상세도 블록), STEP

---

### Category C: 광원 및 복합환경제어 계통 (Lighting & Automation)

#### 6) 스마트 온실 백색/보광 LED 조명 모듈 (Greenhouse LED Fixture)
*   **세부 구성**: 알루미늄 방열판(Heatsink), 고출력 LED 칩 배열, 전원공급장치(SMPS) 브래킷.
*   **포맷**: FBX (블렌더 및 유니티 배치용 라이팅 포인트 매핑 포함)

#### 7) 강제 흡배기식 백엽상 센서 하우징 (Aspirated Radiation Shield)
*   **세부 구성**: 덤불형 일사 차단 슬랫(Slat), 내부 소형 환기팬, 온도/습도 센서 프로브 배치 구멍.
*   **포맷**: STEP, FBX

---

## 🎨 3. 상품 패키징 및 Gumroad/Etsy 판매 가격 전략

*   **2D CAD Blocks 메가 팩 (100+ 아이템)**: **$19.99** (AutoCAD 도면 복사 붙여넣기용 단일 DWG 라이브러리 파일)
*   **3D STEP 엔지니어링 조립 에셋 개별 판매**: 각 **$9.99** (시공 설계 참조용)
*   **Blender 스마트팜 시각화 팩 (FBX + PBR 텍스처)**: **$29.99** (스마트팜 홍보 동영상 및 연구실 시뮬레이션 렌더링용)
