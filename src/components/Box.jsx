import React, { useState } from "react"
import "../stylesheets/box.scss"
import Line from "./Line"
import Dot from "./Dot"

const Box = ({ dots, lines, handleLineClick }) => {
  return (
    <div className="box">
      {/* {dots.map((dot) => {
        return (
          <Dot key={dot.id} id={dot.id} x={dot.x} y={dot.y} />
        )
      })} */}
      {lines.map((line) => {
        return (
          <Line key={line.id} id={line.id} fromDot={line.fromDot} vertical={line.vertical} toDot={line.toDot} claimedBy={line.claimedBy} handleClick={handleLineClick} />
        )
      })}
    </div>
  )
}

export default Box
