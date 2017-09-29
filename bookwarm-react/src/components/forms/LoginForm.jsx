import React from 'react';
import {Field, reduxForm} from 'redux-form';
import InputField from '../../components/forms/InputField';
import {handleSubmitFail} from '../../util/handleSubmitFail';
import validate from '../../validators/login.form.validator';

function LoginForm(props)  {
	
	const {handleSubmit} = props;
	return (
		<form className="ui form" onSubmit={handleSubmit}>
			<Field id="fieldEmail" className="ui input" name="email" label="Email" component={InputField} type="text" />
			<Field id="fieldPassword" className="ui input" name="password" label="Password" component={InputField} type="password" />
			<button className="ui primary button" type="submit">Login</button>
		</form>
	);
}

export default reduxForm({
	form: 'login',
	validate,
	onSubmitFail: errors => handleSubmitFail(errors)
})(LoginForm);
