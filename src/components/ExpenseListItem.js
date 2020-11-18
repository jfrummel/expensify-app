import React from 'react';
import { Link } from 'react-router-dom';



const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <li>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>amount: ${amount}</p>
        <p>Created At: {createdAt}</p>
    </li>
);


export default ExpenseListItem;


