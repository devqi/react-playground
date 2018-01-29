import uuid from 'uuid';

//********************************* action creators *********************************/
/**
 * ADD_EXPENSE
 */
export const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

/**
 * REMOVE_EXPENSE
 */
// export const removeExpense = ({id} = {} ) => ({
//     type: 'REMOVE_EXPENSE',
//     id
// });
export const removeExpense = ({id} = {} ) => {
    console.log('id to remove: ' + id);
    return {
        type: 'REMOVE_EXPENSE',
        id
    };
};

/**
 * EDIT_EXPENSE
 */
export const editExpense = (id, update ) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
});