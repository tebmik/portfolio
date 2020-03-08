import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 1200,
    backgroundColor: "transparent",
    display:"grid",
    
  },
  link: {
      fontSize:"1.5rem",
      color:"#444",
      textAlign:'center',
  },
}));

const Lists = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
        <a href="/#projects">
            <ListItem>
                <ListItemText disableTypography className={classes.link} autoFocus primary="Portfolio" />
            </ListItem>
        </a>
        <a href="/#services">
            <ListItem>
                <ListItemText disableTypography className={classes.link} autoFocus primary="About Me" />
            </ListItem>
        </a>
        <a href="/Resume.pdf" target="_blank">
            <ListItem>
                <ListItemText disableTypography className={classes.link} autoFocus primary="Resume" />
            </ListItem>
        </a>
        <Link to="/contact">
            <ListItem>
                <ListItemText disableTypography className={classes.link} autoFocus primary="Contact" />
            </ListItem>
        </Link>
    </List>
  );
}

export default Lists;
