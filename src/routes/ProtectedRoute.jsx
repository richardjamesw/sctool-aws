/* eslint-disable react/prop-types */
import Navigate from 'react';
import { getCurrentUser } from 'aws-amplify/auth';

const ProtectedRoute = ({ children }) => {
  try {
    getCurrentUser();
  } catch (ex) {
    Console.log('User not logged in' + ex);
    return <Navigate to="/pages/login" />;
  }
  return children;
};

export default ProtectedRoute;
