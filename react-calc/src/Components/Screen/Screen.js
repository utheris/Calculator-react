import React from "react";
import ResultScreen from "./ResultScreen/ResultScreen";

const Screen = (props) => {
  return (
    <div className="screen">
      <ResultScreen>{props.displayValue}</ResultScreen>
    </div>
  );
};

export default Screen;
