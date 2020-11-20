import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';




test('returns snaphsot with no expenses', () => {
    const wrapper = shallow(<ExpensesSummary numOfExpenses={0} expensesAmount={0} />);
    expect(wrapper).toMatchSnapshot();
});

test('returns snaphsot with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary numOfExpenses={2} expensesAmount={12488} />);
    expect(wrapper).toMatchSnapshot();
});

test('returns snaphsot with one expense', () => {
    const wrapper = shallow(<ExpensesSummary numOfExpenses={1} expensesAmount={125} />);
    expect(wrapper).toMatchSnapshot();
});