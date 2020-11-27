import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense).then(() => {
            this.props.history.push("/");
        });
    };
    onRemove = () => {
        this.props.startRemoveExpense(this.props.expense.id).then(() => {
            this.props.history.push("/");
        });
    };
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    buttonText="Save Expense"
                    onSubmit={this.onSubmit}
                />
                <button
                    onClick={this.onRemove}
                >Remove Expense
                </button>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);