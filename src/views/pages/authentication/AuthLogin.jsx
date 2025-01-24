import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../../../../amplify_outputs.json';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

const Login = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Authenticator>{() => navigate('/account')}</Authenticator>
    </Box>
  );
};

export default Login;
