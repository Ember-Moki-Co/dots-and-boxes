import React, { useState } from 'react'
import '../stylesheets/dot.scss'

const Dot = (index) => {
  const [dot, setDot] = useState(null)

  const dotSelected = (e) => {
    setDot(e.target)
  }
  console.log(dot)

  return (
    <div
      className='dot'
      onClick={e => dotSelected(e)}
      id={dot != null ? 'selected' : undefined}
    />
  )
}

export default Dot
