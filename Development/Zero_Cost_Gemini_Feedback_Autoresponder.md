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
                ├─► [Gemini API (gemini-1.5-flash) 호출: 프롬프트 주입 및 답변 생성]
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
3. 상단의 디스크 아이콘(Save project)을 클릭하여 저장합니다.

### 3단계: Gemini API 키 발급 및 설정
1. [Google AI Studio](https://aistudio.google.com/)에 접속하여 구글 계정으로 로그인합니다.
2. **[Get API key]** 버튼을 클릭하여 무료 API 키를 생성하고 복사합니다.
3. Apps Script 에디터 좌측 메뉴의 **[프로젝트 설정] (톱니바퀴 아이콘)**을 클릭합니다.
4. 화면 가장 하단의 **[스크립트 속성] (Script Properties)** 섹션으로 이동하여 **[스크립트 속성 추가]** 버튼을 누릅니다.
   * **속성(Property)**: `GEMINI_API_KEY`
   * **값(Value)**: 복사한 Gemini API 키
5. **[스크립트 속성 저장]**을 클릭합니다.

### 4단계: 트리거(Trigger) 활성화
1. Apps Script 에디터 좌측 메뉴에서 **[트리거] (시계 아이콘)**를 클릭합니다.
2. 우측 하단의 **[트리거 추가] (Add Trigger)** 버튼을 클릭합니다.
   * **실행할 함수 선택**: `onFormSubmit`
   * **실행할 배포 버전 선택**: `기본값 (Head)`
   * **이벤트 소스 선택**: `스프레드시트에서 (From spreadsheet)`
   * **이벤트 유형 선택**: `양식 제출 시 (On form submit)`
3. **[저장]**을 누르고, 구글 권한 요청 창이 뜨면 계정을 선택한 후 **[고급]** ➡️ **[Go to Untitled project (unsafe)]**를 클릭하여 권한을 허용합니다.

---

## 💻 IV. 구글 앱스 스크립트(GAS) 소스코드

```javascript
/**
 * Inwoovation Smart Farm Lab - Google Form AI Auto-Responder
 * 
 * 구글 스프레드시트에 행이 추가되면 동작하며, 구글 Gemini API를 활용하여
 * 전문가 수준의 답변 이메일을 작성하여 자동 발송합니다.
 */

const CONFIG = {
  ADMIN_EMAIL: "contact@inwoovation.com", // 수집 알림을 받을 관리자 이메일
  GEMINI_MODEL: "gemini-1.5-flash",       // 빠르고 비용이 들지 않는 무료 모델
  API_URL: "https://generativelanguage.googleapis.com/v1beta/models/"
};

function onFormSubmit(e) {
  Logger.log("Form submission received.");
  
  if (!e || !e.values) {
    Logger.log("이벤트 값이 없습니다. 반드시 '양식 제출 시' 트리거를 등록해야 정상 작동합니다.");
    return;
  }
  
  // 스프레드시트 열 순서에 맞춰 인덱싱
  // index 0: 타임스탬프, index 1: 이메일 주소, index 2: 질문/피드백 내용
  const timestamp = e.values[0];
  const userEmail = e.values[1] ? e.values[1].trim() : "";
  const userQuestion = e.values[2] ? e.values[2].trim() : "";
  
  if (!userEmail || !userQuestion) {
    Logger.log("이메일 또는 질문 내용이 비어있어 처리를 중단합니다.");
    return;
  }
  
  Logger.log("답변 메일: " + userEmail);
  
  // Script Properties에서 API 키 로드
  const apiKey = PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY");
  if (!apiKey) {
    Logger.log("에러: 스크립트 속성에 GEMINI_API_KEY가 등록되지 않았습니다.");
    MailApp.sendEmail(
      CONFIG.ADMIN_EMAIL,
      "⚠️ 경고: Apps Script 내 Gemini API 키가 누락되었습니다.",
      `새 질문이 접수되었으나 API 키가 설정되지 않아 자동 답변이 발송되지 못했습니다.\n\n질문 이메일: ${userEmail}\n질문 내용: ${userQuestion}`
    );
    return;
  }
  
  // AI 전문가 프롬프트 정의
  const systemInstruction = 
    "You are the expert agronomist and software engineer support team at Inwoovation Smart Farm Engineering Lab.\n" +
    "A user has submitted feedback, a bug report, or an agronomic question via our calculator dashboard.\n" +
    "Your goal is to provide a highly helpful, scientific, polite, and detailed response in the same language as the user's question (Korean or English).\n\n" +
    "Strict guidelines:\n" +
    "1. If it is a bug report or formula correction, thank them profusely and state that our development team will review it immediately.\n" +
    "2. If it is an agronomic question (e.g., VPD, Kv valves, fertigation, thermal heat loss), provide a detailed scientific and engineering explanation.\n" +
    "3. Keep the tone premium, educational, and warm.\n" +
    "4. End with standard closing: 'Best regards,\nInwoovation Smart Farm Lab Support Team'";

  const payload = {
    contents: [
      {
        parts: [
          {
            text: `System context:\n${systemInstruction}\n\nUser Question:\n"${userQuestion}"\n\nPlease write the email response body (do not include Subject line in the text, only the email body):`
          }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 2048
    }
  };
  
  const url = `${CONFIG.API_URL}${CONFIG.GEMINI_MODEL}:generateContent?key=${apiKey}`;
  const options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };
  
  try {
    const response = UrlFetchApp.fetch(url, options);
    const json = JSON.parse(response.getContentText());
    
    if (json.candidates && json.candidates[0] && json.candidates[0].content && json.candidates[0].content.parts[0]) {
      const emailBody = json.candidates[0].content.parts[0].text;
      
      // 1. 사용자에게 AI 답변 이메일 발송
      const emailSubject = `[Inwoovation Smart Farm Lab] Response to Your Feedback / Q&A`;
      MailApp.sendEmail({
        to: userEmail,
        replyTo: CONFIG.ADMIN_EMAIL,
        subject: emailSubject,
        body: emailBody
      });
      Logger.log("사용자에게 메일 발송 완료.");
      
      // 2. 관리자(사령관님)에게 알림 메일 발송
      const adminBody = 
        `사령관님,\n\n` +
        `계산기 피드백/질문 제출건에 대해 Gemini가 자동 답변 메일을 발송했습니다.\n\n` +
        `----------------------------------------\n` +
        `[접수 정보]\n` +
        `접수 시간: ${timestamp}\n` +
        `사용자 메일: ${userEmail}\n` +
        `질문 내용:\n${userQuestion}\n` +
        `----------------------------------------\n` +
        `[발송된 AI 답변 내용]\n` +
        `${emailBody}\n` +
        `----------------------------------------\n\n` +
        `추가 조치가 필요하면 ${userEmail} 주소로 답장을 발송해 주세요.`;
        
      MailApp.sendEmail({
        to: CONFIG.ADMIN_EMAIL,
        subject: `[Form Sync] AI 자동답변 발송 알림 (${userEmail})`,
        body: adminBody
      });
      Logger.log("관리자에게 알림 메일 발송 완료.");
      
    } else {
      Logger.log("API 응답 구조 오류: " + JSON.stringify(json));
      throw new Error("API 응답 값이 비정상적입니다.");
    }
    
  } catch (error) {
    Logger.log("Gemini API 호출 또는 이메일 전송 중 에러 발생: " + error.toString());
    MailApp.sendEmail(
      CONFIG.ADMIN_EMAIL,
      "❌ 에러: Gemini 자동 피드백 응답기 작동 실패",
      `다음 질문 처리에 실패했습니다:\n\n에러 내용: ${error.toString()}\n\n질문 이메일: ${userEmail}\n질문 내용: ${userQuestion}`
    );
  }
}
```
