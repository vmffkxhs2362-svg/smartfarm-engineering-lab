# 🤖 Zero-Cost Gemini Feedback & Q&A Auto-Responder
**작성일**: 2026-06-18  
**버전**: 1.0  
**유형**: B2B 리드 마그넷 및 자동화 에셋 (Google Apps Script)  
**판매 가치**: **$29.00** (1인 개발자, SaaS 서비스 운영자, 에듀테크 창업자 대상)

---

## 🏛️ I. 제품 개요 및 시장성 (Product Concept)

사용자 피드백과 Q&A를 구글 폼으로 받는 것은 매우 비용 효율적이지만, 사용자가 질문을 남겼을 때 **즉시 가치 있는 기술적 답변을 발송**하는 것은 많은 시간과 비용(CS 인력 또는 고가의 유료 고객 관리 솔루션)이 필요합니다.

본 에셋은 구글 스프레드시트와 무료 구글 앱스 스크립트(GAS)를 결합하여, 사용자가 구글 폼에 피드백이나 질문을 남기면 **Google Gemini API(무료 티어)**를 호출하여 최적의 학술적/엔지니어링 답변 이메일을 자동으로 생성 및 발송해 주는 자동화 솔루션입니다.

*   **서버 유지비 $0**: 구글 클라우드에서 동작하므로 평생 무료로 작동합니다.
*   **Gemini 1.5 Flash 무료 API**: Google AI Studio에서 무료 API 키를 연동해 작동하므로 비용이 발생하지 않습니다.
*   **B2B 리드 마그넷 연계**: 스마트팜 정밀 계산기 대시보드 하단 플로팅 버튼을 통해 수집된 사용자의 피드백에 대해 실시간 AI 기술 답변 서비스를 제공하여, 사이트 신뢰도를 극대화하고 고품질 B2B 잠재 고객의 이메일을 자동으로 수집합니다.

---

## 🏗️ II. 시스템 아키텍처 및 작동 프로세스

```
[구글 폼: 사용자 질문/이메일 입력]
                │
                ▼ (자동 연동)
[구글 스프레드시트 행(Row) 추가]
                │
                ▼ (On Form Submit 이벤트 트리거)
[구글 앱스 스크립트(GAS) 구동]
                │
                ├─► [Gemini API (gemini-2.0-flash) 호출: 프롬프트 주입 및 답변 생성]
                │
                ▼ (답변 이메일 자동 발송)
[사용자 수신함: AI 작성 이메일] & [관리자 수신함: 알림 카피본 이메일]
```

---

## 🛠️ III. 구글 앱스 스크립트(GAS) 배포 가이드

### 1단계: 구글 폼 및 스프레드시트 설정
1. 사용 중이신 Google Form의 **[응답(Responses)]** 탭으로 이동합니다.
2. **[Link to Sheets]** (또는 초록색 스프레드시트 아이콘)를 클릭하여 응답 데이터를 기록할 구글 스프레드시트를 생성하고 연결합니다.

### 2단계: 앱스 스크립트 에디터 열기
1. 생성된 구글 스프레드시트 상단 메뉴에서 **[확장 프로그램] (Extensions)** ➡️ **[Apps Script]**를 클릭합니다.
2. 기본으로 작성되어 있는 `Code.gs` 내의 코드를 모두 지우고, 아래 제공된 코드를 복사해서 붙여넣습니다.
3. 안전한 키 관리를 위해 아래 소스코드 가이드에 따라 구글 Apps Script의 **[프로젝트 설정] ➡️ [스크립트 속성]**에 `GEMINI_API_KEY`를 추가합니다. (혹은 소스코드의 `"YOUR_GEMINI_API_KEY_HERE"` 부분을 발급받은 API 키 문자열로 직접 수정해 주셔도 됩니다.)
4. 상단의 디스크 아이콘(Save project)을 클릭하여 저장합니다.

### 3단계: 트리거(Trigger) 활성화
1. Apps Script 에디터 좌측 메뉴에서 **[트리거] (시계 아이콘)**를 클릭합니다.
2. 우측 하단의 **[트리거 추가] (Add Trigger)** 버튼을 클릭합니다.
   * **실행할 함수 선택**: `onFormSubmitTrigger`
   * **실행할 배포 버전 선택**: `기본값 (Head)`
   * **이벤트 소스 선택**: `스프레드시트에서 (From spreadsheet)`
   * **이벤트 유형 선택**: `양식 제출 시 (On form submit)`
3. **[저장]**을 누르고, 구글 권한 요청 창이 뜨면 계정을 선택한 후 **[고급]** ➡️ **[Go to Untitled project (unsafe)]**를 클릭하여 권한을 허용합니다.

---

## 💻 IV. 구글 앱스 스크립트(GAS) 소스코드

```javascript
// ==========================================
// 💡 CONFIGURATION (설정)
// ==========================================
// API 키는 Google Apps Script의 [프로젝트 설정] -> [스크립트 속성]에 'GEMINI_API_KEY' 이름으로 등록하여 사용하는 것이 안전합니다.
// 만약 코드 내에 직접 입력하시려면 아래 "YOUR_GEMINI_API_KEY_HERE"를 본인의 API 키로 수정하십시오.
const GEMINI_API_KEY = PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY") || "YOUR_GEMINI_API_KEY_HERE";
const EMAIL_SUBJECT = "[Inwoovation] Re: Smart Farm Engineering Lab Feedback";

function onFormSubmitTrigger(e) {
  try {
    // 1. 구글 폼 제출 데이터 파싱
    // 스프레드시트 열 순서에 따라 인덱스 조절 (1: 타임스탬프, 2: 이메일, 3: 질문 내용)
    const rowValues = e.values;
    const userEmail = rowValues[1]; // 이메일 주소 열
    const userQuestion = rowValues[2]; // 질문/피드백 내용 열
    
    if (!userEmail || !userQuestion) return;

    // API 키 확인
    if (GEMINI_API_KEY === "YOUR_GEMINI_API_KEY_HERE" || !GEMINI_API_KEY) {
      Logger.log("Error: GEMINI_API_KEY is not set.");
      return;
    }

    // 2. Gemini API 호출을 위한 프롬프트 구성
    const systemInstruction = 
      "You are an AgTech & Greenhouse Engineering Consultant working for 'Inwoovation'. " +
      "Answer the following grower's question professionally, concisely, and accurately. " +
      "The grower used the 'Smart Farm Engineering Lab' online calculator. " +
      "Provide actionable horticultural or hydraulic context. Keep the answer structured and friendly. " +
      "Always reply in the same language as the user's question (Korean or English). " +
      "Sign the email at the bottom as 'Sincerely,\nInwoovation Team'.";

    const prompt = `User Email: ${userEmail}\nQuestion/Feedback:\n"${userQuestion}"`;

    // 3. Gemini API 요청 Payload 작성
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
    
    const payload = {
      contents: [{
        parts: [{
          text: `${systemInstruction}\n\n${prompt}`
        }]
      }]
    };

    const options = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };

    // 4. API 전송 및 응답 수신
    const response = UrlFetchApp.fetch(url, options);
    const json = JSON.parse(response.getContentText());
    
    let replyText = "";
    if (json.candidates && json.candidates[0].content.parts[0].text) {
      replyText = json.candidates[0].content.parts[0].text;
    } else {
      replyText = "Thank you for your feedback. We have received your query and will get back to you shortly.";
      Logger.log("Gemini API Error: " + response.getContentText());
    }

    // 5. Gmail 임시보관함(Draft)에 답변 메일 자동 등록
    const emailBody = 
      `안녕하세요,\n\nInwoovation 스마트팜 엔지니어링 랩을 이용해 주셔서 감사합니다.\n` +
      `보내주신 문의사항에 대해 AI 참모가 초안 작성한 답변을 아래와 같이 첨부합니다.\n\n` +
      `--------------------------------------------------\n` +
      `${replyText}\n` +
      `--------------------------------------------------\n\n` +
      `추가 문의 사항이 있으시다면 본 메일로 회신해 주시기 바랍니다.\n\n` +
      `감사합니다.\nInwoovation 드림`;

    GmailApp.createDraft(userEmail, EMAIL_SUBJECT, emailBody);
    Logger.log("Successfully created draft for " + userEmail);

  } catch (err) {
    Logger.log("Trigger Error: " + err.toString());
  }
}

// ==========================================
// 🧪 LOCAL TEST FUNCTION (에디터 내 수동 실행용 테스트 함수)
// ==========================================
// Apps Script 에디터 상단에서 'testTrigger'를 선택한 후 [실행]을 누르면,
// 실제로 폼을 제출하지 않고도 코드가 잘 작동하는지 테스트할 수 있습니다.
function testTrigger() {
  const mockEvent = {
    values: [
      new Date().toString(), // 타임스탬프
      "contact@inwoovation.com", // 테스트 완료 후 답변을 확인할 이메일 주소
      "What is Leaf Vapor Pressure Deficit (VPD) and why does it matter?" // 테스트 질문
    ]
  };
  onFormSubmitTrigger(mockEvent);
}
```
