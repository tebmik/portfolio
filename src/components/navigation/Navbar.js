import React from 'react';
import { Link } from "react-router-dom";
// import { Responsive } from 'react-responsive'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from "./Drawer";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color:"#444"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  h6: {
    color:"#444",
  },
  
}));

const linkStyle = {
  textDecoration:'none',
  color:'#444',
}

const Navbar = () => {
  const classes = useStyles();

  

  return (
    <div className={classes.root}>
      
      <AppBar className="navbar">
        <Toolbar className="nav-content" variant="dense">
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            aria-label="menu"
          >
            <SideDrawer />
          </IconButton>
          <Typography variant="h6">
            <Link className="logo" style={linkStyle} to="/">Thomas Lloyd</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;