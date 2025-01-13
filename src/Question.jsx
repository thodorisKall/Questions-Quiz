import React from "react"
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function Question() {
  const location = useLocation()
  const navigate = useNavigate()
  const apiUrl = location.state?.apiUrl
  const categoryName = location.state?.categoryName
  const [questionsUrl, setQuestionsUrl] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isCorrect, setIsCorrect] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [shuffleAsnwers, setShuffleAsnwers] = useState([])
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false)

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
      setCorrectAnswer(questionsUrl[currentIndex].correct_answer)
    }
  }, [questionsUrl, currentIndex])

  if (questionsUrl.length === 0) {
    return (
      <div className='loader__wrap'>
        <div className='loader'></div>
      </div>
    )
  }

  const handleNext = () => {
    if (currentIndex < questionsUrl.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setIsCorrect(null)
      setSelectedAnswer("")
    } else if (currentIndex === questionsUrl.length - 1) {
      navigate("/results", {
        state: { correctAnswers, wrongAnswers, categoryName },
      })
    }
  }

  const handlePrevious = () => {
    if (currentIndex >= 0) {
      setCurrentIndex(currentIndex - 1)
      setIsCorrect(null)
      setSelectedAnswer("")
    }
  }

  const handleAnswer = (event) => {
    const answer = event.target.textContent
    setSelectedAnswer(answer)

    if (answer === questionsUrl[currentIndex].correct_answer) {
      setIsCorrect(true)
      setCorrectAnswers(correctAnswers + 1)
    } else {
      setIsCorrect(false)
      setWrongAnswers(wrongAnswers + 1)
      setShowCorrectAnswer(false)
    }

    setTimeout(() => {
      setShowCorrectAnswer(true)
    }, 500)
  }

  function decodeHtmlEntities(text) {
    const txt = document.createElement("textarea")
    txt.innerHTML = text
    return txt.value
  }

  return (
    <div className='questions'>
      <h3 className={`${categoryName} questions__category`}>
        {/* Category: {categoryName} */}
      </h3>

      <div className='questions__wrap'>
        <div className='questions__text'>
          <h5>Question {currentIndex + 1} out of 10</h5>
          <h2>
            {`${decodeHtmlEntities(questionsUrl[currentIndex].question)}`}
          </h2>
        </div>

        <div className='questions__btns'>
          {shuffleAsnwers.map((answer) => {
            return (
              <div key={answer} className='questions__answers'>
                <button
                  className={
                    isCorrect === null
                      ? "answer--btn"
                      : answer === correctAnswer && showCorrectAnswer
                      ? "correct--btn"
                      : selectedAnswer === answer
                      ? "wrong--btn"
                      : "answer--btn"
                  }
                  onClick={handleAnswer}
                  disabled={isCorrect !== null}
                >
                  <p>{decodeHtmlEntities(answer)}</p>
                </button>
              </div>
            )
          })}
        </div>
      </div>

      <div className='questions__navigation'>
        <button onClick={() => handlePrevious()} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={() => handleNext()} disabled={isCorrect === null}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Question
