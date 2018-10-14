import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  changeEmail,
  changePassword,
  loginUser,
} from 'store/actions';
import { LoginForm } from './LoginForm';


const mapStateToProps = ({ loginForm: { email, password, loading }, errorMessage }) => ({
  email,
  password,
  errorMessage,
  loading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeEmail,
  changePassword,
  loginUser,
}, dispatch);

const LoginFormWithProps = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export { LoginFormWithProps as LoginForm };
