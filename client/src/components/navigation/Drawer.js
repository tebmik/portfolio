import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
  list: {
    width: 250,
 },
  fullList: {
    width: 'auto',
  },
  listItem: {
    fontSize:"1.5rem",
    textDecoration:"none",
    color:"#333",
    fontWeight:"400",
  },
  iconContainer: {
    display:"grid",
    margin:"20px 0",
    justifyContent:"center",
    justifyItems:"center",
    gridTemplateColumns:"1fr 1fr"
  }
});


export default function SideDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List 
        style={{
          marginTop:"80px"
        }}>
        <Link to="/projects" >
            <ListItem button>
                <ListItemText 
                  disableTypography 
                  className={classes.listItem} 
                  inset 
                  primary="Projects"
                />    
            </ListItem>
        </Link>
        <Link to="/about" > 
            <ListItem button>
                <ListItemText 
                  disableTypography 
                  className={classes.listItem} 
                  inset 
                  primary="About"
                /> 
            </ListItem>
        </Link>
        <Link to="/resume" >
            <ListItem button>
                <ListItemText
                  disableTypography 
                  className={classes.listItem}  
                  inset 
                  primary="Resume"
                />  
            </ListItem>
        </Link>
        <Link to="/contact" >
            <ListItem button>
                <ListItemText 
                  disableTypography 
                  className={classes.listItem} 
                  inset 
                  primary="Contact"
                />
            </ListItem>
        </Link>
      </List>
      <Divider />
      <div className={classes.iconContainer}>
        <a href="https://github.com/tebmik" target="_blank" rel="noopener noreferrer">
          <i style={{fontSize:"24px", color:"rgba(0,0,0,0.5)"}} className="github icon"></i>
        </a>
        <a href="#">
          <i style={{fontSize:"24px", color:"rgba(0,0,0,0.5)"}} className="linkedin icon"></i>
        </a>
      </div>
    </div>
  );

  return (
    <div className="navbar-icon">
      <div style={{height:'32px', width:"32px"}} onClick={toggleDrawer('left', true)}>
          <MenuIcon style={{fontSize:"32px"}}/>
        </div>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
