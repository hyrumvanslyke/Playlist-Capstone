import React from "react";
import logo from "../assets/noBackLogo.png";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../state/AuthContext";
import { useContext } from "react";
import "../componentStyles/Header.css";
import NewPlaylist from "./Playlists/NewPlaylist";
const Header = () => {
  const { dispatch } = useContext(AuthContext);
  const { state } = useContext(AuthContext);
  const logout = () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
  };
  const location = useLocation();

  return (
    <header>
     <img src={logo} />
      {location.pathname === "/" && null}
      {location.pathname === "/home" && (
        <>
          <div></div>
          <div className="nav-buttons">
            <Link to="/UserPlaylists/:UserId" className="nav-button">
              My Playlists
            </Link>
            <button onClick={logout}>Logout</button>
          </div>
          <div></div>
        </>
      )}
      {location.pathname === "/UserPlaylists/:UserId" && (
        <>
          <div></div>
          <div className="userplaylist">
            <div className="Nectar-large">{state.username}'s Playlists</div>
            <NewPlaylist />
          </div>
          <div></div>
        </>
      )}
      {location.pathname.includes("/Playlist") && (
        <>
          <div></div>
          <div className="userplaylist">        
            <div className="Nectar-large">{state.currentPlaylist}</div>
          </div>
          <div></div>
        </>
      )}
    </header>
  );
};

export default Header;
