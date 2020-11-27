import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';


let startAddExpense, history, wrapper;

beforeEach(() => {
    startAddExpense = jest.fn();
    startAddExpense.mockReturnValue(new Promise(resolve => resolve('test')));
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage buttonText="Add Expense" startAddExpense={startAddExpense} history={history} />);
});

test("renders add expense page", () => {
    expect(wrapper).toMatchSnapshot();
});

test("handles onSubmit", (done) => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[2]);
    done();
});