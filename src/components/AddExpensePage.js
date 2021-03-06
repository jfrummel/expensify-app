import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense).then(() => {
            this.props.history.push('/dashboard');
        });
    };
    render() {
        return (<div>
            <h1>Add Expense</h1>
            <ExpenseForm
                buttonText="Add Expense"
                onSubmit={this.onSubmit}
            />
        </div>);
    }
}



const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);