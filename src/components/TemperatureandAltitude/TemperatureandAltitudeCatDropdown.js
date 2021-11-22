import React from 'react';

class TemperatureandAltitudeCatDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            testSection: [],
            testCurves: [],
            selectedtestSection: '--TestSection--',
            selectedCategory: '--Category--'
        };
        this.changeCategory = this.changeCategory.bind(this);
        this.changetestSection = this.changetestSection.bind(this);
    }

    componentDidMount() {
        this.setState({
            category: [
                { name: 'A1', testSection: 
                    [
                        {
                            name: '4.5.1 - 4.5.4', testCurves: 
                                [ 'Ground Survival Low: -55 ', 'Short-Time Operating Low: -40 ', 'Operating Low: -15 ', 'Ground Survial High: +85 ', 'Short-Time Operating High: +70 ', 'Operating High: +55 ', 'Loss of Cooling: +30' ]
                        }, 
                        {
                            name: '4.6', testCurves: 
                                [ 'Altitude: 15000 ft. (4600 m.)', 'Decompression: Note (1)(4)', 'Overpressure: 15000 ft. (-4600 m.)' ]
                        },
                    ] 
                },
                { name: 'A2', testSection: 
                    [
                        {
                            name: '4.5.1 - 4.5.4', testCurves: 
                                [ 'Ground Survival Low: -55 ', 'Short-Time Operating Low: -40 ', 'Operating Low: -15 ', 'Ground Survial High: +85 ', 'Short-Time Operating High: +85 ', 'Operating High: +70 ', 'Loss of Cooling: +40' ]
                        }, 
                        {
                            name: '4.6', testCurves: 
                                [ 'Altitude: 15000 ft. (4600 m.)', 'Decompression: Note (1)(4)', 'Overpressure: 15000 ft. (-4600 m.)' ]
                        },
                    ] 
                },
                { name: 'A3', testSection: 
                    [
                        {
                            name: '4.5.1 - 4.5.4', testCurves: 
                                [ 'Ground Survival Low: -55 ', 'Short-Time Operating Low: -40 ', 'Operating Low: -15 ', 'Ground Survial High: +85 ', 'Short-Time Operating High: +70 ', 'Operating High: +70 ', 'Loss of Cooling: +45' ]
                        }, 
                        {
                            name: '4.6', testCurves: 
                                [ 'Altitude: 15000 ft. (4600 m.)', 'Decompression: Note (1)(4)', 'Overpressure: 15000 ft. (-4600 m.)' ]
                        },
                    ] 
                },
                { name: 'A4', testSection: 
                    [
                        {
                            name: '4.5.1 - 4.5.4', testCurves: 
                                [ 'Ground Survival Low: Note (3) ', 'Short-Time Operating Low: Note (3) ', 'Operating Low: -15 ', 'Ground Survial High: Note (3) ', 'Short-Time Operating High: Note (3) ', 'Operating High: Note (3) ', 'Loss of Cooling: Note (3)' ]
                        }, 
                        {
                            name: '4.6', testCurves: 
                                [ 'Altitude: 15000 ft. (4600 m.)', 'Decompression: Note (1)(4)', 'Overpressure: 15000 ft. (-4600 m.)' ]
                        },
                    ] 
                },


            ]
        });
    }

    changeCategory(event) {
        this.setState({selectedtestSection: event.target.value});
        this.setState({testSection: this.state.category.find(cntry => cntry.name === event.target.value).testSection});
    }

    changetestSection(event) {
        this.setState({selectedCategory: event.target.value});
        const testSection = this.state.category.find(cntry => cntry.name === this.state.selectedtestSection).testSection;
        this.setState({testCurves: testSection.find(state => state.name === event.target.value).testCurves});
    }

    render() {
        return (
            <div id="container">
                <h2>Test Category Selection</h2>

				<div>
					<label>Category: </label>
					<select placeholder="testSection" value={this.state.selectedtestSection} onChange={this.changeCategory}>
						<option>--Category--</option>
						{this.state.category.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>

                <div>
                    <label>Test Section</label>
                    <select placeholder="testSection" value={this.state.selectedCategory} onChange={this.changetestSection}>
                        <option>--Section--</option>
                        {this.state.testSection.map((e, key) => {
                            return <option key={key}>{e.name}</option>
                        })}
                    </select>
                </div>

                <h2>Test and Level for selected Category:</h2>
                <p>{this.state.testCurves.map((e, key) => {
                        return <option key={key}>{e}</option>;
                    })}
                </p>
                <div>
                    <label>Test: </label>
                    <select placeholder="Test">
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

// Continue entering for Cats B1, B2, etc....
// Should use onChange or some other method to clear Test Section if Category changes

// Add Temperature Variation like used before

export default TemperatureandAltitudeCatDropdown;