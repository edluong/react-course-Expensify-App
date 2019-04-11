import { createStore } from 'redux';

// set up a state container
// state has no default so set count to 0 inside the function
const store = createStore((state = { count: 0 }) => {
    return state;
});

//return the current state obj
console.log(store.getState());