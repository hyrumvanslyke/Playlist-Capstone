import React from "react";
import logo from "../assets/noBackLogo.png";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../state/AuthContext";
import { useContext, useState } from "react";
import "../componentStyles/Header.css";
const Header = () => {
  const dispatch = useContext(AuthContext)
  const logout = () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
  };
  const location = useLocation();

  return (

    <header>
      {location.pathname !== "/UserPlaylists/:UserId" && <img src={logo} />}
      {location.pathname === "/" && null}
      {location.pathname === "/home" && (
        <>

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
            <div>PLAYLIST NAME</div>
            <img src={logo} />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
