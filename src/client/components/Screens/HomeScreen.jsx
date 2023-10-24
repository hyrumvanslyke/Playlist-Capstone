import React from "react";
import leftNote from "../../assets/music-left.png";
import rightNote from "../../assets/music-right.png";
import SongCard from "../Cards/SongCard";
import { useState, useContext, useEffect } from "react";
import SearchBar from "../SearchBar";
import axios from "axios";
import { shazamKey } from "../../../../Config";
import AuthContext from "../../state/AuthContext";
import "../../componentStyles/HomeScreen.css";
const HomeScreen = () => {
  const [playlists, setPlaylists] = useState([]);
  const [results, setResults] = useState([]);
  let { state } = useContext(AuthContext);
  const searchShazam = async (query) => {
    try {
      const response = await axios.get(
        `https://shazam.p.rapidapi.com/search?term=${query}`,
        {
          headers: {
            "X-RapidAPI-Host": "shazam-core7.p.rapidapi.com",
            "X-RapidAPI-Key": shazamKey,
          },
        }
      );
      console.log(response.data);
      setResults(response.data.tracks.hits);
    } catch (error) {
      console.error("Error searching Shazam API:", error);
    }
  };
  const getData = () => {
    axios.get(`/api/getPlaylists/${state.id}`).then((res) => {
      setPlaylists(res.data);
    });
  };
  const [currentPage, setCurrentPage] = useState(1);
  const songsPerPage = 4;
  useEffect(() => {
    getData();
  }, []);
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
  return (
    <>
      <div className="page-div">
        <div className="musicnotes">
          <img src={leftNote} />
        </div>
        <div className="song-container">
          <SearchBar onSearch={searchShazam} />
          <div className="songycard">
            {currentSong.map((result) => (
              <SongCard playlists={playlists} song={result} key={result.key}>
                {result.heading.title}
              </SongCard>
            ))}
          </div>
          <div className="pagination">{buttonDisplay}</div>
        </div>
        <div className="musicnotes">
          <img src={rightNote} />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
