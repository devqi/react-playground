import {addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('add expense for coffee=3.58 Euro', () => {
    const action = addExpense({description: 'coffee', amount: 3.58});
    expect(action).toMatchObject({
        type: 'ADD_EXPENSE',
        expense: {
            description: 'coffee',
            amount: 3.58
        }
    });
});

test('add expense for cosmetics=69 Euro', () => {
    const expenseData = {
        description: 'cosmetics', 
        amount: 69,
        note: 'makeups of this month',
        createdAt: 1000
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('add expense with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});

test('edit expense with description=rent', () => {
    const action = editExpense('123456', {note: 'I am a new expense'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123456',
        update: {note: 'I am a new expense'}
    });
});

test('remove expense with id=56789', () => {
    const action = removeExpense({id: '56789'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '56789'
    });
});
