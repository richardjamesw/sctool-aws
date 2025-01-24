import { Outlet } from 'react-router-dom';
import Footer from 'layout/Footer/MainFooter';
import footerRoutes from 'routes/FooterRoutes';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
  <>
    <Outlet />
    <Footer content={footerRoutes} />
  </>
);

export default MinimalLayout;
