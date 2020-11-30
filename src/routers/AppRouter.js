import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import PageNotFound from '../components/PageNotFound';
import PrivateRoute from './PrivateRoute';


export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;