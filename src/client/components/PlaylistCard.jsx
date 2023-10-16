import React from "react";
import "../componentStyles/PlaylistCard.css";
import { useNavigate } from "react-router-dom";
const PlaylistCard = ({ playlist, onClick }) => {
  const { title, img, date } = playlist;
  const navigate = useNavigate()
  const toPlaylist = ()=>{
    navigate("/Playlist/:PlaylistId")
  }

  return (
    <div onClick={toPlaylist} className="playlist-card">
      <img src={img} alt={`${title} Playlist`} className="playlist-image" />
      <div className="playlist-info">
        <h3>{title}</h3>
        <p>Date Created: {date}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
