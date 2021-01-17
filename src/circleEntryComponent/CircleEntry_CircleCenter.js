import React from "react";
import magnifier from "./images/Magnifier.svg";
import visitArrow from "./images/VisitArrow.svg";

export default function CircleCenter({ name }) {
  function handleClick(event) {
    console.log(event.current.target.id);
  }

  return (
    <div className="circle__center">
      <div className="circle__center__segment segment_text">
        <svg width="100%" height="100%" viewBox="0 0 200 100">
          <path
            id="text__curve"
            d="
              M 50 100
              C 50 30,
              150 30,
              150 100
              "
          />
          <text className="curved__text">
            <textPath
              textAnchor="middle"
              startOffset="50%"
              xlinkHref="#text__curve"
            >
              {name}
            </textPath>
          </text>
        </svg>
      </div>
      <button
        id="magnifier"
        className="circle__center__segment segment_icon segment_icon_left"
        onClick={handleClick}
      >
        <img src={magnifier} alt="magnifier"></img>
      </button>
      <button
        id="visit arrow"
        className="circle__center__segment segment_icon segment_icon_right"
        onClick={handleClick}
      >
        <img src={visitArrow} alt="visit arrow"></img>
      </button>
    </div>
  );
}
