import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div>
        <h1>Status 404: Oops.. page not found</h1>
        <Link to="/">Go Home</Link>
    </div>
);

export default PageNotFound;