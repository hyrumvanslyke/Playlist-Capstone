import React, { useState } from 'react';
import '../componentStyles/UserPlaylistsPage.css'; 
import { Link } from 'react-router-dom';
import leftNote from '../assets/music-left.png'
import rightNote from '../assets/music-right.png'
import PlaylistCard from './PlaylistCard';
const UserPlaylistsPage = () => {

  const playlistData = [
    { id: 1, title: 'Songs 1', img: '🐴', date: 'jan, 4th 2012' },
    { id: 2, title: 'Songs 2', img: '🔆', date: 'jun, 7th 2019' },
    { id: 3, title: 'Songs 3', img: '🙃', date: 'feb, 14th 2002' },
    { id: 4, title: 'Songs 4', img: '😁', date: 'feb, 14th 2002' },
    { id: 5, title: 'Songs 5', img: '😂', date: 'feb, 14th 2002' },
    { id: 6, title: 'Songs 6', img: '🤣', date: 'feb, 14th 2002' },
    { id: 7, title: 'Songs 7', img: '😃', date: 'feb, 14th 2002' },
    { id: 8, title: 'Songs 8', img: '😆', date: 'feb, 14th 2002' },
    { id: 9, title: 'Songs 9', img: '😴', date: 'feb, 14th 2002' },
    { id: 10, title: 'Songs 10', img: '🤯', date: 'feb, 14th 2002' },
    { id: 11, title: 'Songs 11', img: '🤑', date: 'feb, 14th 2002' },
    { id: 12, title: 'Songs 12', img: '🤪', date: 'feb, 14th 2002' },
    { id: 13, title: 'Songs 13', img: '🤕', date: 'feb, 14th 2002' },
    { id: 14, title: 'Songs 14', img: '🤖', date: 'feb, 14th 2002' },
    { id: 15, title: 'Songs 15', img: '🤢', date: 'feb, 14th 2002' },
  ];


  const [currentPage, setCurrentPage] = useState(1);
  const playlistsPerPage = 3; 


  const indexOfLastPlaylist = currentPage * playlistsPerPage;
  const indexOfFirstPlaylist = indexOfLastPlaylist - playlistsPerPage;
  const currentPlaylists = playlistData.slice(indexOfFirstPlaylist, indexOfLastPlaylist);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const [playlists, setPlaylists] = useState([
    { id: 1, name: 'My Playlist 1', songs: [] },
    { id: 2, name: 'My Playlist 2', songs: [] },
  ]);{currentPlaylists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}

  const addSongToPlaylist = (songId, playlistId) => {
    const selectedSong = songs.find((song) => song.id === songId);
    const selectedPlaylist = playlists.find((playlist) => playlist.id === playlistId);

    setPlaylists((prevPlaylists) =>
      prevPlaylists.map((playlist) =>
        playlist.id === selectedPlaylist.id
          ? { ...playlist, songs: [...playlist.songs, selectedSong] }
          : playlist
      )
    );
    console.log(`Added "${selectedSong.title}" to "${selectedPlaylist.name}"`);
  };


  return (
    <>
    <div className="playlists-container">
      <header className="header">
      <Link to="/home" className="nav-button">
            🔙
          </Link>
      </header>
      <div className='page-div'>
     <div className='musicnotes'>
    <img src={leftNote} />
    </div>
      <div className="playlist-cards-container">
        {currentPlaylists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
      <div className='musicnotes'>
    <img src={rightNote} />
    </div>
    </div>
      <footer className="footer">
        <div className="pagination">
          {Array.from({ length: Math.ceil(playlistData.length / playlistsPerPage) }, (_, index) => (
            <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </footer>
    </div>
    </>
  );
  

};

export default UserPlaylistsPage;

