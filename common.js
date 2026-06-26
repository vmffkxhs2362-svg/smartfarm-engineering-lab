
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
            updatePartOptions();
            
            const savedDiagPart = localStorage.getItem('diag_part');
            const selectPart = document.getElementById('diag-part');
            if (savedDiagPart && selectPart) {
                selectPart.value = savedDiagPart;
                updateSymptomOptions();
                
                const savedDiagSymptom = localStorage.getItem('diag_symptom');
                const selectSymptom = document.getElementById('diag-symptom');
                if (savedDiagSymptom && selectSymptom) {
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
                const searchInput = document.getElementById('pest-search');
                if (searchInput) {
                    searchInput.value = currentLang === 'ko' ? pestItem.nameKo : pestItem.nameEn;
                }
            }
        }

        // Set up pollinator safety & crop diagnosis listeners
        const searchInput = document.getElementById('pest-search');
        if (searchInput) {
            setupAutocomplete();
        }
        
        const diagCrop = document.getElementById('diag-crop');
        const diagPart = document.getElementById('diag-part');
        const diagSymptom = document.getElementById('diag-symptom');
        if (diagCrop) diagCrop.addEventListener('change', updatePartOptions);
        if (diagPart) diagPart.addEventListener('change', updateSymptomOptions);
        if (diagSymptom) diagSymptom.addEventListener('change', performDiagnosis);

        // Run initial calculations for whichever sections are present on this page
        if (document.getElementById('section-vpd')) calculateVpdEngine();
        if (document.getElementById('section-valve')) calculateValveEngine();
        if (document.getElementById('section-fert')) {
            calculateFertEngine();
            runAcidEngine();
        }
        if (document.getElementById('section-heat-loss')) calculateHeatLossEngine();
        if (document.getElementById('section-roi')) calculateRoiEngine();
        if (document.getElementById('section-transpiration')) calculateTranspirationEngine();
        if (document.getElementById('section-pollinator')) {
            calculateDensity();
            simulateActivity();
        }
        if (document.getElementById('section-vertical')) {
            calculateLight();
            calculateThermal();
        }

        // Connect feedback button
        const btnFeedback = document.getElementById('btn-feedback');
        if (btnFeedback) {
            btnFeedback.addEventListener('click', handleFeedbackClick);
        }
    });
