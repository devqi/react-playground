import React from 'react';
// import { AddExpense }
import { connect } from 'react-redux';
import {removeExpense } from '../actions/expenses';

/**
 * snippet#1: passed-in object destructuring
 */
const ExpenseListItem = ( {dispatch, id, description, amount, createdAt} ) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>
        <hr />
    </div>
);

/**
 * snippet#2: normal passed-in props
 */
// const ExpenseListItem = (props) => (
//     <div>
//         <h3>{props.expense.description}</h3>
//         <p>{props.expense.amount} - {props.expense.createdAt}</p>
//         <hr />
//     </div>
// );

export default connect()(ExpenseListItem);