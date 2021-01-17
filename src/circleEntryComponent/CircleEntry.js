import React from "react";
import IndicatorCircle from "./CircleEntry_IndicatorsCircle";
import CircleCenter from "./CircleEntry_CircleCenter";
import "./CircleEntry.css";

export default function CircleEntry({ name, stateIndicators }) {
  return (
    <div className="circle__wrapper">
      <div className="circle"></div>
      <IndicatorCircle indicators={stateIndicators} />
      <CircleCenter name={name} />
    </div>
  );
}
