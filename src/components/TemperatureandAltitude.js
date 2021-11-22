import Header from "./Header";
import TemperatureandAltitudeCatDropdown from "./TemperatureandAltitude/TemperatureandAltitudeCatDropdown";

export default function TemperatureandAltitude () {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Temperature and Altitude</p>
            <TemperatureandAltitudeCatDropdown />
        </div>
    )
}