import React from "react";
import { render } from "react-dom";
import CircleEntry from "./circleEntryComponent/CircleEntry";

const App = () => {
  const circleEntryValues = {
    name: "Circle Name",
    indicators: {
      lit: 4,
      unlit: 2,
      broken: 2,
    },
  };

  return (
    <div className="app">
      <CircleEntry
        name={circleEntryValues.name}
        stateIndicators={circleEntryValues.indicators}
      />
    </div>
  );
};

render(<App />, document.getElementById("root"));
