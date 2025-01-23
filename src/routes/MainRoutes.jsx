import { lazy } from 'react';

import ProtectedRoute from './ProtectedRoute';
import Loadable from 'ui-component/Loadable';

// routes
const MainLayout = Loadable(lazy(() => import('layout/MainLayout')));
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const IntegrationsPage = Loadable(lazy(() => import('views/other/IntegrationsPage')));
const SettingsPage = Loadable(lazy(() => import('views/other/SettingsPage')));

// ==============================|| MAIN ROUTING (user is logged in) ||============================== //
// These should all be ProtectedRoutes

const MainRoutes = {
  path: '/',
  element: (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      path: 'account',
      children: [
        {
          index: true,
          element: <DashboardDefault />
        },
        {
          path: 'insights',
          element: <UtilsColor />
        },
        {
          path: 'tasks',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'settings',
      children: [
        {
          index: true,
          element: <SettingsPage />
        },
        {
          path: 'integrations',
          element: <IntegrationsPage />
        }
      ]
    }
  ]
};

export default MainRoutes;
