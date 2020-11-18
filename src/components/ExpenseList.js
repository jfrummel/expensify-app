import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? <h3>No Expenses Found</h3> :
                <ol>
                    {props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />
                    })}
                </ol>
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);

