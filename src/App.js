import "./App.css"
import "./global.css"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Categories from "./Categories"
import Starter from "./Starter"
import Question from "./Question"

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Starter />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/question' element={<Question />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
