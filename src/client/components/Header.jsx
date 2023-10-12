import React from 'react'
import logo from '../assets/noBackLogo.png'
import { Link, useLocation } from 'react-router-dom'
import '../componentStyles/Header.css'
const Header = () => {
    const location = useLocation()
  return (
    <header>
        {location.pathname !== '/UserPlaylists/:UserId' && <img src={logo}/>}
        {location.pathname === '/' && null}
        {location.pathname === '/home' && (
            <>
          <div className="search-bar-container">
            <input type="text" placeholder="🎧 Search for songs to add 🎧" />
          </div>
        
         <div className="nav-buttons">
          <Link to="/UserPlaylists/:UserId" className="nav-button">
            My Playlists
          </Link>
          <Link to="/" className="nav-button">
            Logout
          </Link>
        </div>
        </>
        )}
        {location.pathname === '/UserPlaylists/:UserId' && (
            <>
            <div></div>
            <div className='userplaylist'>
            <img src={logo}/> 
          <div className="search-bar-container">
            <input type="text" placeholder="🎵 Search your playlists 🎵" />
          </div>
          <img src={logo}/>
          </div>
        </>
        )}
    </header>
  )
}

export default Header
