import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';


const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

test('returns set expenses action object', () => {
    const result = setExpenses(expenses);
    expect(result).toEqual({
        type: "SET_EXPENSES",
        expenses
    });
});

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
    const store = createMockStore({});
    const expenseData = { description: "guitar", note: "PRS Silver Sky", amount: 225000, createdAt: 25654 };
    store.dispatch(startAddExpense(expenseData)).then(() => {
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

test('sets expenses from database', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        });
        done();
    });
});

test('adds expense with default values to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {};
    const expensesDefault = {
        description: "",
        note: "",
        amount: 0,
        createdAt: 0
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expensesDefault
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expensesDefault);
        done();
    });
});



