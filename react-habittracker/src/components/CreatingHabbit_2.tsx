import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css"

class CreatingHabbit_2 extends Component {
    state = {
        startDate: new Date(),
        endDate: new Date()
    };

    handleStartDateChange = date => {
        this.setState({
            startDate: date
        });
    }

    handleStartDateSelect = date => {
        this.setState({
            startDate: date
        });
    }

    handleEndDateChange = date => {
        this.setState({
            endDate: date
        });
    }

    handleEndDateSelect = date => {
        this.setState({
            endDate: date
        });
    }

    render() {
        return (
            <div>
                <div>
                    From
                </div>
                <DatePicker
                    selected={this.state.startDate}
                    onChagne={this.handleStartDateChange}
                    onSelect={this.handleStartDateSelect}
                />
                <div>
                    To
                </div>
                <DatePicker
                    selected={this.state.endDate}
                    onChagne={this.handleEndDateChange}
                    onSelect={this.handleEndDateSelect}
                />
            </div>
        );
    }
}

export default CreatingHabbit_2;