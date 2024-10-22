import React from "react"
import { Link } from "react-router-dom"

function Starter() {
  return (
    <div>
      <Link to='/categories'>
        <h2>Press to Play</h2>
      </Link>
    </div>
  )
}

export default Starter
