import React, { useState, useEffect, useContext } from "react";
import "../../componentStyles/UserPlaylistsPage.css";
import { Link } from "react-router-dom";
import leftNote from "../../assets/music-left.png";
import rightNote from "../../assets/music-right.png";
import PlaylistCard from "../Cards/PlaylistCard";
import AuthContext from "../../state/AuthContext";
import axios from "axios";
const UserPlaylistsPage = () => {
  const [playlists, setPlaylists] = useState([]);
  const { state } = useContext(AuthContext);
  console.log(playlists);
  useEffect(() => {
    let id = state.id;
    axios
      .get(`/api/getPlaylists/${id}`)
      .then((res) => setPlaylists(res.data))
      .catch((err) => console.error("Error fetching playlists:", err));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const playlistsPerPage = 3;
  const indexOfLastPlaylist = currentPage * playlistsPerPage;
  const indexOfFirstPlaylist = indexOfLastPlaylist - playlistsPerPage;
  const currentPlaylists = playlists.slice(
    indexOfFirstPlaylist,
    indexOfLastPlaylist
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="playlists-container">
        <div className="page-div">
          <div className="musicnotes">
            <img src={leftNote} />
          </div>
          <div className="playlist-cards-container">
            {playlists.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
          <div className="musicnotes">
            <img src={rightNote} />
          </div>
        </div>
        <footer className="footer">
          <div className="pagination">
            {Array.from(
              { length: Math.ceil(playlists.length / playlistsPerPage) },
              (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        </footer>
      </div>
    </>
  );
};

export default UserPlaylistsPage;
