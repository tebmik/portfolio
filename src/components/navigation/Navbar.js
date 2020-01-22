import React from 'react';
import { Link } from "react-router-dom";
// import { Responsive } from 'react-responsive'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';


import SideDrawer from "./Drawer";
import ScrollUp from "./ScrollUp";
import NavLinks from "./NavLinks";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color:"#444",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  
}));

const linkStyle = {
  textDecoration:'none',
  fontFamily:"Roboto",
  fontSize:"26px",
  color:"#444",
}

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Navbar = (props) => {
  const classes = useStyles();

  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className="navbar">
          <Toolbar className="nav-content" variant="dense">
            <div>
              <IconButton 
                edge="start" 
                className={classes.menuButton} 
                aria-label="menu"
              >
                <SideDrawer />
              </IconButton>
            </div>
            <div>
              <Typography variant="h6">
                <Link className="logo" style={linkStyle} to="/">Thomas Lloyd</Link>
              </Typography>
            </div>
            <div>
              <NavLinks />
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <ScrollUp />
    </div>
  );
}

export default Navbar;