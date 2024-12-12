import { useState, useEffect } from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, TextField } from '@mui/material';
import { generateClient } from '@aws-amplify/api';
import Typography from '@mui/material/Typography';
import MainCard from 'ui-component/cards/MainCard';

const client = generateClient();

const IntegrationsPage = () => {
  const [acSyncd, setAcSyncd] = useState(false);
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState('');
  const [connBorder, setConnBorder] = useState('red');

  const checkAcSync = async () => {
    try {
      let res;
      let prof;
      if (userId !== '') {
        res = await client.models.UserProfile.get({
          id: userId
        });
        prof = res.data;
      } else {
        res = await client.models.UserProfile.list(); // todo confirm profileOwner matches? test if other users are coming in or just the one?
        prof = res.data[0];
      }
      setUserId(prof.id);

      if (prof !== null && prof.acUrl !== null) {
        setAcSyncd(true);
        setConnBorder('lightgreen');
      } else {
        setAcSyncd(false);
        setConnBorder('red');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addAcUrl = async (url, key) => {
    await client.models.UserProfile.update({
      id: userId,
      acUrl: url,
      acKey: key
    });
    checkAcSync();
  };

  useEffect(() => {
    checkAcSync();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MainCard title="Active Campaign" sx={{ border: 2, borderColor: connBorder }}>
      <Typography variant="body2" sx={{ m: 2 }}>
        Sync your contacts and manage marketing campaigns directly through Active Campaign.
      </Typography>
      <Box textAlign={'end'}>
        {acSyncd ? (
          <Typography sx={{ fontWeight: 'bold' }}>Connected</Typography>
        ) : (
          <Button variant="outlined" onClick={handleClickOpen}>
            Sync
          </Button>
        )}
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const url = formJson.url;
            const key = formJson.key;
            if (url !== null && key !== null) addAcUrl(url, key);
            handleClose();
          }
        }}
      >
        <DialogTitle>Active Campaign</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter your Active Campaign information to synchronize.</DialogContentText>
          <TextField autoFocus required margin="dense" id="name" name="url" label="Site URL" type="url" fullWidth variant="standard" />
          <TextField autoFocus required margin="dense" id="name" name="key" label="Api Key" type="text" fullWidth variant="standard" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Confirm</Button>
        </DialogActions>
      </Dialog>
    </MainCard>
  );
};

export default IntegrationsPage;
