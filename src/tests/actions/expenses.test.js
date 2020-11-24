import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const creatMockStore = configureMockStore([thunk]);

test("should setup remove expense action object", () => {
    const action = removeExpense("123456");
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123456"
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
    const action = addExpense(expenses[1]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[1]
    });
});

test('adds expense to database and store', (done) => {
    const store = creatMockStore({});
    const expenseData = { description: "guitar", note: "PRS Silver Sky", amount: 225000, createdAt: 25654 };
    store.dispatch(startAddExpense(expenseData)).then((ref) => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('adds expense with default values to database and store', () => {
    const store = creatMockStore({});
    const expenseData = {};
    store.dispatch(startAddExpense(expenseData)).then((ref) => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                description: "",
                note: "",
                amount: 0,
                createdAt: 0
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(actions[0].expense);
        done();
    });
});

// test("should return add expense object with default values", () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//             id: expect.any(String),
//             description: "",
//             note: "",
//             amount: 0,
//             createdAt: 0
//         }
//     })
// });