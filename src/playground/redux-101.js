import { createStore } from 'redux';

// set up a state container
// state has no default so set count to 0 inside the function
const store = createStore((state = { count: 0 }, action) => {
    
    // by convention use a switch statement for actions
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return{
                count: 0
            };
        default:
            return state;
    }
});

//return the current state obj
console.log(store.getState());

//Actions
//dispatch re-runs the redux store
store.dispatch(
    //convention for Actions to capitalize 
    {
    type: 'INCREMENT' 
});

store.dispatch(
    {
    type: 'INCREMENT' 
});

store.dispatch({
    type: 'RESET'
});

store.dispatch(
    {
    type: 'DECREMENT' 
});


console.log(store.getState());
