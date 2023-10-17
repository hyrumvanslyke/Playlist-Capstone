import React from "react";
import logo from "../assets/noBackLogo.png";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../state/AuthContext";
import { useContext } from "react";
import "../componentStyles/Header.css";
import NewPlaylist from "./Playlists/NewPlaylist";
const Header = () => {
  const { dispatch } = useContext(AuthContext);
  const {state} = useContext(AuthContext)
  const logout = () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
  };
  const location = useLocation();

  return (
    <header >
      {location.pathname !== "/UserPlaylists/:UserId"  && <img src={logo} />}
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
            <img src={logo} />
            <div>{state.username} PLAYLISTS</div>
            <img src={logo} />
            <NewPlaylist />
          </div>
          <div></div>
        </>
      )}
      {location.pathname === "/Playlist/:PlaylistId" && (
        <>
        <div></div>
          <div className="userplaylist">
            <img src={logo} />
            <div>PLAYLIST NAME</div>
            <img src={logo} />
          </div>
          <div></div>
        </>
      )}
    </header>
  );
};

export default Header;
