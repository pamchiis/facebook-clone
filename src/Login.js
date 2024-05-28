import React from 'react';
import './Login.css';
import { Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import { auth, provider } from './firebase';
import { signInWithPopup } from "firebase/auth";
import { actionTypes } from './Reducer';
import { useStateValue } from "./StateProvider";


function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        });
        console.log(result);
    })
    .catch((error) => alert(error.message));
  };
  return <div className="login">
    <div className="login__logo">
        <FacebookIcon />
        <h1>Fakebook</h1>
    </div>
    <Button className="login__button" type="submit" onClick={signIn}>
        Sign In
    </Button>
  </div>;
}

export default Login