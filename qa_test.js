const fs = require('fs');

// Simple DOM Mock
class MockElement {
    constructor(id) {
        this.id = id;
        this._value = '10'; // Default non-zero value to prevent divide-by-zero math errors
        this.selectedIndex = 0;
        this.style = {};
        this.options = [];
        this.innerHTML = '';
        this.innerText = '';
        this.classList = {
            add: () => {},
            remove: () => {}
        };
    }
    
    get value() {
        return this._value;
    }
    
    set value(val) {
        this._value = val;
        // Keep selectedIndex in sync for mocks
        if (this.options && this.options.length > 0) {
            const idx = this.options.findIndex(opt => opt.value == val);
            if (idx !== -1) {
                this.selectedIndex = idx;
            }
        }
    }

    dispatchEvent(event) {}
    click() {}
    addEventListener() {}
    getAttribute() { return ''; }
    
    getContext() {
        return {
            fillRect: () => {},
            clearRect: () => {},
            getImageData: () => ({ data: [] }),
            putImageData: () => {},
            createLinearGradient: () => ({ addColorStop: () => {} }),
        };
    }
}

const mockDOM = {};

// Pre-create and configure elements that need dropdown options
const createMockSelect = (id, options) => {
    const el = new MockElement(id);
    el.options = options.map(opt => ({ value: opt }));
    mockDOM[id] = el;
    return el;
};

createMockSelect('est-cover', ['6.0', '3.5', '5.5', '2.8', 'custom']);
createMockSelect('hl-preset', ['custom', '6.0', '3.5', '5.5', '3.0', '3.3', '2.3']);
createMockSelect('tr-crop', ['tomato', 'pepper', 'cucumber', 'strawberry', 'custom']);
createMockSelect('crop-select', ['greens', 'strawberry', 'herbs', 'custom']);
createMockSelect('prof-cladding', ['5.5', '3.5', '1.8', 'custom']);
createMockSelect('roi-boiler-type', ['gas', 'oil', 'lpg']);
createMockSelect('prof-crop', ['tomato', 'strawberry', 'pepper', 'cucumber', 'herbs', 'blueberry', 'melon', 'greens', 'custom']);
createMockSelect('prof-boiler', ['gas', 'oil', 'lpg']);

// Pre-create sections so they exist by default
['section-vpd', 'section-valve', 'section-fert', 'section-heat-loss', 'section-roi', 'section-transpiration', 'section-vertical', 'section-pollinator', 'section-market', 'section-dashboard']
    .forEach(id => { mockDOM[id] = new MockElement(id); });

// Proxy to dynamically capture and return MockElements for any other IDs
const documentProxy = new Proxy(mockDOM, {
    get: (target, prop) => {
        if (prop === 'getElementById') {
            return (id) => {
                if (!target[id]) {
                    target[id] = new MockElement(id);
                }
                return target[id];
            };
        }
        if (prop === 'querySelectorAll') {
            return () => [];
        }
        if (prop === 'addEventListener') {
            return () => {};
        }
        if (prop === 'createElement') {
            return () => new MockElement('dynamic');
        }
        if (prop === 'body') {
            return {
                appendChild: () => {},
                removeChild: () => {}
            };
        }
        return target[prop];
    }
});
global.document = documentProxy;

global.window = {
    location: { search: '' },
    addEventListener: () => {}
};

global.URL = {
    createObjectURL: () => '',
    revokeObjectURL: () => {}
};

global.URLSearchParams = class {
    constructor() {
        this.get = () => '';
    }
};

let storage = {};
global.localStorage = {
    getItem: (key) => storage[key],
    setItem: (key, val) => storage[key] = val
};

global.Event = class { constructor(type) { this.type = type; } };

// Mock Chart with data structure expected by common.js update logic
global.Chart = class {
    constructor() {
        this.data = {
            datasets: [{ label: '', data: [] }],
            labels: []
        };
    }
    update() {}
};

// Run common.js in this mocked global environment
const commonJsCode = fs.readFileSync('common.js', 'utf8');
eval(commonJsCode);

// Assert the function exists
if (typeof window.autofillInputsFromProfile !== 'function') {
    console.error("autofillInputsFromProfile function is not defined on window!");
    process.exit(1);
}

// Generate 10,000 random profiles
const crops = ['tomato', 'strawberry', 'pepper', 'cucumber', 'herbs', 'blueberry', 'melon', 'greens', 'custom'];
const claddings = [5.5, 3.5, 1.8, 6.0, 3.0, 3.3, 2.3, 2.8, 1.5, 4.0, 2.0]; // Mix of presets and customs
const boilers = ['gas', 'oil', 'lpg'];

let successCount = 0;
let errors = [];

console.log("Starting 10,000 virtual users full-calculator stress-test with Proxy Mock DOM...");

const startTime = Date.now();

for (let i = 0; i < 10000; i++) {
    const profile = {
        area: Math.floor(Math.random() * 5000) + 500,
        cladding: claddings[Math.floor(Math.random() * claddings.length)],
        crop: crops[Math.floor(Math.random() * crops.length)],
        tank: Math.floor(Math.random() * 2000) + 500,
        injector: Math.floor(Math.random() * 200) + 50,
        boiler: boilers[Math.floor(Math.random() * boilers.length)],
        boilerPrice: Math.floor(Math.random() * 1500) + 500,
        elecRate: Math.floor(Math.random() * 100) + 30
    };

    localStorage.setItem('farmProfile', JSON.stringify(profile));

    try {
        // Set profile inputs using document.getElementById to auto-create them via Proxy
        document.getElementById('prof-area').value = profile.area.toString();
        document.getElementById('prof-cladding').value = profile.cladding.toString();
        document.getElementById('prof-crop').value = profile.crop;
        document.getElementById('prof-tank').value = profile.tank.toString();
        document.getElementById('prof-injector').value = profile.injector.toString();
        document.getElementById('prof-boiler').value = profile.boiler;
        document.getElementById('prof-boiler-price').value = profile.boilerPrice.toString();
        document.getElementById('prof-elec-rate').value = profile.elecRate.toString();

        // 1. Run load & autofill mapping
        window.loadFarmProfile();
        window.autofillInputsFromProfile();
        
        // 2. Trigger recalculateActiveSimulator (runs all engines)
        window.recalculateActiveSimulator();
        
        // 3. Verify outputs are non-NaN
        const vpdText = document.getElementById('vpd-value') ? document.getElementById('vpd-value').innerText : '';
        const valveText = document.getElementById('valve-kv-value') ? document.getElementById('valve-kv-value').innerText : '';
        const hlText = document.getElementById('hl-value') ? document.getElementById('hl-value').innerText : '';
        const roiText = document.getElementById('roi-value') ? document.getElementById('roi-value').innerText : '';
        const transText = document.getElementById('trans-value') ? document.getElementById('trans-value').innerText : '';
        const verticalTjText = document.getElementById('thermal-tj-val') ? document.getElementById('thermal-tj-val').innerText : '';

        if (vpdText.includes('NaN')) throw new Error('VPD calculation resulted in NaN');
        if (valveText.includes('NaN')) throw new Error('Valve Kv calculation resulted in NaN');
        if (hlText.includes('NaN')) throw new Error('Heat Loss calculation resulted in NaN');
        if (roiText.includes('NaN')) throw new Error('ROI calculation resulted in NaN');
        if (transText.includes('NaN')) throw new Error('Transpiration calculation resulted in NaN');
        if (verticalTjText.includes('NaN')) throw new Error('Vertical TJ calculation resulted in NaN');

        successCount++;
    } catch (e) {
        errors.push(e.stack || e.message);
        if (errors.length >= 10) {
            console.error("Too many errors. Stopping test.");
            break;
        }
    }
}

const duration = Date.now() - startTime;
console.log(`Test completed in ${duration}ms: ${successCount}/10000 successful.`);
if (errors.length > 0) {
    console.error("Errors encountered (showing first 10):");
    errors.forEach(e => console.error(e));
    process.exit(1);
} else {
    console.log("All 10,000 virtual users successfully ran all profile mappings AND all calculator engines without a single NaN or exception!");
}
