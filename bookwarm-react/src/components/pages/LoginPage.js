import React from 'react';
import LoginFormContainer from '../../containers/forms/LoginFormContainer';

class LoginPage extends React.Component {
	render() {
		return (
			<div>
				<h1>Login Page</h1>
				<LoginFormContainer />
			</div>
		);
	} 
}

export default LoginPage;