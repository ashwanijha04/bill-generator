import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Title = styled(Typography)({
  flexGrow: 1,
});

const NavBar = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Title variant="h6">
          Bill Generator
        </Title>
        <Button color="inherit" component={Link} to="/">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/create">
          Create New Bill
        </Button>
        <Button color="inherit" component={Link} to="/view">
          View All Bills
        </Button>
        <Button color="inherit" component={Link} to="/reports">
          View Reports
        </Button>
        <Button color="inherit" component={Link} to="/settings">
          Settings
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
