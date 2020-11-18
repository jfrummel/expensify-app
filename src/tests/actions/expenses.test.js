import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test("should setup remove expense action object", () => {
    const action = removeExpense({ id: "123456" });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        expense: {
            id: "123456"
        }
    });
});

test("should return edit expense action object", () => {
    const action = editExpense("123456", { description: "test" });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123456",
        updates: {
            description: "test"
        }
    });
});

test("should return add expense object", () => {
    const action = addExpense({ description: "test", note: "test", amount: 12500, createdAt: 12584 });
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "test",
            note: "test",
            amount: 12500,
            createdAt: 12584
        }
    });
});

test("should return add expense object with default values", () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "",
            note: "",
            amount: 0,
            createdAt: 0
        }
    })
});