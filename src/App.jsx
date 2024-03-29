import { useState } from 'react'
import Start from "./pages/Start";
import Questions from "./pages/Questions"
import './App.css'

function App() {
  const [startQuiz, setStartQuiz] = useState(false)

  function startGame() {
    setStartQuiz(true)
  }

  return (
    startQuiz ? <Questions /> : <Start startGame={startGame}/>
  )
}

export default App
