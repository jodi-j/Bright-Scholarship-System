import React from 'react';
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import './navbar.css';

const Navbar = () => {
  const StyledAppBar = styled(AppBar)({
    backgroundColor: '#EED7C5',
  });
  const StyledButton = styled(Button)({
    margin: '0 10px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#e0b696',
    },
    fontFamily: 'Poppins, sans-serif',
    fontSize: '25px',
    color: '#454C77',
  });
  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ padding: '10px 20px' }}>
        <EmojiObjectsOutlinedIcon sx={{ fontSize: 50, color: '#FDB61C'  }} />
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontFamily: 'Rowdies, sans-serif',     color: '#454C77' }}>
          Bright Scholarship 
        </Typography>
        <Box>
          <StyledButton color="inherit" component={Link} to="/home">
            Home
          </StyledButton>
          <StyledButton color="inherit" component={Link} to="/">
            Logout
          </StyledButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};
export default Navbar;