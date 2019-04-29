import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortbyDate, sortbyAmount } from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    })
});

test('should generate non-default text filter object', () => {
    const text = 'rent';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should generate default text filter object', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate sort by date filter object', () => {
    expect(sortbyDate()).toEqual({type:'SORT_BY_DATE'});
});

test('should generate sort by amount filter object', () => {
    expect(sortbyAmount()).toEqual({type: 'SORT_BY_AMOUNT'});
});