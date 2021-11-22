import React, { Component } from "react";

export default function LossOfCooling() {
    return (
        <div>
            <h1>Test</h1>
            <p>In-Flight Loss of Cooling</p>
            <h2>Category</h2>
            <InlineSytle />
        </div>
    )
}

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
                    <option label="V" value="30">V</option>
                    <option label="W" value="90">W</option>
                    <option label="P" value="180">P</option>
                    <option label="Y" value="300">Y</option>
                    <option label="Z" value="As defined in the equipment specif">Z</option>
                    <option label="X" value="No Test">X</option>
                </select>
                <h2>Test Periods: </h2> 
                <p>{this.state.selectValue} {"(minutes minimum)"}</p>
                <p></p>
            </div>
        );
    }
}
