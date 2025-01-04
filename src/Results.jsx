import React from "react"
import { useLocation } from "react-router-dom"

function Results() {
  const location = useLocation()
  const { correctAnswers, wrongAnswers } = location.state || {}
  return (
    <div>
      Results of Quiz
      <h2>Corrected :{correctAnswers}</h2>
      <h2>Wrong: {wrongAnswers}</h2>
    </div>
  )
}

export default Results
