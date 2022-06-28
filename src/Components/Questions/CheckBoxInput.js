import React from "react";

export const CheckBoxInput = ({
  score,
  setScore,
  setAnswer,
  answers,
  answer,
}) => {
  const onCheck = (title, checked, questionScore) => {
    if (checked) {
      if (!answer) answer = [];
      answer.push(title);
      setScore(score + questionScore);
    } else {
      answer = answer.filter((a) => a !== title);
      setScore(score - questionScore);
    }
    setAnswer(answer);
  };

  return (
    <div className="radioInputContainer">
      {answers.map(({ title, score }) => (
        <>
          <input
            onChange={(e) => {
              onCheck(title, e.target.checked, score);
            }}
            type="checkbox"
            id="checkboxInput"
            name="checkboxInput"
            value={score}
          />
          <label for="checkboxInput" className="radioInputLabel">
            {title}
          </label>
        </>
      ))}
    </div>
  );
};
