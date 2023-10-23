import React from "react";
import "../../componentStyles/UserPlaylistsPage.css";
import SongCard from "../Cards/SongCard";
import { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import leftNote from "../../assets/music-left.png";
import rightNote from "../../assets/music-right.png";
import AuthContext from "../../state/AuthContext";
import axios from "axios";
import SongDisplayCard from "../Cards/SongDisplayCard";
const PlaylistDisplay = () => {
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const songsPerPage = 4;
  const [loading, setLoading] = useState(true)

  const [playListData, setPlaylistData] = useState({});

    const { state } = useContext(AuthContext);
    const {PlaylistId} = useParams()
    // const getData = () => {
    //     axios
    //       .get(`/api/getPlaylist/${playlistId}`)
    //       .then((res) => {
    //         console.log(res.data)
    //         setDetails(res.data);
    //         setSongId(res.data.song.id);
            
    //       })
    //       .catch(err=> console.error("Error fetching playlist data:", err))
    //   }
    useEffect(()=>{
      axios.get(`/api/getPlaylist/${PlaylistId}`)
      
      .then(res =>{
        setPlaylistData(res.data) 
        setLoading(false)
        console.log(res.data)
      } 
      )
      .catch(err => console.error("Error fetching playlist data:", err))
    }, [PlaylistId])

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
  if(loading){
    return <h2>Loading</h2>
  }

  return (
    <>
      <div className="playlists-container">
        <header className="header">
          <Link to="/UserPlaylists/:UserId" className="nav-button">
            🔙
          </Link>
        </header>
        <div className="page-div">
          <div className="musicnotes">
            <img src={leftNote} />
          </div>
          <div className="playlist-cards-container">
            {playListData.songs.map((song) => (
              <SongDisplayCard key={song.id} song={song} />
            ))}
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
