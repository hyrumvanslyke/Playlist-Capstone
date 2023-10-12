import React, { useState } from 'react';
import '../componentStyles/UserPlaylistsPage.css'; 

const UserPlaylistsPage = () => {
  // Placeholder data
  const playlistData = [
    { id: 1, title: 'Songs 1', img: '🐴', date: 'jan, 4th 2012' },
    { id: 2, title: 'Songs 2', img: '🔆', date: 'jun, 7th 2019' },
    { id: 3, title: 'Songs 3', img: '🙃', date: 'feb, 14th 2002' },
    { id: 3, title: 'Songs 3', img: '😁', date: 'feb, 14th 2002' },
    { id: 3, title: 'Songs 3', img: '😂', date: 'feb, 14th 2002' },
    { id: 3, title: 'Songs 3', img: '🤣', date: 'feb, 14th 2002' },
    { id: 3, title: 'Songs 3', img: '😃', date: 'feb, 14th 2002' },
    { id: 3, title: 'Songs 3', img: '😆', date: 'feb, 14th 2002' },
    { id: 3, title: 'Songs 3', img: '😴', date: 'feb, 14th 2002' },
    { id: 3, title: 'Songs 3', img: '🤯', date: 'feb, 14th 2002' },
    { id: 3, title: 'Songs 3', img: '🤑', date: 'feb, 14th 2002' },
    { id: 3, title: 'Songs 3', img: '🤪', date: 'feb, 14th 2002' },
    { id: 3, title: 'Songs 3', img: '🤕', date: 'feb, 14th 2002' },
    { id: 3, title: 'Songs 3', img: '🤖', date: 'feb, 14th 2002' },
    { id: 3, title: 'Songs 3', img: '🤢', date: 'feb, 14th 2002' },
  ];


  const [currentPage, setCurrentPage] = useState(1);
  const playlistsPerPage = 3; 


  const indexOfLastPlaylist = currentPage * playlistsPerPage;
  const indexOfFirstPlaylist = indexOfLastPlaylist - playlistsPerPage;
  const currentPlaylists = playlistData.slice(indexOfFirstPlaylist, indexOfLastPlaylist);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="playlists-container">
      <header className="header">
        <h1>User Playlists</h1>
      </header>

      <div className="playlist-cards-container">
        {currentPlaylists.map((playlist) => (
          <div key={playlist.id} className="playlist-card">
            <h3>{playlist.title}</h3>
            <p>{playlist.img}</p>
            <h6>{playlist.date}</h6>
          </div>
        ))}
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
  );
};

export default UserPlaylistsPage;

