import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import { getExpensesTotal } from '../selectors/expenses-amount-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ numOfExpenses, expensesAmount }) => {
    const expenseWord = numOfExpenses === 1 ? "expense" : "expenses";
    return (
        <div>
            <p>Viewing {numOfExpenses} {expenseWord} totalling {numeral(expensesAmount / 100).format('$0,0.00')}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    expensesAmount: getExpensesTotal(getVisibleExpenses(state.expenses, state.filters)),
    numOfExpenses: getVisibleExpenses(state.expenses, state.filters).length
});

export default connect(mapStateToProps)(ExpensesSummary);