import React from "react";

export const FreeTextInput = ({ answer, setAnswer }) => {
  return (
    <div>
      <input
        value={answer || ""}
        onChange={(e) => setAnswer(e.target.value)}
        type="text"
        className="input"
        placeholder="John Doe"
      />
    </div>
  );
};
