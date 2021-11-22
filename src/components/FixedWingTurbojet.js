import AircraftZoneKey from './VibrationACtype/AircraftZoneKey';
import FixedWingTurbojetDropdown from './VibrationACtype/FixedWingTurbojetDropdown';

export default function FixedWingTurbojet() {
    return (
        <>
        <div>
            <h1>Aircraft Type</h1>
            <p>Fixed Wing Turboject or Turbofan Engine</p>
        </div>
        <div className="multicolumn">
            <FixedWingTurbojetDropdown />
            <AircraftZoneKey />
        </div>
        </>
    )
}