import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

/**
 *  Create a Redux store holding the state of your app.
 *  Its API is { subscribe, dispatch, getState }.
 * 
 * You can use subscribe() to update the UI in response to state changes.
 * Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
 * However it can also be handy to persist the current state in the localStorage.
 */
export default () => {
    let store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    );

    return store;
};