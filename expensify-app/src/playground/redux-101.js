import {createStore} from 'redux';

console.log('redux-101');

/**
 * action generators - functions that return action objects
 * @param {action object}  
 * 
 * return an action object
 */
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = ({resetTo = 10} = {}) => ({
    type: 'RESET',
    resetTo
});

const store = createStore((state = { count: 10 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = (typeof action.incrementBy === 'number' ? action.incrementBy : 1);
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = (typeof action.decrementBy === 'number' ? action.decrementBy : 1);
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: action.resetTo
            };
        default:
            return state;
    }
});

/**
 * this function is called, every time the state changes
 */
store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({type: 'INCREMENT', incrementBy: 5});
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(resetCount());

