import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FooterBar = styled(AppBar)({
  top: 'auto',
  bottom: 0,
});

const Footer = () => {
  return (
    <FooterBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body1" color="inherit">
          &copy; 2024 Bill Generator. All Rights Reserved.
        </Typography>
      </Toolbar>
    </FooterBar>
  );
};

export default Footer;
