/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from 'aws-amplify/auth';

export function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    getCurrentUser()
      .then(() => setIsAuth(true))
      .catch((err) => {
        console.log('User not logged in.\n' + err);
        navigate('/auth');
      });
  }, []);
  return isAuth && children;
}

export default ProtectedRoute;
