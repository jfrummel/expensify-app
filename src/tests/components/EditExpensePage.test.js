import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, history, startRemoveExpense, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startEditExpense.mockReturnValue(new Promise(resolve => resolve('test')));
    startRemoveExpense = jest.fn();
    startRemoveExpense.mockReturnValue(new Promise(resolve => resolve('test')));
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage
        buttonText="Save Expense"
        expense={expenses[0]}
        startEditExpense={startEditExpense}
        history={history}
        startRemoveExpense={startRemoveExpense}
    />)
});

test("renders edit expense page", () => {
    expect(wrapper).toMatchSnapshot();
});

test("on submit fires with correct data passed in", (done) => {
    const update = { description: "test" };
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
    done();
});

test("on click fires with correct data", (done) => {
    wrapper.find('button').simulate('click');
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0].id);
    done();
});