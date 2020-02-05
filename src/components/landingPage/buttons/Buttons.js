import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
  root: {
    display:"grid",
    justifyContent:"center",
    gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",
    gridGapRow:"10px",
    maxWidth:"400px",
    '& > *': {
      margin: theme.spacing(0),
      gridGap:"1rem",
    },
  },
}));

const Buttons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button 
        style={{
          margin:"10px"
        }} 
        variant="contained">
        <Link style={{color:"#333"}} to="/projects">
          Projects
        </Link>  
      </Button>
      <Button 
        style={{
          margin:"10px"
        }} 
        variant="contained" 
        color="primary">
        <GitHubIcon style={{marginRight:"10px"}} fontSize="small" />
        <a style={{color:"#fff"}} href="https://github.com/tebmik" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </Button>
    </div>
  );
}

export default Buttons;