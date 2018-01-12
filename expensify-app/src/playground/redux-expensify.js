import { createStore, combineReducers } from 'redux'; 

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};



let store = createStore(
    combineReducers({
        expenses: expensesReducer
    })
);

console.log('standard state: ' + store.getState());

const demoState = {
    expenses: [{
        id: 'dfasf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 56500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};