import React from "react"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
      <div className='nav--btn'>
        <Link to='/'>Home</Link>
      </div>
    </nav>
  )
}

export default Nav
