/**
 * Provider: provides the created store to all the components that make up the app.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './Routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss'; 

const store = configureStore();
const state = store.getState();

store.dispatch(addExpense({description: 'water bill', amount: 350}));
store.dispatch(addExpense({description: 'gas bill', amount: 650}));
store.dispatch(addExpense({description: 'electricity bill', amount: 650}));
store.dispatch(setTextFilter('bill'));

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(store.getState()); 

setTimeout(() => {
    store.dispatch(setTextFilter('water'));   
    // console.log(store.getState()); 
}, 3000);

store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(
    jsx, 
    document.getElementById('root')
);
