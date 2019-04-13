import { createStore } from 'redux';

// Action generators - functions that return action objects
// prevent typos and actually get an error
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy  // same as incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type:'DECREMENT',
    decrementBy
});

const reset = () => ({
    type: 'RESET'
});

const set = ({ count }) => ({
    type: 'SET',
    count
});


// set up a state container
// state has no default so set count to 0 inside the function
const store = createStore((state = { count: 0 }, action) => {
    
    // by convention use a switch statement for actions
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return{
                count: 0
            };
        default:
            return state;
    }
});

// see when a store changes
const unsubscribe = store.subscribe( () => {
    //return the current state obj
    console.log(store.getState());
});




//Actions
//dispatch re-runs the redux store

store.dispatch(incrementCount({ incrementBy: 5}));
store.dispatch(incrementCount());

// // unsubscribe from the changes
// unsubscribe();

store.dispatch(reset());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(set({count: -100}));