# 🇩🇪 German Relocation & Net Salary Simulator: Strategy & Blueprint (2026-07-07)

## 🌍 Overview (개요)
본 기획서는 `inwoovation.com` 포털의 가치 확장과 구글 애드센스(AdSense) 고단가 CPC 광고 매칭을 달성하기 위한 차세대 앵커 에셋, **'독일 정착 및 아우스빌둥 실수령액 시뮬레이터(German Relocation & Net Salary Simulator)'**의 상세 설계 및 연산 엔진 명세입니다.

이 기획은 사령부의 **3대 독점적 가치 앵커**와 **구글 애드센스 단일 광고 모델** 규칙을 철저히 준수하여 설계되었습니다.

---

## 🏛️ 1. 3대 가치 앵커의 반영 (The Three Value Anchors)

1. **🛡️ 신뢰 및 검증 비용의 절감 (Zero-Risk & Curation)**:
   - 독일의 복잡한 세금 등급(Steuerklasse I-VI)과 사회보험료율(공적연금, 건강보험, 간병보험, 고용보험)을 최신 세법 기준(2026년 기준)에 맞춰 철저히 수학적으로 계산해 줌으로써 사용자의 검증 혼선을 종식합니다.
2. **🗺️ 초국소적 맥락 동기화 (Micro-Contextual Lock-in)**:
   - 독일 노르트라인-베스트팔렌(NRW) 주 및 아헨/뒤셀도르프/슈트랄렌 등 구체적인 스마트팜 집적 지역의 현지 임대료 시세(Kaltmiete/Warmmiete), 생활 물가 데이터, 그리고 Gärtner(원예) 아우스빌둥 평균 급여(1년 차: 950€, 2년 차: 1,050€, 3년 차: 1,150€)를 기본값(Preset)으로 내장하여 특정 미시적 지역 정착 계획과 타이트하게 연동합니다.
3. **🏃‍♂️ 아날로그 실제성과 실행의 절감 (Analog Execution)**:
   - 모의 계산 완료 시, 실제 독일 입국 직후 진행해야 하는 핵심 행정 절차(Anmeldung ➔ 건강보험 가입 ➔ 은행 계좌 개설 ➔ Steuer-ID 수령 ➔ 비자 신청)의 **체크리스트 및 가이드북(Relocation SOP)**을 동적 마크다운으로 즉시 생성하고 다운로드받을 수 있게 설계하여 실제 오프라인 실행의 피로를 혁신적으로 줄여줍니다.

---

## 🧮 2. 세금 및 사회보험 연산 엔진 명세 (JavaScript Math Engine)

독일의 급여 세법상 아우스빌둥(직업훈련생) 급여는 면세점(Grundfreibetrag: 2026년 기준 연 11,784€) 이하인 경우가 많아 소득세(Einkommensteuer)는 대개 0€에 수렴하지만, 약 20~21%에 달하는 **사회보험료(Sozialversicherungsbeiträge)**는 피할 수 없습니다. 이를 정밀하게 도출하는 JS 알고리즘을 구현합니다.

```javascript
/**
 * 독일 실수령 급여 및 정착 비용 시뮬레이터 연산 엔진
 */
function calculateGermanNetSalary(grossSalaryMonthly, taxClass = 1, isChurchTaxpayer = false, age = 23, hasChildren = false) {
    const months = 12;
    const grossSalaryYearly = grossSalaryMonthly * months;
    
    // 1. 소득세 면세 한도 검증 (2026년 Grundfreibetrag 기준 연 11,784 EUR)
    const personalAllowance2026 = 11784;
    let taxableIncome = Math.max(0, grossSalaryYearly - 1200); // 1,200 EUR 근로자 비용 공제 (Werbungskostenpauschale)
    
    let yearlyIncomeTax = 0;
    if (taxableIncome > personalAllowance2026) {
        // 간이 소득세 과세 공식 적용 (독일 세법 누진세율 근사치 연산)
        let excess = taxableIncome - personalAllowance2026;
        if (excess < 5000) {
            yearlyIncomeTax = excess * 0.14; // 최저 한계세율 14%
        } else {
            yearlyIncomeTax = (5000 * 0.14) + ((excess - 5000) * 0.24); // 누진 적용
        }
    }
    let monthlyIncomeTax = yearlyIncomeTax / months;
    
    // 2. 종교세 (NRW 주 기준 소득세의 9% 적용)
    let monthlyChurchTax = isChurchTaxpayer ? (monthlyIncomeTax * 0.09) : 0;
    
    // 3. 사회보험료 (Sozialversicherungsbeiträge) - 근로자 분담율 기준 (2026년율 적용)
    // 연금보험 (Rentenversicherung RV): 9.3%
    const ratePension = 0.093;
    let pensionInsurance = grossSalaryMonthly * ratePension;
    
    // 건강보험 (Krankenversicherung KV): 기본 7.3% + Zusatzbeitrag 평균 1.7%의 절반 (0.85%) = 8.15%
    const rateHealth = 0.0815;
    let healthInsurance = grossSalaryMonthly * rateHealth;
    
    // 고용보험 (Arbeitslosenversicherung AV): 1.3%
    const rateUnemployment = 0.013;
    let unemploymentInsurance = grossSalaryMonthly * rateUnemployment;
    
    // 간병보험 (Pflegeversicherung PV): 기본 2.3% + 자녀 없는 23세 이상 할증 (0.6%) = 2.9% (자녀 있을 시 2.3%)
    let rateCare = 0.023;
    if (age >= 23 && !hasChildren) {
        rateCare += 0.006;
    }
    let careInsurance = grossSalaryMonthly * rateCare;
    
    // 사회보험 총액
    let totalSocialSecurity = pensionInsurance + healthInsurance + unemploymentInsurance + careInsurance;
    
    // 4. 실수령액 (Net Salary)
    let netSalaryMonthly = grossSalaryMonthly - (monthlyIncomeTax + monthlyChurchTax + totalSocialSecurity);
    
    return {
        gross: Math.round(grossSalaryMonthly),
        net: Math.round(netSalaryMonthly),
        deductions: {
            incomeTax: Math.round(monthlyIncomeTax),
            churchTax: Math.round(monthlyChurchTax),
            pension: Math.round(pensionInsurance),
            health: Math.round(healthInsurance),
            unemployment: Math.round(unemploymentInsurance),
            care: Math.round(careInsurance),
            totalSocial: Math.round(totalSocialSecurity)
        }
    };
}
```

---

## 📈 3. 고단가 금융/이민 광고 매칭을 위한 AdSense 레이아웃 설계

이 계산기는 광고주 경쟁이 치열해 클릭 단가(CPC)가 높은 **독일계 핀테크(N26, Revolut 등), 슈페어콘토 발급 대행사(Expatrio, Fintiba), 이민 전문 의료보험(Mawista, TK)**의 유치가 가능하므로, 광고 클릭률(CTR)과 배치를 정책 위반 없이 극대화합니다.

```
+-----------------------------------------------------------+
|                  [Ad Slot A: Display Banner]              |
|        data-ad-format="horizontal" (수평형 상단 배너)       |
+-----------------------------------------------------------+
|  [입력 폼 영역: 월 급여, 연령, 자녀 유무, 종교 여부 기입]      |
|  * Gross Salary (EUR): [ 1000 ]                           |
|  * Tax Class (Steuerklasse): [ Class 1 ]                  |
|  * Target City Presets: [ Straelen (NRW) / Aachen / ... ] |
+-----------------------------------------------------------+
|                    [ BUTTON: Calculate ]                  |
+-----------------------------------------------------------+
|             Anzeige / Advertisement (오클릭 방어 문구)      |
|  +-----------------------------------------------------+  |
|  |             [Ad Slot B: Gaze-Lock Ad Unit]          |  |
|  |       data-ad-layout="in-article" (인아티클 고단가 광고)|  |
|  +-----------------------------------------------------+  |
+-----------------------------------------------------------+
|  [결과 도출 영역 (Gaze-Lock Zone): 실수령 및 정착 예산 보고]  |
|  * 실수령액 (Net Salary): 790 EUR                          |
|  * 필수 공제액 총합: 210 EUR                               |
|  * 예상 생활비(방세 420€ + 식비 180€ 포함): 600 EUR          |
|  * 월 순 잉여 자금: +190 EUR                               |
+-----------------------------------------------------------+
|  [동적 Action Box: 독일 행정Relocation SOP 체크리스트 다운로드]|
+-----------------------------------------------------------+
```

---

## 💰 4. 타겟 고단가 키워드 목록 (CPC Target Keywords)

본 시뮬레이터 페이지 내 학술 정보 및 가이드라인 텍스트에 반드시 수록하여 구글 애드센스 로봇에게 고단가 타겟으로 노출시킬 문맥 키워드 리스트입니다.

* **독어 (Germany Local CPC Targeting)**:
  * `Steuerklasse 1 netto berechnen` (Steuerklasse 1 실수령액 계산)
  * `Ausbildung Gehalt Abzüge` (아우스빌둥 급여 공제액)
  * `Sperrkonto für Visum eröffnen` (비자용 슈페어콘토 개설)
  * `Gesetzliche Krankenversicherung Azubi` (아우스빌둥 공적건강보험)
  * `WG Zimmer mieten NRW` (NRW 주 공동주거 방 렌트)
* **영어 (Expat Global CPC Targeting)**:
  * `German expat relocation cost simulator` (독일 이민 정착 비용 시뮬레이터)
  * `Germany net salary calculator` (독일 실수령액 계산기)
  * `Blocked account Germany cheapest` (가장 저렴한 독일 슈페어콘토)
  * `TK health insurance student registration` (TK 건강보험 학생/직업훈련 등록)
  * `Expat visa requirements Germany` (독일 외국인 비자 요건)

---

## 🛡️ 5. '가치 낮은 콘텐츠' 차단 우회용 학술 텍스트 가이드 초안

단순 계산기 페이지의 승인 거절을 방어하기 위해 페이지 하단에 배치할 **독일 세법 학술 주석 및 FAQ** 텍스트 구조 설계입니다.

1. **독일 사회보험의 4대 기둥 (The 4 Pillars of German Social Security)**
   - 독일의 복지 시스템은 공적연금(RV), 공적건강보험(KV), 고용보험(AV), 간병보험(PV)의 4개 사회보험으로 지탱되며, 모든 급여 노동자는 소득에 비례하여 근로자와 고용주가 50:50으로 부담합니다.
2. **아우스빌둥 노동자의 특례 조항 (Midi-Job & Privileges for Azubis)**
   - 아우스빌둥의 연간 총급여가 세법상 면세점(Grundfreibetrag) 내에 속하더라도 사회보험료 의무는 유지되지만, 급여 수준이 월 2,000€ 이하인 구간(Midi-job)에 해당하는 경우 근로자 분담 사회보험료율이 점진적으로 완화 적용되는 계산식이 정비되어 있습니다. 본 시뮬레이터는 이러한 슬라이딩 스케일(Sliding Scale) 혜택을 정밀 시뮬레이션에 반영합니다.
3. **슈페어콘토(Blocked Account)의 작동 원리**
   - 독일 연방 정부는 아우스빌둥 또는 유학 비자 신청인에게 현지 재정적 자립을 입증할 것을 요구하며, 이를 위해 일정 금액(2026년 기준 월 992€ 이상)을 동결 계좌인 슈페어콘토에 예치하도록 규정하고 있습니다. 단, 아우스빌둥의 계약상 Net 급여가 월 992€를 초과하는 경우 슈페어콘토 예치 의무 면제 또는 차액 부분만 예치하도록 면제권을 부여합니다.

---

## 📅 6. 다음 단계 실행 로드맵 (Action Items for TF-Gamma)
- **1단계**: 본 설계 명세서를 바탕으로 `Career/Passive_Income_Hub/` 산하에 `german_relocation_tax_simulator.html` 소스 파일 초안 구현 및 로컬 빌드 테스트 진행.
- **2단계**: `inwoovation.com` 사이트 메인 인덱스 파일(`index.html`)에 탭 및 메뉴 추가하여 접근성 확보.
- **3단계**: 구글 서치 콘솔(GSC)에 사이트맵(`sitemap.xml`) 재제출을 통한 구글 크롤러 인덱싱 강제 트리거 가동.
