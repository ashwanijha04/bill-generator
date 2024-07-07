import React from 'react';
import { Grid, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2} className="dashboard">
      <Grid item xs={12} sm={6}>
        <Paper className="dashboard__paper">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => navigate('/create')}
          >
            Create New Bill
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className="dashboard__paper">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => navigate('/view')}
          >
            View All Bills
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className="dashboard__paper">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => navigate('/reports')}
          >
            View Reports
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className="dashboard__paper">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => navigate('/settings')}
          >
            Settings
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
