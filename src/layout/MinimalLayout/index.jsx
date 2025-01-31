import { Outlet } from 'react-router-dom';
import MainNavBar from 'layout/Navigation/MainNavBar';
import Footer from 'layout/Footer/MainFooter';
import footerRoutes from 'routes/FooterRoutes';
import routes from 'routes/MainNavRoutes';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
  <>
    <MainNavBar
      routes={routes}
      action={{
        type: 'internal',
        route: '/auth',
        label: 'sign in',
        color: 'info'
      }}
      sticky
    />
    <Outlet />
    <Footer content={footerRoutes} />
  </>
);

export default MinimalLayout;
