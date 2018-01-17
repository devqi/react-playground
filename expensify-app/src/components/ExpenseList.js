import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

/**
 * snippet#3: spread operator is applied. 
 * So the snippet#1 in ExpenseListItem.js should be used accordingly, rather than snippet#2.
 */
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        { 
            props.expenses.map( (expense) => {
                return (<ExpenseListItem key={expense.id} {...expense} />);
            } )
        }        
    </div>
);

/**
 * snippet#4: if snippet#2 in ExpenseListItem.js is applied, 
 * the following snippet should also be used accordlingly, rather than the above snippet#3.
 */
// const ExpenseList = (props) => (
//     <div>
//         <h1>Expense List</h1>
//         { 
//             props.expenses.map( (expense) => {
//                 return (<ExpenseListItem key={expense.id} {...expense} />);
//             } )
//         }        
//     </div>
// );

/**
 * pass state properties to props
 */
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters) 
    };
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;