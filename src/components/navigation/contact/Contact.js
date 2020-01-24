import React, { useState, useEffect } from "react";
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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const classes = useStyles();

    const onInputChange = (e) => {
      console.log(e.target.value)
    }

    const onFormSubmit = (e) => {
      e.preventDefault();
      console.log({name});
      console.log({email});
      console.log({subject});
      console.log({message})
    }

    return(
        <div className="contact">
            <div className="contact-content">
                <h2>Contact Me</h2>
                <form onSubmit={onFormSubmit} className={classes.root} autoComplete="off">
                    <TextField
                      required 
                      name="name"
                      type="text"
                      onChange={e => setName({name: e.target.value})} 
                      label="Full Name" 
                    />
                    <TextField 
                      required
                      name="email"
                      type="text"
                      onChange={e => setEmail({email: e.target.value})}
                      label="Email Address" 
                    />
                    <TextField 
                      required
                      name="subject"
                      type="text"
                      onChange={e => setSubject({subject: e.target.value})}
                      label="Subject" 
                    />
                    <TextField  
                      required
                      name="message"
                      type="text"
                      onChange={e => setMessage({message: e.target.value})}
                      label="Message" />
                    <SubmitButton />
                </form>
            </div>
        </div>
    )
}

export default Contact;
