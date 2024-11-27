import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../../../../../amplify_outputs.json';
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import AuthFooter from 'ui-component/cards/AuthFooter';
import '@aws-amplify/ui-react/styles.css';

const authComponents = {
  Header() {
    return (
      <Box align="center" height="80px">
        <Typography>TODO: brightlens logo</Typography>
      </Box>
    );
  },
  Footer() {
    return <AuthFooter />;
  }
};

Amplify.configure(outputs);

const Login = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Authenticator components={authComponents}>{() => navigate('/')}</Authenticator>
    </Box>
  );
};

export default Login;
