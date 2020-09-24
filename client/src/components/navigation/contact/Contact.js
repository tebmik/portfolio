import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import SubmitButton from "../../landingPage/buttons/SubmitButton";
import 'firebase/database';
import firebase from 'firebase';

import {
  FUNC_URL,
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGE_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID} from "./config/keys";
// import SuccessMessage from "./SuccessMessage";

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
  const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGE_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
  };
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  
  const classes = useStyles();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('Contact Me')

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
      

      const data = { 
        name, 
        email, 
        subject, 
        message 
      };
      // console.log(data);
      await axios.post(FUNC_URL, data)
        .then(res => {
          if(firebase) {
            return firebase
              .database()
              .ref('messages')
              .push(data)
          };
          if(res) {
            console.log(res);
          }
        })
        .catch(error => {
          console.log(error)
        });
        setTimeout(function(){
          setTitle(title)
        }, 5000);
    };
    return(
        <div className="contact">
            <div className="contact-content">
                <h2 
                  className="animated bounceInLeft faster" 
                  style={{textAlign:"center"}}>{title}</h2>
                <form
                  id="contactForm"
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
                      type="email"
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
                      rows="4" 
                      multiline
                    />
                    <SubmitButton />
                </form>
            </div>   
        </div>
    )
};
export default Contact;