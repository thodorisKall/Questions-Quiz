import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
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
      Results of Quiz
      <h3>Category: {categoryName}</h3>
      <h2>Corrected :{correctAnswers}</h2>
      <h2>Wrong: {wrongAnswers}</h2>
    </div>
  )
}

export default Results
