import React, { Component } from "react";
import Header from "./Header";

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
                    <option value="50±2°C">A</option>
                    <option value="65°C">B</option>
                    <option value="55±2°C">C</option>
                    <option value="No Test">X</option>
                </select>
                <h2>Chamber temperature: </h2> 
                <p>{this.state.selectValue}</p>
            </div>
        );
    }
}

export default function Humidity() {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Humidity</p>
            <p>Category</p>
            <InlineSytle />
        </div>
    )
}