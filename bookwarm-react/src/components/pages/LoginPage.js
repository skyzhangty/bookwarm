import React from 'react';
import {Link} from 'react-router-dom';

class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default LoginPage;