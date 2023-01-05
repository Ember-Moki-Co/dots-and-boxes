import React from "react"

const Line = ({ id, fromDot, toDot, claimedBy, handleClick }) => {
  let className = "line"

  if (claimedBy) {
    className += ` claimed-${claimedBy}`
  }

  return (
    <svg className={className} onClick={handleClick}>
      <line x1={fromDot.x} y1={fromDot.y} x2={toDot.x} y2={toDot.y} />
    </svg>
  )
}

export default Line
