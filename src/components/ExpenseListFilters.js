import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortbyDate, sortbyAmount } from '../actions/filters';

//if there is a value and an onChange, this is known as a controlled input
const ExpenseListFilters = (props) => (
    <div>
        <input 
            type="text" 
            value={props.filters.text} 
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
        }}/>
        <select 
            value={props.filters.sortBy} 
            onChange={(e) => {
                props.dispatch(e.target.value === 'date' ? sortbyDate() : sortbyAmount());
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
   return {
       filters: state.filters
   }; 
};

export default connect(mapStateToProps)(ExpenseListFilters);