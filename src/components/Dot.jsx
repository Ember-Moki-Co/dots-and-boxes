import React, { useState } from 'react'
import '../stylesheets/dot.scss'

const Dot = ({ id, x, y }) => {
  return (
    <div
      id={id}
      className='dot'
      style={{ left: x, top: y }}
    />
  )
}

export default Dot
