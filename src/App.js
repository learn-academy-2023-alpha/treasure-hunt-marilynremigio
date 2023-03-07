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

  
 // initial value is random number
  const [treasureLoc, setTreasureLoc] = useState(Math.floor(Math.random() * board.length))
  const [bombLoc, setBombLoc] = useState(Math.floor(Math.random() * board.length))
  
  console.log("Treasure:",treasureLoc)
  console.log("Bomb:",bombLoc)
  
  
  const handleGamePlay = (index) => {
    // alert(index)
    let updatedBoard = [...board] // created copy of state board
    if(index === treasureLoc) {
      updatedBoard[index] = "💰" // emoji: cmd+ctrl+spc
    setBoard(updatedBoard)
    } else if(index === bombLoc) {
      updatedBoard[index] = "💣" 
    setBoard(updatedBoard)
    } else {
      updatedBoard[index] = "🌴" 
      setBoard(updatedBoard)
    }
  }

  const restart = () => {
    setBoard([
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
    setTreasureLoc(Math.floor(Math.random() * board.length))
    setBombLoc(Math.floor(Math.random() * board.length))
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="button">
        <button onClick={restart}>Play Again</button>
      </div>
      <br></br>
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
