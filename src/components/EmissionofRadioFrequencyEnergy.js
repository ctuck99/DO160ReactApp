import Header from "./Header";
import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import EmissionofRadioFrequencyCatCatDropdown from "./EmissionofRadioFrequencyEnergy/EmissionofRadioFrequencyEnergyCatDropdown";

function EmissionofRadioFrequencyEnergy() {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Emission of Radio Frequency Energy</p>
            <EmissionofRadioFrequencyCatCatDropdown />
            <p>{"\n"}</p>
            <nav>
                <Link to="ConductedRFEmissions">Conducted RF Emissions<br></br></Link>
                <Link to="RadiatedRFEmissions">Radiated RF Emissions<br></br></Link>
            </nav>
            {"\n"}
            <Outlet />
        </div>
    )
}

export default EmissionofRadioFrequencyEnergy;