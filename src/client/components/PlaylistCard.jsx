import React from "react";
import "../componentStyles/PlaylistCard.css";

const PlaylistCard = ({ playlist }) => {
  const { title, img, date } = playlist;

  return (
    <div className="playlist-card">
      <img src={img} alt={`${title} Playlist`} className="playlist-image" />
      <div className="playlist-info">
        <h3>{title}</h3>
        <p>Date Created: {date}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
