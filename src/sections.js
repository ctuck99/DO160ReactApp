import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>DO-160 Tests</h1>
            <nav>
                <Link to="TemperatureandAltitude">Section 4 - Temperature and Altitude<br></br></Link>
                <Link to="TemperatureVariation">Section 5 - Temperature Variation<br></br></Link>
                <Link to="Humidity">Section 6 - Humidity<br></br></Link>
                <Link to="OperationalShocksandCrashSafety">Section 7 - Operational Shocks and Crash Safety<br></br></Link>
                <Link to="Vibration">Section 8 - Vibration<br></br></Link>
                <Link to="ExplosiveAtmosphere">Section 9 - Explosive Atmosphere<br></br></Link>
                <Link to="Waterproofness">Section 10 - Waterproofness<br></br></Link>
                <Link to="FluidsSusceptibility">Section 11 - Fluids Susceptibility<br></br></Link>
                <Link to="SandandDust">Section 12 - Sand and Dust<br></br></Link>
                <Link to="SaltFog">Section 14 - Salt Fog<br></br></Link>
                <Link to="MagneticEffect">Section 15 - Magnetic Effect<br></br></Link>
                <Link to="PowerInput">Section 16 - Power Input<br></br></Link>
                <Link to="section_17">Section 17 - Voltage Spike<br></br></Link>
                <Link to="section_18">Section 18 - Audio Frequency Conducted Susceptibility - Power Inputs<br></br></Link>
                <Link to="section_19">Section 19 - Induced Signal Susceptibility<br></br></Link>
                <Link to="section_20">Section 20 - Radio Frequency Susceptibility {"(Radiated and Conducted)"}"<br></br></Link>
                <Link to="section_21">Section 21 - Emission of Radio Frequency Energy<br></br></Link>
                <Link to="section_22">Section 22 - Lightning Induced Transient Susceptibility<br></br></Link>
                <Link to="section_23">Section 23 - Lightning Direct Effects<br></br></Link>
                <Link to="section_24">Section 24 - Icing<br></br></Link>
                <Link to="section_25">Section 25 - Electrostatic Discharge {"(ESD)"}<br></br></Link>
                <Link to="section_26">Section 26 - Fire, Flammability<br></br></Link>
            </nav>
        </div>
    )
}

export function Header() {
    return (
    <header>
        <nav>
            <Link to="/"><br></br>Home</Link>
        </nav>
    </header>
    )
}

export function TempandAltCatDropDown() {
    const [items] = React.useState([
        {
            label: "X",
            value: "X"
        },
        { label: "A1", value: "A1"},
        { label: "A2", value: "A2"},
        { label: "A3", value: "A3"},
        { label: "A4", value: "A4"},
        { label: "B1", value: "B1"},
        { label: "B2", value: "B2"},
        { label: "B3", value: "B3"},
        { label: "B4", value: "B4"},
        { label: "C1", value: "C1"},
        { label: "C2", value: "C2"},
        { label: "C3", value: "C3"},
        { label: "C4", value: "C4"},
        { label: "D1", value: "D1"},
        { label: "D2", value: "D2"},
        { label: "D3", value: "D3"},
        { label: "E1", value: "E1"},
        { label: "E2", value: "E2"},
        { label: "F1", value: "F1"},
        { label: "F2", value: "F2"},
        { label: "F3", value: "F3"},
    ]);
    return (
        <select>
            {items.map(item => (
                <option
                    key={item.value}
                    value={item.value}
                    >
                        {item.label}
                    </option>
            ))}
        </select>
    )
}

export function LossOfCoolingCatDropDown() {
    const [items] = React.useState([
        {
            label: "X",
            value: "X"
        },
        { label: "V", value: "V "},
        { label: "W", value: "W" },
        { label: "P", value: "P"},
        { label: "Y", value: "Y"},
        { label: "Z", value: "Z"}
    ]);
    return (
        <select>
            {items.map(item => (
                <option
                    key={item.value}
                    value={item.value}
                >
                    {item.label}
                </option>
            ))}
        </select>
    )
}

export function TempVariationCatDropDown() {
    const [items] = React.useState([
        {
            label: "X",
            value: "X"
        },
        { label: "A", value: "10"},
        { label: "B", value: "B"},
        { label: "C", value: "C"},
        { label: "S1", value: "S1"},
        { label: "S2", value: "S2"}
    
    ]);
    return (
        <>
        <select>
            {items.map(item => (
                <option
                    key={item.value}
                    value={item.value}
                    >
                        {item.label}
                </option>
            ))}
        </select>
        <h2>Temperature Variation Rate:</h2>
        <p>{"figure out how to return the value from select"}</p>
        </>
    )
}

export function HumidityCatDropDown() {
    const [items] = React.useState([
        {
            label: "X", value: "No Test"
        },
        { label: "A", value: "A"},
        { label: "B", value: "B" },
        { label: "C", value: "C" },
    ]);
    return (
        <select>
            {items.map(item => (
                <option 
                    key={item.value}
                    value={item.value}
                    >
                        {item.label}
                    </option>
            ))}
        </select>
    );
}

export function TemperatureandAltitude() {
    return (
        <div>            
            <Header />
            <h1>Test Section</h1>
            <p>Temperature and Altitude</p>
            <h2>Category</h2>
            <TempandAltCatDropDown />
            <p>{"\n"}</p>
            <nav>
                <Link to="GroundSurvivalLow">Ground Survival Low<br></br></Link>
                <Link to="OperationalLow">Operational Low Low<br></br></Link>
                <Link to="GroundSurvivalHigh">Ground Survival High<br></br></Link>
                <Link to="OperationalHigh">Operational High<br></br></Link>
                <Link to="Altitude">Altitude<br></br></Link>
                <Link to="Decompression">Decompression<br></br></Link>
                <Link to="Overpressure">Overpressure<br></br></Link>
            </nav>
            <h2>Loss of Cooling Category</h2>
            <LossOfCoolingCatDropDown />
            <p>{"\n"}</p>
            <nav>
                <Link to="LossOfCooling">In-Flight Loss of Cooling<br></br></Link>
            </nav>
            <Outlet />
        </div>
    )
}

export function GroundSurvivalLow() {
    return (
        <div>
            <h1>Test</h1>
            <p>Ground Survival Low</p>
        </div>
    )
}

export function OperationalLow() {
    return (
        <div>
            <h1>Test</h1>
            <p>Operational Low</p>
        </div>
    )
}


export function GroundSurvivalHigh() {
    return (
        <div>
            <h1>Test</h1>
            <p>Ground Survival High</p>
        </div>
    )
}

export function OperationalHigh() {
    return (
        <div>
            <h1>Test</h1>
            <p>Operational High</p>
        </div>
    )
}

export function LossOfCooling() {
    return (
        <div>
            <h1>Test</h1>
            <p>In-Flight Loss of Cooling</p>
            <h2>Category</h2>
        </div>
    )
}

export function Altitude () {
    return (
        <div>
            <h1>Test</h1>
            <p>Altitude</p>
        </div>
    )
}

export function Decompression() {
    return (
        <div>
            <h1>Test</h1>
            <p>Decompression</p>
        </div>
    )
}

export function Overpressure() {
    return (
        <div>
            <h1>Test</h1>
            <p>Overpressure</p>
        </div>
    )
}

export function TemperatureVariation() {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Temperature Variation</p>
            <h2>Category</h2>
            <TempVariationCatDropDown />
            <p>{"\n"}</p>
        </div>
    )
}

export function Humidity() {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Humidity</p>
            <p>Category</p>
            <HumidityCatDropDown />
        </div>
    )
}

export function OperationalShocksandCrashSafety() {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Operational Shocks and Crash Safety</p>
            <nav>
                <Link to="OperationalShocks">Operational Shocks<br></br></Link>
                <Link to="CrashSafetyImpulse">Crash Safety {"(Impulse)"}<br></br></Link>
                <Link to="CrashSafetySustained">Crash Safety {"(Sustained)"}<br></br></Link>
            </nav>
            <Outlet />
        </div>
    )
}

export function OperationalShocks() {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Operational Shocks</p>
        </div>
    )
}

export function CrashSafetyImpulse() {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Crash Safety {"(Impulse)"}</p>
        </div>
    )
}

export function CrashSafetySustained() {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Crash Safety {"(Sustained)"}</p>
        </div>
    )
}

export function Vibration() {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Vibration</p>
        </div>
    )
}

export function ExplosiveAtmosphere() {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Explosive Atmosphere</p>
        </div>
    )
}

export function Waterproofness() {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Waterproofness</p>
        </div>
    )
}

export function FluidsSusceptibilty() {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>FluidsSusceptibilty</p>
        </div>
    )
}

export function SandandDust() {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Sandand Dust</p>
        </div>
    )
}

export function SaltFog() {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Salt Fog</p>
        </div>
    )
}

export function MagneticEffect() {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Magnetic Effect</p>
        </div>
    )
}

export function PowerInput() {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Power Input</p>
        </div>
    )
}