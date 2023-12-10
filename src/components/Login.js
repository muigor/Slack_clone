import React from 'react';
import "./Login.css";
import Button from '@mui/material/Button';
import { auth,provider } from '../firebase';
import { useStore } from 'react-redux';

import { SET_USER } from '../features/store';

function Login() {
    const store=useStore()
    const SignIn= ()=>{
        auth
        .signInWithPopup(provider)
        .then(result=>{
            store.dispatch(SET_USER({user:result.user}))
        })
        .catch((error)=>{
            alert(error.message)
        });
    }
  return (
    <div className="login">
        <div className="login__container">
            <img 
            src="/Slack.jpg"
            alt='slack'
            />
            <h1> Sign in to Slack</h1>
            <p> Igor.slack.com</p>
            <Button onClick={SignIn}>Sign in with google</Button>
        </div>
    </div>
  )
}

export default  Login;