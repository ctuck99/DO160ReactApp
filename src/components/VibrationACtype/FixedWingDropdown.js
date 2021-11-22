import React from 'react';

class FixedWingDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            acZone: [],
            testCurves: [],
            selectedCategory: '--Category--',
            selectedACzone: '--Aircraft Zone--'
        };
        this.changeCategory = this.changeCategory.bind(this);
        this.changeACzone = this.changeACzone.bind(this);
    }

    componentDidMount() {
        this.setState({
            category: [
                { name: 'S', acZone: 
                    [
                        {
                            name: '1', testCurves: 
                                [ 'C', 'Option 2', 'Option 3' ]
                        }, 
                        {
                            name: '2', testCurves: 
                                [ 'B', 'B2', 'B3* note(4)' ]
                        },
                        {
                            name: '3', testCurves: 
                                [ 'D', 'Option 2', 'Option 3' ]
                        },
                        {
                            name: '4', testCurves: 
                                [ 'W', 'Option 2', 'Option 3' ]
                        },
                        {
                            name: '5', testCurves:
                                []
                        },
                        {
                            name: '6', testCurves:
                                []
                        },
                        {
                            name: '7', testCurves:
                                []
                        },
                    ] 
                },
                { name: 'H', acZone: 
                    [ 
                        {
                            name: '1', testCurves: 
                                [ 'R' ]
                        }, 
                        {
                            name: '2', testCurves: 
                                [ 'R' ]
                        }, 
                        {
                            name: '3', testCurves: 
                                [ 'P' ]
                        },
                        {
                            name: '4', testCurves:
                                []
                        },
                        {
                            name: '5', testCurves:
                                []
                        },
                        {
                            name: '6', testCurves:
                                []
                        },
                        {
                            name: '7', testCurves:
                                []
                        },
                    ] 
                },
                { name: 'Z', acZone: 
                    [ 
                        {
                            name: '1', testCurves: 
                                [ 'R' ]
                        }, 
                        {
                            name: '2', testCurves: 
                                [ 'R' ]
                        }, 
                        {
                            name: '3', testCurves: 
                                [ 'P' ]
                        }, 
                        {
                            name: '4', testCurves:
                                []
                        },
                        {
                            name: '5', testCurves:
                                []
                        },
                        {
                            name: '6', testCurves:
                                []
                        },
                        {
                            name: '7', testCurves:
                                []
                        },
                        ] 
                },
                { name: 'R', acZone:
                    [ 
                        {
                            name: '1', testCurves:
                                [ 'C', 'C1 (3)' ]
                        },
                        {
                            name: '2', testCurves:
                                []
                        },
                        {
                            name: '3', testCurves:
                                []
                        },
                        {
                            name: '4', testCurves:
                                []
                        },
                        {
                            name: '5', testCurves:
                                []
                        },
                        {
                            name: '6', testCurves:
                                []
                        },
                        {
                            name: '7', testCurves:
                                []
                        },
                    ]
                }
            ]
        });
    }

    changeCategory(event) {
        this.setState({selectedCategory: event.target.value});
        this.setState({acZone: this.state.category.find(cntry => cntry.name === event.target.value).acZone});
    }

    changeACzone(event) {
        this.setState({selectedACzone: event.target.value});
        const acZone = this.state.category.find(cntry => cntry.name === this.state.selectedCategory).acZone;
        this.setState({testCurves: acZone.find(state => state.name === event.target.value).testCurves});
    }

    render() {
        return (
            <div id="container">
                <h2>Test Curve Selection</h2>

				<div>
					<label>Category: </label>
					<select placeholder="Country" value={this.state.selectedCategory} onChange={this.changeCategory}>
						<option>--Category--</option>
						{this.state.category.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>

                <div>
                    <label>Aircraft Zone: </label>
                    <select placeholder="State" value={this.state.selectedACzone} onChange={this.changeACzone}>
                        <option>--Zone--</option>
                        {this.state.acZone.map((e, key) => {
                            return <option key={key}>{e.name}</option>
                        })}
                    </select>
                </div>
                
                <div>
                    <label>Test Curve: </label>
                    <select placeholder="City">
                        <option>--Curve--</option>
                        {this.state.testCurves.map((e, key) => {
                            return <option key={key}>{e}</option>;
                        })}
                    </select>
                </div>
            </div>
        )
    }
}

export default FixedWingDropdown;