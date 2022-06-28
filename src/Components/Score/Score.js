import React from "react";
import ProgressBarComp from "../ProgresBar/Progres";

import { useState } from "react";

import './Score.css'
import FinsihProgress from "../ProgresBar/FinishProgres";

const Score = ({ totalScore, userName, getNewSurvey }) => {

  const [precentage, setPrecentage] = useState(50);

  console.log(totalScore)


  if (totalScore > 50) {
    setPrecentage(precentage + 30)
  }



  return (
    <div className="scoreContainer">
      <h2 className="h3Result">RESULT</h2>
      <div className="h1Score">Your Score</div>
      <div className="nameScore">{userName}</div>
      <div className="title">{totalScore}
        <div className="points"> Points</div>
      </div>
      <div className="progresFinish">
        <FinsihProgress precentage={precentage} />
      </div>
      <div className="btnN">
        <button className="colorofbtn" onClick={getNewSurvey}>START NEW</button>

      </div>
    </div>
  )
};

export default Score;
