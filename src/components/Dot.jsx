import React, { useState } from 'react'
import '../stylesheets/dot.scss'

const Dot = ({ id, claimedBy, handleClick }) => {
  let playerClaimedBy = 'dot'
  if (claimedBy) {
    playerClaimedBy = `${claimedBy}-claimed`
  }

  return (
    <div
      onClick={handleClick}
      id={id}
      className={playerClaimedBy}
    />
  )
}

export default Dot
