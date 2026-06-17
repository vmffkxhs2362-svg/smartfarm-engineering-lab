# 📊 Zero-Cost KAMIS API Google Apps Script (GAS) Parser
**작성일**: 2026-06-11  
**버전**: 1.0  
**유형**: B2B 리드 마그넷 및 디지털 상품 에셋 (Google Sheets Macro)  
**판매 가치**: **$19.00** (농산물 바이어, 유통 자영업자, 애그테크 연구원 대상)

---

## 🏛️ I. 제품 개요 및 시장성 (Product Concept)

국내 농산물 도소매 시세를 제공하는 **농수산물유통정보(KAMIS) API**는 유용하지만, 프로그래밍 지식이 부족한 일반 식자재 바이어, 마트 운영자, 농산물 유통 개인 사업자들은 이를 활용해 일별 시세를 엑셀로 자동 정리하는 데 큰 기술적 장벽을 느낍니다.

본 에셋은 구글 스프레드시트 자체 엔진에서 매일 아침 자동으로 KAMIS 가격 데이터를 호출해 시트에 누적해 주는 **구글 앱스 스크립트(GAS) 소스코드**입니다.
*   **서버 유지비 $0**: 구글 서버(Google Apps Script)에서 구동되므로 평생 호스팅 비용이 들지 않습니다.
*   **B2B 타겟 마케팅 (Lead Magnet)**: 사령관님이 섭스택(Substack) 농업 뉴스레터를 론칭할 때 "무료 이메일 구독 시, 매일 농산물 시세가 자동 업데이트되는 구글 시트 매크로 템플릿 증정"이라는 초강력 리드 마그넷으로 활용하여 구독자 기반을 폭발적으로 늘릴 수 있습니다.

---

## 🏗️ II. 구글 앱스 스크립트(GAS) 작동 아키텍처

```
[Google Sheets 트리거 (매일 아침 09:05)] 
                  │
                  ▼
[GAS 엔진: KAMIS API GET 요청 발송]
                  │
                  ▼
[JSON 응답 수신 및 일자별 데이터 파싱]
                  │
                  ▼
[구글 스프레드시트 하단에 새로운 행(Row)으로 자동 추가 및 차트 갱신]
```

---

## 💻 III. [NEW] 실전 배포용 구글 앱스 스크립트 소스코드

이 코드는 구글 스프레드시트 상단 메뉴 ➡️ **[확장 프로그램]** ➡️ **[Apps Script]**를 클릭한 후 코드를 복사-붙여넣기하여 바로 실행할 수 있는 실전 완성형 코드입니다.

```javascript
/**
 * KAMIS (농수산물유통정보) 실시간 도매 가격 파서 및 자동 적재 스크립트
 * 작성자: 기술 참모 (Tech Staff)
 * 설정 방법:
 * 1. KAMIS 공공데이터 포털에서 발급받은 '인증키(cert_key)'와 '요청자ID(cert_id)'를 아래 설정 변수에 입력합니다.
 * 2. 구글 스프레드시트 하단 탭 이름을 "KAMIS_Data"로 변경합니다.
 * 3. Apps Script 트리거(시계 아이콘)에서 일일 실행(오전 9시~10시 사이)으로 설정합니다.
 */

const CONFIG = {
  CERT_KEY: "YOUR_KAMIS_CERT_KEY", // KAMIS 인증키 입력
  CERT_ID: "YOUR_KAMIS_CERT_ID",   // KAMIS 요청자 ID 입력
  CROP_CODE: "211",                // 품목 코드 (예: 211은 배추)
  CROP_CLASS_CODE: "200",          // 부류 코드 (예: 200은 채소류)
  SHEET_NAME: "KAMIS_Data"
};

function fetchAndStoreKamisPrice() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    // 시트가 없으면 헤더행과 함께 신규 생성
    const newSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(CONFIG.SHEET_NAME);
    newSheet.appendRow(["수집일자", "품목코드", "품목명", "구분(도매/소매)", "지역", "당일가격", "평년가격"]);
    return;
  }

  // 오늘 날짜 구하기 (YYYY-MM-DD 형식)
  const today = new Date();
  const formattedDate = Utilities.formatDate(today, "Asia/Seoul", "yyyy-MM-dd");

  // KAMIS 일별 동향 API URL 조립
  // 상용 서비스에서는 파라미터 규격에 맞춰 전송
  const url = `https://www.kamis.or.kr/service/price/xml.do?action=dailyPriceByCategoryList` +
              `&p_product_cls_code=02` + // 02: 도매 시세 (01: 소매)
              `&p_regday=${formattedDate}` +
              `&p_convert_kg_yn=N` +
              `&p_item_category_code=${CONFIG.CROP_CLASS_CODE}` +
              `&cert_key=${CONFIG.CERT_KEY}` +
              `&cert_id=${CONFIG.CERT_ID}` +
              `&return_type=json`;

  try {
    const response = UrlFetchApp.fetch(url);
    const jsonText = response.getContentText();
    const data = JSON.parse(jsonText);

    // API 응답 데이터 검증 및 파싱
    if (data && data.data && data.data.item) {
      const items = data.data.item;
      
      // 우리가 설정한 품목코드(예: 배추 '211')만 필터링하여 시트에 추가
      items.forEach(item => {
        if (item.item_code === CONFIG.CROP_CODE) {
          const rowData = [
            formattedDate,
            item.item_code,
            item.item_name,
            "도매(Wholesale)",
            item.countyname || "전국평균",
            parseInt(item.dpr1.replace(/,/g, "")), // 당일 가격 (쉼표 제거 후 정수 변환)
            parseInt(item.dpr3.replace(/,/g, ""))  // 평년 가격
          ];
          
          sheet.appendRow(rowData);
          Logger.log(`[성공] ${item.item_name} 가격 적재 완료: ${item.dpr1}원`);
        }
      });
    } else {
      Logger.log(`[알림] 해당 날짜(${formattedDate})의 데이터가 아직 공시되지 않았거나 API 오류입니다.`);
    }
  } catch (error) {
    Logger.log(`[에러 발생] KAMIS API 호출 중 요류: ${error.toString()}`);
  }
}

/**
 * 테스트 함수: API 응답 상태 및 원시 데이터 로그 확인용
 */
function testKamisConnection() {
  Logger.log("KAMIS API 연결 테스트 시작...");
  fetchAndStoreKamisPrice();
}
```

---

## 📈 IV. B2B 런칭 및 수익화 결합 시나리오

사령관님께서 본 코드를 활용해 B2B 타겟으로 수익을 창출하는 구체적 로드맵입니다.

### 1. 무료 배포를 통한 이메일 리스트 빌딩 (Substack 연계)
1.  구글 스프레드시트에 위 코드를 내장하고, 실시간으로 배추, 토마토, 파프리카 가격 추이가 꺾은선 그래프로 그려지는 대시보드 시트 템플릿을 멋지게 제작합니다.
2.  해당 스프레드시트의 공유 권한을 "뷰어(보기 가능)"로 설정합니다.
3.  사령관님의 **글로벌 농업 Substack 뉴스레터**에 가입 폼을 만들고 아래와 같이 광고합니다:
    > *"국내 농산물 도소매 가격을 매일 아침 구글 시트로 자동 수집하고 싶으신가요? 이메일을 입력하시면 구글 스프레드시트 자동 파서 템플릿 사본 링크를 즉시 보내드립니다."*
4.  뉴스레터 구독자(즉, B2B 농산물 구매 담당자 이메일 리스트)가 기하급수적으로 늘어납니다.

### 2. 고마진 Gumroad 디지털 상품으로 전환 ($19.00)
1.  이 코드가 내장된 대시보드 구글 시트를 복제할 수 있는 링크를 Gumroad에 상품으로 등록합니다.
2.  사용법 동영상(3분)과 API 인증키 발급법 가이드 PDF를 하나의 패키지로 묶어 **$19.00**에 판매합니다.
3.  직접 파이썬 코딩을 하거나 유료 데이터 벤더(Tridge 등)의 비싼 API를 사용하기 부담스러운 중소 자영업자들이 기꺼이 $19.00 단발성 결제로 구글 스프레드시트 자동화 툴을 구매하여 사용하게 되며, 이는 **100% 마진의 패시브 인컴**이 됩니다.
