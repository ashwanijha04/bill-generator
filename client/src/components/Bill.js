import React from 'react';
import { Typography, Paper, Grid, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './Bill.css';

const Bill = ({ bill, companyName, companyLogo, footerMessage }) => {
  const defaultLogo = "https://static.wixstatic.com/media/baf5fd_a33b11dfd9784d6a8a8c5a9a89f4ccc3~mv2.png";
  const logo = companyLogo || defaultLogo;

  return (
    <Paper elevation={3} className="bill">
      <Box p={2}>
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          <Grid item>
            <img src={logo} alt="Company Logo" className="company-logo" />
          </Grid>
          <Grid item>
            <Typography variant="h4" align="right">
              {companyName || "Invoice"}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="subtitle1" gutterBottom>
          Bill from: {companyName || "CityTaxis"}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1"><strong>Customer Name:</strong> {bill.customerName}</Typography>
            <Typography variant="body1"><strong>Email:</strong> {bill.customerEmail}</Typography>
            <Typography variant="body1"><strong>Phone:</strong> {bill.customerPhone}</Typography>
            <Typography variant="body1"><strong>Bill Type:</strong> {bill.billType}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1"><strong>Item Date:</strong> {bill.itemDate}</Typography>
            <Typography variant="body1"><strong>Item Details:</strong> {bill.itemDetails}</Typography>
            <Typography variant="body1"><strong>Amount:</strong> ₹{bill.amount}</Typography>
          </Grid>
        </Grid>
        <Box mt={2}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Description</strong></TableCell>
                  <TableCell align="right"><strong>Amount</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{bill.itemDetails}</TableCell>
                  <TableCell align="right">₹{bill.amount}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right"><strong>Total</strong></TableCell>
                  <TableCell align="right"><strong>₹{bill.amount}</strong></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {footerMessage && (
          <Box mt={2}>
            <Typography variant="body2" align="center">
              {footerMessage}
            </Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default Bill;
