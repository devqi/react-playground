const expensesReducerDefaultState = [];

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object directlz, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            // return state.concat(action.expense);
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter( 
                ({id}) => id !== action.id // ({id}) is destructuring of (expense)
             );
        case 'EDIT_EXPENSE':
            return state.map( (expense) => {
                
                if(expense.id === action.id) {
                    console.log('action: ' + action.update);
                    return {
                        ...expense,
                        ...action.update
                    };
                }
                else {
                    return expense;
                }
            });        
        default:
            return state;
    }
};

export default expensesReducer;