import { lazy } from 'react';

import ProtectedRoute from './ProtectedRoute';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// routes
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const IntegrationsPage = Loadable(lazy(() => import('views/other/IntegrationsPage')));
const SettingsPage = Loadable(lazy(() => import('views/other/SettingsPage')));


// ==============================|| MAIN ROUTING ||============================== //
const MainRoutes = {
  path: '/',
  element: (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <DashboardDefault />
        </ProtectedRoute>
      )
    },
    {
      path: 'account',
      children: [
        {
          path: 'default',
          element: (
            <ProtectedRoute>
              <DashboardDefault />
            </ProtectedRoute>
          )
        }
      ]
    },
    {
      path: 'account',
      children: [
        {
          path: 'account-insights',
          element: (
            <ProtectedRoute>
              <UtilsColor />
            </ProtectedRoute>
          )
        }
      ]
    },
    {
      path: 'account',
      children: [
        {
          path: 'account-tasks',
          element: (
            <ProtectedRoute>
              <UtilsShadow />
            </ProtectedRoute>
          )
        }
      ]
    },
    {
      path: 'integrations',
      element: (
        <ProtectedRoute>
          <IntegrationsPage />
        </ProtectedRoute>
      )
    },
    {
      path: 'settings-page',
      element: (
        <ProtectedRoute>
          <SettingsPage />
        </ProtectedRoute>
      )
    }
  ]
};

export default MainRoutes;
