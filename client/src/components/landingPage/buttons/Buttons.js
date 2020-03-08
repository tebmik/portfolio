import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
  root: {
    display:"grid",
    textAlign:"center",
    justifyContent:"center",
    gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",
    gridRowGap:"10px",
    maxWidth:"400px",
    '& > *': {
      margin: theme.spacing(2),
      gridGap:"1rem",
    },
  },
}));

const Buttons = () => {
  const classes = useStyles();

  return (
    <div 
      style={{
        margin:"0 auto"}} 
        className={classes.root}>
      <Button 
        variant="outlined" 
        color="primary"
        size="large">
        <a color="primary" href="#projects">
          Portfolio
        </a>  
      </Button>
      <Button 
        variant="outlined" 
        color="secondary"
        size="large">
        <GitHubIcon style={{marginRight:"10px"}} fontSize="small" />
        <a color="secondary" href="https://github.com/tebmik" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </Button>
    </div>
  );
}

export default Buttons;