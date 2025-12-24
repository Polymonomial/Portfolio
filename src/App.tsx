import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './components/main'
import './index.css'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
      <Main/>
    </Router>
    
  )
}

export default App