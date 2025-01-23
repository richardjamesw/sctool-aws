import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/AuthLogin')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //
// Use layout for when user is not logged in or at welcome page

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      index: true,
      element: <AuthLogin />
    },
    {
      path: 'auth',
      element: <AuthLogin />
    }
  ]
};

export default AuthenticationRoutes;
