/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { getCurrentUser } from 'aws-amplify/auth';
import outputs from '../../amplify_outputs.json';

Amplify.configure(outputs);

export function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    getCurrentUser()
      .then(() => setIsAuth(true))
      .catch((err) => {
        console.log('Page forbidden. User not logged in.\n' + err);

        navigate('/auth');
      });
  }, []);
  return isAuth && children;
}

export default ProtectedRoute;
