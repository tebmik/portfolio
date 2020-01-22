import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  link: {
      fontSize:"1.5rem",
      color:"#444",
  },
}));

const Lists = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
        <Link to="/projects">
            <ListItem>
                <ListItemText disableTypography className={classes.link} autoFocus inset primary="Projects" />
            </ListItem>
        </Link>
        <Link to="/about">
            <ListItem>
                <ListItemText disableTypography className={classes.link} autoFocus inset primary="About" />
            </ListItem>
        </Link>
        <Link to="/resume">
            <ListItem>
                <ListItemText disableTypography className={classes.link} autoFocus inset primary="Resume" />
            </ListItem>
        </Link>
        <Link to="/contact">
            <ListItem>
                <ListItemText disableTypography className={classes.link} autoFocus inset primary="Contact" />
            </ListItem>
        </Link>
    </List>
  );
}

export default Lists;
