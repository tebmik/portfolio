import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

const Buttons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">
        <Link style={{color:"#333"}} to="/projects">
          Projects
        </Link>  
      </Button>
      <Button variant="contained" color="primary">
          <GitHubIcon style={{marginRight:"10px"}} fontSize="small" />
        Github
      </Button>
    </div>
  );
}

export default Buttons;