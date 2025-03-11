import { Link } from 'react-router-dom';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

function MainNavBarDropdown({ name, icon, children = false, collapseStatus = false, light = false, href = '', route = '', collapse, ...rest }) {
  const linkComponent = {
    component: 'a',
    href,
    target: '_blank',
    rel: 'noreferrer'
  };

  const routeComponent = {
    component: Link,
    to: route
  };

  return (
    <div>
      <Box
        {...rest}
        mx={1}
        p={1}
        display="flex"
        alignItems="baseline"
        color={light ? 'white' : 'dark'}
        opacity={light ? 1 : 0.6}
        sx={{ cursor: 'pointer', userSelect: 'none' }}
        {...(route && routeComponent)}
        {...(href && linkComponent)}
      >
        <Typography variant="body2" lineHeight={1} color="inherit" sx={{ alignSelf: 'center', '& *': { verticalAlign: 'middle' } }}>
          {icon}
        </Typography>
        <Typography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          color={light ? 'white' : 'dark'}
          sx={{ fontWeight: '100%', ml: 1, mr: 0.25 }}
        >
          {name}
        </Typography>
      </Box>
      {children && (
        <Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
          {children}
        </Collapse>
      )}
    </div>
  );
}

// Typechecking props for the MainNavBarDropdown
MainNavBarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  children: PropTypes.node,
  collapseStatus: PropTypes.bool,
  light: PropTypes.bool,
  href: PropTypes.string,
  route: PropTypes.string,
  collapse: PropTypes.bool
};

export default MainNavBarDropdown;
