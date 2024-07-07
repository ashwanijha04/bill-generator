import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, Box } from '@mui/material';

const CustomizationForm = ({ onSave }) => {
  const [companyName, setCompanyName] = useState('');
  const [companyLogo, setCompanyLogo] = useState('');
  const [footerMessage, setFooterMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ companyName, companyLogo, footerMessage });
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Customize Bill
          </Typography>
          <form onSubmit={handleSubmit}>
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
                  <Button type="submit" variant="contained" color="primary">
                    Save
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CustomizationForm;
