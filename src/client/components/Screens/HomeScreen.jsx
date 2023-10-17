import React from "react";
import leftNote from "../../assets/music-left.png";
import rightNote from "../../assets/music-right.png";
import SongCard from "../Cards/SongCard";
import { useState } from "react";
import SearchBar from "../SearchBar";
import axios from "axios";
import { shazamKey } from "../../../../Config";
const HomeScreen = () => {
  const songData = [
    { id: 1, title: "redrum", artist: "your mom", imageUrl: "nothanks" },
    { id: 2, title: "345", artist: "your mom", imageUrl: "nothanks" },
    { id: 3, title: "678", artist: "your mom", imageUrl: "nothanks" },
    { id: 4, title: "145", artist: "your mom", imageUrl: "nothanks" },
    { id: 5, title: "hello", artist: "your mom", imageUrl: "nothanks" },
    { id: 6, title: "killing", artist: "your mom", imageUrl: "nothanks" },
    { id: 7, title: "goodbye", artist: "your mom", imageUrl: "nothanks" },
    { id: 8, title: "forever", artist: "your mom", imageUrl: "nothanks" },
    { id: 9, title: "hehe", artist: "your mom", imageUrl: "nothanks" },
    { id: 10, title: "haha", artist: "your mom", imageUrl: "nothanks" },
  ];
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
  let buttonDisplay = Array.from(Array(Math.ceil(results.length/ songsPerPage)).keys()).map((num)=>{
    return <button onClick={()=> handlePageChange(num +1)}> {num + 1} </ button>
  })
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
          <div className="pagination">
            {buttonDisplay}
          </div>
        </div>
        <div className="musicnotes">
          <img src={rightNote} />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
