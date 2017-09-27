import { connect } from 'react-redux';
import LoginForm from '../../components/forms/LoginForm';


const mapStateToProps = () => ({
  
});

const mapDispatchToProps = () => {
	return {
		onSubmit: (values) => {
			console.log(values);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps,null,{ withRef: true })(LoginForm);

