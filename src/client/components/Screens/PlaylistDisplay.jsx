import React from "react";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import leftNote from "../../assets/music-left.png";
import rightNote from "../../assets/music-right.png";
import AuthContext from "../../state/AuthContext";
import axios from "axios";
import SongDisplayCard from "../Cards/SongDisplayCard";
const PlaylistDisplay = () => {
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const songsPerPage = 4;
  const [loading, setLoading] = useState(true);

  const [playListData, setPlaylistData] = useState({});

  const { state, dispatch } = useContext(AuthContext);
  const { PlaylistId } = useParams();
  useEffect(() => {
    axios
      .get(`/api/getPlaylist/${PlaylistId}`)

      .then((res) => {
        dispatch({ type: "CHANGE PLAYLIST", payload: res.data.name });
        setPlaylistData(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => console.error("Error fetching playlist data:", err));
  }, [PlaylistId]);

  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSong = results.slice(indexOfFirstSong, indexOfLastSong);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  let buttonDisplay = Array.from(
    Array(Math.ceil(results.length / songsPerPage)).keys()
  ).map((num) => {
    return (
      <button onClick={() => handlePageChange(num + 1)}> {num + 1} </button>
    );
  });
  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      <div className="playlists-container">
        <div className="page-div">
          <div className="musicnotes">
            <img src={leftNote} />
          </div>
          <div className="song-container">
            <div className="songycard">
            {playListData.songs.map((song) => (
              <SongDisplayCard key={song.id} song={song} />
            ))}
            </div>
          </div>
          <div className="musicnotes">
            <img src={rightNote} />
          </div>
        </div>
        <footer className="footer">
          <div className="pagination">{buttonDisplay}</div>
        </footer>
      </div>
    </>
  );
};

export default PlaylistDisplay;
