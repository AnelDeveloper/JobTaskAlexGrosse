import React from "react";

export const RadioInput = ({ score, setScore, setAnswer, answers }) => {
  const onChange = (answer, score) => {
    setAnswer(answer);
    setScore(Number(score));
  };

  return (
    <div className="radioInputContainer">
      {answers.map(({ title, score }) => (
        <>
          <input
            onChange={(e) => onChange(title, e.target.value)}
            type="radio"
            id="radioInput"
            name="radioInput"
            value={score}
          />
          <label for="radioInput" className="radioInputLabel">
            {title}
          </label>
        </>
      ))}
    </div>
  );
};
