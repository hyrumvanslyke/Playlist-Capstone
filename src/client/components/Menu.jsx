import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AuthContext from '../state/AuthContext'
import { useContext } from 'react'
const Menu = ({hidden, toggleMenu}) => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear();
        dispatch({ type: "LOGOUT" });
      };
      const toHome = () => {
        navigate(`/home`);
      };
      const toPlaylists = () =>{
        navigate('/UserPlaylists/:UserId')
      }
  return (
    
    <div className='Nav-menu' id={hidden ? "hidden" : null}>
     <button onClick={toHome}>Home</button>
      <button onClick={toPlaylists}>Playlists</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Menu
