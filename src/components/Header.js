import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h3>Expensify</h3>
        <nav>
            <NavLink to="/" activeClassName="is-active" exact>Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </nav>
    </header>
);

export default Header;