import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import { Link, Outlet } from 'react-router-dom';
import VibrationDropdown from "./VibrationDropdown";

export class InlineSytle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue: ""
        };
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }

    handleDropdownChange(e) {
        this.setState({ selectValue: e.target.value });
    }
    render() {
        return (
            <>
            <div>
                <select id="dropdown" onChange={this.handleDropdownChange}>
                    <option label="S" value="Standard Vibration: 1 Hr/Axis sine or random at perf. Level">S</option>
                    <option label="R" value="Robust Vibration: Sine of 3 Hrs/Axis less 30 min/dwell (max 4 dwells) or Random at perf. Level (minimum of 10 minutes) and 3 Hrs Endurance level (repeat in all 3 axes)">R</option>
                    <option label="R(H)" value="Robust Vibration:  Sine-On-Random; 2 Hrs at Endurance levels plus dwells (max of 4 dwells, max of 3 hours total test time) and performance test (minimum of 10 minutes) at beginning and end of test period (repeat in all 3 axes). Test repeated 3 times for Category U.Robust Vibration - Sine-On-Random; 2 Hrs at Endurance levels plus dwells (max of 4 dwells, max of 3 hours total test time) and performance test (minimum of 10 minutes) at beginning and end of test period (repeat in all 3 axes).">R</option>
                    <option label="U" value="Robust Vibration: Sine-On-Random; 2 Hrs at Endurance levels plus dwells (max of 4 dwells, max of 3 hours total test time) and performance test (minimum of 10 minutes) at beginning and end of test period (repeat in all 3 axes). Test repeated 3 times for Category U.">U</option>
                    <option label="U2" value="Robust Vibration: Random; performance test at beginning and end of test period (minimum of 10 minutes), 3 hrs at Endurance level (repeat in all 3 axes)">U2</option>
                    <option label="H" value="High Level - Short Duration Vibration: High g / low f sine sweep each axis">H</option>
                    <option label="Z" value="High Level - Short Duration Vibration: High g / low f sine sweep each axis">Z</option>
                    <option label="X" value="">X</option>
                </select>
                <h2>Test Curve/Level: </h2> 
                <p>{this.state.selectValue} {""}</p>
                <p>{"\n"}</p>
                <VibrationDropdown />
            </div>
            </>
        );
    }
}

export default function Vibration() {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Vibration</p>
            <h2>Category</h2>
            <InlineSytle />
            <p>{"\n"}</p>
            <div>
                <nav>
                    <Link to="FixedWing">Fixed-Wing<br></br></Link>
                    <Link to="Helicopter">Helicopter<br></br></Link>
                </nav>
            <Outlet />
            </div>

        </div>
    )
}
