# Precision Vertical Farming & LED Photobiology: A Practical Operations Manual

## Chapter 1: Multi-tier Racking & Micro-climate Design

### 1.1 Spatial Geometry and Canopy Stacking Dynamics
In artificial light vertical farming (ALVF), spatial optimization is governed by the volumetric layout of multi-tier racking systems. Unlike open fields or traditional Venlo-type glasshouses where solar irradiance dictates a horizontal layout, vertical farming stacks production canopy layers vertically. This configuration maximizes the leaf area index ($LAI$) per square meter of floor footprint. 

The vertical planting density ($PD_v$, plants/m³) is defined as:
$$PD_v = \frac{N_{tiers} \cdot N_{plants\_per\_tier}}{A_{floor} \cdot H_{rack}}$$

where:
* $N_{tiers}$ is the number of racking levels.
* $N_{plants\_per\_tier}$ is the number of plant sites per tier.
* $A_{floor}$ is the physical floor area footprint ($\text{m}^2$).
* $H_{rack}$ is the total vertical height of the racking column ($\text{m}$).

However, increasing the number of tiers reduces the clearance spacing ($H_{clear}$) between the top of the canopy and the overhead LED lighting modules. This spacing must satisfy the minimum threshold required for uniform light distribution and micro-climate airflow:
$$H_{clear} = \frac{H_{rack}}{N_{tiers}} - H_{bench} - H_{canopy\_max} - H_{LED}$$

where:
* $H_{bench}$ is the height of the cultivation tray/gully base structure.
* $H_{canopy\_max}$ is the maximum maturity height of the crop canopy.
* $H_{LED}$ is the thickness of the LED lighting bar assembly.

If $H_{clear}$ falls below $15\text{ cm}$, micro-climate stagnation zones develop immediately above the crop, causing localized pockets of high relative humidity and boundary layer air resistance.

```
┌──────────────────────────────────────────┐
│              LED Light Bar               │
├──────────────────────────────────────────┤ ◄── H_clear (Min 15cm)
│                                          │
│         ☼ ☼  Canopy Level  ☼ ☼           │
├──────────────────────────────────────────┤ ◄── H_canopy_max
│           Cultivation Substrate          │
├──────────────────────────────────────────┤ ◄── H_bench
│             Racking Support              │
└──────────────────────────────────────────┘
```

---

### 1.2 Fluid Dynamics of Stagnant Air & Boundary Layer Resistance
In closed growing rooms, the absence of natural wind requires artificial air circulation. The leaf boundary layer is a thin layer of stagnant air adhering to the leaf surface. Transpired water vapor must diffuse through this boundary layer to reach the ambient air.

The boundary layer resistance to water vapor ($r_a$, s/m) is empirically determined by leaf dimension and air velocity:
$$r_a = 305 \cdot \sqrt{\frac{d_{leaf}}{v_{air}}}$$

where:
* $d_{leaf}$ is the characteristic leaf dimension in the direction of airflow ($\text{m}$).
* $v_{air}$ is the local horizontal wind speed across the canopy ($\text{m/s}$).

If air velocity $v_{air}$ is maintained below $0.1\text{ m/s}$, the boundary layer resistance $r_a$ increases exponentially. This traps water vapor at the stomatal pore, raising the local relative humidity ($RH_{leaf}$) to $100\%$ and shutting down transpiration. 

To maintain healthy plant transpiration, air circulation systems must generate horizontal micro-convection currents across every tier. The target velocity window is $0.15 \text{ to } 0.30\text{ m/s}$. Air velocities exceeding $0.50\text{ m/s}$ trigger mechanical stress responses, causing stomatal closure to protect the plant from excessive dehydration.

---

### 1.3 Vapor Pressure Deficit (VPD) Calculations via Antoine Equation
Managing relative humidity (RH) alone is insufficient for predicting plant transpiration. Instead, environmental controls must calculate the Vapor Pressure Deficit (VPD, kPa), representing the driving force pushing water vapor out of the leaf.

VPD is calculated as the difference between the saturation vapor pressure inside the leaf ($VP_{sat\_leaf}$) and the actual vapor pressure of the ambient air ($VP_{act\_air}$):
$$VPD = VP_{sat\_leaf} - VP_{act\_air}$$

To calculate the saturation water vapor pressure ($VP_{sat}$, kPa) at a given temperature ($T$, °C), we apply the Antoine equation approximation:
$$VP_{sat}(T) = 0.61078 \times e^{\left(\frac{17.27 \times T}{T + 237.3}\right)}$$

Under normal vertical farming conditions, leaf temperature ($T_{leaf}$) is lower than ambient air temperature ($T_{air}$) due to evaporative cooling from transpiration. We define the leaf temperature offset ($\Delta T$) as:
$$\Delta T = T_{leaf} - T_{air}$$

Typically, $\Delta T$ ranges from $-1.0^\circ\text{C}$ to $-2.0^\circ\text{C}$ under adequate airflow. Thus:
$$VP_{sat\_leaf} = VP_{sat}(T_{air} + \Delta T)$$
$$VP_{act\_air} = VP_{sat}(T_{air}) \times \frac{RH_{air}}{100}$$

#### Worked Example:
Given $T_{air} = 23.0^\circ\text{C}$, $RH_{air} = 65\%$, and a leaf temperature offset $\Delta T = -1.5^\circ\text{C}$:
1. Saturation pressure of ambient air:
   $$VP_{sat}(23.0) = 0.61078 \times e^{\left(\frac{17.27 \times 23.0}{23.0 + 237.3}\right)} = 2.809 \text{ kPa}$$
2. Actual water vapor pressure of ambient air:
   $$VP_{act\_air} = 2.809 \times \frac{65}{100} = 1.826 \text{ kPa}$$
3. Saturation pressure inside the leaf (at $T_{leaf} = 23.0 - 1.5 = 21.5^\circ\text{C}$):
   $$VP_{sat\_leaf} = 0.61078 \times e^{\left(\frac{17.27 \times 21.5}{21.5 + 237.3}\right)} = 2.562 \text{ kPa}$$
4. Final Vapor Pressure Deficit:
   $$VPD = 2.562 - 1.826 = 0.736 \text{ kPa}$$

---

### 1.4 Optimal VPD Windows & Physiological Disorders
ALVF HVAC automation systems must dynamically adjust heating, cooling, and dehumidification cycles to keep the canopy environment within crop-specific VPD targets:

* **Optimal Range (0.5 to 1.4 kPa)**: Standard horticultural target window. Stomata remain open, facilitating steady CO₂ uptake for photosynthesis and balanced water and calcium transport.
* **Low VPD Hazard Zone (< 0.5 kPa)**: Air is saturated with moisture. Stomatal transpiration drops near zero. Since calcium ($Ca^{2+}$) transport is entirely passive and driven by water flow, a lack of transpiration causes calcium starvation in growing tips. This leads to **Tipburn** (cellular necrosis of leaf margins) in leafy greens and **Blossom-End Rot** in fruiting crops.
* **High VPD Hazard Zone (> 1.4 kPa)**: Air is excessively dry. The plant loses water faster than its root system can absorb it. To prevent vascular collapse, guard cells deflate and close the stomata. This stomatal closure halts CO₂ absorption, stalling biomass production and raising leaf temperatures due to the loss of evaporative cooling.

---

## Chapter 2: LED Photobiology & DLI Calculations

### 2.1 The PAR Spectrum and Photosynthetic Efficacy
Photosynthetically Active Radiation (PAR) spans wavelengths from $400 \text{ to } 700\text{ nm}$. Inside a vertical farm, LED arrays are customized to match the absorption peaks of plant photoreceptors:

```
Chlorophyll Absorption Peaks:
  Blue (~450 nm) ──► Stomatal Opening & Compact Architecture
  Red (~660 nm)  ──► Core Photosynthesis Energy Engine
  Far-Red (~730nm) ──► Shade Avoidance & Flowering Trigger
```

* **Deep Red (660nm) (70-80% of PAR flux)**: Aligns with the maximum absorption band of Chlorophyll A and B. It drives the energetic reactions of Photosystem I and II.
* **Deep Blue (450nm) (10-20% of PAR flux)**: Triggers cryptochromes and phototropins. It regulates stomatal conductance, prevents elongation (stretching), and creates compact, thick leaves suitable for dense vertical racks.
* **Green (550nm) (5-10% of PAR flux)**: Possesses high transmittance properties. While red and blue photons are mostly absorbed at the top of the canopy, green photons penetrate deep into lower leaf layers, driving photosynthesis in shaded leaves.
* **Far-Red (730nm) (optional, 2-7%)**: Promotes the shade avoidance response. It shifts the phytochrome photo-equilibrium ($P_{fr}/P_{total}$), triggering expansion of leaf area to capture more light and accelerating flowering.

---

### 2.2 Daily Light Integral (DLI) Integration
The Daily Light Integral (DLI, $\text{mol/m}^2/\text{day}$) is the cumulative amount of light (photons) delivered to a square meter of crop canopy over a 24-hour cycle. It is calculated from the Photosynthetic Photon Flux Density (PPFD, $\mu\text{mol/m}^2/\text{s}$) and the lighting duration (photoperiod, hours):

$$DLI = PPFD \times \text{Photoperiod (Hours)} \times 0.0036$$

where $0.0036$ is the scaling factor converting microseconds to hours and micromoles to moles ($3600\text{ seconds/hour} \times 10^{-6}\text{ moles/\mu mol}$).

To achieve a target DLI, the required photoperiod ($t_{light}$, hours) is calculated as:
$$t_{light} = \frac{DLI_{target}}{PPFD \times 0.0036}$$

#### Operational Presets:
1. **Lettuce and Leafy Greens**: Target DLI $= 14 \text{ to } 16\text{ mol/m}^2/\text{day}$.
   * At PPFD $= 250 \,\, \mu\text{mol/m}^2/\text{s}$:
     $$t_{light} = \frac{16.0}{250 \times 0.0036} = 17.78 \text{ Hours/Day}$$
2. **Strawberries**: Target DLI $= 20 \text{ to } 25\text{ mol/m}^2/\text{day}$.
   * At PPFD $= 350 \,\, \mu\text{mol/m}^2/\text{s}$:
     $$t_{light} = \frac{22.0}{350 \times 0.0036} = 17.46 \text{ Hours/Day}$$

---

### 2.3 Electro-Thermal Heat Flow & Junction Temperature ($T_j$)
LED modules do not emit heat as infrared radiation. Instead, 60-70% of the electrical energy is converted into conductive heat at the LED semiconductor junction. This heat must be dissipated to maintain efficiency.

The thermal dissipation power ($P_{diss}$, W) of an LED bar is:
$$P_{diss} = P_{elec} \times (1 - \eta_{opt})$$

where:
* $P_{elec}$ is the input electrical power ($I_f \times V_f$).
* $\eta_{opt}$ is the optical efficiency (typically $0.35 \text{ to } 0.42$ for high-quality LEDs).

The junction temperature ($T_j$, °C) is calculated using a thermal resistance network:
$$T_j = T_{amb} + P_{diss} \times (R_{\theta, j-s} + R_{\theta, s-b} + R_{\theta, b-a})$$

where:
* $T_{amb}$ is the ambient room air temperature.
* $R_{\theta, j-s}$ is the internal junction-to-solder thermal resistance.
* $R_{\theta, s-b}$ is the thermal resistance of the substrate/TIM (Thermal Interface Material).
* $R_{\theta, b-a}$ is the heatsink-to-ambient thermal resistance, defined by surface area $A$ ($\text{m}^2$) and convective heat transfer coefficient $h$ ($\text{W/m}^2\text{K}$):
  $$R_{\theta, b-a} = \frac{1}{h \cdot A}$$

#### Safety Boundaries:
* **Junction Temperature ($T_j < 85^\circ\text{C}$)**: Safe zone. Maximizes lifespan and maintains photon output efficacy.
* **Degradation Zone ($85^\circ\text{C} \le T_j \le 110^\circ\text{C}$)**: Accelerated thermal degradation. Optical efficacy drops by 10-15%.
* **Catastrophic Failure Zone ($T_j > 115^\circ\text{C}$)**: Immediate risk of semiconductor breakdown and physical solder reflow.

---

### 2.4 Structured Text (ST) PLC Code for DLI & Nutrient Delivery Scheduling

To automate the lighting photoperiod and synchronize irrigation cycles with the daily lighting schedule, a Modbus-integrated PLC controller is programmed. The following Structured Text (ST) script implements a real-time clock (RTC) lighting scheduler and dynamically adjusts nutrient irrigation weights:

```pascal
(* PLC Lighting and Irrigation Synchronizer *)
PROGRAM Light_Irrigation_Control
VAR
    CurrentHour      : INT;     (* Input: System RTC Hour (0-23) *)
    TargetDLI        : REAL := 16.0;  (* Target Daily Light Integral *)
    MeasuredPPFD     : REAL := 250.0; (* Input: Sensor PAR PPFD *)
    RequiredHours    : REAL;    (* Calculated Photoperiod *)
    
    (* Output relays *)
    LightRelay       : BOOL;    (* Digital Out: LED Power Contactor *)
    IrrigationRelay  : BOOL;    (* Digital Out: Solenoid Valve *)
    
    (* Timing variables *)
    IrrigationTimer  : TON;     (* Timer On Delay for watering cycles *)
    IrrigIntervalHour: INT := 3;(* Hours between watering cycles *)
    LastIrrigHour    : INT := -99;
    IrrigDurationSec : TIME := T#45s; (* 45 seconds run-time *)
    IsWatering       : BOOL := FALSE;
END_VAR

(* 1. Calculate Required Photoperiod to hit Target DLI *)
IF MeasuredPPFD > 0.0 THEN
    RequiredHours := TargetDLI / (MeasuredPPFD * 0.0036);
ELSE
    RequiredHours := 18.0; (* Safe fallback default *)
END_IF;

(* Bound required hours to realistic system parameters *)
IF RequiredHours > 24.0 THEN
    RequiredHours := 24.0;
ELSIF RequiredHours < 4.0 THEN
    RequiredHours := 4.0;
END_IF;

(* 2. Lighting Schedule Logic (Centered around solar noon at 12:00) *)
(* E.g., if RequiredHours = 16.0, run from 04:00 to 20:00 *)
IF (CurrentHour >= REAL_TO_INT(12.0 - (RequiredHours / 2.0))) AND 
   (CurrentHour < REAL_TO_INT(12.0 + (RequiredHours / 2.0))) THEN
    LightRelay := TRUE;
ELSE
    LightRelay := FALSE;
END_IF;

(* 3. Irrigation Control Synchronized with Lighting *)
(* Plant only transpires and absorbs nutrients when lights are active *)
IF LightRelay AND (CurrentHour MOD IrrigIntervalHour = 0) AND (CurrentHour <> LastIrrigHour) AND NOT IsWatering THEN
    IsWatering := TRUE;
    LastIrrigHour := CurrentHour;
END_IF;

(* Run the timer for irrigation solenoid *)
IrrigationTimer(IN := IsWatering, PT := IrrigDurationSec);

IF IrrigationTimer.Q THEN
    (* Timer expired, turn off solenoid *)
    IrrigationRelay := FALSE;
    IsWatering := FALSE;
ELSE
    IrrigationRelay := IsWatering;
END_IF;

END_PROGRAM
```
