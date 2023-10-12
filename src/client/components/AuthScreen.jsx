
import React, {  useRef, useContext } from 'react';
import '../componentStyles/AuthScreen.css'; 
import logo from '../assets/noBackLogo.png'
import leftNote from '../assets/music-left.png'
import rightNote from '../assets/music-right.png'
import axios from 'axios';
import AuthContext from '../state/AuthContext';
const AuthScreen = () => {
  const usernameRef = useRef()
  const passRef = useRef()
  const {dispatch} = useContext(AuthContext)
let register = ()=>{
    let newUser = {
        username: usernameRef.current.value,
        password: passRef.current.value
    }
    axios.post('/api/register', newUser)
    .then((res)=>{
      dispatch({type: 'LOGIN', payload: res.data})
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
      dispatch({type: 'LOGIN', payload: res.data})
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    })
  }


  return (
    <>
    <div className='page-div'>
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
    </div>
    </>
  );
};

export default AuthScreen;

