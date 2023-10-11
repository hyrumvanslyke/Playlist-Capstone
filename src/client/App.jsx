import { Route,  Routes } from "react-router-dom";
import "./App.css";
import AuthScreen from "./components/AuthScreen";
import HomeScreen from "./components/HomeScreen";
import UserPlaylistsPage from "./components/UserPlaylistsPage";
import PlaylistDisplay from "./components/PlaylistDisplay";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import { useState } from "react";
function App() {

  const searchShazam = async (query) => {
    try {
      const response = await axios
      .get(
        `https://shazam.p.rapidapi.com/search?term=${query}`,
        {
          headers: {
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
            'X-RapidAPI-Key': '50fa08adb9mshceb23de2d376347p19a954jsnadd1ab3fe69f', 
          },
        }
      );

      setResults(response.data.tracks.hits);
    } catch (error) {
      console.error('Error searching Shazam API:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={searchShazam} />
      <ul>
        {results.map((result) => (
          <li key={result.track.key}>{result.track.title}</li>
        ))}
      </ul>
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/UserPlaylists/:UserId" element={<UserPlaylistsPage />} />
        <Route path="/Playlist/:PlaylistId" element={<PlaylistDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
