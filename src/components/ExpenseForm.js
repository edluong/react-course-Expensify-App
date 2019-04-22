import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'; // css for Airbnb's datepicker

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
        const note = e.target.value; // cant use this in a callback function setState
        this.setState(() => ({ note })); //can use e.persist() to pull it out; then note: e.target.value
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)){ //using regular expressions and regex101.com
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (createdAt) => {
        this.setState( () => ({ createdAt }));
    };

    onFocusChange = ({focused}) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus // added so dont need to click on input form
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange} //used because we current have a read only input
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    };
};