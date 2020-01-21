import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import SubmitButton from "../../landingPage/buttons/SubmitButton";

const useStyles = makeStyles(theme => ({
  root: {
    position:"relative",
    display:"grid",
    justifyContent:"center",
    '& > *': {
      margin: theme.spacing(1),
      width:"280px",
      margin:"20px 0"
    },
  },
}));

const Contact = () => {
    const classes = useStyles();
    return(
        <div className="contact">
            <div className="contact-content">
                <h2>Contact Me</h2>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Full Name" />
                    <TextField id="standard-basic" label="Email Address" />
                    <TextField id="standard-basic" label="Subject" />
                    <TextField id="standard-basic" label="Message" />
                    <SubmitButton />
                </form>
            </div>
        </div>
    )
}

export default Contact;
