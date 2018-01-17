import { createStore, combineReducers } from 'redux'; 






store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'RENT', amount: 500, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 3.5, createdAt: -360}));

// console.log(expenseTwo);

// store.dispatch(removeExpense({id: expenseTwo.expense.id}));
// // store.dispatch(editExpense(expenseTwo.expense.id, { amount: 1200}));
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 1600}));
store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate('20180105'));
// store.dispatch(setEndDate('20180115'));

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

/**
 * *************************************************
 * spread object/array operator
 */
// const user = ['maik', 'chris'];
const user = {
    name: 'maik',
    age: 26
};

const info = {
    location: 'Hamburg',
    age: 28 // will override the age of 'user'
};

console.log(
    { 
        ...user,
        ...info
    }
);