import { createStore, combineReducers } from 'redux'; 
import { uuid } from 'uuid';

/**
 * ADD_EXPENSE
 */
const addExpense = () => {};

const expensesReducerDefaultState = [];

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object directlz, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};


/**
 *  Create a Redux store holding the state of your app.
 *  Its API is { subscribe, dispatch, getState }.
 * 
 * You can use subscribe() to update the UI in response to state changes.
 * Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
 * However it can also be handy to persist the current state in the localStorage.
 */
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