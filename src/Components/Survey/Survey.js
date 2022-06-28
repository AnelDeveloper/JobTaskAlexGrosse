import React from "react";

import "./Survey.css";
import { useEffect, useState } from "react";

import Question from "../Questions/Question";

import Welcome from "../Welcome/Welcome";
import Score from "../Score/Score";
import { QUESTIONS } from "../../data";
import ProgressBarComp from "../ProgresBar/Progres";

const Survey = () => {
  const [quizState, setQuizState] = useState("not-started");
  const [currentIndex, setCurrentIndex] = useState(0);

  const [answers, setAnswers] = useState([]);

  const userName = answers?.[0]?.answer;

  const currentQuestion = QUESTIONS[currentIndex];

  const onNextQuestion = (answer, score) => {
    setAnswers([...answers, { answer, score }]);
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setQuizState("finished");
    }
  };
  const onBackQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getTotalScore = () => {
    let totalScore = 0;
    answers.forEach((answer) => {
      totalScore += answer.score;
    });
    return totalScore;
  };


  const getNewSurvey = () => {
    setQuizState("not-started")
    setAnswers('');
    setCurrentIndex(0);
    setAnswers('');
  }





  return (
    <div className="home">
      {quizState === "not-started" && (
        <Welcome startQuiz={() => setQuizState("started")} />
      )}

      {quizState === "started" && (
        <Question
          currentQuestion={currentQuestion}
          onNextQuestion={onNextQuestion}
          onBackQuestion={onBackQuestion}
          userName={userName}
        />
      )}

      {quizState === "finished" && <Score userName={userName} getNewSurvey={getNewSurvey} totalScore={getTotalScore()} />}
    </div>
  );
};

export default Survey;
