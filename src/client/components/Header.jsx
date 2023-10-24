import React from "react";
import logo from "../assets/noBackLogo.png";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../state/AuthContext";
import { useContext, useState } from "react";
import "../componentStyles/Header.css";
import NewPlaylist from "./Playlists/NewPlaylist";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";
const Header = () => {
  const { state } = useContext(AuthContext);
  const location = useLocation();
  const [hidden, setHidden] = useState(true);
  const toggle = () => {
    setHidden(!hidden);
  };
  return (
    <header>
      <img src={logo} />
      {location.pathname === "/" && null}
      {location.pathname === "/home" && (
        <>
          <div className="Nectar-large">Playlist Unlocked</div>
          <Menu hidden={hidden} toggle={toggle} />
          <div className="row">
            <GiHamburgerMenu style={{ zIndex: 3 }} size={40} onClick={toggle} />
          </div>
        </>
      )}
      {location.pathname === "/UserPlaylists/:UserId" && (
        <>
          <div className="userplaylist">
            <div className="Nectar-Mid">{state.username}'s Playlists</div>

            <Menu hidden={hidden} toggle={toggle} />
          </div>
          <div className="row">
            <NewPlaylist />
            <GiHamburgerMenu style={{ zIndex: 3 }} size={40} onClick={toggle} />
          </div>
        </>
      )}
      {location.pathname.includes("/Playlist") && (
        <>
          <div className="userplaylist">
            <div className="Nectar-Mid">{state.currentPlaylist}</div>
            <Menu hidden={hidden} toggle={toggle} />
          </div>
          <div className="row">
            <GiHamburgerMenu style={{ zIndex: 3 }} size={40} onClick={toggle} />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
