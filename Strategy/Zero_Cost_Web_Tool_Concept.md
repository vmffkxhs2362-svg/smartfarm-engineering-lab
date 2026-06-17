# 🌐 Zero-Cost AgTech Interactive Web Tool Pipeline
**작성일**: 2026-06-11  
**버전**: 1.1 (양액 배합 계산기 및 수식 디버깅 반영)  
**담당**: 기술 및 경제 참모 (Tech & Engine Staff)  
**구현 상태**: 배포 가능한 단일 파일(SPA) 코드 탑재 완료

---

## 🏛️ I. 새로운 파이프라인 제안: 무비용 정적 웹 계산기 (Zero-Cost SEO Magnet)

사령관님께 제안드리는 새로운 파이프라인은 **"무비용 정적 웹 계산기 웹앱"**입니다. 이 모델은 호스팅 비용 $0으로 온실 엔지니어 및 스마트팜 재배사들의 검색 트래픽을 독점하고, 이를 구글 애드센스 광고 수익 및 앞서 제작한 KDP 도서, 노션 템플릿 판매로 연결하는 **강력한 트래픽 깔때기(Traffic Funnel)** 역할을 수행합니다.

### 1. 왜 이 파이프라인인가? (Core Strategy)
*   **완전 무자본 ($0)**: GitHub Pages, Vercel, Netlify의 무료 요금제(Free Tier)를 사용하여 전 세계 독자들을 대상으로 웹 애플리케이션을 평생 무료로 운영할 수 있습니다.
*   **고효율 SEO (검색 최적화)**: 스마트팜 재배사나 학생들은 재배 중 **"VPD Calculator"**나 **"Fertigation Stock Tank Calculator"** 같은 키워드를 구글에 매우 자주 검색합니다. 관련 계산 웹 도구는 경쟁이 치열하지 않아 구글 상위 노출이 매우 쉽습니다.
*   **상호 판매 유도 (Cross-Selling)**: 무료 계산기를 사용하는 트래픽은 **초고밀도의 타겟 고객**입니다. 계산기 페이지 하단에 **Smart Farm Operator OS 노션 템플릿** 및 **KDP 책 구매 배너**를 배치하여 자연스럽게 유료 구매를 유도합니다.

### 2. 깔때기 구조 (Traffic & Conversion Flow)
```
[Google / LinkedIn 검색] ➡️ [무료 VPD, Valve, 양액 계산기 웹앱] 
                                  │
      ┌───────────────────────────┴───────────────────────────┐
      ▼ (Ad Revenue)              ▼ (Digital Sale)            ▼ (Subscription)
 [구글 애드센스 광고]        [Notion 템플릿 구매]        [Substack 뉴스레터 구독]
(트래픽당 광고 수익)         (Gumroad 연동, $19.99)       (무료에서 유료로 전환)
```

---

## 🏗️ II. 배포용 온실 엔지니어링 계산기 웹앱 (VPD, Valve & Fertigation Calculator)

아래는 즉시 배포할 수 있도록 HTML, CSS, JavaScript를 단일 파일로 결합한 **고성능 VPD, 밸브 & 양액 계산기** 소스코드입니다.
다크 모드, 모던 글래스모피즘(Glassmorphism) 스타일, 에메랄드 그린 컬러 포인트를 적용하여 프리미엄하고 미려한 사용자 경험을 제공합니다.

이 코드를 `index.html`로 저장한 뒤 GitHub Pages나 Vercel에 드롭하기만 하면 즉시 작동합니다.

### 📄 [NEW] `index.html` 소스코드
(이 코드는 [g:/My Drive/Antigravity/Headquater/Career/Passive_Income_Hub/index.html](file:///g:/My%20Drive/Antigravity/Headquater/Career/Passive_Income_Hub/index.html)로도 즉시 작성하여 보관할 수 있습니다.)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AgTech Precision Calculator | VPD, Mixing Valve & Fertigation</title>
    <meta name="description" content="Free premium online calculator for Vapor Pressure Deficit (VPD), Greenhouse Mixing Valve Sizing, and Fertigation Stock Tank Dilution. Built for smart farm engineers and growers.">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-gradient: linear-gradient(135deg, #0a0f1d 0%, #070a14 100%);
            --card-bg: rgba(255, 255, 255, 0.03);
            --card-border: rgba(255, 255, 255, 0.08);
            --accent-green: #10b981;
            --accent-cyan: #06b6d4;
            --text-main: #f3f4f6;
            --text-muted: #9ca3af;
            --danger: #ef4444;
            --warning: #f59e0b;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Outfit', sans-serif;
        }

        body {
            background: var(--bg-gradient);
            color: var(--text-main);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem 1rem;
            overflow-x: hidden;
        }

        .container {
            width: 100%;
            max-width: 1100px;
            z-index: 10;
        }

        /* Header Styles */
        header {
            text-align: center;
            margin-bottom: 3rem;
        }

        header h1 {
            font-size: 2.8rem;
            font-weight: 800;
            background: linear-gradient(to right, var(--accent-green), var(--accent-cyan));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 0.5rem;
            letter-spacing: -0.05em;
        }

        header p {
            color: var(--text-muted);
            font-size: 1.1rem;
        }

        /* Tabs System */
        .tabs {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .tab-btn {
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            color: var(--text-muted);
            padding: 0.8rem 1.8rem;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tab-btn:hover {
            border-color: var(--accent-green);
            color: var(--text-main);
        }

        .tab-btn.active {
            background: var(--accent-green);
            color: #0a0f1d;
            border-color: var(--accent-green);
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
        }

        /* Calculator Sections */
        .calc-section {
            display: none;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            padding: 2.5rem;
            border-radius: 24px;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            animation: fadeIn 0.5s ease-out forwards;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .calc-section.active {
            display: grid;
        }

        @media (max-width: 768px) {
            .calc-section {
                grid-template-columns: 1fr;
                padding: 1.5rem;
            }
        }

        /* Form Controls */
        .input-group {
            margin-bottom: 1.5rem;
        }

        .input-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-size: 0.95rem;
            font-weight: 600;
            color: var(--text-muted);
        }

        .input-wrapper {
            position: relative;
            display: flex;
            align-items: center;
        }

        .input-wrapper input {
            width: 100%;
            background: rgba(0, 0, 0, 0.2);
            border: 1px solid var(--card-border);
            padding: 0.8rem 1rem;
            border-radius: 12px;
            color: var(--text-main);
            font-size: 1.1rem;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .input-wrapper input:focus {
            outline: none;
            border-color: var(--accent-cyan);
            box-shadow: 0 0 10px rgba(6, 182, 212, 0.2);
        }

        .unit {
            position: absolute;
            right: 1rem;
            color: var(--text-muted);
            font-weight: 600;
            font-size: 0.9rem;
        }

        /* Results Display */
        .results-panel {
            background: rgba(0, 0, 0, 0.2);
            border: 1px solid var(--card-border);
            padding: 2rem;
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .result-val {
            font-size: 3.5rem;
            font-weight: 800;
            color: var(--accent-cyan);
            margin: 1rem 0;
            text-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
        }

        .result-status {
            display: inline-block;
            padding: 0.4rem 1.2rem;
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 1rem;
        }

        /* Ads/Promo Banner */
        .promo-banner {
            margin-top: 3rem;
            background: linear-gradient(90deg, rgba(16, 185, 129, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%);
            border: 1px solid var(--card-border);
            padding: 2rem;
            border-radius: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1.5rem;
        }

        .promo-content h3 {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--text-main);
            margin-bottom: 0.3rem;
        }

        .promo-content p {
            color: var(--text-muted);
            font-size: 0.95rem;
        }

        .promo-btn {
            background: var(--accent-green);
            color: #0a0f1d;
            border: none;
            padding: 0.8rem 1.8rem;
            border-radius: 12px;
            font-weight: 800;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.3s ease;
            white-space: nowrap;
        }

        .promo-btn:hover {
            box-shadow: 0 0 15px var(--accent-green);
            transform: scale(1.03);
        }

        @media (max-width: 768px) {
            .promo-banner {
                flex-direction: column;
                text-align: center;
            }
        }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>Smart Farm Engineering Lab</h1>
        <p>High-precision calculation tools for modern greenhouse systems</p>
    </header>

    <div class="tabs">
        <button id="btn-vpd" class="tab-btn active" onclick="switchTab('vpd')">Vapor Pressure Deficit (VPD)</button>
        <button id="btn-valve" class="tab-btn" onclick="switchTab('valve')">Mixing Valve Sizing</button>
        <button id="btn-fert" class="tab-btn" onclick="switchTab('fert')">Stock Tank Fertigation</button>
    </div>

    <!-- VPD CALCULATOR -->
    <div id="vpd-section" class="calc-section active">
        <div class="input-panel">
            <h2 style="margin-bottom: 1.5rem; font-weight: 600;">Environmental Inputs</h2>
            <div class="input-group">
                <label for="temp">Air Temperature</label>
                <div class="input-wrapper">
                    <input type="number" id="temp" value="25" step="0.1" oninput="calculateVPD()">
                    <span class="unit">°C</span>
                </div>
            </div>
            <div class="input-group">
                <label for="humidity">Relative Humidity</label>
                <div class="input-wrapper">
                    <input type="number" id="humidity" value="65" step="1" oninput="calculateVPD()">
                    <span class="unit">%</span>
                </div>
            </div>
            <div class="input-group">
                <label for="leaf-temp">Leaf Temperature Offset (vs. Air)</label>
                <div class="input-wrapper">
                    <input type="number" id="leaf-temp" value="-2" step="0.1" oninput="calculateVPD()">
                    <span class="unit">°C</span>
                </div>
            </div>
        </div>
        <div class="results-panel">
            <h3 style="color: var(--text-muted); font-weight: 600;">Leaf-to-Air VPD</h3>
            <div id="vpd-val" class="result-val">0.75</div>
            <div id="vpd-status" class="result-status" style="background: rgba(245, 158, 11, 0.2); color: var(--warning);">Slightly Low</div>
            <p id="vpd-desc" style="font-size: 0.95rem; color: var(--text-muted);">Good for rooting and vegetative stages, but transpiration is slightly restricted.</p>
        </div>
    </div>

    <!-- VALVE SIZING CALCULATOR -->
    <div id="valve-section" class="calc-section">
        <div class="input-panel">
            <h2 style="margin-bottom: 1.5rem; font-weight: 600;">Hydraulic & Thermal Inputs</h2>
            <div class="input-group">
                <label for="heat-demand">Heating Demand</label>
                <div class="input-wrapper">
                    <input type="number" id="heat-demand" value="120" step="1" oninput="calculateValve()">
                    <span class="unit">kW</span>
                </div>
            </div>
            <div class="input-group">
                <label for="delta-t">Design Temperature Drop (ΔT)</label>
                <div class="input-wrapper">
                    <input type="number" id="delta-t" value="20" step="1" oninput="calculateValve()">
                    <span class="unit">°C</span>
                </div>
            </div>
            <div class="input-group">
                <label for="dp-valve">Target Valve Pressure Drop (ΔPv)</label>
                <div class="input-wrapper">
                    <input type="number" id="dp-valve" value="10" step="0.5" oninput="calculateValve()">
                    <span class="unit">kPa</span>
                </div>
            </div>
        </div>
        <div class="results-panel">
            <h3 style="color: var(--text-muted); font-weight: 600;">Required Valve Kv Value</h3>
            <div id="kv-val" class="result-val">16.32</div>
            <div id="kv-status" class="result-status" style="background: rgba(6, 182, 212, 0.2); color: var(--accent-cyan);">Ready to Size</div>
            <p id="kv-desc" style="font-size: 0.95rem; color: var(--text-muted);">Required flow rate is 5.16 m³/h. Pick a standard mixing valve with Kvs slightly larger than 16.32 (e.g., Kv 25) to ensure hydraulic authority.</p>
        </div>
    </div>

    <!-- FERTIGATION CALCULATOR -->
    <div id="fert-section" class="calc-section">
        <div class="input-panel">
            <h2 style="margin-bottom: 1.5rem; font-weight: 600;">Fertigation Parameters</h2>
            <div class="input-group">
                <label for="target-ppm">Target Element Concentration</label>
                <div class="input-wrapper">
                    <input type="number" id="target-ppm" value="190" step="5" oninput="calculateFert()">
                    <span class="unit">ppm</span>
                </div>
            </div>
            <div class="input-group">
                <label for="tank-volume">Stock Tank Volume</label>
                <div class="input-wrapper">
                    <input type="number" id="tank-volume" value="1000" step="50" oninput="calculateFert()">
                    <span class="unit">Liters</span>
                </div>
            </div>
            <div class="input-group">
                <label for="dilution">Dilution Factor (1:X)</label>
                <div class="input-wrapper">
                    <input type="number" id="dilution" value="100" step="10" oninput="calculateFert()">
                    <span class="unit">Ratio</span>
                </div>
            </div>
            <div class="input-group">
                <label for="purity">Element Purity in Fertilizer</label>
                <div class="input-wrapper">
                    <input type="number" id="purity" value="19" step="0.5" oninput="calculateFert()">
                    <span class="unit">%</span>
                </div>
            </div>
        </div>
        <div class="results-panel">
            <h3 style="color: var(--text-muted); font-weight: 600;">Required Fertilizer Mass</h3>
            <div id="mass-val" class="result-val">100.00</div>
            <div id="mass-status" class="result-status" style="background: rgba(16, 185, 129, 0.2); color: var(--accent-green);">Ready to Mix</div>
            <p id="mass-desc" style="font-size: 0.95rem; color: var(--text-muted);">Dissolve 100.00 kg of fertilizer into the 1000L stock tank to achieve 190 ppm after 1:100 injection.</p>
        </div>
    </div>

    <!-- PROMOTIONAL LINK TO GUMROAD / NOTION -->
    <div class="promo-banner">
        <div class="promo-content">
            <h3>🚀 Optimize Your Smart Farm Operations Even More</h3>
            <p>Download our professional "Smart Farm Operator OS" Notion Template containing all sensor calibration schedules, fertigation formulas, and crop logs.</p>
        </div>
        <a href="https://gumroad.com" target="_blank" class="promo-btn">Get Template for $19.99</a>
    </div>
</div>

<script>
    function switchTab(tab) {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.calc-section').forEach(sec => sec.classList.remove('active'));
        
        if (tab === 'vpd') {
            document.getElementById('btn-vpd').classList.add('active');
            document.getElementById('vpd-section').classList.add('active');
            calculateVPD();
        } else if (tab === 'valve') {
            document.getElementById('btn-valve').classList.add('active');
            document.getElementById('valve-section').classList.add('active');
            calculateValve();
        } else {
            document.getElementById('btn-fert').classList.add('active');
            document.getElementById('fert-section').classList.add('active');
            calculateFert();
        }
    }

    // VPD Calculation Formulas (Tetens Equation)
    function calculateVPD() {
        const T_air = parseFloat(document.getElementById('temp').value);
        const RH = parseFloat(document.getElementById('humidity').value);
        const dT = parseFloat(document.getElementById('leaf-temp').value);
        const T_leaf = T_air + dT;

        // Saturation Vapor Pressure (VPsat) in kPa
        const VPsat_air = 0.61078 * Math.exp((17.27 * T_air) / (T_air + 237.3));
        const VPsat_leaf = 0.61078 * Math.exp((17.27 * T_leaf) / (T_leaf + 237.3));

        // Actual Vapor Pressure (VPact) of air in kPa
        const VPact_air = VPsat_air * (RH / 100);

        // Leaf-to-Air VPD
        const vpd = VPsat_leaf - VPact_air;
        
        const vpdValEl = document.getElementById('vpd-val');
        vpdValEl.innerText = vpd.toFixed(2);

        // Status Evaluation
        const statusEl = document.getElementById('vpd-status');
        const descEl = document.getElementById('vpd-desc');

        if (vpd < 0.4) {
            statusEl.innerText = "Under-Transpiring (Too Wet)";
            statusEl.style.background = "rgba(239, 68, 68, 0.2)";
            statusEl.style.color = "var(--danger)";
            descEl.innerText = "High risk of fungal diseases (botrytis, calcium deficiency). Evaporation is too low.";
        } else if (vpd >= 0.4 && vpd <= 0.8) {
            statusEl.innerText = "Slightly Low";
            statusEl.style.background = "rgba(245, 158, 11, 0.2)";
            statusEl.style.color = "var(--warning)";
            descEl.innerText = "Good for rooting and vegetative stages, but transpiration is slightly restricted.";
        } else if (vpd > 0.8 && vpd <= 1.2) {
            statusEl.innerText = "Optimal";
            statusEl.style.background = "rgba(16, 185, 129, 0.2)";
            statusEl.style.color = "var(--accent-green)";
            descEl.innerText = "Perfect greenhouse climate. Stomata are open, maximizing CO2 assimilation.";
        } else if (vpd > 1.2 && vpd <= 1.6) {
            statusEl.innerText = "High Transpiring (Dry)";
            statusEl.style.background = "rgba(245, 158, 11, 0.2)";
            statusEl.style.color = "var(--warning)";
            descEl.innerText = "Crop is evaporating heavily. Maintain roots water availability.";
        } else {
            statusEl.innerText = "Water Stressed (Too Dry)";
            statusEl.style.background = "rgba(239, 68, 68, 0.2)";
            statusEl.style.color = "var(--danger)";
            descEl.innerText = "Stomata are closing to prevent dehydration. Growth is stunted. Increase humidity.";
        }
    }

    // Mixing Valve Sizing Formulas
    function calculateValve() {
        const Q = parseFloat(document.getElementById('heat-demand').value); // kW
        const dT = parseFloat(document.getElementById('delta-t').value); // °C
        const dPv = parseFloat(document.getElementById('dp-valve').value); // kPa

        if (dT <= 0 || dPv <= 0) return;

        // Water Heat Capacity: 4.186 kJ/(kg*K)
        // Volumetric flow rate V (m³/h) = (Q * 3600) / (density * Cp * dT)
        // Approx: V = (Q * 0.86) / dT
        const flowRate = (Q * 0.86) / dT; // m³/h

        // Kv value calculation: Kv = V / sqrt(dPv in bar)
        // 1 bar = 100 kPa. Hence, dPv in bar = dPv / 100.
        const dpBar = dPv / 100;
        const kv = flowRate / Math.sqrt(dpBar);

        const kvValEl = document.getElementById('kv-val');
        kvValEl.innerText = kv.toFixed(2);

        const descEl = document.getElementById('kv-desc');
        descEl.innerText = `Required flow rate is ${flowRate.toFixed(2)} m³/h. Pick a standard mixing valve with Kvs slightly larger than ${kv.toFixed(2)} (e.g., Kv 25) to ensure hydraulic authority.`;
    }

    // Fertigation Calculation
    function calculateFert() {
        const targetPpm = parseFloat(document.getElementById('target-ppm').value);
        const tankVolume = parseFloat(document.getElementById('tank-volume').value);
        const dilution = parseFloat(document.getElementById('dilution').value);
        const purity = parseFloat(document.getElementById('purity').value);

        if (purity <= 0 || dilution <= 0 || tankVolume <= 0 || targetPpm <= 0) return;

        // Formula: Mass (kg) = (PPM * Vol * Dilution) / (Purity% * 10,000)
        const mass = (targetPpm * tankVolume * dilution) / (purity * 10000);

        const massValEl = document.getElementById('mass-val');
        massValEl.innerText = mass.toFixed(2);

        const descEl = document.getElementById('mass-desc');
        descEl.innerText = `Dissolve ${mass.toFixed(2)} kg of this fertilizer into the ${tankVolume}L stock tank to achieve ${targetPpm} ppm after 1:${dilution} injection.`;
    }

    // Init calculations
    calculateVPD();
</script>
</body>
</html>
