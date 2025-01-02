import React from "react"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

function Question() {
  const location = useLocation()
  const apiUrl = location.state?.apiUrl
  const [questionsUrl, setQuestionsUrl] = useState([])

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

  return (
    <div>
      <h3>Question</h3>
      <div>
        {questionsUrl.map((data) => {
          const answers = [...data.incorrect_answers, data.correct_answer]
          const shuffleAsnwers = answers.sort(() => Math.random() - 0.5)
          return (
            <div>
              <h4>{data.question}</h4>
              <h5>Answers</h5>
              <div>
                {shuffleAsnwers.map((answer) => {
                  return (
                    <div>
                      <button>{answer}</button>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      {console.log(questionsUrl)}
    </div>
  )
}

export default Question
