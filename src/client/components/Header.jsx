import React from 'react'
// import logo from '../assets/xyz'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
        {/* <img src={logo}/> */}
        <nav>
            <Link to='/'>Login</Link>
            <Link to='/home'>Home</Link>
            <Link to='/UserPlaylists/:1'>User Playlists</Link>
            <Link to='/Playlist/:2'>Playlist</Link>
        </nav>
    </header>
  )
}

export default Header
