import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../../../../amplify_outputs.json';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import '@aws-amplify/ui-react/styles.css';
import imgBg from 'assets/images/pres-bg.jpg';

Amplify.configure(outputs);

const Login = () => {
  const navigate = useNavigate();

  return (
    <Box
      minHeight="75vh"
      width="100%"
      sx={{
        backgroundImage: `url(${imgBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        display: 'grid',
        placeItems: 'center'
      }}
    >
      <Authenticator>{() => navigate('/account')}</Authenticator>
    </Box>
  );
};

export default Login;
