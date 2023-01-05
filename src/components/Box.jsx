import React, { useState } from "react"
import "../stylesheets/box.scss"
import Line from "./Line"

const Box = ({ id, dots, claimedBy, handleLineClick }) => {
  return (
    <div className="box">
      {dots.map((dot, index) => (
        <Line
          key={index}
          id={`line-${id}-${index}`}
          fromDot={dot}
          toDot={dots[(index + 1) % dots.length]}
          claimedBy={claimedBy}
          handleClick={handleLineClick}
        />
      ))}
    </div>
  )
}

export default Box
