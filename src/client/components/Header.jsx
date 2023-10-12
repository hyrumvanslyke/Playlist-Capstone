import React from "react";
import logo from "../assets/noBackLogo.png";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../state/AuthContext";
import { useContext } from "react";
import "../componentStyles/Header.css";
const Header = () => {

  const logout= () =>{
    localStorage.clear()
    dispatch({type:"LOGOUT"})
  }
  const location = useLocation();
  return (
    <header>
      {location.pathname !== "/UserPlaylists/:UserId" && <img src={logo} />}
      {location.pathname === "/" && null}
      {location.pathname === "/home" && (
        <>
          <div className="search-bar-container">
            <input type="text" placeholder="🎧 Search for songs to add 🎧" />
          </div>

          <div className="nav-buttons">
            <Link to="/UserPlaylists/:UserId" className="nav-button">
              My Playlists
            </Link>
          <button onClick={logout}>Logout</button>
          </div>
        </>
      )}
      {location.pathname === "/UserPlaylists/:UserId" && (
        <>
          <div></div>
          <div className="userplaylist">
            <img src={logo} />
            <div className="search-bar-container">
              <input type="text" placeholder="🎵 Search your playlists 🎵" />
            </div>
            <img src={logo} />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
