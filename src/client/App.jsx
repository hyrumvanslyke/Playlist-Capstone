import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import AuthScreen from "./components/AuthScreen";
import HomeScreen from "./components/HomeScreen";
import UserPlaylistsPage from "./components/UserPlaylistsPage";
import PlaylistDisplay from "./components/PlaylistDisplay";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import AuthContext from "./state/AuthContext";

function App() {
  const { state } = useContext(AuthContext);
 
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route
          path="/"
          element={!state.token ? <AuthScreen /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={state.token ? <HomeScreen /> : <Navigate to="/" />}
        />
        <Route
          path="/UserPlaylists/:UserId"
          element={state.token ? <UserPlaylistsPage /> : <Navigate to="/" />}
        />
        <Route
          path="/Playlist/:PlaylistId"
          element={state.token ? <PlaylistDisplay /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
