
import React, {  useRef } from 'react';
import '../componentStyles/AuthScreen.css'; 
import logo from '../assets/noBackLogo.png'
import leftNote from '../assets/music-left.png'
import rightNote from '../assets/music-right.png'
import axios from 'axios';
const AuthScreen = () => {
  const usernameRef = useRef()
  const passRef = useRef()
let register = ()=>{
    let newUser = {
        username: usernameRef.current.value,
        password: passRef.current.value
    }
    axios.post('/api/register', newUser)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.error(err)
    })
}
let login = () => {
    let userInfo = {
      username: usernameRef.current.value,
      password: passRef.current.value
    }
    axios.post('/api/login', userInfo)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    })
  }


  return (
    <>
     <div className='musicnotes'>
    <img src={leftNote} />
    </div>
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
          <button onClick={login}>Login</button>
          <button onClick={register}>Sign Up</button>
        </div>
      </div>
    </div>
    <div className='musicnotes'>
    <img src={rightNote} />
    </div>
    </>
  );
};

export default AuthScreen;

