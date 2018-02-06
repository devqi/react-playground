import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('set text filter to be "bill"', () => {
    const text = 'bill';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: 'bill' 
    });
});

test('set to be "sortByAmount"', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('set to be "sortByDate"', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('setStartDate', () => {
    const start = moment(0);
    const action = setStartDate(start);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: start
    });
});

test('setEndDate', () => {
    const end = moment(0);
    const action = setEndDate(end);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: end
    });
});