import React from "react"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

function Question() {
  const location = useLocation()
  const apiUrl = location.state?.apiUrl
  const [questionsUrl, setQuestionsUrl] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.response_code === 0) {
          setQuestionsUrl(data.results)
        } else {
          console.error("Error: Invalid response code", data.response_code)
        }
      })
      .catch((err) => console.error(err))
  }, [])

  if (questionsUrl.length === 0) {
    return <div>Loading...</div>
  }

  const handleNext = () => {
    if (currentIndex < questionsUrl.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentIndex >= 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleAnswer = () => {}

  const answers = [
    ...questionsUrl[currentIndex].incorrect_answers,
    questionsUrl[currentIndex].correct_answer,
  ]
  const shuffleAsnwers = answers.sort(() => Math.random() - 0.5)

  return (
    <div>
      <h3>Question</h3>

      <div>
        <div>
          <h4>{questionsUrl[currentIndex].question}</h4>
          <h5>Answers</h5>
          <div>
            {shuffleAsnwers.map((answer) => {
              return (
                <div key={answer}>
                  <button>{answer}</button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleNext()}
          disabled={currentIndex === questionsUrl.length - 1}
        >
          Next
        </button>
        <button onClick={() => handlePrevious()} disabled={currentIndex === 0}>
          Previous
        </button>
      </div>
    </div>
  )
}

export default Question
