import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push("/");
    };
    onRemove = () => {

        console.log(this.props.expense.id);
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push("/");
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
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: ({ id }) => dispatch(removeExpense({ id }))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);