import React, { Component } from 'react';
import {Field} from 'redux-form';
import {reduxForm} from 'redux-form';
import InputField from '../../components/forms/InputField';
import {handleSubmitFail} from '../../util/handleSubmitFail';
import validate from '../../validators/login.form.validator';

class LoginForm extends Component {
	render() {
		const {handleSubmit} = this.props;
		return (
			<form className="ui form" onSubmit={handleSubmit}>
				<Field ref="email" id="fieldEmail" className="ui input" name="email" label="Email" component={InputField} type="text" />
				<Field ref="password" id="fieldPassword" className="ui input" name="password" label="Password" component={InputField} type="password" />
				<button className="ui primary button" type="submit">Login</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'login',
	validate,
	onSubmitFail: handleSubmitFail.bind(LoginForm)
})(LoginForm);
