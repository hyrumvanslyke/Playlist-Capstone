import { Route,  Routes } from "react-router-dom";
import "./App.css";
import AuthScreen from "./components/AuthScreen";
import HomeScreen from "./components/HomeScreen";
import UserPlaylistsPage from "./components/UserPlaylistsPage";
import PlaylistDisplay from "./components/PlaylistDisplay";
import Header from "./components/Header";
function App() {


  return (
    <div className="App">
      <Header />
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
