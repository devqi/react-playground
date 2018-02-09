import filtersReducer from '../../reducers/filters';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

const initialState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

test('test reducer - set text filter', () => {
    const action = setTextFilter( 'text-filter' );

    const result = filtersReducer(initialState, action);
    expect(result).toEqual({
        text: action.text,
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('test reducer - set sortByAmount', () => {
    const action = sortByAmount();

    const result = filtersReducer(initialState, action);
    expect(result).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('test reducer - set sortByDate', () => {
    const action = sortByDate();

    const result = filtersReducer(initialState, action);
    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('test reducer - set setStartDate', () => {
    const startDate = moment(0).subtract(3, 'd');
    const action = setStartDate(startDate);

    const result = filtersReducer(initialState, action);
    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate: action.startDate,
        endDate: moment().endOf('month')
    });
});

test('test reducer - set setEndDate', () => {
    const endDate = moment(0).add(3, 'd');   
    const action = setEndDate(endDate);

    const result = filtersReducer(initialState, action);
    expect(result).toEqual({
        // text: '',
        // sortBy: 'date',
        // startDate: moment().endOf('month'),
        ...initialState,
        endDate: action.endDate
    });
});
