import React from "react"
import "../stylesheets/line.scss"

const Line = ({ id, fromDot, toDot, claimedBy, vertical, handleClick }) => {
  let className = "line"

  if (claimedBy) {
    className += `${claimedBy}-claimed`
  }
  if (vertical) {
    console.log(id)
    className += '-vertical'
  }

  return (
    <svg className={className} onClick={handleClick}>
      <line x1={fromDot.x} y1={fromDot.y} x2={toDot.x} y2={toDot.y} />
    </svg>
  )
}

export default Line
