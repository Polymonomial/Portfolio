import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Main from './components/main'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
      <Main/>
    </Router>
    
  )
}

export default App