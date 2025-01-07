import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import winSoundFile from "./Audio/win.wav"
import lostSoundFile from "./Audio/loose.mp3"
import drawSoundFile from "./Audio/draw.wav"

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
    <div>
      <h2>
        {wrongAnswers > correctAnswers
          ? "You Lost"
          : wrongAnswers < correctAnswers
          ? "You Win!!!"
          : "Draw!"}
      </h2>
      <h3>Category: {categoryName}</h3>
      <h3>Corrected : {correctAnswers}</h3>
      <h3>Wrong : {wrongAnswers}</h3>
      <Link to='/categories'>Play Again</Link>
    </div>
  )
}

export default Results
