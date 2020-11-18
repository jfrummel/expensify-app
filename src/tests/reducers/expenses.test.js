import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test("sets default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("remove expense with valid id", () => {
    const result = expensesReducer(expenses, { type: "REMOVE_EXPENSE", id: expenses[1].id });
    expect(result).toEqual([expenses[0], expenses[2]]);
});

test("attempt to remove expense with invalid id", () => {
    const result = expensesReducer(expenses, { type: "REMOVE_EXPENSE", id: 'a' });
    expect(result).toEqual(expenses);
});

test("add expense to array", () => {
    const expense = {
        description: "Test",
        note: '',
        amount: 125,
        createdAt: 0,
        id: 4
    };
    const state = expensesReducer(expenses, { type: "ADD_EXPENSE", expense })
    expect(state).toEqual([...expenses, expense]);
});

test("returns edited expense with valid id", () => {
    const updates = { description: "Updated" }
    const result = expensesReducer(expenses, { type: "EDIT_EXPENSE", id: expenses[0].id, updates });
    expect(result[0].description).toBe("Updated");
});

test("returns edited expense with invalid id", () => {
    const updates = { description: "Updated" }
    const result = expensesReducer(expenses, { type: "EDIT_EXPENSE", id: "a", updates });
    expect(result).toEqual(expenses);
});