import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleGamePlay = (index) => {
    // alert(index)
    let updatedBoard = [...board] // created copy of state board
    updatedBoard[index] = "🌴" // emoji: cmd+ctrl+spc
    setBoard(updatedBoard)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
        {board.map((value,index) => {
          return (
            <Square  
              value={value}
              key={index}
              index={index}
              handleGamePlay={handleGamePlay}
            />
          ) 
        })}
      </div>
    </>
  )
}

export default App
