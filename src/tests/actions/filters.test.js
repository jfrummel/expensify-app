import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

// setTextFilter tests

test("return set text action object", () => {
    const action = setTextFilter("Rent");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "Rent"
    });
});

test("return set text action object with default", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ''
    });
});

// SortByDate test

test("returns sort by date action object", () => {
    const action = sortByDate();
    expect(action).toEqual({ type: "SORT_BY_DATE" });
});

// sortByAmount test

test("returns sort by amount action object", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});

//  setStartDate test

test("returns set start date action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        date: moment(0)
    })
});

// setEndDate test

test("returns set end date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        date: moment(0)
    });
});