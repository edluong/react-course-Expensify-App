// should follow the same structure in the test suite folder
import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

// explored that should not be === because it wont be the same object
test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc',{ note:'updated this note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note:'updated this note'
        }
    });
});

// id property will be randomly generated
// will need to use expect any. can use to just check type
test('should setup add expense action object with provided values', () =>{
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          ...expenseData,  
          id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
const action = addExpense();
expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
        id: expect.any(String), //dynamic value, so only check the type
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
        }
    });
});