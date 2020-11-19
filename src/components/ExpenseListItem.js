import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';



const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <li>
        <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
        <p>amount: {numeral(amount / 100).format('$0,0.00')}</p>
        <p>Created: {moment(createdAt).format("MMMM d, YYYY")}</p>
    </li>
);


export default ExpenseListItem;


