import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../../../../../amplify_outputs.json';
import { useNavigate } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

const Login = () => {
  const navigate = useNavigate();

  return <Authenticator>{() => navigate('/')}</Authenticator>;
};

export default Login;
