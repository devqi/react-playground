import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {removeExpense, editExpense} from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <h1>Edit Expense</h1>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/'); // after submit, directly redirect to dashboard page (homepage)
            }}/>
            <button onClick={() => {
                props.dispatch(removeExpense( { id: props.expense.id } ));
                props.history.push('/');
            }}>Remove Expense</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(
            (expense) => (expense.id === props.match.params.id)
        )
    };
};

export default connect(mapStateToProps)(EditExpensePage);