import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import {  
    OperationalShocksandCrashSafety,
    Vibration
    } from "./sections";

import Home from './components/Home';
import TemperatureandAltitude from './components/TemperatureandAltitude';
import OperatingLow from './components/OperatingLow';
import GroundSurvivalLow from './components/GroundSurvivalLow';
import GroundSurvivalHigh from './components/GroundSurvivalHigh';
import OperatingHigh from './components/OperatingHigh';
import LossOfCooling from './components/LossOfCooling';
import Altitude from './components/Altitude';
import Decompression from './components/Decompression';
import Overpressure from './components/Overpressure';
import TemperatureVariation from './components/TemperatureVariation';
import Humidity from './components/Humidity';
import OperationalShocks from './components/OperationalShocks';
import CrashSafetyImpulse from './components/CrashSafetyImpulse';
import CrashSafetySustained from './components/CrashSafetySustained';
// import Vibration from './components/Vibration';
import FixedWingTurbojet from './components/FixedWingTurbojet';
import Helicopter from './components/Helicopter';
import ExplosiveAtmosphere from './components/ExplosiveAtmoshphere';
import Waterproofness from './components/Waterproofness';
import FluidsSusceptibilty from './components/FluidsSusceptibility';
import SandandDust from './components/SandandDust';
import SaltFog from './components/SaltFog';
import MagneticEffect from './components/MagneticEffect';
import PowerInput from './components/PowerInput';
import PowerInputAC from './components/PowerInputAC';
import PowerInputDC from './components/PowerInputDC';
import EmissionofRadioFrequencyEnergy from './components/EmissionofRadioFrequencyEnergy';
import ConductedRFEmissions from './components/ConductedRFEmissions';
import RadiatedRFEmissions from './components/RadiatedRFEmissions';

function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/TemperatureandAltitude" element={<TemperatureandAltitude />}>
                    <Route path="GroundSurvivalLow" element={<GroundSurvivalLow />} />
                    <Route path="OperatingLow" element={<OperatingLow /> } />
                    <Route path="GroundSurvivalHigh" element={<GroundSurvivalHigh />} />
                    <Route path="OperatingHigh" element={<OperatingHigh /> } />
                    <Route path="LossOfCooling" element={<LossOfCooling /> } />
                    <Route path="Altitude" element={<Altitude /> } />
                    <Route path="Decompression" element={<Decompression /> } />
                    <Route path="Overpressure" element={<Overpressure /> } />
                </Route>
                <Route path="TemperatureVariation" element={<TemperatureVariation />} />
                <Route path="Humidity" element={<Humidity />} />
                <Route path="/OperationalShocksandCrashSafety" element={<OperationalShocksandCrashSafety />}>
                    <Route path="OperationalShocks" element={<OperationalShocks />} />
                    <Route path="CrashSafetyImpulse" element={<CrashSafetyImpulse />} />
                    <Route path="CrashSafetySustained" element={<CrashSafetySustained />} />
                </Route>
                <Route path="/Vibration" element={<Vibration />}>
                    <Route path="FixedWingTurbojet" element={<FixedWingTurbojet />} />
                    <Route path="Helicopter" element={<Helicopter />} />
                </Route>
                <Route path="ExplosiveAtmosphere" element={<ExplosiveAtmosphere />} />
                <Route path="Waterproofness" element={<Waterproofness />} />
                <Route path="FluidsSusceptibilty" element={<FluidsSusceptibilty />} />
                <Route path="SandandDust" element={<SandandDust />} />
                <Route path="SaltFog" element={<SaltFog />} />
                <Route path="MagneticEffect" element={<MagneticEffect />} />
                <Route path="PowerInput" element={<PowerInput />}>
                    <Route path="PowerInputAC" element={<PowerInputAC />} />
                    <Route path="PowerInputDC" element={<PowerInputDC />} />
                </Route>
                <Route path="EmissionofRadioFrequencyEnergy" element={<EmissionofRadioFrequencyEnergy />}>
                    <Route path="ConductedRFEmissions" element={<ConductedRFEmissions />} />
                    <Route path="RadiatedRFEmissions" element={<RadiatedRFEmissions />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App;
