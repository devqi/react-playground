import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
},{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 1569,
    createdAt: -1000
},{
    id: '3',
    description: 'Dinner',
    note: '',
    amount: 120,
    createdAt: -200
}];

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toBe([ expenses[2], expenses[1]]);
});

// TBD: ......
test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: isMoment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toBe([ expenses[2], expenses[1]]);
});