import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, history, removeExpense, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage
        buttonText="Save Expense"
        expense={expenses[0]}
        editExpense={editExpense}
        history={history}
        removeExpense={removeExpense}
    />)
});

test("renders edit expense page", () => {
    expect(wrapper).toMatchSnapshot();
});

test("on submit fires with correct data passed in", () => {
    const update = { description: "test" };
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test("on click fires with correct data", () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id);
});