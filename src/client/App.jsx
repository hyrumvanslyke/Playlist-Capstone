import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import AuthScreen from "./components/Auth/AuthScreen";
import HomeScreen from "./components/Screens/HomeScreen";
import UserPlaylistsPage from "./components/Screens/UserPlaylistsPage";
import PlaylistDisplay from "./components/Screens/PlaylistDisplay";
import Header from "./components/Header";
import { useContext } from "react";
import AuthContext from "./state/AuthContext";

function App() {
  const { state } = useContext(AuthContext);
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Header />}

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
