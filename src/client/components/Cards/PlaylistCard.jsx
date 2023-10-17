import React from "react";
import "../../componentStyles/PlaylistCard.css";
import { useNavigate } from "react-router-dom";
import NewPlaylist from "../Playlists/NewPlaylist";
const PlaylistCard = ({ playlist, onClick }) => {
  const { name, img, createdAt } = playlist;
  const navigate = useNavigate()
  const toPlaylist = ()=>{
    navigate("/Playlist/:PlaylistId")
  }
  const date = new Date(createdAt).toLocaleString().split(',')[0]

  return (
    <div onClick={toPlaylist} className="playlist-card">
      <img src={img} alt={`${name} Playlist`} className="playlist-image" />
      <div className="playlist-info">
        <h3>{name}</h3>
        <p>Date Created: {date}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
