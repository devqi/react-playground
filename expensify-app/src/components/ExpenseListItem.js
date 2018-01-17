import React from 'react';
// import { AddExpense }
import { connect } from 'react-redux';

/**
 * snippet#1: passed-in object destructuring
 */
const ExpenseListItem = ( {description, amount, createdAt} ) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
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

export default ExpenseListItem;