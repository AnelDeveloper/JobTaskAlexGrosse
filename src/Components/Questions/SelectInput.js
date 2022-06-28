import React from "react";

import './Question.css'

export const SelectInput = ({ score, setScore, setAnswer, answers }) => {
  answers = [
    { title: "Italy", score: 5 },
    { title: "germany", score: 3 },
    { title: "sweeden", score: 5 },
    { title: "spain", score: 3 },
  ];

  const handleSelect = (title) => {
    setAnswer(title);
    const selectedAnswer = answers.find((a) => a.title === title);
    setScore(selectedAnswer.score);
  };

  return (
    <div className="custom-select">
      <select
        name="cars"
        id="cars"

        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="" disabled selected hidden>Please Choose your country?</option>

        {answers.map(({ title }) => (


          <option value={title}>{title}</option>

        ))}
      </select>
    </div>
  );
};
