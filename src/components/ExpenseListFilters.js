import React from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';
import { setTextFilter, sortbyDate, sortbyAmount, setStartDate, setEndDate } from '../actions/filters';

//if there is a value and an onChange, this is known as a controlled input
class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({startDate,endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    };

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={(e) => {
                        this.props.dispatch(e.target.value === 'date' ? sortbyDate() : sortbyAmount());
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true} //enables an X for the user to de-select the dates
                    numberOfMonths={1} //show how many months
                    isOutsideRange={() => false} //let user be able to pick past dates
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   return {
       filters: state.filters
   }; 
};

export default connect(mapStateToProps)(ExpenseListFilters);