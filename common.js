
    // Pesticide Database
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
                    remedyKo: "고온 건조할 때 폭발적으로 늘어납니다. '스피노사드' 등 전용 살충제를 밤에 살포하거나 천적 곤충(칠레이리응애)을 방사하십시오.",
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

    // Vertical Crops presets
    const verticalCrops = {
        greens: { name: "Leafy Greens", dli: 16.0, photoperiod: 18.0 },
        strawberry: { name: "Strawberries", dli: 22.0, photoperiod: 16.0 },
        herbs: { name: "Medicinal Herbs", dli: 12.0, photoperiod: 12.0 }
    };

    const i18n = {
        ko: {
            headerTitle: "스마트팜 엔지니어링 랩",
            headerDesc: "현대식 온실 설계자, 재배자 및 농업 엔지니어를 위한 고정밀 온라인 계산기 스위트입니다.",
            tabVpdDeskt: "포차 계산기 (VPD)",
            tabVpdMobil: "VPD",
            tabValveDeskt: "난방 혼합 밸브",
            tabValveMobil: "혼합 밸브",
            tabFertDeskt: "원액 희석 계산기 (양액)",
            tabFertMobil: "양액 희석",
            tabHeatLossDeskt: "온실 열손실 계산기",
            tabHeatLossMobil: "열손실",
            tabRoiDeskt: "보일러 vs 히트펌프 ROI",
            tabRoiMobil: "난방 ROI",
            tabTranspirationDeskt: "식물 증산량 추정기 (PM)",
            tabTranspirationMobil: "증산량 (PM)",
            tabPollinatorDeskt: "🐝 병해충 자가진단 & 수분벌",
            tabPollinatorMobil: "🐝 병해충/벌",
            tabVerticalDeskt: "🌱 수직농업 DLI 계산기",
            tabVerticalMobil: "🌱 수직농업",
            vpdTitle: "환경 데이터 입력",
            stageSeedling: "육묘/삽목기",
            stageVeg: "영양생장기",
            stageFlower: "개화/착과기",
            lblAirTemp: "대기 온도",
            lblRhAir: "상대 습도",
            lblOffsetLeaf: "엽온 편차 (대기 대비)",
            resVpdHeader: "엽면 포차 (Leaf-to-Air VPD)",
            tipTitle: "원예 과학 팁",
            valveTitle: "배관 유압 프로파일",
            lblHeatPower: "총 열부하 / 난방부하",
            lblValveDt: "설계 온도 강하 (ΔT)",
            lblValveDp: "목표 밸브 압력 강하 (ΔPv)",
            resValveHeader: "필요 밸브 용량 계수 (Kv)",
            fertTitle: "원액탱크 매개변수",
            lblFertTarget: "목표 원소 농도",
            lblFertVol: "원액탱크 용량",
            lblFertRatio: "희석 주입 비율 (1:X)",
            lblFertPurity: "비료 내 원소 순도(함량)",
            resFertHeader: "비료 필요량",
            fertSafetyTitle: "원액탱크 안전 수칙",
            fertSafetyDesc: "칼슘계 비료와 인산/황산계 비료는 화학적 침전 및 노즐 막힘을 방지하기 위해 반드시 A통과 B통으로 나누어 조제해야 합니다.",
            vpdTipSeedling: "육묘 및 삽목기에는 식물이 뿌리를 내리기 전에 탈수되는 것을 방지하기 위해 낮은 VPD(0.4~0.8 kPa)를 유지하는 것이 좋습니다.",
            vpdTipVeg: "영양생장기에는 적절한 기공 개폐와 건강한 세포 확장을 보장하기 위해 중간 수준의 VPD(0.8~1.1 kPa)가 요구됩니다.",
            vpdTipFlower: "개화기 및 결실기에는 효율적인 양분(칼슘 등) 흡수를 촉진하고 과실 부패를 방지하기 위해 비교적 높은 VPD(1.1~1.5 kPa)를 유지합니다.",
            vpdExplanationLow: "최적 범위({minOpt}-{maxOpt} kPa)보다 낮습니다. 증산이 정체되어 칼슘 결핍(팁번) 및 곰팡이 발생 위험이 높습니다.",
            vpdExplanationOpt: "현재 생육 단계에 완벽한 기후 조건({minOpt}-{maxOpt} kPa)입니다. 광합성 효율이 최대화됩니다.",
            vpdExplanationHigh: "최적 범위({minOpt}-{maxOpt} kPa)보다 높습니다. 건조한 상태로, 식물이 수분 손실을 막기 위해 기공을 닫아 광합성이 저해될 수 있습니다.",
            valveStatusPill: "사이징 계산 완료",
            valveExplanation: "순환 유량 <strong>{flowRate} m³/h</strong>에 대해 밸브 Kv 계수 <strong>{kv}</strong> 규격이 필요합니다.",
            pipeRecommendationTitle: "DN 배관 추천",
            pipeRecommendationDesc: "계산된 유량 기준, 배관 내 유속을 안전 범위(0.5 ~ 1.0 m/s) 내로 유지하기 위해 <strong>{dn}</strong> 규격의 배관을 권장합니다. 밸브 제어성 확보(제어 권한 25% 마진 확보)를 위해 상용 표준 규격인 <strong>Kvs {kvsMargin}</strong> 규격의 밸브를 선택하는 것을 강력히 추천합니다.",
            fertStatusPill: "조제 준비 완료",
            fertExplanation: "원액탱크 {tankVolume}L에 비료 <strong>{mass} kg</strong>을 용해하십시오. 원액 주입기가 1:{dilution} 비율로 흡입하여 공급할 때, 재배동 Emitter에서 정확히 {targetPpm} ppm 농도로 양액이 공급됩니다.",
            disclaimer: "<strong>면책 조항 (Disclaimer):</strong> 본 계산기가 제공하는 수치는 시뮬레이션 및 교육적 참고 자료입니다. Inwoovation은 본 도구의 사용으로 인해 발생하는 농작물 피해, 설비 오작동 또는 유압 설계 오류 등에 대해 어떠한 법적 책임도 지지 않습니다. 상업용 온실에 실제로 적용하기 전에 반드시 계산 결과를 재검증하고 현장 전문가의 검토를 받으십시오.",
            
            // Heat Loss
            heatLossTitle: "온실 구조 및 기후 데이터",
            lblEstAreaNew: "온실 피복 표면적 (A)",
            lblUValue: "피복재 열관류율 (U-value)",
            lblTempIn: "희망 실내 온도 (Ti)",
            lblTempOut: "최저 설계 외기온 (To)",
            lblWindSpeed: "외부 풍속",
            resHeatLossHeader: "필요 난방 용량 (Heat Loss)",
            heatLossExplanation: "외기온 <strong>{tempOut}°C</strong>, 실내온도 <strong>{tempIn}°C</strong> 조건에서 풍속 마찰 수정자 <strong>{fWind}</strong>를 적용한 온실의 총 열손실량은 <strong>{heatLoss} kW</strong> ({btuVal} BTU/h) 입니다.",
            heatLossStatusPill: "열손실 연산 완료",
            lblHeatLossPreset: "피복재 U-Value 프리셋",
            
            // ROI
            roiTitle: "에너지 단가 및 설비 매개변수",
            lblAnnualDemand: "연간 총 난방 에너지 요구량",
            lblBoilerType: "기존 보일러 연료 종류",
            lblBoilerFuelPrice: "기존 연료 단가",
            lblBoilerEff: "보일러 열효율",
            lblHpCop: "히트펌프 평균 COP",
            lblHpElecPrice: "농업용 전기 요금 단가",
            lblHpCapex: "히트펌프 추가 투자 비용 (CapEx)",
            resRoiHeader: "연간 절감액 및 회수 기간",
            roiExplanation: "연간 <strong>{demand} kWh</strong> 난방 공급 시, 기존 가스 보일러 대비 히트펌프는 연간 약 <strong>{savings}</strong>의 난방비를 절감합니다. 투자 회수 기간은 약 <strong>{payback}년</strong> 입니다.",
            roiStatusPill: "ROI 분석 완료",
            lblCurrency: "기준 통화 설정",
            
            // Transpiration
            transTitle: "온실 기후 및 생육 데이터",
            lblTransTemp: "온실 내부 온도",
            lblTransRh: "온실 내부 상대습도",
            lblTransRad: "온실 내부 일사량 (Rg)",
            lblTransLai: "엽면적지수 (LAI)",
            lblTransCrop: "재배 작물 종류",
            lblTransWind: "온실 내부 풍속 (u)",
            resTransHeader: "시간당 증산 속도 (ET)",
            transExplanation: "온도 {temp}°C, 상대습도 {rh}%, 내부 일사 {rad} W/m² 환경에서 작물의 시간당 증산량은 약 <strong>{et} L/m²·hr</strong> (mm/hr) 입니다. 하루(10시간 일사 기준) <strong>{etDay} L/m²·day</strong>의 증산량이 예상됩니다.",
            transStatusPill: "증산량 계산 완료",
            promoTitle: "🚀 온실 운영을 한 단계 더 최적화하세요",
            promoDesc: "모든 센서 보정 스케줄, 양액 배합 공식 및 작물 일지가 포함된 전문가용 '스마트팜 운영 OS' 노션 템플릿과 엑셀 패키지를 다운로드하세요.",
            btnPromoMain: "스마트팜 노션 OS ($19.99)",
            btnPromoSub: "엔지니어링 엑셀 ($29.00)",

            // Pollinators & Diagnosis (KO)
            tabDiagnosis: "병해충 자가진단",
            tabPesticide: "농약 안전성 진단",
            tabDensity: "적정 벌통수 산출",
            tabActivity: "활동성 시뮬레이터",
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
            lblPestInputTitle: "농약 성분 검색",
            lblPestSearch: "살포할 농약 성분명 입력 (예: 이미다클로프리드, 보스칼리드)",
            lblPestResultTitle: "벌 안전성 진단 결과",
            lblPestTox: "벌 독성 레벨",
            lblPestRei: "안전 방사 대기기간",
            lblPestAction: "현장 봉군 행동 지침",
            msgPestNoSearch: "위에 농약 성분명을 입력하고 검색 결과를 확인하세요.",
            msgPestNotFound: "데이터베이스에 없는 성분입니다. 농약 라벨의 꿀벌 주의사항을 확인해 주세요.",
            reiUnit: "일",
            txtHigh: "매우 위험 (적색 경고)",
            txtMedium: "보통 위해 (황색 경고)",
            txtLow: "비교적 안전 (녹색)",
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

            // Vertical Farming (KO)
            lblLightTitle: "광합성 광량 및 DLI 최적화",
            lblCropSelect: "대상 작물 프로필",
            optGreens: "엽채류 (목표 DLI: 16 mol)",
            optStrawberryVert: "딸기 (목표 DLI: 22 mol)",
            optHerbs: "허브류 및 바질 (목표 DLI: 12 mol)",
            optCustom: "직접 입력 (Custom)",
            lblTargetDli: "목표 DLI (mol/m²/일)",
            lblMeasuredPpfd: "측정된 PPFD (μmol/m²/s)",
            lblSliderRed: "적색광 (Red, 660 nm)",
            lblSliderBlue: "청색광 (Blue, 450 nm)",
            lblSliderGreen: "녹색/백색광 (Green/White, 550 nm)",
            lblSliderFar: "원적색광 (Far-Red, 730 nm)",
            lblDliOutputTitle: "산출된 DLI 결과값",
            lblOptPhotoperiodTitle: "최적 일 광주기",
            lblSpectralEnergyTitle: "PAR 스펙트럼 에너지 분포",
            lblThColor: "파장 대역 (Color Band)",
            lblThPct: "비율 (%)",
            lblThFlux: "추정 광자속 (PPFD)",
            lblTblRed: "● 적색광 (660nm)",
            lblTblBlue: "● 청색광 (450nm)",
            lblTblGreen: "● 녹색광 (550nm)",
            lblTblFar: "● 원적색광 (730nm)",
            dliUnit: "mol/m²/일",
            hoursUnit: "시간",
            ppfdTooLow: "<span style='color: var(--danger); font-weight: 600;'>PPFD 광량 수치 부족!</span> 일 광주기가 최대치인 24시간에 도달했습니다. LED 출력을 높이거나 설치 높이를 낮춰주십시오.",
            lightHoursDesc: "목표 DLI를 달성하기 위해 하루 동안 조사해야 하는 최적의 LED 가동 시간입니다.",
            lblThermalTitle: "LED 모듈 발열 및 운영비(OPEX) 분석기",
            lblLedPowerLabel: "LED 바 개별 소비 전력 P_elec (W)",
            lblLedBarsLabel: "Racking 내 총 LED 바 수량 (N)",
            lblOptEfficiencyLabel: "광변환 효율 (η_opt)",
            lblHeatsinkAreaLabel: "바당 방열판 표면적 (cm²)",
            lblConvectiveHLabel: "대류 열전달 계수 (h, W/m²K)",
            lblElecRateLabel: "전기 요금 단가",
            lblThermalTjTitle: "LED 소자 접합부 온도 (T_j)",
            lblThermalCostTitle: "월별 랙당 조명 전기료 (OPEX)",
            lblThermalChartTitle: "가동 광주기별 월 조명 전기료 분할 예측",
            tjTooHigh: "<span style='color: var(--danger); font-weight:600;'>⚠️ 접합부 온도 초과!</span> 소자 광량의 빠른 노화 감쇠가 우려됩니다. 방열 면적을 키우십시오.",
            tjDesc: "LED 접합부 발열 안전 경계: 85°C 미만으로 유지 시 열화 방지 및 칩 보호에 안전합니다.",
            monthlyUnit: "원 / 월",
            opexDesc: "산출된 일일 광조사 시간에 기반한 월별 조명 전력 비용 시뮬레이션 결과입니다."
        },
        en: {
            headerTitle: "Smart Farm Engineering Lab",
            headerDesc: "High-precision online calculator suite designed for modern greenhouse designers, growers, and agricultural engineers.",
            tabVpdDeskt: "Vapor Pressure Deficit (VPD)",
            tabVpdMobil: "VPD",
            tabValveDeskt: "Heating Mixing Valve",
            tabValveMobil: "Mixing Valve",
            tabFertDeskt: "Stock Tank Fertigation",
            tabFertMobil: "Fertigation",
            tabHeatLossDeskt: "Greenhouse Heat Loss",
            tabHeatLossMobil: "Heat Loss",
            tabRoiDeskt: "Boiler vs Heat Pump ROI",
            tabRoiMobil: "Heating ROI",
            tabTranspirationDeskt: "Plant Transpiration (PM)",
            tabTranspirationMobil: "Transpiration (PM)",
            tabPollinatorDeskt: "🐝 Crop Diagnosis & Bees",
            tabPollinatorMobil: "🐝 Pest/Bees",
            tabVerticalDeskt: "🌱 Vertical Farming DLI",
            tabVerticalMobil: "🌱 Vertical DLI",
            vpdTitle: "Environmental Data",
            stageSeedling: "Seedling/Clone",
            stageVeg: "Vegetative",
            stageFlower: "Flower/Fruit",
            lblAirTemp: "Air Temperature",
            lblRhAir: "Relative Humidity",
            lblOffsetLeaf: "Leaf Temp Offset (vs. Air)",
            resVpdHeader: "Leaf-to-Air VPD",
            tipTitle: "Horticulture Tip",
            valveTitle: "Hydraulic Profile",
            lblHeatPower: "Heat Demand / Heat Load",
            lblValveDt: "Design Temp Drop (ΔT)",
            lblValveDp: "Target Valve Pressure Drop (ΔPv)",
            resValveHeader: "Required Valve Coefficient",
            fertTitle: "Stock Tank Parameter",
            lblFertTarget: "Target Element Concentration",
            lblFertVol: "Stock Tank Volume",
            lblFertRatio: "Dilution Injection Ratio (1:X)",
            lblFertPurity: "Element Purity in Fertilizer",
            resFertHeader: "Fertilizer Mass Required",
            fertSafetyTitle: "Stock Tank Safety Rule",
            fertSafetyDesc: "Calcium Nitrate and Phosphate/Sulfate-based fertilizers must be separated into tank A and B to prevent chemical precipitation and clogging.",
            vpdTipSeedling: "During propagation and seedling stage, a lower VPD (0.4-0.8 kPa) prevents soft cells from dehydrating before roots fully develop.",
            vpdTipVeg: "Vegetative stage demands a moderate VPD (0.8-1.1 kPa) to ensure ideal stomatal conductance and healthy cell expansion.",
            vpdTipFlower: "In flowering or fruiting stages, high VPD (1.1-1.5 kPa) pulls calcium and other structural minerals efficiently into the blooms to prevent bud rot.",
            vpdExplanationLow: "Below optimal range ({minOpt}-{maxOpt} kPa). Evaporation is stagnant. Plants are at high risk of calcium deficiency (tipburn) and fungal outbreaks.",
            vpdExplanationOpt: "Perfect climate envelope for your stage ({minOpt}-{maxOpt} kPa). Photosynthetic assimilation rate is maximized.",
            vpdExplanationHigh: "Above optimal range ({minOpt}-{maxOpt} kPa). High evaporation rate. Stomata will close to prevent dehydration, stunting photosynthesis.",
            valveStatusPill: "Ready for Sizing",
            valveExplanation: "For a flow rate of <strong>{flowRate} m³/h</strong>, a mixing valve with Kv <strong>{kv}</strong> is required.",
            pipeRecommendationTitle: "DN Size & Pipe Recommendation",
            pipeRecommendationDesc: "Based on water flow, a <strong>{dn}</strong> pipe is recommended to keep water velocity within the safe 0.5 to 1.0 m/s range. To maintain control authority (with 25% authority margin), it is highly recommended to select a standard commercial valve with <strong>Kvs {kvsMargin}</strong>.",
            fertStatusPill: "Ready to Dissolve",
            fertExplanation: "Dissolve exactly <strong>{mass} kg</strong> of fertilizer into the {tankVolume}L stock tank. When your injector draws at a 1:{dilution} ratio, the irrigation emitter delivers a precise {targetPpm} ppm of the target nutrient.",
            disclaimer: "<strong>Disclaimer:</strong> The calculations provided by this tool are for educational and informational purposes only. Inwoovation is not liable for any crop damage, equipment failure, or financial loss resulting from the use of these calculators. Always double-check calculations and consult certified professionals before applying changes to commercial greenhouses.",
            
            // Heat Loss
            heatLossTitle: "Structure & Climate Data",
            lblEstAreaNew: "Cover Surface Area (A)",
            lblUValue: "Heat Transfer Coeff (U-value)",
            lblTempIn: "Target Indoor Temp (Ti)",
            lblTempOut: "Design Outdoor Temp (To)",
            lblWindSpeed: "Outdoor Wind Speed",
            resHeatLossHeader: "Required Heating Capacity",
            heatLossExplanation: "At outdoor <strong>{tempOut}°C</strong> and indoor <strong>{tempIn}°C</strong>, with a wind speed modifier of <strong>{fWind}</strong>, the total greenhouse heat loss is <strong>{heatLoss} kW</strong> ({btuVal} BTU/h).",
            heatLossStatusPill: "Heat Loss Calculated",
            lblHeatLossPreset: "Cover Material U-Value Preset",
            
            // ROI
            roiTitle: "Energy Price & Equipment Specs",
            lblAnnualDemand: "Annual Heating Demand",
            lblBoilerType: "Existing Boiler Fuel Type",
            lblBoilerFuelPrice: "Existing Fuel Price",
            lblBoilerEff: "Boiler Efficiency",
            lblHpCop: "Heat Pump Average COP",
            lblHpElecPrice: "Agricultural Electricity Price",
            lblHpCapex: "Additional HP Investment (CapEx)",
            resRoiHeader: "Annual Savings & Payback",
            roiExplanation: "For an annual heating demand of <strong>{demand} kWh</strong>, the heat pump saves approximately <strong>{savings}</strong> per year compared to the boiler. The payback period is around <strong>{payback} years</strong>.",
            roiStatusPill: "ROI Analysis Complete",
            lblCurrency: "Base Currency Setting",
            
            // Transpiration
            transTitle: "Microclimate & Canopy Data",
            lblTransTemp: "Greenhouse Temp",
            lblTransRh: "Greenhouse RH",
            lblTransRad: "Greenhouse Solar Rad (Rg)",
            lblTransLai: "Leaf Area Index (LAI)",
            lblTransCrop: "Cultivated Crop Type",
            lblTransWind: "Greenhouse Wind Speed (u)",
            resTransHeader: "Hourly Transpiration Rate (ET)",
            transExplanation: "At {temp}°C, {rh}% RH, and {rad} W/m² internal radiation, the crop transpiration rate is approx <strong>{et} L/m²·hr</strong> (mm/hr). The predicted daily water loss (10-hr light sum) is <strong>{etDay} L/m²·day</strong>.",
            transStatusPill: "Transpiration Calculated",
            promoTitle: "🚀 Optimize Your Greenhouse Operations Further",
            promoDesc: "Download our professional 'Smart Farm Operator OS' Notion Template & Engineering Excel Packages containing sensor calibration schedules, fertigation formulas, and crop logs.",
            btnPromoMain: "Get Notion OS ($19.99)",
            btnPromoSub: "Get Excel Package ($29.00)",

            // Pollinators & Diagnosis (EN)
            tabDiagnosis: "Pest & Disease Diagnosis",
            tabPesticide: "Pesticide REI Diagnosis",
            tabDensity: "Optimal Density Math",
            tabActivity: "Foraging Simulator",
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
            lblPestInputTitle: "Pesticide Database Search",
            lblPestSearch: "Enter Active Ingredient (e.g., Imidacloprid, Boscalid)",
            lblPestResultTitle: "Bee Safety Diagnosis Result",
            lblPestTox: "Bee Toxicity Level",
            lblPestRei: "Safe Re-entry Interval",
            lblPestAction: "SOP Hive Action Guidelines",
            msgPestNoSearch: "Search for a chemical ingredient above to retrieve security protocols.",
            msgPestNotFound: "Ingredient not found in local database. Please refer to toxicity warnings on the product packaging.",
            reiUnit: "Days",
            txtHigh: "Highly Toxic (Red Warning)",
            txtMedium: "Moderately Toxic (Yellow Warning)",
            txtLow: "Relatively Bee-Safe (Green)",
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

            // Vertical Farming (EN)
            lblLightTitle: "Photosynthetic Photon Flux & DLI Optimizer",
            lblCropSelect: "Target Plant Profile",
            optGreens: "Leafy Greens (Target DLI: 16 mol)",
            optStrawberryVert: "Strawberries (Target DLI: 22 mol)",
            optHerbs: "Medicinal Herbs & Basil (Target DLI: 12 mol)",
            optCustom: "Custom (User-Defined DLI)",
            lblTargetDli: "Target DLI (mol/m²/day)",
            lblMeasuredPpfd: "Measured PPFD (μmol/m²/s)",
            lblSliderRed: "Deep Red (660 nm)",
            lblSliderBlue: "Deep Blue (450 nm)",
            lblSliderGreen: "Green/White (550 nm)",
            lblSliderFar: "Far-Red (730 nm)",
            lblDliOutputTitle: "Calculated DLI Output",
            lblOptPhotoperiodTitle: "Optimal Photoperiod",
            lblSpectralEnergyTitle: "Spectral Energy Distribution",
            lblThColor: "Color Band",
            lblThPct: "Percentage (%)",
            lblThFlux: "Estimated Flux (PPFD)",
            lblTblRed: "● Red (660nm)",
            lblTblBlue: "● Blue (450nm)",
            lblTblGreen: "● Green (550nm)",
            lblTblFar: "● Far-Red (730nm)",
            dliUnit: "mol/m²/d",
            hoursUnit: "Hours",
            ppfdTooLow: "<span style='color: var(--danger); font-weight: 600;'>PPFD TOO LOW!</span> Photoperiod maximized to 24 hours. Increase LED intensity or lower mounting height.",
            lightHoursDesc: "Daily run-time required to reach target crop DLI thresholds.",
            lblThermalTitle: "LED Module Thermal & Operational Cost Modeler",
            lblLedPowerLabel: "LED Bar Power P_elec (W)",
            lblLedBarsLabel: "Quantity of LED Bars (N)",
            lblOptEfficiencyLabel: "Optical Efficiency (η_opt)",
            lblHeatsinkAreaLabel: "Heatsink Surface Area per bar (cm²)",
            lblConvectiveHLabel: "Heat Transfer Coeff (h, W/m²K)",
            lblElecRateLabel: "Electricity Rate",
            lblThermalTjTitle: "LED Junction Temperature (T_j)",
            lblThermalCostTitle: "Monthly Racking OPEX",
            lblThermalChartTitle: "Energy Cost Split by Operating Photoperiod",
            tjTooHigh: "<span style='color: var(--danger); font-weight:600;'>⚠️ TJ TOO HIGH!</span> Accelerated lumen decay. Improve heatsink area.",
            tjDesc: "Junction point safety: thermal degradation boundary safe (< 85°C).",
            monthlyUnit: "/ Month",
            opexDesc: "Operational lighting energy expenditure forecast."
        }
    };

    let currentLang = 'ko';
    let currentUnit = localStorage.getItem('smartfarm_unit') || 'metric';
    let currentCategory = 'all';
    let isBetaMode = false;

    // 실시간 검색 및 카테고리 필터링 엔진
    function filterCategory(category) {
        currentCategory = category;
        document.querySelectorAll('.category-chips .chip').forEach(chip => {
            chip.classList.remove('active');
        });
        
        if (category === 'all') document.getElementById('chip-all').classList.add('active');
        else if (category === 'climate') document.getElementById('chip-climate').classList.add('active');
        else if (category === 'facility') document.getElementById('chip-facility').classList.add('active');
        else if (category === 'fertigation') document.getElementById('chip-fertigation').classList.add('active');
        else if (category === 'beta') document.getElementById('chip-beta').classList.add('active');
        
        applyFilters();
    }

    function filterCalculators() {
        applyFilters();
    }

    function applyFilters() {
        const query = document.getElementById('calc-search').value.toLowerCase().trim();
        const tabButtons = document.querySelectorAll('.tabs .tab-btn');
        const dashboardCards = document.querySelectorAll('.dashboard-card');
        
        tabButtons.forEach(btn => {
            if (btn.id === 'btn-tab-dashboard') return; // Dashboard home button is always visible
            const btnCategory = btn.getAttribute('data-category');
            const btnKeywords = btn.getAttribute('data-keywords') ? btn.getAttribute('data-keywords').toLowerCase() : '';
            const btnText = btn.textContent.toLowerCase();
            
            const matchesCategory = (currentCategory === 'all' || btnCategory === currentCategory);
            const matchesQuery = (query === '' || btnKeywords.includes(query) || btnText.includes(query));
            
            const isBetaTab = btn.classList.contains('beta-only-tab');
            const allowedBeta = !isBetaTab || isBetaMode;
            
            if (matchesCategory && matchesQuery && allowedBeta) {
                btn.classList.remove('hide');
            } else {
                btn.classList.add('hide');
            }
        });

        // Dashboard cards filtering with smooth animation
        dashboardCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardKeywords = card.getAttribute('data-keywords') ? card.getAttribute('data-keywords').toLowerCase() : '';
            const cardText = card.textContent.toLowerCase();
            
            const matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);
            const matchesQuery = (query === '' || cardKeywords.includes(query) || cardText.includes(query));
            
            const isBetaCard = card.classList.contains('beta-only-tab');
            const allowedBeta = !isBetaCard || isBetaMode;
            
            if (matchesCategory && matchesQuery && allowedBeta) {
                card.style.display = 'flex';
                card.style.animation = 'fadeInCard 0.3s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function checkBetaMode() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('mode') === 'beta' || urlParams.get('dev') === 'true') {
            isBetaMode = true;
            document.querySelectorAll('.beta-only-tab').forEach(tab => {
                tab.style.display = 'inline-block';
            });
            const betaChip = document.getElementById('chip-beta');
            if (betaChip) betaChip.style.display = 'inline-block';
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        checkBetaMode();
    });

    function changeLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('smartfarm_lang', lang);
        
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        const activeLangBtn = document.getElementById(`lang-${lang}`);
        if (activeLangBtn) activeLangBtn.classList.add('active');
        
        const unitSwitch = document.getElementById('unit-switch');
        if (lang === 'ko') {
            currentUnit = 'metric';
            if (unitSwitch) unitSwitch.style.display = 'none';
        } else {
            if (unitSwitch) {
                unitSwitch.style.display = 'flex';
                document.querySelectorAll('#unit-switch .lang-btn').forEach(btn => btn.classList.remove('active'));
                const activeUnitBtn = document.getElementById(`unit-${currentUnit}`);
                if (activeUnitBtn) activeUnitBtn.classList.add('active');
            }
        }
        
        const headerTitle = document.getElementById('header-title');
        if (headerTitle) headerTitle.innerText = i18n[lang].headerTitle;
        const headerDesc = document.getElementById('header-desc');
        if (headerDesc) headerDesc.innerText = i18n[lang].headerDesc;
        
        const searchInput = document.getElementById('calc-search');
        if (searchInput) {
            searchInput.placeholder = lang === 'ko' ? '필요한 계산기나 키워드를 입력하세요... (예: VPD, 난방, 양액, DLI)' : 'Search calculators or keywords... (e.g. VPD, heating, nutrient, DLI)';
        }
        
        // Navigation Tabs translation helper
        const translateTab = (id, desktopKey, mobileKey) => {
            const tab = document.getElementById(id);
            if (tab) {
                const dt = tab.querySelector('.desktop-text');
                const mb = tab.querySelector('.mobile-text');
                if (dt) dt.innerText = i18n[lang][desktopKey];
                if (mb) mb.innerText = i18n[lang][mobileKey];
            }
        };

        translateTab('btn-tab-vpd', 'tabVpdDeskt', 'tabVpdMobil');
        translateTab('btn-tab-valve', 'tabValveDeskt', 'tabValveMobil');
        translateTab('btn-tab-fert', 'tabFertDeskt', 'tabFertMobil');
        translateTab('btn-tab-heat-loss', 'tabHeatLossDeskt', 'tabHeatLossMobil');
        translateTab('btn-tab-roi', 'tabRoiDeskt', 'tabRoiMobil');
        translateTab('btn-tab-transpiration', 'tabTranspirationDeskt', 'tabTranspirationMobil');
        translateTab('btn-tab-pollinator', 'tabPollinatorDeskt', 'tabPollinatorMobil');
        translateTab('btn-tab-vertical', 'tabVerticalDeskt', 'tabVerticalMobil');

        // Safe elements helper
        const safeText = (selector, text) => {
            const el = document.querySelector(selector) || document.getElementById(selector);
            if (el) el.innerText = text;
        };

        const safeOptionText = (id, index, text) => {
            const el = document.getElementById(id);
            if (el && el.options && el.options[index]) el.options[index].text = text;
        };

        // VPD Section translation
        if (document.getElementById('section-vpd')) {
            safeText('#section-vpd .form-panel .panel-title', i18n[lang].vpdTitle);
            safeText('stage-seedling', i18n[lang].stageSeedling);
            safeText('stage-veg', i18n[lang].stageVeg);
            safeText('stage-flower', i18n[lang].stageFlower);
            safeText('label[for="temp-air"]', i18n[lang].lblAirTemp);
            safeText('label[for="rh-air"]', i18n[lang].lblRhAir);
            safeText('label[for="offset-leaf"]', i18n[lang].lblOffsetLeaf);
            safeText('#section-vpd .result-panel .result-header', i18n[lang].resVpdHeader);
            safeText('#section-vpd .result-panel .info-card h4', i18n[lang].tipTitle);
            safeText('lbl-vpd-preset', lang === 'ko' ? '광원 및 환경 프리셋' : 'Light & Env Preset');
            
            safeOptionText('vpd-preset', 0, lang === 'ko' ? '직접 입력 (Custom)' : 'Custom Input');
            safeOptionText('vpd-preset', 1, lang === 'ko' ? 'LED 조명 온실 (엽온 편차 +1.0°C)' : 'LED Greenhouse (Offset +1.0°C)');
            safeOptionText('vpd-preset', 2, lang === 'ko' ? '고압나트륨등(HPS) 온실 (엽온 편차 -2.0°C)' : 'HPS Greenhouse (Offset -2.0°C)');
            safeOptionText('vpd-preset', 3, lang === 'ko' ? '자연광 낮 (엽온 편차 -1.5°C)' : 'Sunlight Day (Offset -1.5°C)');
            safeOptionText('vpd-preset', 4, lang === 'ko' ? '야간/암기 (엽온 편차 0.0°C)' : 'Night/Dark (Offset 0.0°C)');
        }

        // Mixing Valve Section translation
        if (document.getElementById('section-valve')) {
            safeText('#section-valve .form-panel .panel-title', i18n[lang].valveTitle);
            safeText('label[for="heat-power"]', i18n[lang].lblHeatPower);
            safeText('label[for="valve-dt"]', i18n[lang].lblValveDt);
            safeText('label[for="valve-dp"]', i18n[lang].lblValveDp);
            safeText('#section-valve .result-panel .result-header', i18n[lang].resValveHeader);
            safeText('lbl-estimator-title', lang === 'ko' ? '온실 난방부하 간이 계산기' : 'Greenhouse Heat Load Estimator');
            safeText('lbl-est-area', lang === 'ko' ? '온실 바닥 면적' : 'Greenhouse Floor Area');
            safeText('lbl-est-cover', lang === 'ko' ? '피복재 종류' : 'Cover Material Type');
            safeText('lbl-est-temp-in', lang === 'ko' ? '희망 실내 온도' : 'Target Indoor Temp');
            safeText('lbl-est-temp-out', lang === 'ko' ? '설계 최저 외기온' : 'Expected Outdoor Min');
            safeText('lbl-est-result', lang === 'ko' ? '추정 난방부하 결과' : 'Estimated Heat Load');
            safeText('btn-apply-est', lang === 'ko' ? '추정부하 입력창에 적용하기' : 'Apply to Heat Demand');
            
            safeOptionText('est-cover', 0, lang === 'ko' ? '단동 비닐 (U=6.0)' : 'Single Poly Film (U=6.0)');
            safeOptionText('est-cover', 1, lang === 'ko' ? '이중 비닐 (U=3.5)' : 'Double Poly Film (U=3.5)');
            safeOptionText('est-cover', 2, lang === 'ko' ? '유리 온실 (U=5.5)' : 'Glass Greenhouse (U=5.5)');
            safeOptionText('est-cover', 3, lang === 'ko' ? 'PC판 온실 (U=2.8)' : 'PC Sheet Greenhouse (U=2.8)');
        }

        // Fertigation Section translation
        if (document.getElementById('section-fert')) {
            safeText('#section-fert .form-panel .panel-title', i18n[lang].fertTitle);
            safeText('label[for="fert-target"]', i18n[lang].lblFertTarget);
            safeText('label[for="fert-vol"]', i18n[lang].lblFertVol);
            safeText('label[for="fert-ratio"]', i18n[lang].lblFertRatio);
            safeText('label[for="fert-purity"]', i18n[lang].lblFertPurity);
            safeText('#section-fert .result-panel .result-header', i18n[lang].resFertHeader);
            safeText('#section-fert .result-panel .info-card h4', i18n[lang].fertSafetyTitle);
            safeText('#section-fert .result-panel .info-card p', i18n[lang].fertSafetyDesc);
            safeText('lbl-fert-preset', lang === 'ko' ? '비료 종류 프리셋' : 'Fertilizer Preset');
            
            safeOptionText('fert-preset', 0, lang === 'ko' ? '직접 입력 (Custom)' : 'Custom Input');
            safeOptionText('fert-preset', 1, lang === 'ko' ? '질산칼슘 (Calcium Nitrate - N 15.5%)' : 'Calcium Nitrate (N 15.5%)');
            safeOptionText('fert-preset', 2, lang === 'ko' ? '질산칼륨 (Potassium Nitrate - N 13.0%)' : 'Potassium Nitrate (N 13.0%)');
            safeOptionText('fert-preset', 3, lang === 'ko' ? '제일인산칼륨 (MKP - P 22.7%)' : 'Monopotassium Phosphate (MKP - P 22.7%)');
            safeOptionText('fert-preset', 4, lang === 'ko' ? '황산칼륨 (Potassium Sulfate - K 41.5%)' : 'Potassium Sulfate (K 41.5%)');
            safeOptionText('fert-preset', 5, lang === 'ko' ? '황산마그네슘 (Magnesium Sulfate - Mg 9.8%)' : 'Magnesium Sulfate (Mg 9.8%)');
            safeOptionText('fert-preset', 6, lang === 'ko' ? '황산암모늄 (Ammonium Sulfate - N 21.0%)' : 'Ammonium Sulfate (N 21.0%)');
            
            // Acid Neutralizer translation
            safeText('lbl-acid-title', lang === 'ko' ? '원수 중탄산(pH) 중화 계산기' : 'Raw Bicarbonate (pH) Neutralizer');
            safeText('lbl-acid-raw', lang === 'ko' ? '원수 중탄산 (HCO₃⁻)' : 'Raw Bicarbonate (HCO₃⁻)');
            safeText('lbl-acid-target', lang === 'ko' ? '목표 중탄산 농도' : 'Target Bicarbonate');
            safeText('lbl-acid-select', lang === 'ko' ? '사용할 강산 종류' : 'Acid Type to Use');
            
            const optNitric = document.getElementById('opt-acid-nitric');
            if (optNitric) optNitric.text = lang === 'ko' ? '질산 60% (HNO₃ 13.0 M)' : 'Nitric Acid 60% (HNO₃ 13.0 M)';
            const optPhosphoric = document.getElementById('opt-acid-phosphoric');
            if (optPhosphoric) optPhosphoric.text = lang === 'ko' ? '인산 85% (H₃PO₄ 14.6 M)' : 'Phosphoric Acid 85% (H₃PO₄ 14.6 M)';
            
            safeText('lbl-acid-result', lang === 'ko' ? '산 필요 투입량' : 'Acid Vol Required');
        }

        // Live Climate Action Guide
        safeText('lbl-vpd-actions-title', lang === 'ko' ? '실시간 환경 제어 지침' : 'Live Climate Action Guide');

        // Heat Loss translation
        if (document.getElementById('section-heat-loss')) {
            safeText('lbl-heat-loss-title-ui', i18n[lang].heatLossTitle);
            safeText('lbl-hl-preset', i18n[lang].lblHeatLossPreset);
            safeText('lbl-hl-area', i18n[lang].lblEstAreaNew);
            safeText('lbl-hl-uvalue', i18n[lang].lblUValue);
            safeText('lbl-hl-temp-in', i18n[lang].lblTempIn);
            safeText('lbl-hl-temp-out', i18n[lang].lblTempOut);
            safeText('lbl-hl-wind', i18n[lang].lblWindSpeed);
            safeText('lbl-hl-result-hdr', i18n[lang].resHeatLossHeader);
            safeText('lbl-hl-tip-title', lang === 'ko' ? "풍속 마찰 손실 반영" : "Wind Friction Effects");
            safeText('hl-tip-desc', lang === 'ko' ? "바람이 강할수록 대류 열전달 계수가 증가하여 추가적인 외벽 열손실이 발생합니다. 본 계산기는 풍속(m/s)에 따라 최대 1.4배의 마찰 수정 계수를 적용합니다." : "High wind speed increases convective heat loss from the cover. This calculator applies up to a 1.4x modifier based on wind speed.");
            safeText('hl-status-pill', i18n[lang].heatLossStatusPill);
            
            safeOptionText('hl-preset', 0, lang === 'ko' ? '직접 입력 (Custom)' : 'Custom Input');
            safeOptionText('hl-preset', 1, lang === 'ko' ? '단층 비닐 (U=6.0)' : 'Single Poly (U=6.0)');
            safeOptionText('hl-preset', 2, lang === 'ko' ? '이중 비닐 (U=3.5)' : 'Double Poly (U=3.5)');
            safeOptionText('hl-preset', 3, lang === 'ko' ? '유리 온실 (U=5.5)' : 'Single Glass (U=5.5)');
            safeOptionText('hl-preset', 4, lang === 'ko' ? '복층 유리 (U=3.0)' : 'Double Glass (U=3.0)');
            safeOptionText('hl-preset', 5, lang === 'ko' ? 'PC판 8mm (U=3.3)' : 'PC Sheet 8mm (U=3.3)');
            safeOptionText('hl-preset', 6, lang === 'ko' ? 'PC판 16mm (U=2.3)' : 'PC Sheet 16mm (U=2.3)');
        }

        // ROI translation
        if (document.getElementById('section-roi')) {
            safeText('lbl-roi-title-ui', i18n[lang].roiTitle);
            safeText('lbl-roi-currency', i18n[lang].lblCurrency);
            safeText('lbl-roi-demand', i18n[lang].lblAnnualDemand);
            safeText('lbl-roi-boiler-type', i18n[lang].lblBoilerType);
            safeText('lbl-roi-boiler-price', i18n[lang].lblBoilerFuelPrice);
            safeText('lbl-roi-boiler-eff', i18n[lang].lblBoilerEff);
            safeText('lbl-roi-hp-cop', i18n[lang].lblHpCop);
            safeText('lbl-roi-hp-price', i18n[lang].lblHpElecPrice);
            safeText('lbl-roi-capex', i18n[lang].lblHpCapex);
            safeText('lbl-roi-result-hdr', i18n[lang].resRoiHeader);
            safeText('lbl-roi-tip-title', lang === 'ko' ? "COP (성적계수) 효과" : "COP Performance Factor");
            safeText('roi-tip-desc', lang === 'ko' ? "히트펌프는 대기나 지열에서 열을 흡수하므로 소비하는 전기 에너지의 수 배에 달하는 열 에너지를 출력합니다. COP가 3.5인 경우 소비 전력 1kW당 3.5kW의 난방 에너지를 생산하여 비용을 혁신적으로 절감합니다." : "Heat pumps move heat instead of generating it, producing multiple times the energy they consume. A COP of 3.5 delivers 3.5 kW of heat per 1 kW of electrical input.");
            safeText('roi-status-pill', i18n[lang].roiStatusPill);
        }

        // Transpiration translation
        if (document.getElementById('section-transpiration')) {
            safeText('lbl-trans-title-ui', i18n[lang].transTitle);
            safeText('lbl-tr-crop', i18n[lang].lblTransCrop);
            safeText('lbl-tr-rs', lang === 'ko' ? '기공 저항 (rs)' : 'Stomatal Resistance (rs)');
            safeText('lbl-tr-temp', i18n[lang].lblTransTemp);
            safeText('lbl-tr-rh', i18n[lang].lblTransRh);
            safeText('lbl-tr-rad', i18n[lang].lblTransRad);
            safeText('lbl-tr-lai', i18n[lang].lblTransLai);
            safeText('lbl-tr-wind', i18n[lang].lblTransWind);
            safeText('lbl-trans-result-hdr', i18n[lang].resTransHeader);
            safeText('lbl-trans-tip-title', lang === 'ko' ? "PM 수식과 작물 증산" : "Penman-Monteith Biophysics");
            safeText('hl-trans-tip-desc', lang === 'ko' ? "Penman-Monteith(펜맨-몬테이쓰) 수식은 태양 복사 에너지(복사열 항)와 주변 공기의 VPD 및 경계층 풍속(공기역학적 항)을 종합하여 식물의 생리적 물 증산 요구량을 계산하는 국제 표준 모델입니다." : "The Penman-Monteith equation is the physical standard integrating radiation energy balance and aerodynamic vapor transfer, constrained by plant stomatal resistance.");
            safeText('trans-status-pill', i18n[lang].transStatusPill);
            
            safeOptionText('tr-crop', 0, lang === 'ko' ? '토마토 (Tomato, rs=100 s/m)' : 'Tomato (rs=100 s/m)');
            safeOptionText('tr-crop', 1, lang === 'ko' ? '파프리카 (Pepper, rs=120 s/m)' : 'Bell Pepper (rs=120 s/m)');
            safeOptionText('tr-crop', 2, lang === 'ko' ? '오이 (Cucumber, rs=80 s/m)' : 'Cucumber (rs=80 s/m)');
            safeOptionText('tr-crop', 3, lang === 'ko' ? '딸기 (Strawberry, rs=150 s/m)' : 'Strawberry (rs=150 s/m)');
            safeOptionText('tr-crop', 4, lang === 'ko' ? '직접 입력 (Custom)' : 'Custom Input');
        }

        // Pollinators & Diagnosis Section translation
        if (document.getElementById('section-pollinator')) {
            safeText('lbl-diag-input-title', i18n[lang].lblDiagInputTitle);
            safeText('lbl-select-crop', i18n[lang].lblSelectCrop);
            safeText('lbl-select-part', i18n[lang].lblSelectPart);
            safeText('lbl-select-symptom', i18n[lang].lblSelectSymptom);
            safeText('lbl-diag-result-title', i18n[lang].lblDiagResultTitle);
            safeText('lbl-pest-input-title', i18n[lang].lblPestInputTitle);
            
            const pestSearchInput = document.getElementById('pest-search');
            if (pestSearchInput) pestSearchInput.placeholder = i18n[lang].lblPestSearch;
            
            safeText('lbl-pest-result-title', i18n[lang].lblPestResultTitle);
            safeText('lbl-density-input-title', i18n[lang].lblDensityInputTitle);
            safeText('lbl-crop-type', i18n[lang].lblCropType);
            safeText('lbl-area', i18n[lang].lblArea);
            safeText('lbl-season', i18n[lang].lblSeason);
            safeText('lbl-density-result-title', i18n[lang].lblDensityResultTitle);
            safeText('lbl-req-hives-title', i18n[lang].lblRequiredHives);
            safeText('lbl-expected-lifespan-title', i18n[lang].lblExpectedLifespan);
            safeText('lbl-density-desc-title', i18n[lang].lblDensityDesc);
            safeText('lbl-act-input-title', i18n[lang].lblActInputTitle);
            safeText('lbl-max-temp', i18n[lang].lblMaxTemp);
            safeText('lbl-min-temp', i18n[lang].lblMinTemp);
            safeText('lbl-act-result-title', i18n[lang].lblActResultTitle);
            safeText('lbl-act-status-title', i18n[lang].lblActStatus);
            safeText('lbl-act-guide-title', i18n[lang].lblActGuide);
            
            safeOptionText('crop-type', 0, i18n[lang].optTomato);
            safeOptionText('crop-type', 1, i18n[lang].optStrawberry);
            safeOptionText('crop-type', 2, i18n[lang].optMelon);
            safeOptionText('crop-type', 3, i18n[lang].optBlueberry);
            safeOptionText('crop-type', 4, i18n[lang].optPepper);
            
            safeOptionText('season', 0, i18n[lang].optSpringAutumn);
            safeOptionText('season', 1, i18n[lang].optSummer);
            safeOptionText('season', 2, i18n[lang].optWinter);
            
            safeText('btn-subtab-diagnosis', i18n[lang].tabDiagnosis);
            safeText('btn-subtab-pesticide', i18n[lang].tabPesticide);
            safeText('btn-subtab-density', i18n[lang].tabDensity);
            safeText('btn-subtab-activity', i18n[lang].tabActivity);
        }

        // Vertical Section translation
        if (document.getElementById('section-vertical')) {
            safeText('lbl-light-title', i18n[lang].lblLightTitle);
            safeText('lbl-crop-select', i18n[lang].lblCropSelect);
            safeText('opt-greens', i18n[lang].optGreens);
            safeText('opt-strawberry', i18n[lang].optStrawberryVert);
            safeText('opt-herbs', i18n[lang].optHerbs);
            safeText('opt-custom', i18n[lang].optCustom);
            safeText('lbl-target-dli', i18n[lang].lblTargetDli);
            safeText('lbl-measured-ppfd', i18n[lang].lblMeasuredPpfd);
            safeText('lbl-slider-red', i18n[lang].lblSliderRed);
            safeText('lbl-slider-blue', i18n[lang].lblSliderBlue);
            safeText('lbl-slider-green', i18n[lang].lblSliderGreen);
            safeText('lbl-slider-far', i18n[lang].lblSliderFar);
            safeText('lbl-dli-output-title', i18n[lang].lblDliOutputTitle);
            safeText('lbl-opt-photoperiod-title', i18n[lang].lblOptPhotoperiodTitle);
            safeText('lbl-spectral-energy-title', i18n[lang].lblSpectralEnergyTitle);
            safeText('lbl-th-color', i18n[lang].lblThColor);
            safeText('lbl-th-pct', i18n[lang].lblThPct);
            safeText('lbl-th-flux', i18n[lang].lblThFlux);
            safeText('lbl-tbl-red', i18n[lang].lblTblRed);
            safeText('lbl-tbl-blue', i18n[lang].lblTblBlue);
            safeText('lbl-tbl-green', i18n[lang].lblTblGreen);
            safeText('lbl-tbl-far', i18n[lang].lblTblFar);
            
            safeText('lbl-thermal-title', i18n[lang].lblThermalTitle);
            safeText('lbl-led-power-label', i18n[lang].lblLedPowerLabel);
            safeText('lbl-led-bars-label', i18n[lang].lblLedBarsLabel);
            safeText('lbl-opt-efficiency-label', i18n[lang].lblOptEfficiencyLabel);
            safeText('lbl-heatsink-area-label', i18n[lang].lblHeatsinkAreaLabel);
            safeText('lbl-convective-h-label', i18n[lang].lblConvectiveHLabel);
            safeText('lbl-elec-rate-label', i18n[lang].lblElecRateLabel);
            safeText('lbl-thermal-tj-title', i18n[lang].lblThermalTjTitle);
            safeText('lbl-thermal-cost-title', i18n[lang].lblThermalCostTitle);
            safeText('lbl-thermal-chart-title', i18n[lang].lblThermalChartTitle);
            safeText('opex-desc', i18n[lang].opexDesc);
            
            safeText('btn-subtab-light', lang === 'ko' ? "PPFD & DLI 계산기" : "PPFD & DLI Optimizer");
            safeText('btn-subtab-thermal', lang === 'ko' ? "LED 방열 및 OPEX" : "LED Thermal & OPEX");
        }

        const elecRateSuffix = document.getElementById('lbl-elec-rate-suffix');
        const elecRateInput = document.getElementById('elec-rate');
        if (elecRateSuffix && elecRateInput) {
            if (lang === 'ko') {
                elecRateSuffix.innerText = '원/kWh';
                if (elecRateInput.value === '0.25') {
                    elecRateInput.value = '150';
                }
            } else {
                elecRateSuffix.innerText = '€/kWh';
                if (elecRateInput.value === '150') {
                    elecRateInput.value = '0.25';
                }
            }
        }

        // General translations
        safeText('header-badge', lang === 'ko' ? '최종 업데이트: 2026년 6월 18일' : 'Last Updated: June 18, 2026');
        safeText('lbl-feedback-text', lang === 'ko' ? '문의 및 의뢰하기' : 'Inquiry & Request');
        
        const footerDisclaimer = document.getElementById('footer-disclaimer');
        if (footerDisclaimer) footerDisclaimer.innerHTML = i18n[lang].disclaimer;

        // Run functions conditionally based on presence of elements
        if (document.getElementById('section-fert')) {
            if (typeof applyFertPreset === 'function') applyFertPreset();
        }
        if (document.getElementById('section-vpd')) {
            if (typeof applyVpdPreset === 'function') applyVpdPreset();
        }
        if (document.getElementById('section-valve')) {
            if (typeof runEstimatorEngine === 'function') runEstimatorEngine();
        }
        if (document.getElementById('section-fert')) {
            if (typeof runAcidEngine === 'function') runAcidEngine();
        }
        if (document.getElementById('section-heat-loss')) {
            if (typeof applyHlPreset === 'function') applyHlPreset();
        }
        if (document.getElementById('section-transpiration')) {
            if (typeof applyTrCropPreset === 'function') applyTrCropPreset();
        }
        if (document.getElementById('section-heat-loss')) {
            if (typeof calculateHeatLossEngine === 'function') calculateHeatLossEngine();
        }
        if (document.getElementById('section-roi')) {
            if (typeof calculateRoiEngine === 'function') calculateRoiEngine();
        }
        if (document.getElementById('section-transpiration')) {
            if (typeof calculateTranspirationEngine === 'function') calculateTranspirationEngine();
        }
        
        // Refresh integrated tabs
        if (document.getElementById('section-pollinator')) {
            if (typeof updatePartOptions === 'function') updatePartOptions();
            if (typeof updatePesticideUI === 'function') updatePesticideUI();
            if (typeof calculateDensity === 'function') calculateDensity();
            if (typeof simulateActivity === 'function') simulateActivity();
        }
        if (document.getElementById('section-vertical')) {
            if (typeof calculateLight === 'function') calculateLight();
            if (typeof calculateThermal === 'function') calculateThermal();
        }
        if (typeof updatePyeongHelpers === 'function') updatePyeongHelpers();

        // Toggle academic guides based on language
        document.querySelectorAll('.academic-guide-lang').forEach(el => {
            if (el.getAttribute('data-lang') === lang) {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }
        });

        // Translate Dashboard tab button
        const dashboardTab = document.getElementById('btn-tab-dashboard');
        if (dashboardTab) {
            const dt = dashboardTab.querySelector('.desktop-text');
            const mb = dashboardTab.querySelector('.mobile-text');
            if (dt) dt.innerText = lang === 'ko' ? '🏠 대시보드 홈' : '🏠 Dashboard Home';
            if (mb) mb.innerText = lang === 'ko' ? '홈' : 'Home';
        }

        // Toggle Dashboard internal cards texts
        document.querySelectorAll('.lang-text-ko').forEach(el => el.style.display = lang === 'ko' ? 'inline' : 'none');
        document.querySelectorAll('.lang-text-en').forEach(el => el.style.display = lang === 'en' ? 'inline' : 'none');
        document.querySelectorAll('.lang-block-ko').forEach(el => el.style.display = lang === 'ko' ? 'block' : 'none');
        document.querySelectorAll('.lang-block-en').forEach(el => el.style.display = lang === 'en' ? 'block' : 'none');

        // Apply filters to sync UI
        if (typeof applyFilters === 'function') applyFilters();
    }

    // ==========================================
    // REGIONAL UNITS SYSTEM & PYEONG CONVERSIONS
    // ==========================================
    
    function changeUnit(unit) {
        if (unit !== 'metric' && unit !== 'imperial') unit = 'metric';
        currentUnit = unit;
        localStorage.setItem('smartfarm_unit', unit);
        
        document.querySelectorAll('#unit-switch .lang-btn').forEach(btn => btn.classList.remove('active'));
        const activeUnitBtn = document.getElementById(`unit-${unit}`);
        if (activeUnitBtn) activeUnitBtn.classList.add('active');
        
        if (typeof updateUnitUI === 'function') updateUnitUI();
    }

    function updatePyeongHelpers() {
        if (currentLang !== 'ko') {
            document.querySelectorAll('.pyeong-helper').forEach(el => el.style.display = 'none');
            return;
        }
        const targets = [
            { inputId: 'est-area', helperId: 'est-area-pyeong' },
            { inputId: 'hl-area', helperId: 'hl-area-pyeong' },
            { inputId: 'area', helperId: 'area-pyeong' }
        ];
        targets.forEach(item => {
            const input = document.getElementById(item.inputId);
            const helper = document.getElementById(item.helperId);
            if (!input || !helper) return;
            const val = parseFloat(input.value);
            if (!isNaN(val) && val > 0) {
                const pyeong = Math.round(val / 3.30578 * 10) / 10;
                helper.innerHTML = `(약 <strong>${pyeong.toLocaleString()}</strong> 평)`;
                helper.style.display = 'block';
            } else {
                helper.style.display = 'none';
            }
        });
    }

    function updateUnitUI() {
        const isImperial = (currentUnit === 'imperial');
        
        const safeSuffix = (id, text) => {
            const el = document.getElementById(id);
            if (el) el.innerText = text;
        };

        // Update input suffixes in DOM
        safeSuffix('est-area-suffix', isImperial ? 'sq ft' : 'm²');
        safeSuffix('hl-area-suffix', isImperial ? 'sq ft' : 'm²');
        safeSuffix('area-suffix', isImperial ? 'sq ft' : (currentLang === 'ko' ? '㎡' : 'm²'));
        safeSuffix('hl-uvalue-suffix', isImperial ? 'BTU/h·ft²·°F' : 'W/m²·K');
        safeSuffix('hl-temp-in-suffix', isImperial ? '°F' : '°C');
        safeSuffix('hl-temp-out-suffix', isImperial ? '°F' : '°C');
        safeSuffix('hl-wind-suffix', isImperial ? 'mph' : 'm/s');
        safeSuffix('dt-suffix', isImperial ? '°F' : '°C');
        safeSuffix('fert-vol-suffix', isImperial ? 'gal' : 'Liters');
        safeSuffix('tr-temp-suffix', isImperial ? '°F' : '°C');
        safeSuffix('tr-wind-suffix', isImperial ? 'mph' : 'm/s');
        
        // Update labels for VPD temperature unit switcher automatically
        if (isImperial) {
            if (typeof switchTempUnit === 'function') {
                try { switchTempUnit('F'); } catch(e) {}
            }
        } else {
            if (typeof switchTempUnit === 'function') {
                try { switchTempUnit('C'); } catch(e) {}
            }
        }

        // Convert default input values if they are still standard metric/imperial defaults
        const conversions = [
            { id: 'est-area', toImp: val => Math.round(val * 10.7639), toMet: val => Math.round(val / 10.7639) },
            { id: 'hl-area', toImp: val => Math.round(val * 10.7639), toMet: val => Math.round(val / 10.7639) },
            { id: 'area', toImp: val => Math.round(val * 10.7639), toMet: val => Math.round(val / 10.7639) },
            { id: 'hl-uvalue', toImp: val => parseFloat((val * 0.17611).toFixed(2)), toMet: val => parseFloat((val / 0.17611).toFixed(2)) },
            { id: 'hl-temp-in', toImp: val => Math.round(val * 1.8 + 32), toMet: val => Math.round((val - 32) / 1.8) },
            { id: 'hl-temp-out', toImp: val => Math.round(val * 1.8 + 32), toMet: val => Math.round((val - 32) / 1.8) },
            { id: 'hl-wind', toImp: val => parseFloat((val * 2.23694).toFixed(1)), toMet: val => parseFloat((val / 2.23694).toFixed(1)) },
            { id: 'valve-dt', toImp: val => parseFloat((val * 1.8).toFixed(1)), toMet: val => parseFloat((val / 1.8).toFixed(1)) },
            { id: 'fert-vol', toImp: val => Math.round(val / 3.78541), toMet: val => Math.round(val * 3.78541) },
            { id: 'tr-temp', toImp: val => Math.round(val * 1.8 + 32), toMet: val => Math.round((val - 32) / 1.8) },
            { id: 'tr-wind', toImp: val => parseFloat((val * 2.23694).toFixed(1)), toMet: val => parseFloat((val / 2.23694).toFixed(1)) }
        ];

        conversions.forEach(item => {
            const el = document.getElementById(item.id);
            if (!el) return;
            const val = parseFloat(el.value);
            if (isNaN(val)) return;
            
            const lastUnit = el.dataset.lastUnit || 'metric';
            if (lastUnit !== currentUnit) {
                if (isImperial) {
                    el.value = item.toImp(val);
                } else {
                    el.value = item.toMet(val);
                }
                el.dataset.lastUnit = currentUnit;
            }
        });
        
        // Re-run calculations conditionally based on element presence
        if (document.getElementById('section-valve')) {
            try { if (typeof runEstimatorEngine === 'function') runEstimatorEngine(); } catch(e) {}
        }
        if (document.getElementById('section-heat-loss')) {
            try { if (typeof calculateHeatLossEngine === 'function') calculateHeatLossEngine(); } catch(e) {}
        }
        if (document.getElementById('section-roi')) {
            try { if (typeof calculateRoiEngine === 'function') calculateRoiEngine(); } catch(e) {}
        }
        if (document.getElementById('section-transpiration')) {
            try { if (typeof calculateTranspirationEngine === 'function') calculateTranspirationEngine(); } catch(e) {}
        }
        if (document.getElementById('section-pollinator')) {
            try { if (typeof calculateDensity === 'function') calculateDensity(); } catch(e) {}
        }
        if (document.getElementById('section-fert')) {
            try { if (typeof calculateFertEngine === 'function') calculateFertEngine(); } catch(e) {}
        }
    }
    
    function resetToHome() {
        const searchInput = document.getElementById('calc-search');
        if (searchInput) searchInput.value = '';
        filterCategory('all');
        switchTab('dashboard');
    }
    
    function switchTab(target) {
        const targetPages = {
            'dashboard': 'index.html',
            'vpd': 'vpd.html',
            'valve': 'mixing_valve.html',
            'fert': 'fertigation.html',
            'heat-loss': 'heat_loss.html',
            'roi': 'roi_simulator.html',
            'transpiration': 'transpiration.html',
            'pollinator': 'diagnosis.html',
            'vertical': 'vertical_dli.html'
        };

        const targetSec = document.getElementById(`section-${target}`);
        if (!targetSec && targetPages[target]) {
            // Target section is not on this page, redirect to the page
            window.location.href = targetPages[target];
            return;
        }

        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.calc-wrapper').forEach(card => card.classList.remove('active'));
        
        const targetBtn = document.getElementById(`btn-tab-${target}`);
        if (targetBtn) targetBtn.classList.add('active');
        if (targetSec) targetSec.classList.add('active');
        
        // Smooth scroll to top when changing tabs
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Google Analytics 4 Custom Event for Tab Switches
        if (typeof gtag === 'function') {
            gtag('event', 'calculator_tab_switch', {
                'tab_name': target
            });
        }
        
        if (target === 'vpd') {
            if (typeof calculateVpdEngine === 'function') calculateVpdEngine();
        } else if (target === 'valve') {
            if (typeof calculateValveEngine === 'function') calculateValveEngine();
        } else if (target === 'fert') {
            if (typeof calculateFertEngine === 'function') calculateFertEngine();
            if (typeof runAcidEngine === 'function') runAcidEngine();
        } else if (target === 'heat-loss') {
            if (typeof calculateHeatLossEngine === 'function') calculateHeatLossEngine();
        } else if (target === 'roi') {
            if (typeof calculateRoiEngine === 'function') calculateRoiEngine();
        } else if (target === 'transpiration') {
            if (typeof calculateTranspirationEngine === 'function') calculateTranspirationEngine();
        } else if (target === 'pollinator') {
            if (typeof calculateDensity === 'function') calculateDensity();
            if (typeof simulateActivity === 'function') simulateActivity();
        } else if (target === 'vertical') {
            if (typeof calculateLight === 'function') calculateLight();
            if (typeof calculateThermal === 'function') calculateThermal();
        }
    }
    
    function toggleAccordion(id) {
        const acc = document.getElementById(id);
        acc.classList.toggle('open');
    }
    let currentTempUnit = 'C';
    let currentVpdStage = 'seedling';
    let currentPowerUnit = 'kW';
    let currentPressUnit = 'kPa';
    function applyVpdPreset() {
        const preset = document.getElementById('vpd-preset').value;
        const offsetEl = document.getElementById('offset-leaf');
        if (preset === 'custom') {
            offsetEl.disabled = false;
        } else {
            offsetEl.disabled = true;
            if (preset === 'led') {
                offsetEl.value = currentTempUnit === 'F' ? "1.8" : "1.0";
            } else if (preset === 'hps') {
                offsetEl.value = currentTempUnit === 'F' ? "-3.6" : "-2.0";
            } else if (preset === 'sunlight') {
                offsetEl.value = currentTempUnit === 'F' ? "-2.7" : "-1.5";
            } else if (preset === 'night') {
                offsetEl.value = "0.0";
            }
        }
        calculateVpdEngine();
    }
    function switchTempUnit(unit) {
        if (currentTempUnit === unit) return;
        currentTempUnit = unit;
        const cBtn = document.getElementById('temp-unit-c');
        const fBtn = document.getElementById('temp-unit-f');
        const tempValEl = document.getElementById('temp-air');
        const offsetValEl = document.getElementById('offset-leaf');
        const tempSuffix = document.getElementById('temp-air-unit');
        const offsetSuffix = document.getElementById('offset-leaf-unit');
        let tempVal = parseFloat(tempValEl.value);
        let offsetVal = parseFloat(offsetValEl.value);
        if (unit === 'F') {
            cBtn.classList.remove('active');
            fBtn.classList.add('active');
            tempValEl.value = (tempVal * 1.8 + 32).toFixed(1);
            offsetValEl.value = (offsetVal * 1.8).toFixed(1);
            tempSuffix.innerText = '°F';
            offsetSuffix.innerText = '°F';
        } else {
            cBtn.classList.add('active');
            fBtn.classList.remove('active');
            tempValEl.value = ((tempVal - 32) / 1.8).toFixed(1);
            offsetValEl.value = (offsetVal / 1.8).toFixed(1);
            tempSuffix.innerText = '°C';
            offsetSuffix.innerText = '°C';
        }
        applyVpdPreset();
    }
    function setVpdStage(stage) {
        currentVpdStage = stage;
        document.querySelectorAll('#section-vpd .segmented-control button').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`stage-${stage}`).classList.add('active');
        calculateVpdEngine();
    }
    function calculateVpdEngine() {
        let T_air = parseFloat(document.getElementById('temp-air').value);
        let RH = parseFloat(document.getElementById('rh-air').value);
        let dT = parseFloat(document.getElementById('offset-leaf').value);
        if (isNaN(T_air) || isNaN(RH) || isNaN(dT)) return;
        if (currentTempUnit === 'F') {
            T_air = (T_air - 32) / 1.8;
            dT = dT / 1.8;
        }
        const T_leaf = T_air + dT;
        const VPsat_air = 0.61078 * Math.exp((17.27 * T_air) / (T_air + 237.3));
        const VPsat_leaf = 0.61078 * Math.exp((17.27 * T_leaf) / (T_leaf + 237.3));
        const VPact_air = VPsat_air * (RH / 100);
        let vpd = VPsat_leaf - VPact_air;
        if (vpd < 0) vpd = 0;
        document.getElementById('vpd-value').innerText = vpd.toFixed(2) + " kPa";
        let percent = vpd / 2.0;
        if (percent > 1.0) percent = 1.0;
        const angle = -90 + (percent * 180);
        document.getElementById('gauge-hand').style.transform = `translateX(-50%) rotate(${angle}deg)`;
        const fillOffset = 283 - (percent * 283);
        document.getElementById('gauge-fill-arc').style.strokeDashoffset = fillOffset;
        const statusPill = document.getElementById('vpd-status-pill');
        const descEl = document.getElementById('vpd-explanation');
        const tipEl = document.getElementById('vpd-tip');
        let minOpt = 0.8;
        let maxOpt = 1.2;
        if (currentVpdStage === 'seedling') {
            minOpt = 0.4;
            maxOpt = 0.8;
            tipEl.innerText = i18n[currentLang].vpdTipSeedling;
        } else if (currentVpdStage === 'veg') {
            minOpt = 0.8;
            maxOpt = 1.1;
            tipEl.innerText = i18n[currentLang].vpdTipVeg;
        } else if (currentVpdStage === 'flower') {
            minOpt = 1.1;
            maxOpt = 1.5;
            tipEl.innerText = i18n[currentLang].vpdTipFlower;
        }
        
        const actionsCard = document.getElementById('vpd-actions-card');
        const actionsList = document.getElementById('vpd-actions-list');
        
        if (vpd < minOpt) {
            statusPill.innerText = currentLang === 'ko' ? "너무 다습 (낮은 VPD)" : "Too Humid (Low VPD)";
            statusPill.className = "status-pill danger";
            descEl.innerText = i18n[currentLang].vpdExplanationLow.replace('{minOpt}', minOpt).replace('{maxOpt}', maxOpt);
            
            actionsCard.style.borderLeft = "4px solid var(--danger)";
            actionsList.innerHTML = currentLang === 'ko' ? 
                `<li>⚠️ <strong>송풍팬 가동 및 환기창 개방</strong>: 온실 내부 습한 공기를 강제 배출시킵니다.</li>
                 <li>⚠️ <strong>난방배관 가열</strong>: 온도를 소폭 올려 상대습도(RH)를 직접 낮춥니다.</li>
                 <li>⚠️ <strong>보온커튼 일부 개방 (Gap)</strong>: 천장 상부의 건조한 공기와 swap을 유도합니다.</li>` :
                `<li>⚠️ <strong>Ventilation</strong>: Run circulation fans and crack vents to expel moist air.</li>
                 <li>⚠️ <strong>Heating</strong>: Slightly raise pipe temp to warm the air and lower relative humidity.</li>
                 <li>⚠️ <strong>Thermal Screen Gap</strong>: Open screens slightly to mix with drier upper air.</li>`;
        } else if (vpd >= minOpt && vpd <= maxOpt) {
            statusPill.innerText = currentLang === 'ko' ? "최적 VPD" : "Optimal VPD";
            statusPill.className = "status-pill optimal";
            descEl.innerText = i18n[currentLang].vpdExplanationOpt.replace('{minOpt}', minOpt).replace('{maxOpt}', maxOpt);
            
            actionsCard.style.borderLeft = "4px solid var(--success)";
            actionsList.innerHTML = currentLang === 'ko' ? 
                `<li>✅ <strong>생육 활성도 최상</strong>: 광합성 및 이산화탄소 흡수, 칼슘 전류 속도가 극대화됩니다.</li>
                 <li>✅ <strong>표준 관수 유지</strong>: 현재 누적 일사량 기준에 맞춰 정밀 관수 스케줄을 유지하십시오.</li>` :
                `<li>✅ <strong>Optimal Climate</strong>: CO₂ assimilation, transpiration, and calcium flow are at peak performance.</li>
                 <li>✅ <strong>Standard Irrigation</strong>: Maintain standard watering intervals based on cumulative light sum.</li>`;
        } else {
            statusPill.innerText = currentLang === 'ko' ? "너무 건조 (높은 VPD)" : "Too Dry (High VPD)";
            statusPill.className = "status-pill warning";
            descEl.innerText = i18n[currentLang].vpdExplanationHigh.replace('{minOpt}', minOpt).replace('{maxOpt}', maxOpt);
            
            actionsCard.style.borderLeft = "4px solid var(--warning)";
            actionsList.innerHTML = currentLang === 'ko' ? 
                `<li>⚠️ <strong>미스트/포그 장치 가동</strong>: 공기 중에 고압 포그를 살포해 즉각적으로 다습 환경을 만듭니다.</li>
                 <li>⚠️ <strong>차광스크린(차광막) 전개</strong>: 강한 일사를 가려 잎 표면 온도(엽온)를 낮추고 수분 스트레스를 경감시킵니다.</li>
                 <li>⚠️ <strong>환기량 축소</strong>: 측창 및 천창 개도를 좁혀 온실 내부 습기가 날아가는 것을 방지합니다.</li>` :
                `<li>⚠️ <strong>Fogging/Misting</strong>: Run high-pressure mist systems to immediately supply humidity.</li>
                 <li>⚠️ <strong>Deploy Shading</strong>: Cover with screens to decrease solar load, leaf temp, and transpiration pressure.</li>
                 <li>⚠️ <strong>Reduce Vents</strong>: Keep vents slightly closed to prevent dry outdoor air swap.</li>`;
        }
    }
    function runEstimatorEngine() {
        const area = parseFloat(document.getElementById('est-area').value);
        const U = parseFloat(document.getElementById('est-cover').value);
        const tempIn = parseFloat(document.getElementById('est-temp-in').value);
        const tempOut = parseFloat(document.getElementById('est-temp-out').value);
        if (isNaN(area) || isNaN(U) || isNaN(tempIn) || isNaN(tempOut)) return;
        const deltaT = tempIn - tempOut;
        if (deltaT <= 0) {
            document.getElementById('est-result-value').innerText = "0 kW";
            return;
        }
        let qEstKw;
        if (currentUnit === 'imperial') {
            const U_imp = U * 0.17611;
            const qEstBtu = 1.4 * area * U_imp * deltaT * 1.25;
            qEstKw = qEstBtu / 3412.14;
        } else {
            qEstKw = (1.4 * area * U * deltaT * 1.25) / 1000;
        }
        document.getElementById('est-result-value').innerText = qEstKw.toFixed(0) + " kW";
    }
    function applyEstimatedLoad() {
        const resultVal = parseFloat(document.getElementById('est-result-value').innerText);
        const heatPowerEl = document.getElementById('heat-power');
        if (currentPowerUnit === 'BTU') {
            heatPowerEl.value = (resultVal * 3412.14).toFixed(0);
        } else {
            heatPowerEl.value = resultVal.toFixed(0);
        }
        calculateValveEngine();
        heatPowerEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        heatPowerEl.focus();
        heatPowerEl.style.borderColor = 'var(--cyan)';
        setTimeout(() => {
            heatPowerEl.style.borderColor = '';
        }, 1500);
    }
    function runAcidEngine() {
        const rawHco3 = parseFloat(document.getElementById('acid-raw').value);
        const targetHco3 = parseFloat(document.getElementById('acid-target').value);
        const acidType = document.getElementById('acid-select').value;
        const tankVol = parseFloat(document.getElementById('fert-vol').value);
        const dilution = parseFloat(document.getElementById('fert-ratio').value);
        
        if (isNaN(rawHco3) || isNaN(targetHco3) || isNaN(tankVol) || isNaN(dilution)) return;
        
        const deltaHco3 = rawHco3 - targetHco3;
        const resultValEl = document.getElementById('acid-result-value');
        const expEl = document.getElementById('acid-explanation');

        if (deltaHco3 <= 0) {
            resultValEl.innerText = currentUnit === 'imperial' ? "0.0 fl oz" : "0.0 mL";
            expEl.innerText = currentLang === 'ko' ? "중화할 중탄산이 없습니다. 원수의 pH 버퍼 능력이 안정적입니다." : "No bicarbonate to neutralize. Water pH buffer is stable.";
            return;
        }
        
        const meqL = deltaHco3 / 61.017;
        let acidMolarity = 13.0; // Nitric Acid 60%
        if (acidType === 'phosphoric') {
            acidMolarity = 14.6; // Phosphoric Acid 85%
        }
        
        const tankVol_L = currentUnit === 'imperial' ? tankVol * 3.78541 : tankVol;
        const totalMeq = meqL * tankVol_L * dilution;
        const acidVolMl = totalMeq / acidMolarity;
        
        if (currentUnit === 'imperial') {
            const flOz = acidVolMl / 29.5735;
            if (flOz >= 128) {
                resultValEl.innerText = (flOz / 128).toFixed(2) + " gal";
            } else {
                resultValEl.innerText = flOz.toFixed(1) + " fl oz";
            }
        } else {
            if (acidVolMl >= 1000) {
                resultValEl.innerText = (acidVolMl / 1000).toFixed(2) + " L";
            } else {
                resultValEl.innerText = acidVolMl.toFixed(0) + " mL";
            }
        }
        
        if (currentLang === 'ko') {
            const acidName = acidType === 'nitric' ? "질산 60%" : "인산 85%";
            expEl.innerHTML = `원수 중탄산 <strong>${rawHco3} ppm</strong>에서 <strong>${targetHco3} ppm</strong>으로 낮추기 위해 중탄산 <strong>${meqL.toFixed(2)} meq/L</strong>을 중화해야 합니다.<br>원액탱크 ${tankVol}L에 <strong>${acidName}</strong>을 <strong>${acidVolMl >= 1000 ? (acidVolMl/1000).toFixed(2) + " L" : acidVolMl.toFixed(0) + " mL"}</strong> 혼합하여 조제하십시오.<br><small style="color: var(--danger); font-weight: 600;">⚠️ 주의: 강산을 원액탱크에 넣을 때 반드시 물을 채운 뒤 산을 마지막에 천천히 저으면서 넣으십시오. (절대로 산에 물을 부으면 안 됩니다!)</small>`;
        } else {
            const acidName = acidType === 'nitric' ? "60% Nitric Acid" : "85% Phosphoric Acid";
            const volStr = currentUnit === 'imperial' ? 
                (acidVolMl / 29.5735 >= 128 ? (acidVolMl / 29.5735 / 128).toFixed(2) + " gal" : (acidVolMl / 29.5735).toFixed(1) + " fl oz") :
                (acidVolMl >= 1000 ? (acidVolMl/1000).toFixed(2) + " L" : acidVolMl.toFixed(0) + " mL");
            
            expEl.innerHTML = `To neutralize raw bicarbonate from <strong>${rawHco3} ppm</strong> to <strong>${targetHco3} ppm</strong>, we need to neutralize <strong>${meqL.toFixed(2)} meq/L</strong> of HCO₃⁻.<br>Add <strong>${volStr}</strong> of <strong>${acidName}</strong> to the ${tankVol}${currentUnit === 'imperial' ? ' gal' : 'L'} stock tank.<br><small style="color: var(--danger); font-weight: 600;">⚠️ CAUTION: Always add acid to water, never water to acid! Add slowly while stirring.</small>`;
        }
    }
    function switchPowerUnit(unit) {
        if (currentPowerUnit === unit) return;
        currentPowerUnit = unit;
        const kwBtn = document.getElementById('power-unit-kw');
        const btuBtn = document.getElementById('power-unit-btu');
        const powerInput = document.getElementById('heat-power');
        const powerSuffix = document.getElementById('power-suffix');
        let val = parseFloat(powerInput.value);
        if (unit === 'BTU') {
            kwBtn.classList.remove('active');
            btuBtn.classList.add('active');
            powerInput.value = (val * 3412.14).toFixed(0);
            powerSuffix.innerText = 'BTU/h';
        } else {
            kwBtn.classList.add('active');
            btuBtn.classList.remove('active');
            powerInput.value = (val / 3412.14).toFixed(0);
            powerSuffix.innerText = 'kW';
        }
        calculateValveEngine();
    }
    function switchPressUnit(unit) {
        if (currentPressUnit === unit) return;
        currentPressUnit = unit;
        const kpaBtn = document.getElementById('press-unit-kpa');
        const barBtn = document.getElementById('press-unit-bar');
        const pressInput = document.getElementById('valve-dp');
        const pressSuffix = document.getElementById('press-suffix');
        let val = parseFloat(pressInput.value);
        if (unit === 'bar') {
            kpaBtn.classList.remove('active');
            barBtn.classList.add('active');
            pressInput.value = (val / 100).toFixed(3);
            pressSuffix.innerText = 'bar';
        } else {
            kpaBtn.classList.add('active');
            barBtn.classList.remove('active');
            pressInput.value = (val * 100).toFixed(1);
            pressSuffix.innerText = 'kPa';
        }
        calculateValveEngine();
    }
    function calculateValveEngine() {
        let Q = parseFloat(document.getElementById('heat-power').value);
        let dT = parseFloat(document.getElementById('valve-dt').value);
        let dPv = parseFloat(document.getElementById('valve-dp').value);
        if (isNaN(Q) || isNaN(dT) || isNaN(dPv) || dT <= 0 || dPv <= 0) return;
        if (currentPowerUnit === 'BTU') {
            Q = Q / 3412.14;
        }
        let dPv_bar = dPv;
        if (currentPressUnit === 'kPa') {
            dPv_bar = dPv / 100;
        }
        
        let actualDtC = dT;
        if (currentUnit === 'imperial') {
            actualDtC = dT / 1.8;
        }
        
        const flowRate = (Q * 0.86) / actualDtC;
        const kv = flowRate / Math.sqrt(dPv_bar);
        document.getElementById('valve-value').innerText = kv.toFixed(2);
        const statusPill = document.getElementById('valve-status-pill');
        statusPill.innerText = i18n[currentLang].valveStatusPill;
        const pipeCard = document.getElementById('pipe-suggestion-card');
        let dn = 'DN15 (1/2")';
        if (flowRate <= 1.0) {
            dn = 'DN15 (1/2")';
        } else if (flowRate > 1.0 && flowRate <= 2.2) {
            dn = 'DN20 (3/4")';
        } else if (flowRate > 2.2 && flowRate <= 3.5) {
            dn = 'DN25 (1")';
        } else if (flowRate > 3.5 && flowRate <= 6.5) {
            dn = 'DN32 (1-1/4")';
        } else if (flowRate > 6.5 && flowRate <= 10.0) {
            dn = 'DN40 (1-1/2")';
        } else {
            dn = 'DN50 (2")';
        }
        const expEl = document.getElementById('valve-explanation');
        expEl.innerHTML = i18n[currentLang].valveExplanation
            .replace('{flowRate}', flowRate.toFixed(2))
            .replace('{kv}', kv.toFixed(2));
            
        // Calculate closest standard commercial Kvs (providing control authority margin)
        const stdKvs = [0.63, 1.0, 1.6, 2.5, 4.0, 6.3, 10.0, 16.0, 25.0, 40.0, 63.0, 100.0];
        let recommendedKvs = stdKvs[stdKvs.length - 1];
        const targetKvs = kv * 1.25;
        for (let i = 0; i < stdKvs.length; i++) {
            if (stdKvs[i] >= targetKvs) {
                recommendedKvs = stdKvs[i];
                break;
            }
        }
        
        pipeCard.innerHTML = `
            <h4>${i18n[currentLang].pipeRecommendationTitle}</h4>
            <p>${i18n[currentLang].pipeRecommendationDesc
                .replace('{dn}', dn)
                .replace('{kv}', kv.toFixed(2))
                .replace('{kvsMargin}', recommendedKvs.toFixed(1))}</p>
        `;
    }
    const fertDb = {
        custom: { purity: 15.5, tank: 'none' },
        calcium_nitrate: { purity: 15.5, tank: 'A' },
        potassium_nitrate: { purity: 13.0, tank: 'AB' },
        mkp: { purity: 22.7, tank: 'B' },
        potassium_sulfate: { purity: 41.5, tank: 'B' },
        magnesium_sulfate: { purity: 9.8, tank: 'B' },
        ammonium_sulfate: { purity: 21.0, tank: 'B' }
    };
    function applyFertPreset() {
        const presetKey = document.getElementById('fert-preset').value;
        const purityEl = document.getElementById('fert-purity');
        const badgeEl = document.getElementById('fert-tank-badge');
        if (presetKey === 'custom') {
            purityEl.disabled = false;
            badgeEl.style.display = 'none';
        } else {
            purityEl.disabled = true;
            purityEl.value = fertDb[presetKey].purity;
            const tank = fertDb[presetKey].tank;
            badgeEl.style.display = 'inline-flex';
            badgeEl.className = 'tank-badge';
            if (tank === 'A') {
                badgeEl.className = 'tank-badge tank-a';
                badgeEl.innerText = currentLang === 'ko' ? 'A통 권장' : 'Tank A';
            } else if (tank === 'B') {
                badgeEl.className = 'tank-badge tank-b';
                badgeEl.innerText = currentLang === 'ko' ? 'B통 권장' : 'Tank B';
            } else if (tank === 'AB') {
                badgeEl.className = 'tank-badge tank-ab';
                badgeEl.innerText = currentLang === 'ko' ? 'A/B 가능' : 'Tank A/B';
            }
        }
        calculateFertEngine();
    }
    function calculateFertEngine() {
        const targetPpm = parseFloat(document.getElementById('fert-target').value);
        const tankVolume = parseFloat(document.getElementById('fert-vol').value);
        const dilution = parseFloat(document.getElementById('fert-ratio').value);
        const purity = parseFloat(document.getElementById('fert-purity').value);
        if (isNaN(targetPpm) || isNaN(tankVolume) || isNaN(dilution) || isNaN(purity) || purity <= 0) return;

        const tankVolume_L = currentUnit === 'imperial' ? tankVolume * 3.78541 : tankVolume;
        const mass_kg = (targetPpm * tankVolume_L * dilution) / (purity * 10000);
        
        let displayMass = mass_kg;
        let massUnit = 'kg';
        if (currentUnit === 'imperial') {
            displayMass = mass_kg * 2.20462;
            massUnit = 'lb';
        }

        document.getElementById('fert-value').innerText = displayMass.toFixed(1) + " " + massUnit;

        const statusPill = document.getElementById('fert-status-pill');
        statusPill.innerText = i18n[currentLang].fertStatusPill;

        const expEl = document.getElementById('fert-explanation');
        let exp = i18n[currentLang].fertExplanation
            .replace('{mass}', displayMass.toFixed(1))
            .replace('{tankVolume}', tankVolume)
            .replace('{dilution}', dilution)
            .replace('{targetPpm}', targetPpm);
        
        if (currentUnit === 'imperial') {
            exp = exp.replace(' kg', ' lb').replace('L ', ' gal ');
        }
        expEl.innerHTML = exp;
            
        runAcidEngine();
    }

    const hlPresetDb = {
        custom: 5.5,
        single_poly: 6.0,
        double_poly: 3.5,
        glass: 5.5,
        double_glass: 3.0,
        pc_8: 3.3,
        pc_16: 2.3
    };

    function applyHlPreset() {
        const presetKey = document.getElementById('hl-preset').value;
        const uvalueEl = document.getElementById('hl-uvalue');
        if (presetKey === 'custom') {
            uvalueEl.disabled = false;
        } else {
            uvalueEl.disabled = true;
            let val = hlPresetDb[presetKey];
            if (currentUnit === 'imperial') {
                val = parseFloat((val * 0.17611).toFixed(2));
            }
            uvalueEl.value = val;
        }
        calculateHeatLossEngine();
    }

    function calculateHeatLossEngine() {
        const A = parseFloat(document.getElementById('hl-area').value);
        const U = parseFloat(document.getElementById('hl-uvalue').value);
        const tempIn = parseFloat(document.getElementById('hl-temp-in').value);
        const tempOut = parseFloat(document.getElementById('hl-temp-out').value);
        const wind = parseFloat(document.getElementById('hl-wind').value);

        if (isNaN(A) || isNaN(U) || isNaN(tempIn) || isNaN(tempOut) || isNaN(wind)) return;

        const deltaT = tempIn - tempOut;
        if (deltaT <= 0) {
            document.getElementById('hl-value').innerText = currentUnit === 'imperial' ? "0.0 BTU/h" : "0.0 kW";
            document.getElementById('hl-explanation').innerText = currentLang === 'ko' ? "실외 온도가 실내 온도보다 높거나 같아 난방이 필요하지 않습니다." : "Outdoor temperature is higher than or equal to indoor. Heating not required.";
            document.getElementById('hl-status-pill').className = "status-pill optimal";
            document.getElementById('hl-status-pill').innerText = currentLang === 'ko' ? "난방 불필요" : "No Heat Needed";
            updatePyeongHelpers();
            return;
        }

        // Wind friction multiplier (simplified ASHRAE/standard engineering approach)
        const windSpeedMs = currentUnit === 'imperial' ? wind / 2.23694 : wind;
        
        if (windSpeedMs >= 25.0) {
            document.getElementById('hl-value').innerText = "N/A";
            document.getElementById('hl-explanation').innerHTML = currentLang === 'ko' ? 
                "<strong style='color:var(--danger);'>🚨 경고: 극한 풍속(태풍 수준) 초과</strong><br>풍속 25m/s 이상에서는 난방 부하 계산보다 온실 구조체의 붕괴나 피복재 파손 방어가 우선입니다. 난방 설계가 무의미한 재난 환경입니다." : 
                "<strong style='color:var(--danger);'>🚨 Warning: Extreme Wind Speed</strong><br>At >25m/s, structural failure (e.g., torn plastic, collapsed frame) is the primary concern before heat loss. Heating calculation is invalid.";
            document.getElementById('hl-status-pill').className = "status-pill danger";
            document.getElementById('hl-status-pill').innerText = currentLang === 'ko' ? "계산 차단 (붕괴 위험)" : "Calculation Blocked";
            updatePyeongHelpers();
            return;
        }

        let fWind = 1.0;
        if (windSpeedMs > 10.0) fWind = 1.40;
        else if (windSpeedMs > 5.0) fWind = 1.25;
        else if (windSpeedMs > 2.0) fWind = 1.12;

        let qLossKw, qLossBtu;
        if (currentUnit === 'imperial') {
            qLossBtu = U * A * deltaT * fWind;
            qLossKw = qLossBtu / 3412.14;
        } else {
            qLossKw = (U * A * deltaT * fWind) / 1000;
            qLossBtu = qLossKw * 3412.14;
        }

        if (currentUnit === 'imperial') {
            document.getElementById('hl-value').innerText = Math.round(qLossBtu).toLocaleString() + " BTU/h";
        } else {
            document.getElementById('hl-value').innerText = qLossKw.toFixed(1) + " kW";
        }

        const statusPill = document.getElementById('hl-status-pill');
        if (qLossKw < 50) {
            statusPill.className = "status-pill optimal";
            statusPill.innerText = currentLang === 'ko' ? "안정적 난방 수준" : "Low Heat Demand";
        } else if (qLossKw >= 50 && qLossKw < 200) {
            statusPill.className = "status-pill warning";
            statusPill.innerText = currentLang === 'ko' ? "보통 난방 수준" : "Medium Heat Demand";
        } else {
            statusPill.className = "status-pill danger";
            statusPill.innerText = currentLang === 'ko' ? "고난방 요구 수준" : "High Heat Demand";
        }

        const expEl = document.getElementById('hl-explanation');
        let exp = i18n[currentLang].heatLossExplanation
            .replace('{tempOut}', tempOut)
            .replace('{tempIn}', tempIn)
            .replace('{fWind}', fWind.toFixed(2))
            .replace('{heatLoss}', qLossKw.toFixed(1))
            .replace('{btuVal}', qLossBtu.toFixed(0));
            
        if (currentUnit === 'imperial') {
            exp = exp.replace('°C', '°F').replace('°C', '°F');
            exp = exp.replace(/<strong>(.*?) kW<\/strong> \((.*?) BTU\/h\)/, '<strong>$2 BTU/h</strong> ($1 kW)');
        }
        expEl.innerHTML = exp;
        updatePyeongHelpers();
    }

    let currentRoiCurrency = 'KRW';
    
    function switchRoiCurrency(currency) {
        if (currentRoiCurrency === currency) return;
        currentRoiCurrency = currency;
        
        const krwBtn = document.getElementById('roi-curr-krw');
        const eurBtn = document.getElementById('roi-curr-eur');
        const usdBtn = document.getElementById('roi-curr-usd');
        const boilerPriceSuffix = document.getElementById('roi-boiler-price-unit');
        const elecPriceSuffix = document.getElementById('roi-hp-price-unit');
        const capexSuffix = document.getElementById('roi-capex-unit');
        
        const capexInput = document.getElementById('roi-capex');
        const boilerPriceInput = document.getElementById('roi-boiler-price');
        const hpPriceInput = document.getElementById('roi-hp-price');

        // Toggle active button styling
        [krwBtn, eurBtn, usdBtn].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });
        if (currency === 'KRW') krwBtn.classList.add('active');
        else if (currency === 'EUR') eurBtn.classList.add('active');
        else if (currency === 'USD') usdBtn.classList.add('active');

        if (currency === 'EUR') {
            boilerPriceSuffix.innerText = 'EUR/kWh';
            elecPriceSuffix.innerText = 'EUR/kWh';
            capexSuffix.innerText = 'EUR';
            
            capexInput.value = "10000";
            hpPriceInput.value = "0.15";
            
            onBoilerTypeChange();
        } else if (currency === 'USD') {
            boilerPriceSuffix.innerText = 'USD/kWh';
            elecPriceSuffix.innerText = 'USD/kWh';
            capexSuffix.innerText = 'USD';
            
            capexInput.value = "12000";
            hpPriceInput.value = "0.12";
            
            onBoilerTypeChange();
        } else {
            boilerPriceSuffix.innerText = '원/m³';
            elecPriceSuffix.innerText = '원/kWh';
            capexSuffix.innerText = '원';
            
            capexInput.value = "15000000";
            hpPriceInput.value = "80";
            
            onBoilerTypeChange();
        }
        calculateRoiEngine();
    }

    function onBoilerTypeChange() {
        const type = document.getElementById('roi-boiler-type').value;
        const priceSuffix = document.getElementById('roi-boiler-price-unit');
        const priceInput = document.getElementById('roi-boiler-price');

        if (currentRoiCurrency === 'EUR') {
            priceSuffix.innerText = 'EUR/kWh';
            if (type === 'gas') priceInput.value = "0.08";
            else if (type === 'oil') priceInput.value = "0.12";
            else if (type === 'lpg') priceInput.value = "0.15";
        } else if (currentRoiCurrency === 'USD') {
            priceSuffix.innerText = 'USD/kWh';
            if (type === 'gas') priceInput.value = "0.09";
            else if (type === 'oil') priceInput.value = "0.13";
            else if (type === 'lpg') priceInput.value = "0.16";
        } else {
            if (type === 'gas') {
                priceSuffix.innerText = '원/m³';
                priceInput.value = "1000";
            } else if (type === 'oil') {
                priceSuffix.innerText = '원/L';
                priceInput.value = "1300";
            } else if (type === 'lpg') {
                priceSuffix.innerText = '원/kg';
                priceInput.value = "2000";
            }
        }
        calculateRoiEngine();
    }

    function calculateRoiEngine() {
        const demand = parseFloat(document.getElementById('roi-demand').value);
        const boilerType = document.getElementById('roi-boiler-type').value;
        const boilerPrice = parseFloat(document.getElementById('roi-boiler-price').value);
        const boilerEff = parseFloat(document.getElementById('roi-boiler-eff').value) / 100;
        const hpCop = parseFloat(document.getElementById('roi-hp-cop').value);
        const hpPrice = parseFloat(document.getElementById('roi-hp-price').value);
        const capex = parseFloat(document.getElementById('roi-capex').value);

        if (isNaN(demand) || isNaN(boilerPrice) || isNaN(boilerEff) || isNaN(hpCop) || isNaN(hpPrice) || isNaN(capex) || boilerEff <= 0 || hpCop <= 0) return;

        let boilerCost = 0;
        if (currentRoiCurrency === 'EUR' || currentRoiCurrency === 'USD') {
            boilerCost = (demand / boilerEff) * boilerPrice;
        } else {
            let energyPerUnit = 10.5; // Gas
            if (boilerType === 'oil') energyPerUnit = 10.0;
            else if (boilerType === 'lpg') energyPerUnit = 12.8;

            const unitsNeeded = demand / (energyPerUnit * boilerEff);
            boilerCost = unitsNeeded * boilerPrice;
        }

        const elecNeeded = demand / hpCop;
        const hpCost = elecNeeded * hpPrice;

        const annualSavings = boilerCost - hpCost;
        let paybackPeriod = 0;
        if (annualSavings > 0) {
            paybackPeriod = capex / annualSavings;
        }

        const valueEl = document.getElementById('roi-value');
        const statusPill = document.getElementById('roi-status-pill');
        const expEl = document.getElementById('roi-explanation');

        if (annualSavings <= 0) {
            valueEl.innerText = "N/A";
            statusPill.className = "status-pill danger";
            statusPill.innerText = currentLang === 'ko' ? "투자 부적합" : "No ROI";
            expEl.innerHTML = currentLang === 'ko' ? 
                `현재 단가 조건에서는 히트펌프의 전기 비용이 기존 보일러 연료비보다 커서 절감액이 발생하지 않습니다.` :
                `Under current tariff specs, Heat Pump operating cost exceeds the existing boiler. No savings generated.`;
            return;
        }

        valueEl.innerText = paybackPeriod.toFixed(1) + (currentLang === 'ko' ? "년" : " Yrs");

        if (paybackPeriod <= 3.0) {
            statusPill.className = "status-pill optimal";
            statusPill.innerText = currentLang === 'ko' ? "투자 적극 추천" : "Highly Viable";
        } else if (paybackPeriod > 3.0 && paybackPeriod <= 7.0) {
            statusPill.className = "status-pill warning";
            statusPill.innerText = currentLang === 'ko' ? "투자 타당성 보통" : "Moderately Viable";
        } else {
            statusPill.className = "status-pill danger";
            statusPill.innerText = currentLang === 'ko' ? "투자 신중 판단" : "Long Payback";
        }

        let formattedSavings = "";
        if (currentRoiCurrency === 'EUR') {
            formattedSavings = "€" + annualSavings.toLocaleString(undefined, { maximumFractionDigits: 0 });
        } else if (currentRoiCurrency === 'USD') {
            formattedSavings = "$" + annualSavings.toLocaleString(undefined, { maximumFractionDigits: 0 });
        } else {
            formattedSavings = "₩" + annualSavings.toLocaleString(undefined, { maximumFractionDigits: 0 });
        }

        expEl.innerHTML = i18n[currentLang].roiExplanation
            .replace('{demand}', demand.toLocaleString())
            .replace('{savings}', formattedSavings)
            .replace('{payback}', paybackPeriod.toFixed(1));
    }

    const cropRsDb = {
        tomato: 100,
        pepper: 120,
        cucumber: 80,
        strawberry: 150,
        custom: 100
    };

    function applyTrCropPreset() {
        const crop = document.getElementById('tr-crop').value;
        const rsGroup = document.getElementById('grp-tr-rs');
        const rsInput = document.getElementById('tr-rs');
        
        if (crop === 'custom') {
            rsGroup.style.display = 'block';
        } else {
            rsGroup.style.display = 'none';
            rsInput.value = cropRsDb[crop];
        }
        calculateTranspirationEngine();
    }

    function calculateTranspirationEngine() {
        const T = parseFloat(document.getElementById('tr-temp').value);
        const RH = parseFloat(document.getElementById('tr-rh').value);
        const Rg = parseFloat(document.getElementById('tr-rad').value);
        const LAI = parseFloat(document.getElementById('tr-lai').value);
        const rs = parseFloat(document.getElementById('tr-rs').value);
        const u = parseFloat(document.getElementById('tr-wind').value);

        if (isNaN(T) || isNaN(RH) || isNaN(Rg) || isNaN(LAI) || isNaN(rs) || isNaN(u) || u <= 0 || LAI <= 0) return;

        const T_c = currentUnit === 'imperial' ? (T - 32) / 1.8 : T;
        const u_ms = currentUnit === 'imperial' ? u / 2.23694 : u;

        const es = 0.61078 * Math.exp((17.27 * T_c) / (T_c + 237.3));
        const Delta = (4098 * es) / Math.pow(T_c + 237.3, 2);
        const gamma = 0.066;
        const ea = es * (RH / 100);
        const VPD = es - ea;
        const Rn = Rg * 0.60;
        const ra = 250 / Math.max(0.05, u_ms);
        const rc = rs / (0.5 * LAI); 
        const lambda = 2.45; 
        const rho_a = 1.2;
        const Cp = 1.013;

        const numerator = (Delta * Rn) + ((rho_a * Cp * VPD * 1000) / ra);
        const denominator = Delta + (gamma * (1 + (rc / ra)));
        
        let LE = numerator / denominator;
        if (LE < 0) LE = 0;

        const etHr = (LE * 3600) / (lambda * 1000000); 
        const etDay = etHr * 10; 

        let displayEt = etHr;
        let displayEtDay = etDay;
        let etUnit = 'L/m²·h';
        if (currentUnit === 'imperial') {
            displayEt = etHr * 24.5424;
            displayEtDay = etDay * 24.5424;
            etUnit = 'gal/1000 ft²·h';
        }

        document.getElementById('trans-value').innerText = displayEt.toFixed(currentUnit === 'imperial' ? 2 : 3) + " " + etUnit;

        const statusPill = document.getElementById('trans-status-pill');
        if (etHr > 0.25) {
            statusPill.className = "status-pill optimal";
            statusPill.innerText = currentLang === 'ko' ? "왕성한 증산" : "High Transpiration";
        } else if (etHr > 0.05 && etHr <= 0.25) {
            statusPill.className = "status-pill optimal";
            statusPill.innerText = currentLang === 'ko' ? "일반 증산" : "Normal Transpiration";
        } else {
            statusPill.className = "status-pill danger";
            statusPill.innerText = currentLang === 'ko' ? "증산 정체" : "Stagnant Transpiration";
        }

        const expEl = document.getElementById('trans-explanation');
        let exp = i18n[currentLang].transExplanation
            .replace('{temp}', T.toFixed(1))
            .replace('{rh}', RH)
            .replace('{rad}', Rg)
            .replace('{et}', displayEt.toFixed(currentUnit === 'imperial' ? 2 : 3))
            .replace('{etDay}', displayEtDay.toFixed(currentUnit === 'imperial' ? 1 : 2));
            
        if (currentUnit === 'imperial') {
            exp = exp.replace('°C', '°F');
            exp = exp.replace(' L/m²·hr', ' gal/1000 ft²·h')
                     .replace(' mm/hr', '')
                     .replace(' L/m²·day', ' gal/1000 ft²·day');
        }
        expEl.innerHTML = exp;
    }

    // ==========================================
    // INTEGRATED TABS LOGIC
    // ==========================================

    // Subtab switching
    function switchPollinatorTab(subId) {
        document.querySelectorAll('#section-pollinator .segmented-control .segment-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('#section-pollinator .tab-content').forEach(content => content.classList.remove('active'));

        document.getElementById(`btn-subtab-${subId}`).classList.add('active');
        document.getElementById(`subtab-${subId}`).classList.add('active');
        
        if (subId === 'density') {
            calculateDensity();
        } else if (subId === 'activity') {
            simulateActivity();
        } else if (subId === 'pesticide') {
            updatePesticideUI();
        } else if (subId === 'diagnosis') {
            updateDiagnosisUI();
        }
    }

    function switchVerticalTab(subId) {
        document.querySelectorAll('#section-vertical .segmented-control .segment-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('#section-vertical .tab-content').forEach(content => content.classList.remove('active'));

        document.getElementById(`btn-subtab-${subId}`).classList.add('active');
        document.getElementById(`subtab-${subId}`).classList.add('active');
        
        if (subId === 'light') {
            calculateLight();
        } else if (subId === 'thermal') {
            calculateThermal();
        }
    }

    // Pollinator Safety - Autocomplete
    function setupAutocomplete() {
        const searchInput = document.getElementById('pest-search');
        const autocompleteList = document.getElementById('autocomplete-list');
        if (!searchInput || !autocompleteList) return;
        
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
        if (!resultDiv) return;
        
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
            pillClass = "optimal"; // using native optimal green class
        }

        resultDiv.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 1rem; text-align: left;">
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
                    <div style="font-size: 2.2rem; font-weight: 800; color: var(--text-light); margin-top: 0.2rem;">
                        ${item.reiDays} <span style="font-size: 1.1rem; font-weight: 600; color: var(--text-gray);">${i18n[currentLang].reiUnit}</span>
                    </div>
                </div>

                <div class="info-card" style="border-left: 4px solid ${item.toxicity === 'high' ? 'var(--danger)' : item.toxicity === 'medium' ? 'var(--warning)' : 'var(--success)'}; text-align: left;">
                    <h4>📋 ${i18n[currentLang].lblPestAction}</h4>
                    <p>${desc}</p>
                </div>
            </div>
        `;
    }

    // Pollinator Safety - Diagnosis
    function updatePartOptions() {
        const selectCrop = document.getElementById('diag-crop');
        const selectPart = document.getElementById('diag-part');
        const selectSymptom = document.getElementById('diag-symptom');
        if (!selectCrop || !selectPart || !selectSymptom) return;
        
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
        const selectCrop = document.getElementById('diag-crop');
        const selectPart = document.getElementById('diag-part');
        const selectSymptom = document.getElementById('diag-symptom');
        if (!selectCrop || !selectPart || !selectSymptom) return;
        
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
        const selectCrop = document.getElementById('diag-crop');
        const selectPart = document.getElementById('diag-part');
        const selectSymptom = document.getElementById('diag-symptom');
        if (!selectCrop || !selectPart || !selectSymptom) return;
        
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
        if (!content) return;
        
        if (!activeDiagnosisData) {
            content.innerHTML = `<p style="color: var(--text-gray); font-style: italic;">${i18n[currentLang].msgDiagNoSearch}</p>`;
            return;
        }

        const d = activeDiagnosisData;
        const diseaseName = currentLang === 'ko' ? d.diseaseKo : d.diseaseEn;
        const remedyText = currentLang === 'ko' ? d.remedyKo : d.remedyEn;

        // 약제 DB(pesticideDB)에서 다국어 명칭 룩업
        let chemicalNameToShow = null;
        if (d.suggestedChemical) {
            const chemObj = pesticideDB.find(c => c.nameKo === d.suggestedChemical || c.nameEn.toLowerCase() === d.suggestedChemical.toLowerCase());
            if (chemObj) {
                chemicalNameToShow = currentLang === 'ko' ? chemObj.nameKo : chemObj.nameEn;
            } else {
                chemicalNameToShow = d.suggestedChemical; // Fallback
            }
        }

        let chemicalSectionHtml = "";
        if (chemicalNameToShow) {
            chemicalSectionHtml = `
                <div>
                    <span class="result-header">${i18n[currentLang].lblDiagChemical}</span>
                    <div style="font-size: 1.15rem; font-weight: 700; color: var(--primary); margin-top: 0.3rem;">
                        💊 ${chemicalNameToShow}
                    </div>
                    <button class="estimator-btn" style="margin-top: 0.8rem; font-size: 0.85rem; padding: 0.5rem 1rem; width: auto;" onclick="jumpToReiCalculator('${d.suggestedChemical}')">
                        ${i18n[currentLang].btnGoToRei}
                    </button>
                </div>
            `;
        } else {
            const naText = currentLang === 'ko' ? 'N/A (물리적 제어 또는 무독성 비료 처방)' : 'N/A (Physical control or non-toxic treatment)';
            chemicalSectionHtml = `
                <div>
                    <span class="result-header">${i18n[currentLang].lblDiagChemical}</span>
                    <div style="font-size: 0.95rem; color: var(--text-gray); font-style: italic; margin-top: 0.3rem;">
                        ${naText}
                    </div>
                </div>
            `;
        }

        content.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 1.5rem; text-align: left;">
                <div>
                    <span class="result-header">${i18n[currentLang].lblDiagDisease}</span>
                    <h3 style="font-size: 1.4rem; color: var(--warning); margin-top: 0.2rem;">${diseaseName}</h3>
                </div>

                <div class="info-card" style="border-left: 4px solid var(--warning); text-align: left;">
                    <h4>📋 ${i18n[currentLang].lblDiagRemedy}</h4>
                    <p>${remedyText}</p>
                </div>

                ${chemicalSectionHtml}
            </div>
        `;
    }

    function jumpToReiCalculator(chemicalName) {
        switchPollinatorTab('pesticide');
        document.getElementById('pest-search').value = chemicalName;
        
        const item = pesticideDB.find(p => p.nameKo === chemicalName || p.nameEn.toLowerCase() === chemicalName.toLowerCase());
        if (item) {
            selectPesticide(item);
        } else {
            const event = new Event('input');
            document.getElementById('pest-search').dispatchEvent(event);
        }
        
        document.getElementById('pest-search').focus();
    }

    // Pollinator Safety - Density Math
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

        const area_m2 = currentUnit === 'imperial' ? area / 10.7639 : area;
        let hivesCount = (area_m2 / 3300) * baseHivesPer1000Pyung * cropWeight * seasonAdj;
        hivesCount = Math.max(area_m2 > 0 ? 1 : 0, Math.round(hivesCount * 10) / 10);

        let lifespanText = "";
        if (season === 'summer') {
            lifespanText = currentLang === 'ko' ? "4 ~ 6주 (고온으로 단축)" : "4 - 6 Weeks (Shortened by heat)";
        } else if (season === 'winter') {
            lifespanText = currentLang === 'ko' ? "8 ~ 10주 (저온 비활동)" : "8 - 10 Weeks (Extended cold life)";
        } else {
            lifespanText = currentLang === 'ko' ? "8 ~ 12주 (표준 수명)" : "8 - 12 Weeks (Standard lifespan)";
        }

        const cropLabel = document.getElementById('crop-type').options[document.getElementById('crop-type').selectedIndex].text;
        const pyeong = Math.round(area_m2 * 0.3025);
        
        let formattedMath = i18n[currentLang].densityCalculationText
            .replace('{area}', area.toLocaleString())
            .replace('{pyeong}', pyeong)
            .replace('{crop}', cropLabel)
            .replace('{hives}', hivesCount);
            
        if (currentUnit === 'imperial') {
            formattedMath = formattedMath.replace(/ m²<\/strong> \(approx\. <strong>.*?<\/strong> pyeong\)/, ' sq ft</strong>');
        }

        document.getElementById('hives-value').innerText = hivesCount + (currentLang === 'ko' ? " 통" : " Hives");
        document.getElementById('lifespan-value').innerText = lifespanText;

        let guideKey = "densityGuidelineTomato";
        if (cropType === 'strawberry') guideKey = "densityGuidelineStrawberry";
        else if (cropType === 'melon') guideKey = "densityGuidelineMelon";
        else if (cropType === 'blueberry') guideKey = "densityGuidelineBlueberry";
        else if (cropType === 'pepper') guideKey = "densityGuidelinePepper";

        document.getElementById('density-guide-text').innerHTML = formattedMath + "<br><br>" + i18n[currentLang][guideKey];
        updatePyeongHelpers();
    }

    // Pollinator Safety - Activity Simulator
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
            pillClass = "optimal";
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

    // Vertical Farming - Crop preset applier
    function applyCropPreset() {
        const cropType = document.getElementById('crop-select').value;
        if (cropType !== 'custom') {
            const preset = verticalCrops[cropType];
            document.getElementById('target-dli').value = preset.dli.toFixed(1);
        }
    }

    // Vertical Farming - Spectrum display normalizer
    function updateSpectrum() {
        const r = parseFloat(document.getElementById('slide-red').value) || 0;
        const b = parseFloat(document.getElementById('slide-blue').value) || 0;
        const g = parseFloat(document.getElementById('slide-green').value) || 0;
        const f = parseFloat(document.getElementById('slide-far').value) || 0;

        const total = r + b + g + f || 1;
        
        const pctR = (r / total) * 100;
        const pctB = (b / total) * 100;
        const pctG = (g / total) * 100;
        const pctF = (f / total) * 100;

        document.getElementById('slide-red-val').innerText = pctR.toFixed(0) + '%';
        document.getElementById('slide-blue-val').innerText = pctB.toFixed(0) + '%';
        document.getElementById('slide-green-val').innerText = pctG.toFixed(0) + '%';
        document.getElementById('slide-far-val').innerText = pctF.toFixed(0) + '%';
    }

    // Vertical Farming - Light calculations
    function calculateLight() {
        const targetDli = parseFloat(document.getElementById('target-dli').value) || 16;
        const ppfd = parseFloat(document.getElementById('measured-ppfd').value) || 250;

        const r = parseFloat(document.getElementById('slide-red').value) || 0;
        const b = parseFloat(document.getElementById('slide-blue').value) || 0;
        const g = parseFloat(document.getElementById('slide-green').value) || 0;
        const f = parseFloat(document.getElementById('slide-far').value) || 0;
        const total = r + b + g + f || 1;

        const pctR = r / total;
        const pctB = b / total;
        const pctG = g / total;
        const pctF = f / total;

        // DLI = PPFD * Hours * 0.0036
        let optHours = targetDli / (ppfd * 0.0036);
        optHours = Math.max(1, Math.min(24, optHours));

        const actualDli = ppfd * optHours * 0.0036;

        document.getElementById('light-dli-val').innerHTML = `${actualDli.toFixed(1)} <span style="font-size: 1.1rem; font-weight: 600; color: var(--text-gray);">${i18n[currentLang].dliUnit}</span>`;
        document.getElementById('light-hours-val').innerHTML = `${optHours.toFixed(1)} <span style="font-size: 1.1rem; font-weight: 600; color: var(--text-gray);">${i18n[currentLang].hoursUnit}</span>`;

        if (optHours >= 24 && actualDli < targetDli) {
            document.getElementById('light-hours-desc').innerHTML = i18n[currentLang].ppfdTooLow;
        } else {
            document.getElementById('light-hours-desc').innerText = i18n[currentLang].lightHoursDesc;
        }

        document.getElementById('seg-red').style.width = (pctR * 100) + '%';
        document.getElementById('seg-blue').style.width = (pctB * 100) + '%';
        document.getElementById('seg-green').style.width = (pctG * 100) + '%';
        document.getElementById('seg-far').style.width = (pctF * 100) + '%';

        document.getElementById('pct-red-txt').innerText = (pctR * 100).toFixed(1) + '%';
        document.getElementById('pct-blue-txt').innerText = (pctB * 100).toFixed(1) + '%';
        document.getElementById('pct-green-txt').innerText = (pctG * 100).toFixed(1) + '%';
        document.getElementById('pct-far-txt').innerText = (pctF * 100).toFixed(1) + '%';

        document.getElementById('flux-red-txt').innerHTML = (ppfd * pctR).toFixed(1) + ' <span style="font-size:0.75rem;">μmol</span>';
        document.getElementById('flux-blue-txt').innerHTML = (ppfd * pctB).toFixed(1) + ' <span style="font-size:0.75rem;">μmol</span>';
        document.getElementById('flux-green-txt').innerHTML = (ppfd * pctG).toFixed(1) + ' <span style="font-size:0.75rem;">μmol</span>';
        document.getElementById('flux-far-txt').innerHTML = (ppfd * pctF).toFixed(1) + ' <span style="font-size:0.75rem;">μmol</span>';
        
        calculateThermal();
    }

    // Vertical Farming - LED Thermal & OPEX Modeler
    let thermalChart = null;

    function calculateThermal() {
        const pElec = parseFloat(document.getElementById('led-power').value) || 45;
        const nBars = parseFloat(document.getElementById('led-bars').value) || 120;
        const effOpt = parseFloat(document.getElementById('opt-efficiency').value) || 0.40;
        const aSink = parseFloat(document.getElementById('heatsink-area').value) || 2500;
        const hCoeff = parseFloat(document.getElementById('convective-h').value) || 10.0;
        const rate = parseFloat(document.getElementById('elec-rate').value) || 0.25;

        // DLI run-hours
        const targetDli = parseFloat(document.getElementById('target-dli').value) || 16;
        const ppfd = parseFloat(document.getElementById('measured-ppfd').value) || 250;
        let optHours = targetDli / (ppfd * 0.0036);
        optHours = Math.max(1, Math.min(24, optHours));

        // Thermal dissipation
        const pDiss = pElec * (1 - effOpt);

        // R_heatsink = 10000 / (hCoeff * aSink)
        const rHeatsink = 10000 / (hCoeff * aSink);
        const rInternal = 1.5; 
        const rTotal = rInternal + rHeatsink;

        const tAmb = 22.0; 
        const tJunction = tAmb + pDiss * rTotal;

        // OPEX
        const dailyKWh = (pElec * nBars * optHours) / 1000;
        const monthlyCost = dailyKWh * 30.4 * rate;
        
        // Handle KRW currency factor vs EUR
        const displayCost = monthlyCost;
        const currencySymbol = currentLang === 'ko' ? '₩' : '€';
        const unitText = currentLang === 'ko' ? ' / 월' : ' / Month';

        document.getElementById('thermal-tj-val').innerHTML = `${tJunction.toFixed(1)} <span style="font-size: 1.5rem; font-weight: 600; color: var(--text-gray);">°C</span>`;
        document.getElementById('thermal-cost-val').innerHTML = `${currencySymbol}${Math.round(displayCost).toLocaleString()} <span style="font-size: 1.5rem; font-weight: 600; color: var(--text-gray);">${unitText}</span>`;

        const tjDesc = document.getElementById('tj-desc');
        if (tJunction > 85) {
            tjDesc.innerHTML = i18n[currentLang].tjTooHigh;
        } else {
            tjDesc.innerText = i18n[currentLang].tjDesc;
        }

        // Draw Chart.js
        const hoursSplit = [8, 12, 16, 20];
        const costSplit = hoursSplit.map(hrs => {
            const rawCost = ((pElec * nBars * hrs) / 1000) * 30.4 * rate;
            return rawCost;
        });

        if (typeof Chart !== 'undefined') {
            if (thermalChart) {
                thermalChart.data.datasets[0].label = currentLang === 'ko' ? '월 조명 전력 요금 (₩)' : 'Monthly Energy Cost (€)';
                thermalChart.data.datasets[0].data = costSplit;
                thermalChart.data.labels = hoursSplit.map(hrs => currentLang === 'ko' ? `${hrs}시간 가동/일` : `${hrs} Hours/Day`);
                thermalChart.update();
            } else {
                const ctx = document.getElementById('thermalChart').getContext('2d');
                thermalChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: hoursSplit.map(hrs => currentLang === 'ko' ? `${hrs}시간 가동/일` : `${hrs} Hours/Day`),
                        datasets: [{
                            label: currentLang === 'ko' ? '월 조명 전력 요금 (₩)' : 'Monthly Energy Cost (€)',
                            data: costSplit,
                            backgroundColor: 'rgba(139, 92, 246, 0.75)', // Purple bars for premium feel
                            borderColor: 'rgba(139, 92, 246, 1)',
                            borderWidth: 1.5,
                            borderRadius: 6
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false }
                        },
                        scales: {
                            x: { ticks: { color: '#475569' }, grid: { color: 'rgba(15,23,42,0.05)' } },
                            y: { ticks: { color: '#475569' }, grid: { color: 'rgba(15,23,42,0.05)' } }
                        }
                    }
                });
            }
        } else {
            // Fallback rendering in case chart fails to load
            const wrapper = document.getElementById('thermal-chart-wrapper');
            const maxVal = Math.max(...costSplit);
            let html = '<div style="display: flex; flex-direction: column; gap: 0.8rem; padding: 1rem 0;">';
            for (let i = 0; i < hoursSplit.length; i++) {
                const pct = (costSplit[i] / maxVal) * 100;
                html += `
                    <div style="display: flex; flex-direction: column; gap: 0.2rem;">
                        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; color: var(--text-gray);">
                            <span>${hoursSplit[i]}${currentLang === 'ko' ? '시간 가동/일' : ' Hours/Day'}</span>
                            <span>${currencySymbol}${Math.round(costSplit[i]).toLocaleString()}</span>
                        </div>
                        <div style="width: 100%; height: 8px; background: rgba(15,23,42,0.05); border-radius: 4px; overflow: hidden;">
                            <div style="width: ${pct}%; height: 100%; background: var(--primary); border-radius: 4px;"></div>
                        </div>
                    </div>
                `;
            }
            html += '</div>';
            wrapper.innerHTML = html;
        }
    }

    // ==========================================
    // END OF INTEGRATED TABS LOGIC
    // ==========================================

    function handleFeedbackClick(event) {
        const btn = document.getElementById('btn-feedback');
        const href = btn.getAttribute('href');
        
        // Google Analytics 4 Custom Event for Feedback Link Clicks
        if (typeof gtag === 'function') {
            gtag('event', 'feedback_link_click', {
                'link_url': href
            });
        }

        if (href === '#' || href.includes('your-google-form-link')) {
            event.preventDefault();
            alert(currentLang === 'ko' ? 
                "피드백 구글 폼 링크가 설정되지 않았습니다.\n'google_apps_script_guide.md' 안내에 따라 구글 폼을 생성한 후, 'index.html'의 1281번째 라인에 있는 href 주소를 본인의 구글 폼 링크로 교체해 주세요!" : 
                "Feedback Google Form link is not configured yet.\nPlease create your Google Form according to 'google_apps_script_guide.md' and replace the href in 'index.html' (line 1281) with your own Form link!");
        }
    }

    


    
    // INIT with URL parameters support
    document.addEventListener('DOMContentLoaded', () => {
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam === 'ko' || langParam === 'en') {
            changeLanguage(langParam);
        } else {
            const savedLang = localStorage.getItem('smartfarm_lang');
            if (savedLang === 'ko' || savedLang === 'en') {
                changeLanguage(savedLang);
            } else {
                // Auto-detect browser locale
                const userLocale = navigator.language || navigator.userLanguage;
                if (userLocale && userLocale.startsWith('ko')) {
                    changeLanguage('ko');
                } else {
                    changeLanguage('en');
                }
            }
        }

        // Restore Saved Preferences (with defensive guards)
        const restorePreference = (id, key) => {
            const el = document.getElementById(id);
            if (el) {
                const val = localStorage.getItem(key);
                if (val !== null) el.value = val;
            }
        };

        restorePreference('area', 'pollinator_area');
        restorePreference('crop-type', 'pollinator_crop');
        restorePreference('season', 'pollinator_season');
        restorePreference('max-temp', 'pollinator_max_temp');
        restorePreference('min-temp', 'pollinator_min_temp');

        const savedDiagCrop = localStorage.getItem('diag_crop');
        const selectCrop = document.getElementById('diag-crop');
        if (savedDiagCrop && selectCrop) {
            selectCrop.value = savedDiagCrop;
            if (typeof updatePartOptions === 'function') updatePartOptions();
            
            const savedDiagPart = localStorage.getItem('diag_part');
            const selectPart = document.getElementById('diag-part');
            if (savedDiagPart && selectPart) {
                selectPart.value = savedDiagPart;
                if (typeof updateSymptomOptions === 'function') updateSymptomOptions();
                
                const savedDiagSymptom = localStorage.getItem('diag_symptom');
                const selectSymptom = document.getElementById('diag-symptom');
                if (savedDiagSymptom && selectSymptom) {
                    selectSymptom.value = savedDiagSymptom;
                    if (typeof performDiagnosis === 'function') performDiagnosis();
                }
            }
        }

        const savedPest = localStorage.getItem('pollinator_selected_pest');
        if (savedPest) {
            if (typeof pesticideDB !== 'undefined') {
                const pestItem = pesticideDB.find(p => p.nameKo === savedPest);
                if (pestItem) {
                    selectedPesticideData = pestItem;
                    const searchInput = document.getElementById('pest-search');
                    if (searchInput) {
                        searchInput.value = currentLang === 'ko' ? pestItem.nameKo : pestItem.nameEn;
                    }
                }
            }
        }

        // Set up pollinator safety & crop diagnosis listeners
        const searchInput = document.getElementById('pest-search');
        if (searchInput) {
            if (typeof setupAutocomplete === 'function') setupAutocomplete();
        }
        
        const diagCrop = document.getElementById('diag-crop');
        const diagPart = document.getElementById('diag-part');
        const diagSymptom = document.getElementById('diag-symptom');
        if (diagCrop && typeof updatePartOptions === 'function') diagCrop.addEventListener('change', updatePartOptions);
        if (diagPart && typeof updateSymptomOptions === 'function') diagPart.addEventListener('change', updateSymptomOptions);
        if (diagSymptom && typeof performDiagnosis === 'function') diagSymptom.addEventListener('change', performDiagnosis);

        // Run initial calculations for whichever sections are present on this page
        if (document.getElementById('section-vpd')) {
            if (typeof calculateVpdEngine === 'function') calculateVpdEngine();
        }
        if (document.getElementById('section-valve')) {
            if (typeof calculateValveEngine === 'function') calculateValveEngine();
        }
        if (document.getElementById('section-fert')) {
            if (typeof calculateFertEngine === 'function') calculateFertEngine();
            if (typeof runAcidEngine === 'function') runAcidEngine();
        }
        if (document.getElementById('section-heat-loss')) {
            if (typeof calculateHeatLossEngine === 'function') calculateHeatLossEngine();
        }
        if (document.getElementById('section-roi')) {
            if (typeof calculateRoiEngine === 'function') calculateRoiEngine();
        }
        if (document.getElementById('section-transpiration')) {
            if (typeof calculateTranspirationEngine === 'function') calculateTranspirationEngine();
        }
        if (document.getElementById('section-pollinator')) {
            if (typeof calculateDensity === 'function') calculateDensity();
            if (typeof simulateActivity === 'function') simulateActivity();
        }
        if (document.getElementById('section-vertical')) {
            if (typeof calculateLight === 'function') calculateLight();
            if (typeof calculateThermal === 'function') calculateThermal();
        }

        // Set active tab based on query param or present section
        const currentSection = 
            document.getElementById('section-vpd') ? 'vpd' :
            document.getElementById('section-valve') ? 'valve' :
            document.getElementById('section-fert') ? 'fert' :
            document.getElementById('section-heat-loss') ? 'heat-loss' :
            document.getElementById('section-roi') ? 'roi' :
            document.getElementById('section-transpiration') ? 'transpiration' :
            document.getElementById('section-pollinator') ? 'pollinator' :
            document.getElementById('section-vertical') ? 'vertical' : 'dashboard';

        const tabParam = urlParams.get('tab');
        if (tabParam && ['vpd', 'valve', 'fert', 'heat-loss', 'roi', 'transpiration', 'pollinator', 'vertical'].includes(tabParam)) {
            switchTab(tabParam);
        } else {
            switchTab(currentSection);
        }

        // Connect feedback button
        const btnFeedback = document.getElementById('btn-feedback');
        if (btnFeedback) {
            btnFeedback.addEventListener('click', handleFeedbackClick);
        }
    });
