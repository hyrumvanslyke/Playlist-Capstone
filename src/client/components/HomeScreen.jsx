import React from 'react'
import leftNote from '../assets/music-left.png'
import rightNote from '../assets/music-right.png'
const HomeScreen = () => {
  return (
    <>
    <div className='page-div'>
     <div className='musicnotes'>
    <img src={leftNote} />
    </div>
    <div className="song-container">

    </div>
    <div className='musicnotes'>
    <img src={rightNote} />
    </div>
    </div>
    </>
  )
}

export default HomeScreen
