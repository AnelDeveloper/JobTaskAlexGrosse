import React, { useState } from "react";
import { FreeTextInput } from "./FreeTextInput";
import { RadioInput } from "./RadioInput";
import "./Question.css";
import { CheckBoxInput } from "./CheckBoxInput";
import { SelectInput } from "./SelectInput";


import ProgressBarComp from "../ProgresBar/Progres";

const Question = ({
  currentQuestion,
  onNextQuestion,
  onBackQuestion,
  userName,
}) => {
  const [answer, setAnswer] = useState();
  const [score, setScore] = useState(0);

  const { answerType } = currentQuestion;

  const handleNext = () => {
    onNextQuestion(answer, score);

    setAnswer();
    setScore(0);
  };

  return (
    <>
      <div className="displayName">SURVEY FOR: {userName}</div>

      <div className="Questions">
        <div> Question</div>

        <div className="heading">{currentQuestion.heading}</div>
        <div className="title">{currentQuestion.title}</div>

        {answerType === "freeText" && (
          <FreeTextInput answer={answer} setAnswer={setAnswer} />
        )}
        {answerType === "radio" && (
          <RadioInput
            answer={answer}
            setAnswer={setAnswer}
            score={score}
            setScore={setScore}
            answers={currentQuestion.answers}
          />
        )}
        {answerType === "checkbox" && (
          <CheckBoxInput
            answer={answer}
            setAnswer={setAnswer}
            score={score}
            setScore={setScore}
            answers={currentQuestion.answers}
          />
        )}
        {answerType === "select" && (
          <SelectInput
            answer={answer}
            setAnswer={setAnswer}
            score={score}
            setScore={setScore}
            answers={currentQuestion.answers}
          />
        )}



        <div className="btnN">
          <button className="colorBackB" onClick={onBackQuestion}>
            &larr;  BACK
          </button>
          <button className="colorofbtn" onClick={handleNext}>
            NEXT &rarr;
          </button>
        </div>
        <div className="ProgresBar">
          <ProgressBarComp />
        </div>

      </div>

    </>

  );
};

export default Question;
