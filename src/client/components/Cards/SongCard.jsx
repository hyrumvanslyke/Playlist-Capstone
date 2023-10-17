import React, { useState } from "react";
import "../../componentStyles/SongCard.css";

const SongCard = ({ song, onAddToPlaylist, playlists }) => {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState("");

  const handleAddToPlaylist = () => {
    if (selectedPlaylistId) {
      onAddToPlaylist(id, parseInt(selectedPlaylistId, 10));
    }
  };

  return (
    <div className="song-card">
      <div className="song-image-container">
        <img
          src={song.images.default}
          alt={`${song.heading.title} by ${song.artist}`}
          className="song-image"
        />
      </div>
      <div className="song-info">
        <h3>{song.heading.title}</h3>
        <p>{song.artist}</p>
        <div className="add-to-playlist">
          <select onChange={(e) => setSelectedPlaylistId(e.target.value)}>
            <option value="" disabled selected>
              Select Playlist
            </option>
            {/* {playlists.map((playlist) => (
              <option key={playlist.id} value={playlist.id}>
                {playlist.name}
              </option>
            ))} */}
          </select>
          <button onClick={handleAddToPlaylist}>Add to Playlist</button>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
