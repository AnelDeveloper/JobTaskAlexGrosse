import React, { useState } from "react";
import { FreeTextInput } from "./FreeTextInput";
import { RadioInput } from "./RadioInput";
import "./Question.css";
import { CheckBoxInput } from "./CheckBoxInput";
import { SelectInput } from "./SelectInput";

import { QUESTIONS } from "../../data";


import ProgressBarComp from "../ProgresBar/Progres";

const Question = ({
  currentIndex,
  currentQuestion,
  onNextQuestion,
  onBackQuestion,
  userName,
}) => {
  const [answer, setAnswer] = useState();
  const [score, setScore] = useState(0);

  const { answerType } = currentQuestion;

  const [precentage, setPrecenetage] = useState(10)



  console.log(currentQuestion.length)


  const handleNext = () => {
    onNextQuestion(answer, score, precentage);
    setAnswer();
    setScore(0);
    setPrecenetage(precentage + 30)

  };












  return (
    <>
      <div className="displayName">SURVEY FOR: {userName}</div>

      <div className="Questions">
        <div> Question</div>

        <div className="heading">{currentQuestion.heading}</div>
        <div className="title">{currentQuestion.title}</div>

        {answerType === "freeText" && (
          <FreeTextInput
            answer={answer}
            setAnswer={setAnswer} />
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


      </div>


      {currentIndex > 0 &&


        <div className="footer">
          <div className="ProgresBar">
            <div className="currentQuestion">{currentQuestion.heading} OUT OF {QUESTIONS.length - 1}</div>

            <ProgressBarComp precentage={precentage} />
          </div>
        </div>

      }
    </>

  );
};

export default Question;
