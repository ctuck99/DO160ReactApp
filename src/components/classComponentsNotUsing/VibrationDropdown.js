import React from 'react';

class VibrationDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            acType: [],
            categories: [],
            cities: [],
            selectedACtype: '--Aircraft Type--',
            selectedState: '--Choose State--'
        };
        this.changeCountry = this.changeCountry.bind(this);
        this.changeState = this.changeState.bind(this);
    }

    componentDidMount() {
        this.setState({
            acType: [
                { name: 'Fixed-Wing', categories: 
                    [
                        {
                            name: 'S', cities: 
                                [
                                    '1 Hr/Axis sine or random at perf. Level', 'Leinfelden', 'Eschborn'
                                ]
                        }, 
                        {
                            name: 'H', cities: 
                                [
                                    'High g / low f sine sweep each axis', 'Leinfelden', 'Eschborn'
                                ]
                        },
                        {
                            name: 'Z', cities: 
                                [
                                    'High g / low f sine sweep each axis', 'Leinfelden', 'Eschborn'
                                ]
                        },
                        {
                            name: 'R', cities: 
                                [
                                    'Sine of 3 Hrs/Axis less 30 min/dwell (max 4 dwells) or Random at perf. Level (minimum of 10 minutes) and 3 Hrs Endurance level (repeat in all 3 axes)', 'Leinfelden', 'Eschborn'
                                ]
                        },
                    ] 
                },
                { name: 'Helicopter', categories: 
                    [ 
                        {name: 'R', cities: 
                            [
                                'Sine-On-Random; 2 Hrs at Endurance levels plus dwells (max of 4 dwells, max of 3 hours total test time) and performance test (minimum of 10 minutes) at beginning and end of test period (repeat in all 3 axes).'
                            ]
                        }, 
                        {name: 'U', cities: 
                            [
                                'Sine-On-Random; 2 Hrs at Endurance levels plus dwells (max of 4 dwells, max of 3 hours total test time) and performance test (minimum of 10 minutes) at beginning and end of test period (repeat in all 3 axes). Repeat 3 times.'
                            ]
                        }, 
                        {name: 'U2', cities: 
                            [
                                'Random ; performance test at beginning and end of test period (minimum of 10 minutes), 3 hrs at Endurance level (repeat in all 3 axes)'
                            ]
                        } 
                    ] 
                },
            ]
        });
    }

    changeCountry(event) {
        this.setState({selectedACtype: event.target.value});
        this.setState({categories: this.state.acType.find(cntry => cntry.name === event.target.value).categories});
    }

    changeState(event) {
        this.setState({selectedState: event.target.value});
        const categories = this.state.acType.find(cntry => cntry.name === this.state.selectedACtype).categories;
        this.setState({cities: categories.find(state => state.name === event.target.value).cities});
    }

    render() {
        return (
            <div id="container">
                <h2>Cascading or Dependent Dropdown using React</h2>

				<div>
					<label>Aircraft Type</label>
					<select placeholder="Country" value={this.state.selectedACtype} onChange={this.changeCountry}>
						<option>--Aircraft Type--</option>
						{this.state.acType.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>

                <div>
                    <label>Category</label>
                    <select placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
                        <option>--Choose State--</option>
                        {this.state.categories.map((e, key) => {
                            return <option key={key}>{e.name}</option>
                        })}
                    </select>
                </div>
                
                <div>
                    <label>City</label>
                    <select placeholder="City">
                        <option>--Choose City--</option>
                        {this.state.cities.map((e, key) => {
                            return <option key={key}>{e}</option>;
                        })}
                    </select>
                </div>
            </div>
        )
    }
}

export default VibrationDropdown;