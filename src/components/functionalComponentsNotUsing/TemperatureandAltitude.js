import React, { useState, useEffect } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";

export function TempandAltCatDropDown() {
    const [items] = React.useState([
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
        { label: "X", value: "No Test"}
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

export function TemperatureandAltitude() {
    const [A4CategoryTemps, setA4CategoryTemps] = useState(() => {
        // getting stored value
        const saved = window.localStorage.getItem("A4CategoryTemps");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });

    useEffect(() => {
        // storing input name
        window.localStorage.setItem("A4CategoryTemps", JSON.stringify(A4CategoryTemps));
    }, [A4CategoryTemps]);
   
    return (
        <div>            
            <Header />
            <h1>Test Section</h1>
            <p>Temperature and Altitude</p>
            <p>{"\n"}</p>
            <h2>Category</h2>
            <TempandAltCatDropDown />
            <p>{"\n"}</p>
            <div>
                <nav>
                    <Link to="GroundSurvivalLow">Ground Survival Low<br></br></Link>
                    <Link to="OperatingLow">Operating Low<br></br></Link>
                    <Link to="GroundSurvivalHigh">Ground Survival High<br></br></Link>
                    <Link to="OperatingHigh">Operating High<br></br></Link>
                    <Link to="Altitude">Altitude<br></br></Link>
                    <Link to="Decompression">Decompression<br></br></Link>
                    <Link to="Overpressure">Overpressure<br></br></Link>
                    <Link to="LossOfCooling">In-Flight Loss of Cooling<br></br></Link>
                </nav>
                <p>{"\n"}</p>
                <p>A4 Category Temperatures: {A4CategoryTemps}</p>
                <p>{"\n"}</p>
                <form>
                    <input  
                        type="text"
                        value={A4CategoryTemps}
                        onChange={(e) => setA4CategoryTemps(e.target.value)}
                        placeholder="Temperatures in Celsius"
                        aria-label="temp"
                    />
                    <input type="submit" value="Submit"></input>
                </form>
            <Outlet />
            </div>
        </div>
    )
}