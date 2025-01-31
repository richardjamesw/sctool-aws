import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/AuthLogin')));
const LandingPage = Loadable(lazy(() => import('views/pages/landing/LandingPage')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //
// Use layout for when user is not logged in or at welcome page

const PublicRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      index: true,
      element: <LandingPage />
    },
    {
      path: 'auth',
      element: <AuthLogin />
    }
  ]
};

export default PublicRoutes;
