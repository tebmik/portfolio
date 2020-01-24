import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
      display:"grid",
      justifyItems:"end",
    '& > *': {
      margin: theme.spacing(0),
    },
  },
}));


const SubmitButton = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Button type="submit" variant="outlined" color="primary">
        Submit
      </Button>
    </div>
  );
}

export default SubmitButton;
