import React from "react";

export default function crossMarkCircle({ crossMarkCoordinates, circleColor }) {
  const crossMarkCircleRadius = 7;
  const crossMarkOffset = crossMarkCircleRadius / 3;

  return (
    <g>
      <circle
        cx={crossMarkCoordinates.x}
        cy={crossMarkCoordinates.y}
        r={crossMarkCircleRadius}
        stroke={circleColor}
        fill={circleColor}
      ></circle>
      <line
        className="cross__mark__line"
        x1={crossMarkCoordinates.x - crossMarkOffset}
        y1={crossMarkCoordinates.y - crossMarkOffset}
        x2={crossMarkCoordinates.x + crossMarkOffset}
        y2={crossMarkCoordinates.y + crossMarkOffset}
      ></line>
      <line
        className="cross__mark__line"
        x1={crossMarkCoordinates.x - crossMarkOffset}
        y1={crossMarkCoordinates.y + crossMarkOffset}
        x2={crossMarkCoordinates.x + crossMarkOffset}
        y2={crossMarkCoordinates.y - crossMarkOffset}
      ></line>
    </g>
  );
}
