import { createStore } from 'redux';

// set up a state container
// state has no default so set count to 0 inside the function
const store = createStore((state = { count: 0 }, action) => {
    
    // by convention use a switch statement for actions
    switch (action.type) {
        case 'INCREMENT': 
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            // check if decrementBy is a number then use it, else use default by 1
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
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
store.dispatch(
    //convention for Actions to capitalize 
    {
    type: 'INCREMENT',
    incrementBy: 5 
});

// // unsubscribe from the changes
// unsubscribe();

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

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'SET',
    count: 101
});