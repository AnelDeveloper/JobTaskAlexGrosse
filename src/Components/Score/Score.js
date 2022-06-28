import React from "react";

import './Score.css'

const Score = ({ totalScore, userName, getNewSurvey }) => {
  return (
    <div className="scoreContainer">
      <h2 className="h3Result">RESULT</h2>
      <div className="h1Score">Your Score</div>
      <div className="nameScore">{userName}</div>
      <div className="title">{totalScore}
        <div className="points"> Points</div>
      </div>
      <div className="btnN">
        <button className="colorofbtn" onClick={getNewSurvey}>START NEW</button>

      </div>
    </div>
  )
};

export default Score;
