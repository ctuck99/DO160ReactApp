import React from 'react';

class PowerInputCatDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            powerType: [],
            testCurves: [],
            selectedPowerType: '--PowerType--',
            selectedCategory: '--Category--'
        };
        this.changeCategory = this.changeCategory.bind(this);
        this.changepowerType = this.changepowerType.bind(this);
    }

    componentDidMount() {
        this.setState({
            category: [
                { name: 'AC', powerType: 
                    [
                        {
                            name: 'A(CF)', testCurves: 
                                [ 'Voltage and Frequency ', 'Voltage Modulation ', 'Frequency Modulation ', 'Momentary Power Interruptions ', 'Normal Surge Voltage ', 'Normal Frequency Transients ', 'Voltage DC Content ', 'Voltage Distortion ', 'Abnormal Voltage and Frequency Limits in Steady State ', 'Momentary Undervoltage Operation ', 'Abnormal Surge Voltage ', 'Abnormal Frequency Transients ' ]
                        }, 
                        {
                            name: 'A(NF)', testCurves: 
                                [ 'Test 1', 'Test 2', 'Test 3' ]
                        },
                        {
                            name: 'A(WF)', testCurves: 
                                [ 'Test 1', 'Test 2', 'Test 3' ]
                        },
                    ] 
                },
                { name: 'DC', powerType: 
                    [ 
                        {
                            name: 'A', testCurves: 
                                [ 'Test 1', 'Test 2', 'Test 3' ]
                        }, 
                        {
                            name: 'B', testCurves: 
                                [ 'Test 1', 'Test 2', 'Test 3' ]
                        }, 
                        {
                            name: 'D', testCurves: 
                                [ 'Test 1', 'Test 2', 'Test 3' ]
                        },
                        {
                            name: 'Z', testCurves:
                                [ 'Test 1', 'Test 2', 'Test 3' ]
                        },
                    ] 
                },
            ]
        });
    }

    changeCategory(event) {
        this.setState({selectedPowerType: event.target.value});
        this.setState({powerType: this.state.category.find(cntry => cntry.name === event.target.value).powerType});
    }

    changepowerType(event) {
        this.setState({selectedCategory: event.target.value});
        const powerType = this.state.category.find(cntry => cntry.name === this.state.selectedPowerType).powerType;
        this.setState({testCurves: powerType.find(state => state.name === event.target.value).testCurves});
    }

    render() {
        return (
            <div id="container">
                <h2>Test Category Selection</h2>

				<div>
					<label>Power Type: </label>
					<select placeholder="PowerType" value={this.state.selectedPowerType} onChange={this.changeCategory}>
						<option>--Power Type--</option>
						{this.state.category.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>

                <div>
                    <label>Category: </label>
                    <select placeholder="powerType" value={this.state.selectedCategory} onChange={this.changepowerType}>
                        <option>--Category--</option>
                        {this.state.powerType.map((e, key) => {
                            return <option key={key}>{e.name}</option>
                        })}
                    </select>
                </div>

                <h2>Tests for selected Power Type & Category:</h2>
                <p>{this.state.testCurves.map((e, key) => {
                        return <option key={key}>{e}</option>;
                    })}
                </p>
                <div>
                    <label>Test: </label>
                    <select placeholder="City">
                        <option>--Test--</option>
                        {this.state.testCurves.map((e, key) => {
                            return <option key={key}>{e}</option>;
                        })}
                    </select>
                </div>
            </div>
        )
    }
}


export default PowerInputCatDropdown;