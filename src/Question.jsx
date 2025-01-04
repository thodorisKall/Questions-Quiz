import React from "react"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

function Question() {
  const location = useLocation()
  const apiUrl = location.state?.apiUrl
  const [questionsUrl, setQuestionsUrl] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isCorrect, setIsCorrect] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [shuffleAsnwers, setShuffleAsnwers] = useState([])
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)

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

  useEffect(() => {
    if (questionsUrl.length > 0) {
      const answers = [
        ...questionsUrl[currentIndex].incorrect_answers,
        questionsUrl[currentIndex].correct_answer,
      ]
      setShuffleAsnwers(answers.sort(() => Math.random() - 0.5))
    }
  }, [questionsUrl, currentIndex])

  if (questionsUrl.length === 0) {
    return <div>Loading...</div>
  }

  const handleNext = () => {
    if (currentIndex < questionsUrl.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setIsCorrect(null)
    }
  }

  const handlePrevious = () => {
    if (currentIndex >= 0) {
      setCurrentIndex(currentIndex - 1)
      setIsCorrect(null)
    }
  }

  const handleAnswer = (event) => {
    const answer = event.target.textContent
    setSelectedAnswer(answer)
    console.log(answer)
    if (answer === questionsUrl[currentIndex].correct_answer) {
      setIsCorrect(true)
      setCorrectAnswers(correctAnswers + 1)
      console.log("Correct answer!!!", correctAnswers)
    } else {
      setIsCorrect(false)
      setWrongAnswers(wrongAnswers + 1)
      console.log("Wrong answer!!! Sorry.........", wrongAnswers)
    }
  }

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
                  <button
                    className={
                      selectedAnswer === answer
                        ? isCorrect === null
                          ? "answer--btn"
                          : isCorrect
                          ? "correct--btn"
                          : "wrong--btn"
                        : "answer--btn"
                    }
                    onClick={handleAnswer}
                  >
                    {answer}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => handlePrevious()} disabled={currentIndex === 0}>
          Previous
        </button>
        <button
          onClick={() => handleNext()}
          disabled={currentIndex === questionsUrl.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Question
