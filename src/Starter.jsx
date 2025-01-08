import React from "react"
import { Link } from "react-router-dom"

function Starter() {
  return (
    <div className='starter'>
      <h2>QuizWhiz</h2>
      <div className='starter__img'>
        <img src='./img/treasure.png' alt='treasure with gold' />
      </div>
      <div className='starter--btn'>
        <Link to='/categories'>
          <h3>Press to Play</h3>
        </Link>
      </div>
    </div>
  )
}

export default Starter
