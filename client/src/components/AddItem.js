import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { addItem } from '../services/api';
import Bill from './Bill';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const AddItem = () => {
  const [item, setItem] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    itemDate: '',
    itemDetails: '',
    amount: '',
    billType: '',
  });

  const [createdBill, setCreatedBill] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addItem(item);
      if (response.data.success) {
        alert('Item added successfully');
        setCreatedBill(response.data.item);
        setItem({
          customerName: '',
          customerEmail: '',
          customerPhone: '',
          itemDate: '',
          itemDetails: '',
          amount: '',
          billType: '',
        });
      }
    } catch (error) {
      alert('Error adding item');
    }
  };

  const generatePDF = () => {
    const input = document.getElementById('bill-details');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.text("CityTaxis Bill", 10, 10);
      pdf.addImage(imgData, 'PNG', 0, 20, 210, canvas.height * 210 / canvas.width);
      pdf.save('bill.pdf');
    });
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Create New Bill
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Customer Name"
                  name="customerName"
                  value={item.customerName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Customer Email"
                  type="email"
                  name="customerEmail"
                  value={item.customerEmail}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Customer Phone"
                  type="tel"
                  name="customerPhone"
                  value={item.customerPhone}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Item Date"
                  type="date"
                  name="itemDate"
                  value={item.itemDate}
                  onChange={handleChange}
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Item Details"
                  name="itemDetails"
                  value={item.itemDetails}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Amount"
                  type="number"
                  name="amount"
                  value={item.amount}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel id="bill-type-label">Bill Type</InputLabel>
                  <Select
                    labelId="bill-type-label"
                    id="billType"
                    name="billType"
                    value={item.billType}
                    onChange={handleChange}
                  >
                    <MenuItem value="companyA">Company A</MenuItem>
                    <MenuItem value="companyB">Company B</MenuItem>
                    <MenuItem value="companyC">Company C</MenuItem>
                    {/* Add more options as needed */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Box textAlign="center">
                  <Button type="submit" variant="contained" color="primary">
                    Add Item
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
          {createdBill && (
            <Box mt={3}>
              <Bill bill={createdBill} />
              <Box textAlign="center" mt={2}>
                <Button variant="contained" color="secondary" onClick={generatePDF}>
                  Download PDF
                </Button>
              </Box>
            </Box>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AddItem;
