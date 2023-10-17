import React from "react";
import leftNote from "../../assets/music-left.png";
import rightNote from "../../assets/music-right.png";
import SongCard from "../Cards/SongCard";
import { useState } from "react";
import SearchBar from "../SearchBar";
import axios from "axios";
import { shazamKey } from "../../../../Config";
const HomeScreen = () => {
  const [results, setResults] = useState([]);

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

  const [currentPage, setCurrentPage] = useState(1);
  const songsPerPage = 4;

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
          <ul>
            {currentSong.map((result) => (
              <SongCard song={result} key={result.key}>
                {result.heading.title}
              </SongCard>
            ))}
          </ul>
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
