import { Link } from "react-router-dom";
import { Outlet } from "react-router";

export default function PowerInputAC() {
    return (
        <div>
            <h2>AC Power Input Tests</h2>
            <nav>
                <Link to="VoltageandFrequencyAC">Voltage and Frequency<br></br></Link>
                <Link to="VoltageModulationAC">Voltage Modulation<br></br></Link>
                <Link to="FrequencyModulationAC">Frequency Modulation<br></br></Link>
                <Link to="MomentaryPowerInterruptionsAC">Momentary Power Interruptions</Link>
            </nav>
            <Outlet />
        </div>
    )
}