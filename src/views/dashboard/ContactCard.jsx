import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { Typography, Grid } from '@mui/material';
import '@aws-amplify/ui-react/styles.css';
import SubCard from 'ui-component/cards/SubCard';
import ContactIcon from '@mui/icons-material/AccountCircle';

export default function ContactCard(props) {
  const contact = props.item;
  if (!contact || !contact.firstName) {
    return <></>;
  } else {
    return (
      <SubCard>
        <Grid container direction="column">
          <Grid item>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="inherit">
                  {contact.firstName + ' ' + contact.lastName}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container alignItems="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="subtitle1" color="inherit">
                      {contact.orgname}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        width: 16,
                        height: 16,
                        borderRadius: '5px',
                        bgcolor: 'success.light',
                        color: 'success.dark',
                        ml: 2
                      }}
                    >
                      <ContactIcon fontSize="small" color="inherit" />
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
              {contact.email}
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 1.5 }} />
      </SubCard>
    );
  }
}
