import React, { useState } from 'react'
import Box from '../components/Box'
import '../stylesheets/board.scss'
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
      <h1>Test</h1>
      {gameBoard.boxes.map((box) => (
        <Box key={box.id} id={box.id} dots={box.dots} lines={box.lines} claimedBy={box.claimedBy} handleLineClick={handleLineClick} />
      ))}
    </div>
  )
}

export default Board
