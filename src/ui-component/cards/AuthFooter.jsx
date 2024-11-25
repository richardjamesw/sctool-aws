// material-ui
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack height="80px" alignItems="center" direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" component={Link} href="https://brightlens.io" target="_blank" underline="hover">
      brightlens.io
    </Typography>
    <Typography variant="subtitle2" target="_blank" underline="hover">
      &copy; Copyright Brightlens Co. 2024
    </Typography>
  </Stack>
);

export default AuthFooter;
