import moment from 'moment';
import getVisibleExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test("filters by text value", () => {
    const filters = {
        text: "e",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    };
    const results = getVisibleExpenses(expenses, filters);
    expect(results).toEqual([expenses[2], expenses[1]]);
});

test("filters by start date", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: moment(0),
        endDate: undefined
    };
    const results = getVisibleExpenses(expenses, filters);
    expect(results).toEqual([expenses[2], expenses[0]]);

});

test("filters by end date", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: moment(0)
    };
    const results = getVisibleExpenses(expenses, filters);
    expect(results).toEqual([expenses[0], expenses[1]]);
});

test("sorts by amount", () => {
    const filters = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    };
    const results = getVisibleExpenses(expenses, filters);
    expect(results).toEqual([expenses[1], expenses[2], expenses[0]]);
});

test("sorts by date", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    };
    const results = getVisibleExpenses(expenses, filters);
    expect(results).toEqual([expenses[2], expenses[0], expenses[1]]);
});

