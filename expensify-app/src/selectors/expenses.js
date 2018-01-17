const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
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

export default getVisibleExpenses;