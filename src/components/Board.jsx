import React, { useState } from 'react'
import '../stylesheets/board.scss'
import Dot from './Dot'

const Board = () => {
  const [dots] = useState([...Array(16).keys()])

  return (
    <div className='board'>
      { dots.map((dot, index) => {
        return (
          <Dot key={index} index={index} />
        )
      })
      }
    </div>
  )
}

export default Board
