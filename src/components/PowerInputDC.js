import { Link } from "react-router-dom";
import { Outlet } from "react-router";

export default function PowerInputDC() {
    return (
        <div>
            <h2>DC Power Input Tests</h2>
            <nav>
                <Link to="Voltage">Voltage<br></br></Link>
                <Link to="RippleVoltage">Ripple Voltage<br></br></Link>
                <Link to="MomentaryPowerInterruptionsDC">Momentary Power Interruptions<br></br></Link>
            </nav>
            <Outlet />
        </div>
    )
}