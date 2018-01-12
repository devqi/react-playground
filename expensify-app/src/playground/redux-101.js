import {createStore} from 'redux';

console.log('redux-101');

const store = createStore((state = { count: 10 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = (typeof action.incrementBy === 'number' ? action.incrementBy : 1);
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = (typeof action.decrementBy === 'number' ? action.decrementBy : 1);
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: 10
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

store.dispatch({type: 'INCREMENT', incrementBy: 5});

store.dispatch({type: 'DECREMENT', decrementBy: 10});

store.dispatch({type: 'RESET'});

