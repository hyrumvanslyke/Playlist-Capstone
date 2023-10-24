import React from "react";

const SongDisplayCard = ({ song }) => {
  return (
    <div className="song-card">
      <div className="song-image-container">
        <img
          src={song.img}
          alt={`${song.title} by ${song.artist}`}
          className="song-image"
        />
      </div>
      <div className="song-info">
        <h3 className="Nectar">{song.title}</h3>
        <p className="Tech">{song.artist}</p>
      </div>
    </div>
  );
};

export default SongDisplayCard;
