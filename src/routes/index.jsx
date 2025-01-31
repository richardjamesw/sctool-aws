import { createBrowserRouter } from 'react-router-dom';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

// ==============================|| ROUTING RENDER ||============================== //
const router = createBrowserRouter([PublicRoutes, PrivateRoutes], {
  basename: '' // Optionally import.meta.env.VITE_APP_BASE_NAME
});

export default router;
