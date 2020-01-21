import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
  root: {
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    '& > *': {
      margin: theme.spacing(1),
      
    },
  },
}));

const Buttons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button style={{minWidth:"200px", maxWidth:"220px"}} variant="contained">
        <Link style={{color:"#333"}} to="/projects">
          Projects
        </Link>  
      </Button>
      <Button style={{minWidth:"200px", maxWidth:"220px"}} variant="contained" color="primary">
        <GitHubIcon style={{marginRight:"10px"}} fontSize="small" />
        <a style={{color:"#fff"}} href="https://github.com/tebmik" target="_blank">
          GitHub
        </a>
      </Button>
    </div>
  );
}

export default Buttons;