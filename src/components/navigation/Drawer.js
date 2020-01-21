import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const listStyle = {
    paddingLeft:"10px",
    color:'#333',
    
}

const link = {
    textDecoration:'none',
    fontFamily:"Roboto",
    fontWeight:"100",
    fontSize:"22px",
}

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
      <List>
        <Link style={link} to="/projects" >
            <ListItem button>
                <InfoIcon />
                <ListItemText style={listStyle} inset primary="Projects"/>    
            </ListItem>
        </Link>
        <Link style={link} to="/about" > 
            <ListItem button>
                <InfoIcon />
                <ListItemText style={listStyle} inset primary="About"/> 
            </ListItem>
        </Link>
        <Link style={link} to="/resume" >
            <ListItem button>
                <InfoIcon />
                <ListItemText style={listStyle} inset primary="Resume"/>  
            </ListItem>
        </Link>
        <Link style={link} to="/contact" >
            <ListItem button>
                <InfoIcon />
                <ListItemText style={listStyle} inset primary="Contact"/>
            </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <div style={{height:'32px', width:"32px"}} onClick={toggleDrawer('left', true)}>
          <MenuIcon style={{fontSize:"32px"}}/>
        </div>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
