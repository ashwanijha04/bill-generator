import React from 'react';
import { Drawer, Button, Box, TextField, Typography, Grid } from '@mui/material';

const CustomizationPanel = ({ open, onClose, onSave, customization }) => {
  const [companyName, setCompanyName] = React.useState(customization.companyName);
  const [companyLogo, setCompanyLogo] = React.useState(customization.companyLogo);
  const [footerMessage, setFooterMessage] = React.useState(customization.footerMessage);

  const handleSave = () => {
    onSave({ companyName, companyLogo, footerMessage });
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box width={300} p={2}>
        <Typography variant="h6" gutterBottom>
          Customize Bill
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Company Logo URL"
              value={companyLogo}
              onChange={(e) => setCompanyLogo(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Footer Message"
              value={footerMessage}
              onChange={(e) => setFooterMessage(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center">
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
};

export default CustomizationPanel;
