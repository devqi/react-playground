import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss'; 

const store = configureStore();
console.log(store.getState());
const state = store.getState();

store.dispatch(addExpense({description: 'water bill', amount: 350}));
store.dispatch(addExpense({description: 'gas bill', amount: 650}));
store.dispatch(setTextFilter('bill'));
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(store.getState());

ReactDOM.render(
    <AppRouter />, 
    document.getElementById('root')
);
