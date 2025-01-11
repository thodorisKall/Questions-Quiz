import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import winSoundFile from "./Audio/win.wav"
import lostSoundFile from "./Audio/loose.mp3"
import drawSoundFile from "./Audio/draw.wav"
import { MdOutlineReplay } from "react-icons/md"

function Results() {
  const location = useLocation()
  const { correctAnswers, wrongAnswers, categoryName } = location.state || {}

  const playSound = () => {
    const winSound = new Audio(winSoundFile)
    const lostSound = new Audio(lostSoundFile)
    const drawSound = new Audio(drawSoundFile)

    if (correctAnswers < wrongAnswers) {
      lostSound.play()
    } else if (correctAnswers > wrongAnswers) {
      winSound.play()
    } else {
      drawSound.play()
    }
  }

  useEffect(() => {
    playSound()
  }, [])

  return (
    <div className='results'>
      <h2
        className={
          wrongAnswers > correctAnswers
            ? "lost"
            : wrongAnswers < correctAnswers
            ? "win"
            : "draw"
        }
      >
        {wrongAnswers > correctAnswers
          ? "You Lost"
          : wrongAnswers < correctAnswers
          ? "You Win!!!"
          : "Draw!"}
      </h2>
      <div className='results__text'>
        <h4>Category : {categoryName}</h4>
        <h3>Corrected : {correctAnswers}</h3>
        <h3>Wrong : {wrongAnswers}</h3>
      </div>

      <Link to='/categories'>
        <MdOutlineReplay id='replay--icon' />
        Play Again
      </Link>
    </div>
  )
}

export default Results
