# 🇩🇪 Ausbildung & Germany Relocation All-in-One Notion Template: DB Architecture

본 문서는 독일 원예/농업 분야 아우스빌둥(Ausbildung) 및 기회카드(Chancenkarte)를 준비하는 지원자들을 위한 **독일 정착 올인원 노션 템플릿(Notion Template)**의 데이터베이스(DB) 관계형 구조, 속성(Properties), 페이지 레이아웃 기획서입니다.

이 설계안은 향후 크몽, Gumroad 등을 통해 판매할 디지털 어셋 제품의 제품 사양서로 사용됩니다.

---

## 🏛️ 1. 데이터베이스 구조 및 관계도 (DB Architecture)

템플릿은 유기적으로 연결된 5개의 핵심 관계형 데이터베이스로 구성됩니다.

```
                  ┌──────────────────────────────┐
                  │ 1. 지원 농장 DB (Farms DB)   │
                  └──────────────┬───────────────┘
                                 │ (1:N 관계)
                                 ▼
┌──────────────────────┐  ┌──────────────────────────────┐
│ 3. 이력서/자소서 DB  │ ◄─┤ 2. 서류 지원 이력 DB        │
│ (CV & Anschreiben)   │  │ (Applications DB)            │
└──────────────────────┘  └──────────────┬───────────────┘
                                         │ (1:N 관계)
                                         ▼
                  ┌──────────────────────────────┐
                  │ 4. 면접 Q&A DB (Interviews)   │
                  └──────────────────────────────┘
```

---

## 📋 2. 개별 데이터베이스 속성 정의 (DB Properties)

### 1) DB 1: 지원 타겟 농장 사전 (Betriebe / Farms)
*   **설명**: 아우스빌둥 학생을 선발하는 독일 현지 농장 목록 및 담당자 정보 관리.
*   **속성 구성**:
    *   `Name` (Title): 농장 법인명 (예: *Gartenbau Müller*)
    *   `Fachrichtung` (Select): 세부 원예 분야 (*Zierpflanzenbau, Gemüsebau, Obstbau, Baumschule*)
    *   `Region / Bundesland` (Select): 주/지역 (*NRW - Straelen, Baden-Württemberg 등*)
    *   `Email` (Email): 공식 지원 이메일
    *   `Website` (URL): 농장 홈페이지
    *   `Ansprechpartner` (Text): 채용 담당자 직함 및 이름 (예: *Herr Müller*)
    *   `Unterkunft` (Checkbox): 기숙사/숙소 제공 여부 (아우스빌둥 초기 정착의 핵심)
    *   `Applications` (Relation): *DB 2 (서류 지원 이력)*과 연동

### 2) DB 2: 서류 지원 이력 트래커 (Bewerbungsprozess / Applications)
*   **설명**: 각 농장별 지원 일자, 상태, 발송 서류의 타임라인 관리.
*   **속성 구성**:
    *   `Target Farm` (Relation): *DB 1 (지원 농장)*과 연동
    *   `Status` (Status): 지원 상태 (*Ready to Apply, Sent, Interview, Practical Test, Accepted, Rejected*)
    *   `Sent Date` (Date): 서류 발송 일자
    *   `Response Date` (Date): 농장 피드백 수신 일자
    *   `Used CV` (Relation): *DB 3 (이력서/자소서)* 연동
    *   `Used Anschreiben` (Relation): *DB 3 (이력서/자소서)* 연동
    *   `Praktikum (Trial)` (Select): 실습 기간 및 일정 (*Keins, 1-3 Tage, 1 Woche*)

### 3) DB 3: 이력서 및 자기소개서 아카이브 (CV & Letters)
*   **설명**: 농장 스타일별로 커스텀하여 제출한 Lebenslauf 및 Anschreiben 버전 관리.
*   **속성 구성**:
    *   `Document Name` (Title): 서류 식별 이름 (예: *Lebenslauf_V1_Zierpflanzen_Straelen*)
    *   `Type` (Select): 서류 구분 (*Lebenslauf, Anschreiben, Zeugnis, Zertifikat*)
    *   `Language` (Select): 작성 언어 (*Deutsch, Englisch, Deutsch-Englisch*)
    *   `File` (Files & Media): 최종 제출용 PDF 스캔 파일 업로드
    *   `Content` (Rich Text / Page): 노션 페이지 내부에서 드래프트 직접 작성 지원

### 4) DB 4: 실전 면접 질의응답 및 피드백 (Interviews / Q&A)
*   **설명**: 각 지원 단계에서 수집된 실제 독일 농장 면접 질문과 모범 독일어 답변 아카이빙.
*   **속성 구성**:
    *   `Question` (Title): 실제 면접 질문 (예: *Warum möchten Sie Gärtner werden?*)
    *   `Korean Translation` (Text): 한국어 번역 및 의도 분석
    *   `German Answer Draft` (Rich Text): 사령관이 다듬은 B1 수준의 모범 독일어 답안
    *   `Keywords` (Multi-select): 답변 시 필수로 언급할 키워드 (*Belastbarkeit, Pflanzenphysiologie, Teamarbeit*)
    *   `Application Linked` (Relation): *DB 2 (서류 지원 이력)* 연동

---

## 🗺️ 3. 독일 입국 초기 행정 처리 체크리스트 (Germany Relocation SOP Page)

템플릿 메인 대시보드 우측 영역에 탑재되는 **독일 도착 후 90일 행정 처리 체크리스트** 레이아웃입니다.

### 📅 Arrival Checklist (도착 후 순차 이행 필수 SOP)
1.  **[ ] 임시 거주지 등록 (Anmeldung)**
    *   *기한*: 입국 후 14일 이내
    *   *필수 서류*: 집주인 확인서(Wohnungsgeberbestätigung), 여권
2.  **[ ] 공적 건강보험(GKV) 또는 사적 건강보험(Mawista 등) 가입**
    *   *내용*: 아우스빌둥 비자 신청 및 고용 계약 개시를 위한 필수 전제 조건
3.  **[ ] 독일 은행 계좌 개설 (Girokonto)**
    *   *비용*: N26, Deutsche Bank 등 아우스빌둥 급여(Vergütung) 수령용 일반 계좌 개설
4.  **[ ] 비자 신청 / 체류허가 신청 (Aufenthaltstitel)**
    *   *관청*: 외국인청(Ausländerbehörde)
    *   *준비서류*: 아우스빌둥 계약서(Ausbildungsvertrag), 재정 증명(블락트콘토 또는 고용계약서 내 급여가 최저생계비 이상일 경우 면제), 안멜둥 확인서

---

## 🇩🇪 4. 어학 진도 공부 판 (Lern-Dashboard: Nicos Weg Tracker)

독일어 독학 리소스인 DW Nicos Weg A1~B1 학습 진도를 한눈에 트래킹하는 하위 섹션입니다.

*   **진도율 게이지**: `(완료 레슨 수 / 총 레슨 수) * 100` 수식을 사용하여 진행도바 시각화.
*   **단어장 연동**: 오늘의 어휘 추가 버튼을 통해 즉시 [Hauptwörterbuch.csv](file:///g:/My%20Drive/Antigravity/Headquater/Learning_German/Hauptwörterbuch.csv) 구조에 단어가 자동으로 누적 연동되는 위젯 배치.
