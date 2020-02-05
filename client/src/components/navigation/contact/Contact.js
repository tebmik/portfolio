import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('')

    const onNameChange = (e) => {
      setName(e.target.value);
    }
    const onEmailChange = (e) => {
      setEmail(e.target.value);
    }
    const onSubjectChange = e => {
      setSubject(e.target.value);
    }
    const onMessageChange = e => {
      setMessage(e.target.value)
    }

    const onFormSubmit = async (e) => {
      e.preventDefault();
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
     
      const form = await axios.post("/api/form", {
        name,
        email,
        subject,
        message
      })
      
    }
    
    

    return(
        <div className="contact">
            <div className="contact-content">
                <h2>Contact Me</h2>
                <form
                  id="contact-form"
                  onSubmit={onFormSubmit}
                  className={classes.root} 
                  autoComplete="off">
                    <TextField
                      onChange={onNameChange}
                      value={name}
                      required 
                      name="name"
                      type="text"
                      label="Full Name"
                      id="name" 
                    />
                    <TextField 
                      onChange={onEmailChange}
                      value={email}
                      required
                      name="email"
                      type="text"
                      label="Email Address"
                      id="email" 
                    />
                    <TextField 
                      onChange={onSubjectChange}
                      value={subject}
                      required
                      name="subject"
                      type="text"
                      label="Subject" 
                      id="subject"
                    />
                    <TextField
                      onChange={onMessageChange}
                      value={message}  
                      required
                      name="message"
                      type="text"
                      label="Message"
                      id="message" 
                    />
                    <SubmitButton />
                </form>
            </div>
        </div>
    )
}

export default Contact;
