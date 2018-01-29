import moment from 'moment';

export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter( (expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
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
            return a.amount > b.amount ? 1 : -1;
        }
    });
};


/**
 * arr.sort( compareFunction(a, b) {} )
 * 
 * If compareFunction(a, b) is less than 0, sort a to an index lower than b, i.e. a comes first.
 * If compareFunction(a, b) is greater than 0, sort b to an index lower than a, i.e. b comes first.
 * 
 * 
 * The functions isSameOrBefore() and isSameOrAfter are from the external library 'moment'.
 */