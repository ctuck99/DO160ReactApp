import React from 'react';

class EmissionofRadioFrequencyCatCatDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            emissionsType: [],
            testCurves: [],
            selectedEmissionsType: '--Category--',
            selectedCategory: '--RF Emissions Type--'
        };
        this.changeCategory = this.changeCategory.bind(this);
        this.changeEmissionsType = this.changeEmissionsType.bind(this);
    }

    componentDidMount() {
        this.setState({
            category: [
                { name: 'B', emissionsType: 
                    [
                        {
                            name: 'Conducted', testCurves: 
                                [ '21-1 & 21-2', ]
                        }, 
                        {
                            name: 'Radiated', testCurves: 
                                [ '21-7',  ]
                        },
                    ] 
                },
                { name: 'L', emissionsType: 
                    [ 
                        {
                            name: 'Conducted', testCurves: 
                                [ '21-1 & 21-2', ]
                        }, 
                        {
                            name: 'Radiated', testCurves: 
                                [ '21-7',  ]
                        },
                    ] 
                },
                { name: 'M', emissionsType: 
                    [ 
                        {
                            name: 'Conducted', testCurves: 
                                [ '21-1 & 21-2', ]
                        }, 
                        {
                            name: 'Radiated', testCurves: 
                                [ '21-8',  ]
                        },
                    ] 
                },
                { name: 'H', emissionsType: 
                    [ 
                        {
                            name: 'Conducted', testCurves: 
                                [ '21-1 & 21-2', ]
                        }, 
                        {
                            name: 'Radiated', testCurves: 
                                [ '21-9',  ]
                        },
                    ] 
                },
                { name: 'P', emissionsType: 
                    [ 
                        {
                            name: 'Conducted', testCurves: 
                                [ '21-3', ]
                        }, 
                        {
                            name: 'Radiated', testCurves: 
                                [ '21-10',  ]
                        },
                    ] 
                },
                { name: 'Q', emissionsType: 
                    [ 
                        {
                            name: 'Conducted', testCurves: 
                                [ '21-4 & 21-5', ]
                        }, 
                        {
                            name: 'Radiated', testCurves: 
                                [ '21-10',  ]
                        },
                    ] 
                },
            ]
        });
    }

    changeCategory(event) {
        this.setState({selectedEmissionsType: event.target.value});
        this.setState({emissionsType: this.state.category.find(cntry => cntry.name === event.target.value).emissionsType});
    }

    changeEmissionsType(event) {
        this.setState({selectedCategory: event.target.value});
        const emissionsType = this.state.category.find(cntry => cntry.name === this.state.selectedEmissionsType).emissionsType;
        this.setState({testCurves: emissionsType.find(state => state.name === event.target.value).testCurves});
    }

    render() {
        return (
            <div id="container">
                <h2>Test Category Selection</h2>

				<div>
					<label>Category: </label>
					<select placeholder="Category" value={this.state.selectedEmissionsType} onChange={this.changeCategory}>
						<option>--Category--</option>
						{this.state.category.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>

                <div>
                    <label>Emissions Type: </label>
                    <select placeholder="emissionsType" value={this.state.selectedCategory} onChange={this.changeEmissionsType}>
                        <option>--Category--</option>
                        {this.state.emissionsType.map((e, key) => {
                            return <option key={key}>{e.name}</option>
                        })}
                    </select>
                </div>

                <h2>Figure for selected Category & Emissions Type:</h2>
                <p>{this.state.testCurves.map((e, key) => {
                        return <option key={key}>{e}</option>;
                    })}
                </p>
                {/* <div>
                    <label>Figure: </label>
                    <select placeholder="City">
                        <option>--Test--</option>
                        {this.state.testCurves.map((e, key) => {
                            return <option key={key}>{e}</option>;
                        })}
                    </select>
                </div> */}
            </div>
        )
    }
}


export default EmissionofRadioFrequencyCatCatDropdown;