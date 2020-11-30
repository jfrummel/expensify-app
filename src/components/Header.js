import React from 'react';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

export const Header = (props) => (
    <header>
        <h3>Expensify</h3>
        <nav>
            <NavLink to="/dashboard" activeClassName="is-active" exact>Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
            <button onClick={props.startLogout}>Logout</button>
        </nav>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);