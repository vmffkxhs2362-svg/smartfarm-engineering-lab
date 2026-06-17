// Pesticide Database
// Toxicity levels: 'high' (Red), 'medium' (Yellow), 'low' (Green)
const pesticideDB = [
    {
        nameKo: "이미다클로프리드",
        nameEn: "Imidacloprid",
        typeKo: "살충제 (네오니코티노이드 계열)",
        typeEn: "Insecticide (Neonicotinoid)",
        toxicity: "high",
        reiDays: 14,
        descKo: "꿀벌 및 뒤영벌에 매우 치명적입니다. 약효가 오랫동안 잔류하므로 살포 전 봉군을 밀봉하여 외부로 격리하고, 최소 14일 경과 후 재방사하십시오.",
        descEn: "Highly systemic and toxic to bees. Long residual activity. Move hives out before spraying and wait at least 14 days before re-entry."
    },
    {
        nameKo: "티아메톡삼",
        nameEn: "Thiamethoxam",
        typeKo: "살충제 (네오니코티노이드 계열)",
        typeEn: "Insecticide (Neonicotinoid)",
        toxicity: "high",
        reiDays: 14,
        descKo: "침투이행성이 강해 꽃가루와 꿀에 장기간 잔류합니다. 살포 후 최소 14일간 벌을 방사하지 마십시오.",
        descEn: "Highly toxic with strong systemic activity. Remains in nectar and pollen. Do not release bees for at least 14 days after application."
    },
    {
        nameKo: "클로티아니딘",
        nameEn: "Clothianidin",
        typeKo: "살충제 (네오니코티노이드 계열)",
        typeEn: "Insecticide (Neonicotinoid)",
        toxicity: "high",
        reiDays: 21,
        descKo: "벌독성이 극히 높으며 잔류 기간이 매우 깁니다. 살포 후 최소 21일간 안전 거리를 유지하거나 방사를 전면 금지하십시오.",
        descEn: "Extremely toxic to pollinators with long-lasting residual toxicity. Wait at least 21 days before re-entering bee colonies."
    },
    {
        nameKo: "아세타미프리드",
        nameEn: "Acetamiprid",
        typeKo: "살충제 (네오니코티노이드 계열)",
        typeEn: "Insecticide (Neonicotinoid)",
        toxicity: "medium",
        reiDays: 3,
        descKo: "네오니코티노이드 계열 중 비교적 벌독성이 낮으나, 약액이 마르기 전에는 위해성이 있습니다. 살포 후 최소 3일간 밀봉 보관하십시오.",
        descEn: "Lower toxicity compared to other neonicotinoids. Highly toxic when wet. Keep hives closed/removed for at least 3 days."
    },
    {
        nameKo: "스피노사드",
        nameEn: "Spinosad",
        typeKo: "살충제 (천연 추출물 계열)",
        typeEn: "Insecticide (Naturalyte)",
        toxicity: "high",
        reiDays: 3,
        descKo: "살포 액체가 젖어있을 때는 독성이 매우 높으나, 완전히 마른 후에는 안전합니다. 야간에 살포하고 최소 3일간 벌통을 닫아두십시오.",
        descEn: "Highly toxic when wet, relatively safe once dried. Apply at dusk when bees are not foraging, keep hives closed for 3 days."
    },
    {
        nameKo: "클로란트라닐리프롤",
        nameEn: "Chlorantraniliprole",
        typeKo: "살충제 (디아마이드 계열 / 알타코아 등)",
        typeEn: "Insecticide (Diamide)",
        toxicity: "low",
        reiDays: 1,
        descKo: "화분매개곤충에 매우 안전한 약제입니다. 약액이 완전히 건조된 후(살포 후 1일) 방사하면 피해가 거의 없습니다.",
        descEn: "Highly selective and safe for bees. Once the spray residues have fully dried (1 day), hives can be safely re-opened."
    },
    {
        nameKo: "플루벤디아마이드",
        nameEn: "Flubendiamide",
        typeKo: "살충제 (디아마이드 계열)",
        typeEn: "Insecticide (Diamide)",
        toxicity: "low",
        reiDays: 1,
        descKo: "나방 전문 약제로 벌에 대한 독성이 낮습니다. 살포 후 약액이 마르는 1일 동안만 벌통을 격리하십시오.",
        descEn: "Targeted lepidopteran control with low toxicity to non-target pollinators. Keep closed for 1 day until fully dry."
    },
    {
        nameKo: "비펜트린",
        nameEn: "Bifenthrin",
        typeKo: "살충제 (합성 피레스로이드 계열)",
        typeEn: "Insecticide (Pyrethroid)",
        toxicity: "high",
        reiDays: 7,
        descKo: "접촉독성이 매우 강해 벌이 접촉 시 즉사할 수 있습니다. 살포 후 약제 잔류기인 7일간 안전 격리가 필수적입니다.",
        descEn: "Broad-spectrum contact insecticide. Highly toxic to bees on contact. Do not release bees for at least 7 days post-treatment."
    },
    {
        nameKo: "델타메트린",
        nameEn: "Deltamethrin",
        typeKo: "살충제 (합성 피레스로이드 계열)",
        typeEn: "Insecticide (Pyrethroid)",
        toxicity: "high",
        reiDays: 5,
        descKo: "접촉독성 및 기피 효과가 있습니다. 약제 살포 후 5일간 벌통을 밀봉하고 신선한 곳에 격리하십시오.",
        descEn: "High contact toxicity and repellent effects. Keep hives securely closed and sheltered for 5 days post-spray."
    },
    {
        nameKo: "설폭사플로르",
        nameEn: "Sulfoxaflor",
        typeKo: "살충제 (설폭시민 계열)",
        typeEn: "Insecticide (Sulfoximine)",
        toxicity: "high",
        reiDays: 7,
        descKo: "진딧물 약제로 독성이 매우 높습니다. 약액이 건조된 후에도 잔류 독성이 있으므로 최소 7일간 방사를 제한합니다.",
        descEn: "Systemic aphicide with high toxicity. Residual risks persist even after drying. Restrict bee release for at least 7 days."
    },
    {
        nameKo: "보스칼리드",
        nameEn: "Boscalid",
        typeKo: "살균제 (SDHI 계열)",
        typeEn: "Fungicide (SDHI)",
        toxicity: "low",
        reiDays: 0,
        descKo: "벌에 직접적인 영향이 없는 살균제입니다. 살포 즉시 건조가 완료되면 바로 벌을 방사할 수 있습니다.",
        descEn: "Bee-safe fungicide. Hives can be opened immediately once the spray liquid dries completely."
    },
    {
        nameKo: "테부코나졸",
        nameEn: "Tebuconazole",
        typeKo: "살균제 (트리아졸 계열)",
        typeEn: "Fungicide (Triazole)",
        toxicity: "medium",
        reiDays: 1,
        descKo: "살균제이지만 뒤영벌의 행동 둔화나 유충 성장에 간접적인 영향이 보고되었습니다. 살포 후 1일 동안 격리를 권장합니다.",
        descEn: "Fungicide with suspected sublethal effects on larvae behavior. Best to keep hives closed for 1 day."
    },
    {
        nameKo: "아족시스트로빈",
        nameEn: "Azoxystrobin",
        typeKo: "살균제 (스트로빌루린 계열)",
        typeEn: "Fungicide (Strobilurin)",
        toxicity: "low",
        reiDays: 0,
        descKo: "화분매개에 영향이 극히 적은 광범위 살균제입니다. 약액이 건조되는 몇 시간만 격리 후 개방하십시오.",
        descEn: "Broad-spectrum fungicide with minimal toxicity. Re-open hives immediately after the spray film dries."
    },
    {
        nameKo: "디페노코나졸",
        nameEn: "Difenoconazole",
        typeKo: "살균제 (트리아졸 계열)",
        typeEn: "Fungicide (Triazole)",
        toxicity: "low",
        reiDays: 1,
        descKo: "벌독성은 낮으나 약액 건조 전 방화 시 묻어날 수 있으므로 안전을 위해 살포 후 1일 간 벌통을 차단하십시오.",
        descEn: "Low toxicity, but spray wetness can cause physical issues. Shelter hives for 1 day post-application."
    }
];

// Symptoms-Based Diagnosis Database
const diagnosisDB = {
    tomato: {
        leaf: [
            {
                id: "tom_l1",
                symptomKo: "잎 뒷면에 밀가루 같은 흰 가루가 생김",
                symptomEn: "White powdery spots on the underside of leaves",
                diseaseKo: "흰가루병 (Powdery Mildew)",
                diseaseEn: "Powdery Mildew",
                remedyKo: "온실 내부 다습을 방지하고 환기율을 높이십시오. 안전 살균제인 '보스칼리드' 또는 '아족시스트로빈'을 살포하여 치료합니다.",
                remedyEn: "Enhance ventilation and avoid high relative humidity. Spray bee-safe fungicides such as Boscalid or Azoxystrobin.",
                chemicalLink: "보스callid", // match to db key name
                suggestedChemical: "보스칼리드"
            },
            {
                id: "tom_l2",
                symptomKo: "잎이 노랗게 변하며 가장자리가 위로 말리고 생장이 멈춤",
                symptomEn: "Yellowing leaves curling upward with stunted growth",
                diseaseKo: "토마토황화잎말림바이러스 (TYLCV)",
                diseaseEn: "Tomato Yellow Leaf Curl Virus (TYLCV)",
                remedyKo: "매개충인 '담배가루이'를 철저히 방제해야 합니다. 침투성 살충제인 '아세타미프리드'를 살포하고 황색 끈끈이 트랩을 전개하십시오.",
                remedyEn: "Suppress the vector whiteflies. Spray Acetamiprid and deploy yellow sticky traps.",
                suggestedChemical: "아세타미프리드"
            }
        ],
        fruit: [
            {
                id: "tom_f1",
                symptomKo: "열매 밑부분(배꼽)이 검게 썩으며 움푹 들어감",
                symptomEn: "Sunken, black leathery spots at the bottom of the fruit",
                diseaseKo: "배꼽썩음병 (Blossom End Rot / 생리장해)",
                diseaseEn: "Blossom End Rot (Physiological)",
                remedyKo: "병이 아닌 '칼슘 결핍' 장애입니다. 염화칼슘 0.3%액을 잎에 직접 뿌려주고(엽면시비), 수분 스트레스(VPD 급변)가 발생하지 않도록 관수를 안정화하십시오.",
                remedyEn: "This is calcium deficiency, not a disease. Foliar spray 0.3% Calcium Chloride and stabilize watering intervals (check VPD).",
                suggestedChemical: null
            }
        ]
    },
    strawberry: {
        fruit: [
            {
                id: "str_f1",
                symptomKo: "과실이나 꽃이 회색 곰팡이로 뒤덮여 썩음",
                symptomEn: "Gray fuzzy mold covering fruits and blossoms",
                diseaseKo: "회색곰팡이병 (Gray Mold / Botrytis)",
                diseaseEn: "Gray Mold (Botrytis cinerea)",
                remedyKo: "감염된 과실을 즉시 격리 수거하십시오. 온도를 높이고 다습을 회피하며, 살균제인 '디페노코나졸'을 살포하여 방제하십시오.",
                remedyEn: "Remove infected fruits immediately. Keep air dry and spray Difenoconazole fungicide.",
                suggestedChemical: "디페노코나졸"
            }
        ],
        leaf: [
            {
                id: "str_l1",
                symptomKo: "잎 뒷면에 미세한 거미줄이 관찰되며 잎이 황화됨",
                symptomEn: "Fine spider webs and yellow spots on leaf undersides",
                diseaseKo: "점박이응애 (Two-Spotted Spider Mite)",
                diseaseEn: "Two-Spotted Spider Mite",
                remedyKo: "고온 건조할 때 폭발적으로 늘어납니다. '스피노사드' 등 전용 살충제를 밤에 살포하거나 친적 곤충(칠레이리응애)을 방사하십시오.",
                remedyEn: "Thrives in hot, dry conditions. Spray Spinosad at night or release predatory mites.",
                suggestedChemical: "스피노사드"
            }
        ]
    },
    blueberry: {
        fruit: [
            {
                id: "blu_f1",
                symptomKo: "열매가 익기 전에 무르고 갈색 반점이 퍼짐",
                symptomEn: "Soft berries with spreading concentric brown decay spots",
                diseaseKo: "탄저병 (Anthracnose)",
                diseaseEn: "Anthracnose Fruit Rot",
                remedyKo: "장마기 등 다습 환경에서 포자가 확산됩니다. '보스칼리드' 또는 '아족시스트로빈' 계열의 안전한 살균제를 교차 살포하십시오.",
                remedyEn: "Spores spread fast in humid monsoons. Apply safe fungicides like Boscalid or Azoxystrobin.",
                suggestedChemical: "보스칼리드"
            }
        ],
        leaf: [
            {
                id: "blu_l1",
                symptomKo: "새 잎이 붉게 쪼그라들며 잎맥 사이가 누렇게 변함",
                symptomEn: "New leaves distorting and chlorotic yellowing between veins",
                diseaseKo: "철(Fe) 결핍에 의한 황화 현상",
                diseaseEn: "Iron Chlorosis (Acid Deficit)",
                remedyKo: "pH가 5.0 이상으로 올라가 철 흡수가 차단되어 나타납니다. 양액 급액 pH를 4.5~4.8 수준으로 조절하고 철 킬레이트제를 공급해 주십시오.",
                remedyEn: "Caused by high rootzone pH (>5.0) blocking iron intake. Adjust irrigation pH to 4.5-4.8 and feed chelated iron.",
                suggestedChemical: null
            }
        ]
    },
    melon: {
        leaf: [
            {
                id: "mel_l1",
                symptomKo: "잎 표면에 연녹색 다각형 반점이 나타나고 아래로 퍼짐",
                symptomEn: "Angular light-green spots on leaves, turning yellow/brown",
                diseaseKo: "노균병 (Downy Mildew)",
                diseaseEn: "Downy Mildew",
                remedyKo: "과습 조건에서 발생이 심합니다. 배수를 개선하고, 예방/치료 살균제인 '아족시스트로빈'을 엽면에 고르게 살포하십시오.",
                remedyEn: "Thrives in cold humidity. Improve drainage and spray Azoxystrobin fungicide.",
                suggestedChemical: "아족시스트로빈"
            }
        ]
    },
    pepper: {
        leaf: [
            {
                id: "pep_l1",
                symptomKo: "어린 잎끝이 말라 죽으며 꽃봉오리가 낙화됨",
                symptomEn: "Young leaf margins drying out and flower buds dropping",
                diseaseKo: "총채벌레 피해 및 토마토반점위조바이러스(TSWV)",
                diseaseEn: "Thrips / TSWV Virus",
                remedyKo: "바이러스를 옮기는 꽃노랑총채벌레를 즉시 잡아야 합니다. '스피노사드' 등 벌독성 관리가 수반되는 살충제를 교차 방제하십시오.",
                remedyEn: "Thrips vector must be controlled. Spray Spinosad or other thrip insecticides.",
                suggestedChemical: "스피노사드"
            }
        ]
    }
};

// Multi-language UI text dictionary
const i18n = {
    ko: {
        headerBadge: "시설원예 & 과수원 화분매개 솔루션 (최근 업데이트: 2026-06-17)",
        headerTitle: "병해충 자가진단 & 수분벌 안전 처방 포털",
        headerDesc: "시설하우스 주요 병해충 즉시 자가진단, 안전 방제 약제 추천 및 수분 벌 보호 대기시간(REI) 자동 연동 툴킷",
        
        gtVpdD: "포차 계산기 (VPD)",
        gtVpdM: "VPD",
        gtValveD: "난방 혼합 밸브",
        gtValveM: "혼합 밸브",
        gtFertD: "원액 희석 계산기 (양액)",
        gtFertM: "양액 희석",
        gtHeatLossD: "온실 열손실 계산기",
        gtHeatLossM: "열손실",
        gtRoiD: "보일러 vs 히트펌프 ROI",
        gtRoiM: "난방 ROI",
        gtTransD: "식물 증산량 추정기 (PM)",
        gtTransM: "증산량 (PM)",
        gtPollinatorD: "🐝 병해충 자가진단 & 수분벌",
        gtPollinatorM: "🐝 병해충/벌",
        gtVerticalD: "🌱 수직농업 DLI 계산기",
        gtVerticalM: "🌱 수직농업",

        tabDiagnosis: "병해충 자가진단",
        tabPesticide: "농약 안전성 진단",
        tabDensity: "적정 벌통수 산출",
        tabActivity: "활동성 시뮬레이터",

        // Tab 0: Diagnosis
        lblDiagInputTitle: "증상기반 예찰 변수",
        lblSelectCrop: "재배 중인 작물",
        lblSelectPart: "피해 부위 선택",
        lblSelectSymptom: "관찰되는 세부 증상",
        lblDiagResultTitle: "AI 진단 및 처방 보고서",
        lblDiagDisease: "의심되는 병해충 명칭",
        lblDiagRemedy: "추천 방제 및 관리 요령",
        lblDiagChemical: "추천 방제 약제 성분",
        btnGoToRei: "👉 이 약제의 수분벌 안전 대기시간(REI) 계산하기",
        msgDiagNoSearch: "작물, 부위, 증상을 선택하면 실시간 진단 결과를 볼 수 있습니다.",
        msgDiagNoSymptom: "선택한 부위에 해당하는 등록된 증상이 없습니다. 다른 부위를 선택해 주세요.",
        lblSelectPlaceholder: "-- 선택해 주세요 --",
        
        partLeaf: "잎 (Leaves)",
        partFruit: "열매 (Fruits)",
        partStemRoot: "줄기/뿌리 (Stems/Roots)",

        // Tab 1: Pesticide
        lblPestInputTitle: "농약 성분 검색",
        lblPestSearch: "살포할 농약 성분명 입력 (예: 이미다클로프리드, 보스칼리드)",
        lblPestTox: "벌 독성 레벨",
        lblPestRei: "안전 방사 대기기간",
        lblPestAction: "현장 봉군 행동 지침",
        msgPestNoSearch: "위에 농약 성분명을 입력하고 검색 결과를 확인하세요.",
        msgPestNotFound: "데이터베이스에 없는 성분입니다. 농약 라벨의 꿀벌 주의사항을 확인해 주세요.",
        reiUnit: "일 (Days)",
        txtHigh: "매우 위험 (적색 경고)",
        txtMedium: "보통 위해 (황색 경고)",
        txtLow: "비교적 안전 (녹색)",

        // Tab 2: Density
        lblDensityInputTitle: "재배 환경 변수",
        lblCropType: "대상 재배 작물",
        lblArea: "재배 면적 (㎡)",
        lblSeason: "현재 방사 계열/계절",
        lblDensityResultTitle: "최적 방사 규모",
        lblRequiredHives: "추천 뒤영벌 봉군 수",
        lblExpectedLifespan: "봉군 예상 수명 주기",
        lblDensityDesc: "산출 근거 및 배치 가이드라인",
        
        optTomato: "완숙/방울토마토 (진동 수정 필수)",
        optStrawberry: "딸기 (기형과 방지, 과도방화 주의)",
        optMelon: "참외/멜론 (밀원 부족 시 사양 필수)",
        optBlueberry: "블루베리 (남부/북부 하이부쉬 화분재배)",
        optPepper: "파프리카/고추 (밀원 보통)",
        
        optSpringAutumn: "봄 / 가을 (표준 기후)",
        optSummer: "여름 (고온 극복 필요)",
        optWinter: "겨울 (보온 및 저온 극복 필요)",
        
        densityCalculationText: "재배 면적 <strong>{area} m²</strong> (약 <strong>{pyeong} 평</strong>) 기준, <strong>{crop}</strong> 재배에 적합한 봉군은 <strong>{hives}통</strong>입니다.<br><span style='font-size: 0.8rem; color: var(--text-gray);'>※ 1봉군 기준 약 100~120마리 일벌 활동 상태.</span>",
        densityGuidelineTomato: "토마토는 꿀이 전혀 없고 꽃가루만 있는 무밀작물로 뒤영벌의 진동 수정(Buzz Pollination)이 필수적입니다. 꽃잎에 갈색 바이트마크(Bite mark)가 생겼는지 수시로 확인해 수정 여부를 판별하십시오.",
        densityGuidelineStrawberry: "딸기는 과도하게 방화할 경우 꽃받침과 씨방이 손상되어 기형과가 발생할 위험이 있습니다. 벌의 활동 상태를 보고 소문을 하루에 반나절 정도 닫아 활동량을 조절하십시오.",
        densityGuidelineMelon: "참외/멜론은 꽃가루량이 풍부하나 개화 기간이 짧으므로 단기간에 집중 방사가 필요합니다. 벌통 안에 설탕물(사양액) 잔량을 수시로 확인하십시오.",
        densityGuidelineBlueberry: "블루베리는 종 모양 꽃의 입구가 좁아 일반 꿀벌보다 주둥이가 긴 뒤영벌이 훨씬 효율적으로 수분합니다. 개화율이 5% 도달 시점에 방사하십시오.",
        densityGuidelinePepper: "파프리카는 자가 수정율이 높으나 뒤영벌을 방사할 경우 고품질 대과 생산율과 낙과 방지율이 향상됩니다.",

        // Tab 3: Activity
        lblActInputTitle: "온도 시뮬레이션",
        lblMaxTemp: "오늘 온실 예상 최고 온도 (℃)",
        lblMinTemp: "오늘 온실 예상 최저 온도 (℃)",
        lblActResultTitle: "벌 활동성 예측 스코어",
        lblActStatus: "활동 상태",
        lblActGuide: "환경 제어 가이드",
        
        actScoreText: "오늘 예상되는 뒤영벌 활동 지수는 <strong>{score} / 100 점</strong>입니다.",
        actStatusOpt: "최적 활동성 (Active Foraging)",
        actStatusRestricted: "활동성 제한 (Restricted Foraging)",
        actStatusDanger: "활동 중단 및 폐사 위험 (Inactive / Heat stress)",

        actGuideOpt: "현재 온도는 15~25℃ 사이로 벌들이 수정 활동을 하기에 가장 완벽한 온도입니다. 환기율을 적절히 조절하고, 직사광선이 벌통에 직접 닿지 않도록 그늘을 제공하십시오.",
        actGuideCold: "최저 기온이 너무 낮아 아침에 벌들의 활동이 둔화될 수 있습니다. 벌통 주위에 보온재(스티로폼 등)를 감싸주고 밤사이 10℃ 이하로 내려가지 않도록 다중 커튼을 활용해 보온 조치를 강화하십시오.",
        actGuideHot: "최고 기온이 30℃를 넘어갑니다. 뒤영벌은 고온에 매우 취약하며, 30℃ 초과 시 화분 매개를 멈추고 벌통 내부 온도 조절(날개짓 환기)에 온 힘을 씁니다. 수경 차광막을 가동하고 포그 미스트를 분사해 내부 온도를 낮추십시오.",
        
        disclaimer: "<strong>면책 조항:</strong> 본 포털의 자가 진단 및 농약 수치들은 대한민국 농촌진흥청(RDA) 및 농약안전정보시스템 데이터를 바탕으로 작성된 시뮬레이션입니다. 병의 양상이나 벌의 건강 상태에 따라 처방 효율이 상이할 수 있으므로, 실제 방제 시 농업기술센터와 최종 상담을 권장합니다.",
        promoTitle: "🐝 온실 병해충 자가 처방 & 수정벌 통합 관리 도감",
        promoDesc: "시설하우스 돌발 병해충 도감, 천적 곤충 활용 가이드 및 수분벌을 살리는 농약 사용 수칙이 담긴 KDP 가이드북과 스프레드시트 영농 일지 패키지.",
        btnKdpBook: "KDP 도서 ($19.99)",
        btnExcel: "안전 방제 일지 엑셀 ($29.00)"
    },
    en: {
        headerBadge: "Greenhouse & Orchard Biosecurity Suite (Last Updated: June 17, 2026)",
        headerTitle: "Greenhouse Diagnosis & Pollinator Safety Portal",
        headerDesc: "Diagnose greenhouse crop diseases step-by-step, check safe chemical recommendations, and calculate Re-entry Intervals (REI) for pollinators.",
        
        gtVpdD: "Vapor Pressure Deficit (VPD)",
        gtVpdM: "VPD",
        gtValveD: "Mixing Valve Sizing",
        gtValveM: "Mixing Valve",
        gtFertD: "Fertilizer Stock Dilution",
        gtFertM: "Fert Dilution",
        gtHeatLossD: "Greenhouse Heat Loss",
        gtHeatLossM: "Heat Loss",
        gtRoiD: "Boiler vs Heat Pump ROI",
        gtRoiM: "Heating ROI",
        gtTransD: "Plant Transpiration (PM)",
        gtTransM: "Transpiration (PM)",
        gtPollinatorD: "🐝 Greenhouse Diagnosis & Pollinators",
        gtPollinatorM: "🐝 Disease/Pollinators",
        gtVerticalD: "🌱 Vertical Farm DLI",
        gtVerticalM: "🌱 Vertical DLI",

        tabDiagnosis: "Pest & Disease Diagnosis",
        tabPesticide: "Pesticide REI Diagnosis",
        tabDensity: "Optimal Density Math",
        tabActivity: "Foraging Simulator",

        // Tab 0: Diagnosis
        lblDiagInputTitle: "Symptom Scouting Variables",
        lblSelectCrop: "Select Crop",
        lblSelectPart: "Affected Plant Part",
        lblSelectSymptom: "Scouted Symptom details",
        lblDiagResultTitle: "Diagnostic & Remedial Report",
        lblDiagDisease: "Suspected Disease/Pest",
        lblDiagRemedy: "Remedial Agronomic Guide",
        lblDiagChemical: "Recommended Active Ingredient",
        btnGoToRei: "👉 Calculate Bee Re-entry Interval (REI) for this Chemical",
        msgDiagNoSearch: "Select a crop, part, and symptoms to view real-time diagnosis.",
        msgDiagNoSymptom: "No symptoms registered for the selected plant part. Try selecting another plant part.",
        lblSelectPlaceholder: "-- Select Option --",
        
        partLeaf: "Leaves",
        partFruit: "Fruits",
        partStemRoot: "Stems/Roots",

        // Tab 1: Pesticide
        lblPestInputTitle: "Pesticide Database Search",
        lblPestSearch: "Enter Active Ingredient (e.g., Imidacloprid, Boscalid)",
        lblPestTox: "Bee Toxicity Level",
        lblPestRei: "Safe Re-entry Interval",
        lblPestAction: "SOP Hive Action Guidelines",
        msgPestNoSearch: "Search for a chemical ingredient above to retrieve security protocols.",
        msgPestNotFound: "Ingredient not found in local database. Please strictly refer to the toxicity label warnings on the product packaging.",
        reiUnit: "Days",
        txtHigh: "Highly Toxic (Red Warning)",
        txtMedium: "Moderately Toxic (Yellow Warning)",
        txtLow: "Relatively Bee-Safe (Green)",

        // Tab 2: Density
        lblDensityInputTitle: "Greenhouse Metrics",
        lblCropType: "Target Crop Category",
        lblArea: "Crop Area (㎡)",
        lblSeason: "Deployment Season",
        lblDensityResultTitle: "Recommended Stocking",
        lblRequiredHives: "Recommended Hive Count",
        lblExpectedLifespan: "Expected Hive Lifespan",
        lblDensityDesc: "Placement Guidelines",
        
        optTomato: "Tomatoes (Buzz Pollination Required)",
        optStrawberry: "Strawberries (Deformity Prevention, Check Over-visitation)",
        optMelon: "Melons/Watermelons (Pollen rich, requires sugar syrup)",
        optBlueberry: "Blueberries (Bell-shaped bloom expert)",
        optPepper: "Peppers / Paprikas (Self-pollinating boost)",
        
        optSpringAutumn: "Spring / Autumn (Standard Temp)",
        optSummer: "Summer (Heat mitigation required)",
        optWinter: "Winter (Insulation required)",
        
        densityCalculationText: "For a growing area of <strong>{area} m²</strong> (approx. <strong>{pyeong} pyeong</strong>), the optimal amount for <strong>{crop}</strong> is <strong>{hives} colonies</strong>.<br><span style='font-size: 0.8rem; color: var(--text-gray);'>* Based on standard commercial hive units with approx. 100-120 workers.</span>",
        densityGuidelineTomato: "Tomato blossoms are nectar-less and rely on buzz pollination. Inspect blossoms for brown 'bite marks' left by bumblebees to gauge pollination rate.",
        densityGuidelineStrawberry: "Strawberries are prone to seed deformation if flowers are over-visited and physically damaged. Restrict bee exits to half-days if bite marks are excessive.",
        densityGuidelineMelon: "Melons have rich pollen but short flowering cycles. Rapid deployment is crucial. Keep checking sugar solution levels inside the hives.",
        densityGuidelineBlueberry: "Blueberry bells are too deep for standard honeybees. Long-tongue bumblebees are far more efficient. Introduce hives at 5% bloom.",
        densityGuidelinePepper: "Paprikas are mostly self-pollinating, but bumblebee visitation increases fruit sizing, wall thickness, and decreases blossom drops.",

        // Tab 3: Activity
        lblActInputTitle: "Temperature Simulator",
        lblMaxTemp: "Forecasted Max Greenhouse Temp (℃)",
        lblMinTemp: "Forecasted Min Greenhouse Temp (℃)",
        lblActResultTitle: "Estimated Foraging Score",
        lblActStatus: "Foraging Activity Level",
        lblActGuide: "Microclimate Control Guide",
        
        actScoreText: "The estimated bumblebee activity index for today is <strong>{score} / 100 points</strong>.",
        actStatusOpt: "Active Foraging",
        actStatusRestricted: "Foraging Restricted",
        actStatusDanger: "Inactive / Severe Heat Stress",

        actGuideOpt: "Greenhouse temperature is in the sweet spot (15-25°C). Bees will actively forage. Keep pathways clear and ensure direct sunlight does not heat the hive structure.",
        actGuideCold: "Minimum temperature is low, which freezes early morning foraging. Wrap hives in insulation wraps (e.g., styrofoam), and pull thermal screens to maintain above 10°C.",
        actGuideHot: "Greenhouse temperature exceeds 30°C. Bumblebees are extremely sensitive to heat. They will prioritize fanning the hive with water rather than pollinating. Deploy shading screens and fogging.",
        
        disclaimer: "<strong>Disclaimer:</strong> Bicarbonate dosages, pesticide REI intervals, and diagnostic keys are compiled from the South Korean Rural Development Administration (RDA) and agronomy textbooks. Always verify outcomes with a certified Agronomist.",
        promoTitle: "🐝 Greenhouse Disease Diagnosis & Pollinator Safety E-Book",
        promoDesc: "Get our comprehensive KDP Guidebook and Excel templates explaining native crop disease diagnostics, biological control releases, and spray schedules.",
        btnKdpBook: "KDP E-Book ($19.99)",
        btnExcel: "IPM Excel Log ($29.00)"
    }
};

let currentLang = 'ko';

// Switch Navigation Tabs
function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    document.getElementById(`btn-tab-${tabId}`).classList.add('active');
    document.getElementById(`tab-${tabId}`).classList.add('active');
}

// Language Settings
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('pollinator_lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`lang-${lang}`).classList.add('active');

    // Header & Tab Buttons
    document.getElementById('header-badge').innerText = i18n[lang].headerBadge;
    document.getElementById('header-title').innerText = i18n[lang].headerTitle;
    document.getElementById('header-desc').innerText = i18n[lang].headerDesc;

    document.getElementById('btn-tab-diagnosis').innerText = i18n[lang].tabDiagnosis;
    document.getElementById('btn-tab-pesticide').innerText = i18n[lang].tabPesticide;
    document.getElementById('btn-tab-density').innerText = i18n[lang].tabDensity;
    document.getElementById('btn-tab-activity').innerText = i18n[lang].tabActivity;

    // Global Navigation Tabs Update
    document.getElementById('lnk-global-vpd').href = `../index.html?tab=vpd&lang=${lang}`;
    document.getElementById('lnk-global-vpd').querySelector('.desktop-text').innerText = i18n[lang].gtVpdD;
    document.getElementById('lnk-global-vpd').querySelector('.mobile-text').innerText = i18n[lang].gtVpdM;
    
    document.getElementById('lnk-global-valve').href = `../index.html?tab=valve&lang=${lang}`;
    document.getElementById('lnk-global-valve').querySelector('.desktop-text').innerText = i18n[lang].gtValveD;
    document.getElementById('lnk-global-valve').querySelector('.mobile-text').innerText = i18n[lang].gtValveM;
    
    document.getElementById('lnk-global-fert').href = `../index.html?tab=fert&lang=${lang}`;
    document.getElementById('lnk-global-fert').querySelector('.desktop-text').innerText = i18n[lang].gtFertD;
    document.getElementById('lnk-global-fert').querySelector('.mobile-text').innerText = i18n[lang].gtFertM;
    
    document.getElementById('lnk-global-heat-loss').href = `../index.html?tab=heat-loss&lang=${lang}`;
    document.getElementById('lnk-global-heat-loss').querySelector('.desktop-text').innerText = i18n[lang].gtHeatLossD;
    document.getElementById('lnk-global-heat-loss').querySelector('.mobile-text').innerText = i18n[lang].gtHeatLossM;
    
    document.getElementById('lnk-global-roi').href = `../index.html?tab=roi&lang=${lang}`;
    document.getElementById('lnk-global-roi').querySelector('.desktop-text').innerText = i18n[lang].gtRoiD;
    document.getElementById('lnk-global-roi').querySelector('.mobile-text').innerText = i18n[lang].gtRoiM;
    
    document.getElementById('lnk-global-transpiration').href = `../index.html?tab=transpiration&lang=${lang}`;
    document.getElementById('lnk-global-transpiration').querySelector('.desktop-text').innerText = i18n[lang].gtTransD;
    document.getElementById('lnk-global-transpiration').querySelector('.mobile-text').innerText = i18n[lang].gtTransM;
    
    document.getElementById('lnk-global-pollinator').querySelector('.desktop-text').innerText = i18n[lang].gtPollinatorD;
    document.getElementById('lnk-global-pollinator').querySelector('.mobile-text').innerText = i18n[lang].gtPollinatorM;
    
    document.getElementById('lnk-global-vertical').href = `../Vertical_Farming_Project/index.html?lang=${lang}`;
    document.getElementById('lnk-global-vertical').querySelector('.desktop-text').innerText = i18n[lang].gtVerticalD;
    document.getElementById('lnk-global-vertical').querySelector('.mobile-text').innerText = i18n[lang].gtVerticalM;

    // Tab 0 (Diagnosis) UI
    document.getElementById('lbl-diag-input-title').innerText = i18n[lang].lblDiagInputTitle;
    document.getElementById('lbl-select-crop').innerText = i18n[lang].lblSelectCrop;
    document.getElementById('lbl-select-part').innerText = i18n[lang].lblSelectPart;
    document.getElementById('lbl-select-symptom').innerText = i18n[lang].lblSelectSymptom;
    document.getElementById('lbl-diag-result-title').innerText = i18n[lang].lblDiagResultTitle;

    // Tab 1 UI
    document.getElementById('lbl-pest-input-title').innerText = i18n[lang].lblPestInputTitle;
    document.getElementById('pest-search').placeholder = i18n[lang].lblPestSearch;
    document.getElementById('lbl-pest-result-title').innerText = i18n[lang].lblPestInputTitle;

    // Tab 2 UI
    document.getElementById('lbl-density-input-title').innerText = i18n[lang].lblDensityInputTitle;
    document.getElementById('lbl-crop-type').innerText = i18n[lang].lblCropType;
    document.getElementById('lbl-area').innerText = i18n[lang].lblArea;
    document.getElementById('lbl-season').innerText = i18n[lang].lblSeason;
    document.getElementById('lbl-density-result-title').innerText = i18n[lang].lblDensityResultTitle;
    document.getElementById('lbl-req-hives-title').innerText = i18n[lang].lblRequiredHives;
    document.getElementById('lbl-expected-lifespan-title').innerText = i18n[lang].lblExpectedLifespan;
    document.getElementById('lbl-density-desc-title').innerText = i18n[lang].lblDensityDesc;

    const cropSelect = document.getElementById('crop-type');
    cropSelect.options[0].text = i18n[lang].optTomato;
    cropSelect.options[1].text = i18n[lang].optStrawberry;
    cropSelect.options[2].text = i18n[lang].optMelon;
    cropSelect.options[3].text = i18n[lang].optBlueberry;
    cropSelect.options[4].text = i18n[lang].optPepper;

    const seasonSelect = document.getElementById('season');
    seasonSelect.options[0].text = i18n[lang].optSpringAutumn;
    seasonSelect.options[1].text = i18n[lang].optSummer;
    seasonSelect.options[2].text = i18n[lang].optWinter;

    // Tab 3 UI
    document.getElementById('lbl-act-input-title').innerText = i18n[lang].lblActInputTitle;
    document.getElementById('lbl-max-temp').innerText = i18n[lang].lblMaxTemp;
    document.getElementById('lbl-min-temp').innerText = i18n[lang].lblMinTemp;
    document.getElementById('lbl-act-result-title').innerText = i18n[lang].lblActResultTitle;
    document.getElementById('lbl-act-status-title').innerText = i18n[lang].lblActStatus;
    document.getElementById('lbl-act-guide-title').innerText = i18n[lang].lblActGuide;

    // Footer
    document.getElementById('footer-disclaimer').innerHTML = i18n[lang].disclaimer;

    // Trigger updates
    updatePartOptions();
    updatePesticideUI();
    calculateDensity();
    simulateActivity();
}

// Tab 0: Diagnosis Engine
const selectCrop = document.getElementById('diag-crop');
const selectPart = document.getElementById('diag-part');
const selectSymptom = document.getElementById('diag-symptom');

function updatePartOptions() {
    const crop = selectCrop.value;
    selectPart.innerHTML = `<option value="">${i18n[currentLang].lblSelectPlaceholder}</option>`;
    selectSymptom.innerHTML = `<option value="">${i18n[currentLang].lblSelectPlaceholder}</option>`;
    selectSymptom.disabled = true;
    
    if (!crop || !diagnosisDB[crop]) {
        selectPart.disabled = true;
        updateDiagnosisUI();
        return;
    }

    selectPart.disabled = false;
    const parts = Object.keys(diagnosisDB[crop]);
    parts.forEach(part => {
        const option = document.createElement('option');
        option.value = part;
        if (part === 'leaf') option.innerText = i18n[currentLang].partLeaf;
        else if (part === 'fruit') option.innerText = i18n[currentLang].partFruit;
        else option.innerText = i18n[currentLang].partStemRoot;
        selectPart.appendChild(option);
    });

    updateDiagnosisUI();
}

function updateSymptomOptions() {
    const crop = selectCrop.value;
    const part = selectPart.value;
    
    selectSymptom.innerHTML = `<option value="">${i18n[currentLang].lblSelectPlaceholder}</option>`;
    
    if (!crop || !part || !diagnosisDB[crop][part]) {
        selectSymptom.disabled = true;
        updateDiagnosisUI();
        return;
    }

    selectSymptom.disabled = false;
    const symptoms = diagnosisDB[crop][part];
    symptoms.forEach(sym => {
        const option = document.createElement('option');
        option.value = sym.id;
        option.innerText = currentLang === 'ko' ? sym.symptomKo : sym.symptomEn;
        selectSymptom.appendChild(option);
    });

    updateDiagnosisUI();
}

let activeDiagnosisData = null;

function performDiagnosis() {
    const crop = selectCrop.value;
    const part = selectPart.value;
    const symptomId = selectSymptom.value;

    localStorage.setItem('diag_crop', crop);
    localStorage.setItem('diag_part', part);
    localStorage.setItem('diag_symptom', symptomId);

    if (!crop || !part || !symptomId) {
        activeDiagnosisData = null;
        updateDiagnosisUI();
        return;
    }

    const symptomsList = diagnosisDB[crop][part];
    const match = symptomsList.find(s => s.id === symptomId);
    activeDiagnosisData = match || null;
    updateDiagnosisUI();
}

function updateDiagnosisUI() {
    const content = document.getElementById('diag-result-content');
    
    if (!activeDiagnosisData) {
        content.innerHTML = `<p style="color: var(--text-gray); font-style: italic;">${i18n[currentLang].msgDiagNoSearch}</p>`;
        return;
    }

    const d = activeDiagnosisData;
    const diseaseName = currentLang === 'ko' ? d.diseaseKo : d.diseaseEn;
    const remedyText = currentLang === 'ko' ? d.remedyKo : d.remedyEn;
    const chemical = d.suggestedChemical ? (currentLang === 'ko' ? d.suggestedChemical : d.suggestedChemical) : null;

    let chemicalSectionHtml = "";
    if (chemical) {
        chemicalSectionHtml = `
            <div>
                <span class="result-header">${i18n[currentLang].lblDiagChemical}</span>
                <div style="font-size: 1.15rem; font-weight: 700; color: var(--primary); margin-top: 0.3rem;">
                    💊 ${chemical}
                </div>
                <button class="promo-btn" style="margin-top: 0.8rem; font-size: 0.85rem; padding: 0.5rem 1rem;" onclick="jumpToReiCalculator('${chemical}')">
                    ${i18n[currentLang].btnGoToRei}
                </button>
            </div>
        `;
    } else {
        chemicalSectionHtml = `
            <div>
                <span class="result-header">${i18n[currentLang].lblDiagChemical}</span>
                <div style="font-size: 0.95rem; color: var(--text-gray); font-style: italic; margin-top: 0.3rem;">
                    N/A (물리적 제어 또는 무독성 비료 처방)
                </div>
            </div>
        `;
    }

    content.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div>
                <span class="result-header">${i18n[currentLang].lblDiagDisease}</span>
                <h3 style="font-size: 1.4rem; color: var(--accent); margin-top: 0.2rem;">${diseaseName}</h3>
            </div>

            <div class="info-card" style="border-left: 4px solid var(--accent);">
                <h4>📋 ${i18n[currentLang].lblDiagRemedy}</h4>
                <p>${remedyText}</p>
            </div>

            ${chemicalSectionHtml}
        </div>
    `;
}

// Cross-tab automation: Diagnosis -> Pesticide REI Calculator
function jumpToReiCalculator(chemicalName) {
    switchTab('pesticide');
    document.getElementById('pest-search').value = chemicalName;
    
    // Find item and trigger
    const item = pesticideDB.find(p => p.nameKo === chemicalName || p.nameEn.toLowerCase() === chemicalName.toLowerCase());
    if (item) {
        selectPesticide(item);
    } else {
        // Fallback search manually
        const event = new Event('input');
        document.getElementById('pest-search').dispatchEvent(event);
    }
    
    document.getElementById('pest-search').focus();
}

// Tab 1: Pesticide Search & Autocomplete
const searchInput = document.getElementById('pest-search');
const autocompleteList = document.getElementById('autocomplete-list');

function setupAutocomplete() {
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        autocompleteList.innerHTML = '';
        if (!query) {
            autocompleteList.style.display = 'none';
            return;
        }

        const matches = pesticideDB.filter(p => 
            p.nameKo.toLowerCase().includes(query) || 
            p.nameEn.toLowerCase().includes(query)
        );

        if (matches.length > 0) {
            matches.forEach(item => {
                const li = document.createElement('div');
                li.className = 'autocomplete-item';
                li.innerText = currentLang === 'ko' 
                    ? `${item.nameKo} (${item.nameEn})` 
                    : `${item.nameEn} (${item.nameKo})`;
                li.addEventListener('click', () => {
                    searchInput.value = currentLang === 'ko' ? item.nameKo : item.nameEn;
                    autocompleteList.style.display = 'none';
                    selectPesticide(item);
                });
                autocompleteList.appendChild(li);
            });
            autocompleteList.style.display = 'block';
        } else {
            autocompleteList.style.display = 'none';
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            autocompleteList.style.display = 'none';
        }
    });
}

let selectedPesticideData = null;

function selectPesticide(item) {
    selectedPesticideData = item;
    localStorage.setItem('pollinator_selected_pest', item.nameKo);
    updatePesticideUI();
}

function updatePesticideUI() {
    const resultDiv = document.getElementById('pest-result-content');
    
    if (!selectedPesticideData) {
        resultDiv.innerHTML = `<p style="color: var(--text-gray); font-style: italic;">${i18n[currentLang].msgPestNoSearch}</p>`;
        return;
    }

    const item = selectedPesticideData;
    const name = currentLang === 'ko' ? item.nameKo : item.nameEn;
    const type = currentLang === 'ko' ? item.typeKo : item.typeEn;
    const desc = currentLang === 'ko' ? item.descKo : item.descEn;
    
    let toxText = "";
    let pillClass = "";
    if (item.toxicity === 'high') {
        toxText = i18n[currentLang].txtHigh;
        pillClass = "danger";
    } else if (item.toxicity === 'medium') {
        toxText = i18n[currentLang].txtMedium;
        pillClass = "warning";
    } else {
        toxText = i18n[currentLang].txtLow;
        pillClass = "safe";
    }

    resultDiv.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div>
                <h3 style="font-size: 1.3rem; color: var(--text-light);">${name}</h3>
                <span style="font-size: 0.85rem; color: var(--text-gray);">${type}</span>
            </div>
            
            <div>
                <span class="result-header">${i18n[currentLang].lblPestTox}</span>
                <div style="margin-top: 0.3rem;">
                    <span class="status-pill ${pillClass}">${toxText}</span>
                </div>
            </div>

            <div>
                <span class="result-header">${i18n[currentLang].lblPestRei}</span>
                <div class="big-number-container">
                    <span class="big-number">${item.reiDays}</span>
                    <span style="font-size: 1.2rem; font-weight: 700; color: var(--text-gray); margin-left: 0.3rem;">${i18n[currentLang].reiUnit}</span>
                </div>
            </div>

            <div class="info-card" style="border-left: 4px solid ${item.toxicity === 'high' ? 'var(--danger)' : item.toxicity === 'medium' ? 'var(--warning)' : 'var(--success)'};">
                <h4>📋 ${i18n[currentLang].lblPestAction}</h4>
                <p>${desc}</p>
            </div>
        </div>
    `;
}

// Tab 2: Density Calculation
function calculateDensity() {
    const cropType = document.getElementById('crop-type').value;
    const area = parseFloat(document.getElementById('area').value) || 0;
    const season = document.getElementById('season').value;

    localStorage.setItem('pollinator_area', area);
    localStorage.setItem('pollinator_crop', cropType);
    localStorage.setItem('pollinator_season', season);

    let baseHivesPer1000Pyung = 9; 
    
    const cropWeights = {
        tomato: 1.0,
        strawberry: 0.75,
        melon: 1.2,
        blueberry: 0.9,
        pepper: 0.7
    };
    
    const seasonAdjustments = {
        spring_autumn: 1.0,
        summer: 0.8,
        winter: 1.25
    };

    const cropWeight = cropWeights[cropType] || 1.0;
    const seasonAdj = seasonAdjustments[season] || 1.0;

    let hivesCount = (area / 3300) * baseHivesPer1000Pyung * cropWeight * seasonAdj;
    hivesCount = Math.max(area > 0 ? 1 : 0, Math.round(hivesCount * 10) / 10);

    let lifespanText = "";
    if (season === 'summer') {
        lifespanText = currentLang === 'ko' ? "4 ~ 6주 (고온으로 단축)" : "4 - 6 Weeks (Shortened by heat)";
    } else if (season === 'winter') {
        lifespanText = currentLang === 'ko' ? "8 ~ 10주 (저온 비활동)" : "8 - 10 Weeks (Extended cold life)";
    } else {
        lifespanText = currentLang === 'ko' ? "8 ~ 12주 (표준 수명)" : "8 - 12 Weeks (Standard lifespan)";
    }

    const cropLabel = document.getElementById('crop-type').options[document.getElementById('crop-type').selectedIndex].text;
    const pyeong = Math.round(area * 0.3025);
    
    const formattedMath = i18n[currentLang].densityCalculationText
        .replace('{area}', area.toLocaleString())
        .replace('{pyeong}', pyeong)
        .replace('{crop}', cropLabel)
        .replace('{hives}', hivesCount);

    document.getElementById('density-math-result').innerHTML = formattedMath;
    document.getElementById('hives-count-large').innerText = hivesCount;
    document.getElementById('hives-lifespan').innerText = lifespanText;

    let guideKey = "densityGuidelineTomato";
    if (cropType === 'strawberry') guideKey = "densityGuidelineStrawberry";
    else if (cropType === 'melon') guideKey = "densityGuidelineMelon";
    else if (cropType === 'blueberry') guideKey = "densityGuidelineBlueberry";
    else if (cropType === 'pepper') guideKey = "densityGuidelinePepper";

    document.getElementById('density-guide-text').innerText = i18n[currentLang][guideKey];
}

// Tab 3: Foraging Activity Simulator
function simulateActivity() {
    const maxTemp = parseFloat(document.getElementById('max-temp').value) || 0;
    const minTemp = parseFloat(document.getElementById('min-temp').value) || 0;

    localStorage.setItem('pollinator_max_temp', maxTemp);
    localStorage.setItem('pollinator_min_temp', minTemp);

    const avgTemp = (maxTemp + minTemp) / 2;
    let score = 100;

    if (avgTemp >= 15 && avgTemp <= 25) {
        score = 100;
    } else if (avgTemp > 25) {
        const diff = avgTemp - 25;
        score = Math.max(0, 100 - (diff * 9));
    } else {
        const diff = 15 - avgTemp;
        score = Math.max(0, 100 - (diff * 10));
    }

    score = Math.round(score);

    let statusText = "";
    let pillClass = "";
    let guideText = "";

    if (score >= 80) {
        statusText = i18n[currentLang].actStatusOpt;
        pillClass = "safe";
        guideText = i18n[currentLang].actGuideOpt;
    } else if (score >= 40) {
        statusText = i18n[currentLang].actStatusRestricted;
        pillClass = "warning";
        guideText = avgTemp < 15 ? i18n[currentLang].actGuideCold : i18n[currentLang].actGuideHot;
    } else {
        statusText = i18n[currentLang].actStatusDanger;
        pillClass = "danger";
        guideText = avgTemp < 15 ? i18n[currentLang].actGuideCold : i18n[currentLang].actGuideHot;
    }

    document.getElementById('activity-score-large').innerText = `${score}%`;
    document.getElementById('activity-score-desc').innerHTML = i18n[currentLang].actScoreText.replace('{score}', score);
    
    const statusPill = document.getElementById('activity-status-pill');
    statusPill.className = `status-pill ${pillClass}`;
    statusPill.innerText = statusText;
    
    document.getElementById('activity-guide-text').innerText = guideText;
}

function loadSavedPreferences() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang === 'ko' || urlLang === 'en') {
        currentLang = urlLang;
    } else {
        const savedLang = localStorage.getItem('pollinator_lang');
        if (savedLang) {
            currentLang = savedLang;
        } else {
            const userLocale = navigator.language || navigator.userLanguage;
            if (userLocale && userLocale.startsWith('ko')) {
                currentLang = 'ko';
            } else {
                currentLang = 'en';
            }
        }
    }

    const savedArea = localStorage.getItem('pollinator_area');
    if (savedArea) {
        document.getElementById('area').value = savedArea;
    }

    const savedCrop = localStorage.getItem('pollinator_crop');
    if (savedCrop) {
        document.getElementById('crop-type').value = savedCrop;
    }

    const savedSeason = localStorage.getItem('pollinator_season');
    if (savedSeason) {
        document.getElementById('season').value = savedSeason;
    }

    const savedMax = localStorage.getItem('pollinator_max_temp');
    if (savedMax) {
        document.getElementById('max-temp').value = savedMax;
    }

    const savedMin = localStorage.getItem('pollinator_min_temp');
    if (savedMin) {
        document.getElementById('min-temp').value = savedMin;
    }

    // Diagnosis state restoration
    const savedDiagCrop = localStorage.getItem('diag_crop');
    if (savedDiagCrop) {
        selectCrop.value = savedDiagCrop;
        updatePartOptions();
        
        const savedDiagPart = localStorage.getItem('diag_part');
        if (savedDiagPart) {
            selectPart.value = savedDiagPart;
            updateSymptomOptions();
            
            const savedDiagSymptom = localStorage.getItem('diag_symptom');
            if (savedDiagSymptom) {
                selectSymptom.value = savedDiagSymptom;
                performDiagnosis();
            }
        }
    }

    const savedPest = localStorage.getItem('pollinator_selected_pest');
    if (savedPest) {
        const pestItem = pesticideDB.find(p => p.nameKo === savedPest);
        if (pestItem) {
            selectedPesticideData = pestItem;
            searchInput.value = currentLang === 'ko' ? pestItem.nameKo : pestItem.nameEn;
        }
    }

    setLanguage(currentLang);
}

// Run setup on load
window.addEventListener('DOMContentLoaded', () => {
    setupAutocomplete();
    
    // Bind Tab 0 elements
    selectCrop.addEventListener('change', updatePartOptions);
    selectPart.addEventListener('change', updateSymptomOptions);
    selectSymptom.addEventListener('change', performDiagnosis);
    
    loadSavedPreferences();
});
