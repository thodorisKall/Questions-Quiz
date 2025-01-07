import "./App.css"
import "./global.css"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Categories from "./Categories"
import Starter from "./Starter"
import Question from "./Question"
import Nav from "./Nav"
import Results from "./Results"
import Footer from "./Footer"

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Starter />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/question' element={<Question />} />
          <Route path='/results' element={<Results />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
