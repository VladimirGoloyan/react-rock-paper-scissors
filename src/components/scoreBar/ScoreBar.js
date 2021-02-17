import React from "react";

import "./ScoreBar.scss";

const ScoreBar = ({ score }) => {
  return (
    <div className="app-scoreBar-container">
      <div className="app-scoreBar-container__block-name">
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
      </div>
      <div className="app-scoreBar-container__scoreBox">
        <p>SCORE</p>
        <p className="app-scoreBar-container__scoreBox__score">{score}</p>
      </div>
    </div>
  );
};

export default ScoreBar;
