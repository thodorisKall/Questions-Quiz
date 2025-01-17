import "./App.css"
import "./global.css"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Categories from "./Categories"
import Starter from "./Starter"
import Question from "./Question"
import Nav from "./Nav"
import Results from "./Results"
import Footer from "./Footer"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className='App'>
      <Analytics />
      <Router>
        <div className='app__main'>
          <Nav />
          <div className='app__content'>
            <Routes>
              <Route path='/' element={<Starter />} />
              <Route path='/categories' element={<Categories />} />
              <Route path='/question' element={<Question />} />
              <Route path='/results' element={<Results />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
