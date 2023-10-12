import React from 'react'
import leftNote from '../assets/music-left.png'
import rightNote from '../assets/music-right.png'
import SongCard from './SongCard'
const HomeScreen = () => {
const songData = [
  {id:1, title: "redrum", artist: "your mom", imageUrl: 'nothanks'},
  {id:2, title: "345", artist: "your mom", imageUrl: 'nothanks'},
  {id:3, title: "678", artist: "your mom", imageUrl: 'nothanks'},
  {id:4, title: "145", artist: "your mom", imageUrl: 'nothanks'},
  {id:5, title: "hello", artist: "your mom", imageUrl: 'nothanks'},
  {id:6, title: "killing", artist: "your mom", imageUrl: 'nothanks'},
  {id:7, title: "goodbye", artist: "your mom", imageUrl: 'nothanks'},
  {id:8, title: "forever", artist: "your mom", imageUrl: 'nothanks'},
  {id:9, title: "hehe", artist: "your mom", imageUrl: 'nothanks'},
  {id:10, title: "haha", artist: "your mom", imageUrl: 'nothanks'}
]

  return (
    <>
    <div className='page-div'>
     <div className='musicnotes'>
    <img src={leftNote} />
    </div>
    <div className="song-container">
    {songData.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
    </div>
    <div className='musicnotes'>
    <img src={rightNote} />
    </div>
    </div>
    </>
  )
}

export default HomeScreen
