import { connect } from 'react-redux';
import LoginForm from '../../components/forms/LoginForm';
import {reduxForm} from 'redux-form';

const mapStateToProps = () => ({
  
});

const mapDispatchToProps = () => {
	return {
		onSubmit: (values) => {
			console.log(values);
		}
	};
};

let LoginFormContainer = reduxForm({
	form: 'login'
})(LoginForm);

LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);

export default LoginFormContainer;