// import React, { useState } from 'react'
// import '../stylesheets/board.scss'
// import Dot from './Dot'
// import Box from './Box'
// import initialGameState from '../assets/initialGameState.js'

// const Board = () => {
//   const [gameBoard, setGameBoard] = useState(initialGameState)

//   const gameReset = () => {
//     setGameBoard(initialGameState)
//   }

//   const handleClick = (id) => {
//     const newDots = gameBoard.dots.map((dot) => {
//       if (dot.id === id) {
//         return { ...dot, claimedBy: gameBoard.currentPlayer }
//       }
//       return dot
//     })

//     const newBoxes = gameBoard.boxes.map((box) => {
//       if (box.claimedBy) {
//         return box
//       }
//       const dots = box.dots
//       if (dots.every((dot) => newDots.find((d) => d.id === dot).claimedBy)) {
//         return { ...box, claimedBy: gameBoard.currentPlayer }
//       }
//       return box
//     })

//     const newgameBoard = {
//       ...gameBoard,
//       dots: newDots,
//       boxes: newBoxes,
//       currentPlayer: gameBoard.currentPlayer === 'player1' ? 'player2' : 'player1'
//     }

//     setGameBoard(newgameBoard)
//   }

//   return (
//     <div>
//       <h1>Dots And Boxes</h1>
//       <div className='board'>
//         { gameBoard.dots.map((dot) => {
//           return (
//             <Dot key={dot.id} id={dot.id} handleClick={handleClick} claimedBy={dot.claimedBy} />
//           )
//         })
//         }
//         {gameBoard.boxes.map((box) => (
//           <Box key={box.id} id={box.id} claimedBy={box.claimedBy} />
//         ))}
//       </div>
//       <button onClick={() => gameReset()}>Reset Game</button>
//     </div>
//   )
// }

// export default Board

import React, { useState } from 'react'
import Box from '../components/Box'
import initialGameState from '../assets/initialGameState'

const Board = () => {
  const [gameBoard, setGameBoard] = useState(initialGameState)

  const handleLineClick = (lineId) => {
    const newLines = gameBoard.lines.map((line) => {
      if (line.id === lineId) {
        return { ...line, claimedBy: gameBoard.currentPlayer }
      }
      return line
    })

    const newBoxes = gameBoard.boxes.map((box) => {
      if (box.claimedBy) {
        return box
      }
      const lines = box.lines
      if (lines.every((line) => newLines.find((l) => l.id === line).claimedBy)) {
        return { ...box, claimedBy: gameBoard.currentPlayer }
      }
      return box
    })

    const newGameBoard = {
      ...gameBoard,
      lines: newLines,
      boxes: newBoxes,
      currentPlayer: gameBoard.currentPlayer === 'player1' ? 'player2' : 'player1'
    }

    setGameBoard(newGameBoard)
  }

  return (
    <div className="board">
      {gameBoard.boxes.map((box) => (
        <Box key={box.id} id={box.id} dots={box.dots} lines={box.lines} claimedBy={box.claimedBy} handleLineClick={handleLineClick} />
      ))}
    </div>
  )
}

export default Board
