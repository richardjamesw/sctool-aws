import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../../../../../amplify_outputs.json';
import { Navigate } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

const Login = () => {
  return <Authenticator>{({ signOut }) => <Navigate to={'/'} />}</Authenticator>;
};

export default Login;
