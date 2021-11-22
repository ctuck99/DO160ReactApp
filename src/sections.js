import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";

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

export function Vibration() {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Vibration</p>
            <p>{"\n"}</p>
            <p style={{fontWeight: "bold"}}>Click on Aircraft Type:</p>
            <nav>
                <Link to="FixedWingTurbojet">Fixed-Wing Turbojet or Turbofan Engine<br></br></Link>
                <Link to="Helicopter">Helicopter<br></br></Link>
            </nav>
            <p>{"\n"}</p>
            <Outlet />
        </div>
    );
}