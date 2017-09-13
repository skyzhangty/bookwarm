import React, { Component } from 'react';
import {Field} from 'redux-form';
import {required, email} from '../../validators/login.form.validator';
import InputField from '../../components/forms/InputField';
class LoginForm extends Component {
	render() {
		const {handleSubmit} = this.props;
		return (
			<form className="ui form" onSubmit={handleSubmit}>
				<Field id="fieldEmail" className="ui input" name="email" label="Email" component={InputField} type="text" validate={[required, email]}/>
				<Field id="fieldPassword" className="ui input" name="password" label="Password" component={InputField} type="password" validate={[required]}/>
				<button className="ui primary button" type="submit">Login</button>
			</form>
		);
	}
}

export default LoginForm;
