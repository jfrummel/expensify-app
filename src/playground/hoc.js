import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is the info: {props.info}</p>
    </div>
);

const adminInfo = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Private information</p>}
            <Info {...props} />
        </div>
    );
};

const AdminInfo = adminInfo(Info);


const authInfo = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthorized ?
                <Info {...props} />
                :
                <h3>You are not authorized to veiw</h3>
            }
        </div>
    );
};

const AuthInfo = authInfo(Info);

ReactDOM.render(<AuthInfo isAuthorized={false} info="details here" />, document.getElementById("app"));

