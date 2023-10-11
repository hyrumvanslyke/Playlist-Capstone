
import React, { useState, useRef } from 'react';
import '../componentStyles/AuthScreen.css'; 
import logo from '../assets/noBackLogo.png'
const AuthScreen = () => {
  const usernameRef = useRef()
  const passRef = useRef()
let register = ()=>{
    let newUser = {
        username: usernameRef.current.value,
        password: passRef.current.value
    }
    axios.post('/api/register', newUser){

    }
}
let login = ()=>{
    let newUser = {
        username: usernameRef.current.value,
        password: passRef.current.value
    }
    axios.post('/api/register', newUser){
        
    }
}


  return (
    <div className="auth-container">
      <img className='logo' src={logo}/>

      <div className="form-container">
        <input
          type="text"
          placeholder="Username"
          ref={usernameRef}
        />
        <input
          type="password"
          placeholder="Password"
          ref={passRef}
        />

        <div className="button-container">
          <button onClick={handleLogin}>Login</button>
          <button onClick={register}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;

