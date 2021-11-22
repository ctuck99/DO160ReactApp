import React, { Component } from "react";
import Header from "./Header";

// Try class component for Dropdown and seeing if can return values based on Dropdown selection
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
            <div>
                <select id="dropdown" onChange={this.handleDropdownChange}>
                    <option value="10 degrees Celsius minimum per minute.">A</option>
                    <option value="5 degrees Celsius minimum per minute.">B</option>
                    <option value="2 degrees Celsius minimum per minute.">C</option>
                    <option value="Known rate of change greater than 10 degrees Celsius per minute. The
rate of change shall be noted in the Qualification Form.">S1</option>
                    <option value="Unknown rate of change greater than 10 degrees Celsius per minute.">S2</option>
                    <option value="No Test">X</option>
                </select>
                <h2>Temperature Change Rate: </h2> 
                <p>{this.state.selectValue}</p>
            </div>
        );
    }
}

export default function TemperatureVariation() {
    
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Temperature Variation</p>
            <h2>Category</h2>
            <p>{"\n"}</p>
            <p><InlineSytle /></p>
        </div>
    )
}