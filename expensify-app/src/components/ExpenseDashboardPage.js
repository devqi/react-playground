import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        This is from my dashboard component.
        <ConnectedExpenseList />        
    </div>
);

export default ExpenseDashboardPage;