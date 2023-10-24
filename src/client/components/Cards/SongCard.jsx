import React, { useState } from "react";
import "../../componentStyles/SongCard.css";
import axios from "axios";
import Swal from "sweetalert2";
const SongCard = ({ song, onAddToPlaylist, playlists }) => {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState("");

  const handleAddToPlaylist = () => {
    if (selectedPlaylistId) {
      onAddToPlaylist(id, parseInt(selectedPlaylistId, 10));
    }
  };
  const addSongs = () => {
    let body = {
      playlistId: selectedPlaylistId,
      ShazamId: song.key,
      title: song.heading.title,
      img: song.images.default,
      artist: song.heading.subtitle,
    };
    console.log(body);
    axios
      .post("/api/addToPlaylist", body)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "You did it!",
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
        <h3 className="Nectar">{song.heading.title}</h3>
        <p className="Tech">{song.heading.subtitle}</p>
        <div className="add-to-playlist">
          <select onChange={(e) => setSelectedPlaylistId(e.target.value)}>
            <option value="" disabled selected>
              Select Playlist
            </option>
            {playlists.map((playlist) => (
              <option key={playlist.id} value={playlist.id}>
                {playlist.name}
              </option>
            ))}
          </select>
          <button onClick={addSongs}>Add to Playlist</button>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
