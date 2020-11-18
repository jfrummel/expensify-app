import moment from "moment";
import filtersReducer from '../../reducers/filters';

const filtersState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
};

test("sets up default reducer state", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    });
});

test("set sortBy to amount", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect(state.sortBy).toBe("amount");
});

test("set sortBy to date", () => {
    const state = filtersReducer({ sortBy: "amount" }, { type: "SORT_BY_DATE" });
    expect(state.sortBy).toBe("date");
});

test("set text", () => {
    const state = filtersReducer(undefined, { type: "SET_TEXT_FILTER", text: "TEST" });
    expect(state.text).toBe("TEST");
});

test("set start date", () => {
    const state = filtersReducer(undefined, { type: "SET_START_DATE", date: moment(0) });
    expect(state.startDate).toEqual(moment(0));
});

test("set end date", () => {
    const state = filtersReducer(undefined, { type: "SET_END_DATE", date: moment(0) });
    expect(state.endDate).toEqual(moment(0));
});