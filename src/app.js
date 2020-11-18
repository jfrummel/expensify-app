import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();



store.dispatch(addExpense({ description: "water bill", amount: 1500, createdAt: 1000 }));
store.dispatch(addExpense({ description: "rent bill", amount: 12000, createdAt: 221000 }));
store.dispatch(addExpense({ description: "beer bill", amount: 1400000, createdAt: 22000 }));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById("app"));