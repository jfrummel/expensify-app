import React from 'react';
import { startLogin } from '../actions/auth';
import { connect } from 'react-redux';

export const LoginPage = (props) => (
    <div>
        <button onClick={props.startLogin}>Log In</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);