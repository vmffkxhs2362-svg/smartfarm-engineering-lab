/**
 * 📊 Inwoovation Smart Farm Lab - Diagnosis Log Collector
 * 
 * 이 스크립트는 구글 스프레드시트의 [확장 프로그램] -> [Apps Script]에 배포하여 사용합니다.
 * 웹 앱(Web App)으로 배포한 후, 생성된 URL을 웹앱(common.js)의 window.DIAGNOSIS_COLLECTOR_URL에 등록하십시오.
 * 
 * 설정 방법:
 * 1. 구글 스프레드시트 생성
 * 2. 상단 메뉴 [확장 프로그램] -> [Apps Script] 클릭
 * 3. 본 코드를 Code.gs 파일에 붙여넣기 후 저장
 * 4. 우측 상단 [배포] -> [새 배포] 클릭
 * 5. 유형 선택: [웹 앱]
 *    - 설명: Diagnosis Collector
 *    - 웹 앱을 실행할 사용자: [나 (your-email@gmail.com)]
 *    - 액세스 권한이 있는 사용자: [모든 사람 (Anyone)] (중요!)
 * 6. [배포] 클릭 후 승인 절차 완료하고 웹 앱 URL 복사
 */

function doPost(e) {
  try {
    // 1. 요청 데이터 파싱
    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse({ status: "error", message: "No post data received" });
    }
    
    const payload = JSON.parse(e.postData.contents);
    const timestamp = payload.timestamp || new Date().toISOString();
    const lang = payload.lang || "en";
    const crop = payload.crop || "";
    const part = payload.part || "";
    const symptomId = payload.symptomId || "";
    const symptomText = payload.symptomText || "";
    const disease = payload.disease || "";
    const remedy = payload.remedy || "";
    const chemical = payload.chemical || "N/A";
    const actionType = payload.actionType || "Scout";

    // 2. 스프레드시트 및 시트 로드
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("Diagnosis Logs");
    
    // 시트가 없으면 신규 생성 및 헤더 설정
    if (!sheet) {
      sheet = ss.insertSheet("Diagnosis Logs");
      const headers = [
        "Timestamp", 
        "Language", 
        "Crop", 
        "Affected Part", 
        "Symptom ID", 
        "Symptom Details", 
        "Diagnosed Disease", 
        "Remedy", 
        "Suggested Chemical", 
        "Action Type"
      ];
      sheet.appendRow(headers);
      
      // 헤더 스타일 지정 (고급화)
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#e6f4ea");
      headerRange.setFontColor("#137333");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    // 3. 로그 레코드 추가
    sheet.appendRow([
      timestamp,
      lang,
      crop,
      part,
      symptomId,
      symptomText,
      disease,
      remedy,
      chemical,
      actionType
    ]);

    // 4. 성공 응답 반환
    return createJsonResponse({ status: "success", timestamp: timestamp });

  } catch (err) {
    Logger.log("Collector Error: " + err.toString());
    return createJsonResponse({ status: "error", message: err.toString() });
  }
}

// GET 요청이 올 경우 간단한 안내 웹페이지 노출 (디버깅용)
function doGet(e) {
  return HtmlService.createHtmlOutput(
    "<h1>📊 Inwoovation Smart Farm Lab - Data Collector API is Online</h1>" +
    "<p>This endpoint receives POST requests containing diagnosis logs.</p>" +
    "<p>Status: <strong>Running (Active)</strong></p>"
  );
}

// JSON 응답 및 CORS 처리 유틸리티
function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
