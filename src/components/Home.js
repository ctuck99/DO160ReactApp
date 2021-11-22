import { Link } from "react-router-dom";

export default function Home() {
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
                <Link to="EmissionofRadioFrequencyEnergy">Section 21 - Emission of Radio Frequency Energy<br></br></Link>
                <Link to="section_22">Section 22 - Lightning Induced Transient Susceptibility<br></br></Link>
                <Link to="section_23">Section 23 - Lightning Direct Effects<br></br></Link>
                <Link to="section_24">Section 24 - Icing<br></br></Link>
                <Link to="section_25">Section 25 - Electrostatic Discharge {"(ESD)"}<br></br></Link>
                <Link to="section_26">Section 26 - Fire, Flammability<br></br></Link>
            </nav>
        </div>
    )
}