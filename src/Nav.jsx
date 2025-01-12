import React from "react"
import { Link } from "react-router-dom"
import { HiBars3 } from "react-icons/hi2"

function Nav() {
  return (
    <nav>
      <div className='nav--btn'>
        <Link to='/'>Home</Link>
        <HiBars3 />
      </div>
    </nav>
  )
}

export default Nav
