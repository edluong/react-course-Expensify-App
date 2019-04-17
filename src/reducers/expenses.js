
// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, // ES6 spread operator, take all of the previous elements and add
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter( ({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map( (expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,   //grab all existing object properties
                        ...action.updates // override all of the updated values
                    };
                } else{
                    return expense;
                }
            })
        default:
            return state;
    }
};

export default expensesReducer;