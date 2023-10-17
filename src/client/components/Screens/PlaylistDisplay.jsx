import React from 'react'
import "../../componentStyles/UserPlaylistsPage.css";
import SongCard from '../Cards/SongCard';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import leftNote from "../../assets/music-left.png";
import rightNote from "../../assets/music-right.png";
const PlaylistDisplay = () => {
  const songData = [
    {id:1,  title: "betty", artist: "yungGravy"}
  ]
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const songsPerPage = 4;

  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSong = results.slice(indexOfFirstSong, indexOfLastSong);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  let buttonDisplay = Array.from(Array(Math.ceil(results.length/ songsPerPage)).keys()).map((num)=>{
    return <button onClick={()=> handlePageChange(num +1)}> {num + 1} </ button>
  })

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
          {currentSong.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
        <div className="musicnotes">
          <img src={rightNote} />
        </div>
      </div>
      <footer className="footer">
      <div className="pagination">
            {buttonDisplay}
          </div>
      </footer>
    </div>
  </>
  )
}

export default PlaylistDisplay
