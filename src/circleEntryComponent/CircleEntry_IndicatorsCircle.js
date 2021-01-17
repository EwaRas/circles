import React from "react";
import CrossMarkCircle from "./CircleEntry_CrossMarkCircle";

export default function IndicatorCircle({ indicators }) {
  const stateIndicators = indicators;
  const indicatorsArray = createIndicatorsArray(stateIndicators);

  //svg circle variables
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const adjustedCircumference = circumference - 2;
  const numberOfIndicators = indicatorsArray.length;
  const lengthOfIndicator = (1 / numberOfIndicators) * circumference;
  const rotationAngle = (1 / numberOfIndicators) * 360;
  const initialAngleOffset = -90;
  const strokeOffset = circumference - lengthOfIndicator;
  const strokeColors = {
    lit: "white",
    unlit: "grey",
    broken: "red",
  };

  let angleOffset = initialAngleOffset;
  let rotationParameters;
  let crossMarkCoordinates;

  //helper functions
  function createIndicatorsArray(stateIndicators) {
    return Object.keys(stateIndicators)
      .map((indicator) => Array(stateIndicators[indicator]).fill(indicator))
      .flat();
  }

  function calculateCrossMarkCoordinates(angleOffset) {
    const angle = rotationAngle / 2 + angleOffset;
    const radians = angle * (Math.PI / 180);
    const crossMarkCoordinates = {
      x: radius * Math.cos(radians) + 80,
      y: radius * Math.sin(radians) + 80,
    };
    return crossMarkCoordinates;
  }
  //comment
  function setIndicatorParameters(segment, index) {
    if (index === 0 && segment === "lit") angleOffset;
    else angleOffset += rotationAngle;
    rotationParameters = `rotate(${angleOffset},80,80)`;
    if (segment === "broken") {
      crossMarkCoordinates = calculateCrossMarkCoordinates(angleOffset);
    } else return;
  }

  return (
    <div className="indicator__section">
      <svg
        className="indicator_segment_section"
        height="100%"
        width="100%"
        viewBox="0 0 160 160"
      >
        {indicatorsArray.map((segment, index) => {
          setIndicatorParameters(segment, index);
          return (
            <g key={`${segment}${index}`}>
              <circle
                cx="80"
                cy="80"
                r={radius}
                strokeWidth=".5em"
                stroke={strokeColors[segment]}
                strokeDasharray={adjustedCircumference}
                strokeDashoffset={strokeOffset}
                fill="transparent"
                transform={rotationParameters}
              ></circle>
              {segment === "broken" && (
                <CrossMarkCircle
                  crossMarkCoordinates={crossMarkCoordinates}
                  circleColor={strokeColors[segment]}
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
