import { createStore, combineReducers } from 'redux'; 
import uuid from 'uuid';

/**
 * ADD_EXPENSE
 */
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

/**
 * REMOVE_EXPENSE
 */
const removeExpense = ({id} = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

/**
 * EDIT_EXPENSE
 */
const editExpense = (id, {update} = {} ) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
});

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
        case 'ADD_EXPENSE':
            // return state.concat(action.expense);
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter( 
                ({id}) => id !== action.id // ({id}) is destructuring of (expense)
             );
        case 'EDIT_EXPENSE':
            return state.map( (expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.update
                    };
                }
                else {
                    return expense;
                }
            });        
        default:
            return state;
    }
};

/**
 * TEXT_FILTER
 */
const setTextFilter = ( text = '' ) => ({
    type: 'TEXT_FILTER',
    text 
});

/**
 * SORT_BY_AMOUNT
 */
const sortByAmount = ( ) => ({
    type: 'SORT_BY_AMOUNT'
});

/**
 * SORT_BY_DATE
 */
const sortByDate = ( ) => ({
    type: 'SORT_BY_DATE'
});

/**
 * SET_START_DATE
 */
const setStartDate = (startDate ) => ({
    type: 'SET_START_DATE',
    startDate
});

/**
 * SET_END_DATE
 */
const setEndDate = ( endDate ) => ({
    type: 'SET_END_DATE',
    endDate
});

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action ) => {
    switch(action.type) {
        case 'TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
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
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

const getVisibleExpense = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter( (expense) => {
        const startDateMatch = (typeof startDate !== 'number' || expense.createdAt >= startDate);
        const endDateMatch = (typeof endDate !== 'number' || expense.createdAt <= endDate);
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            // from oldest to newest
            // return a.createdAt > b.createdAt ? 1 : -1;
            
            // from newest to oldest
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy === 'amount') {
            // from least to most
            return a.createdAt > b.createdAt ? 1 : -1;
        }
    });
};

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