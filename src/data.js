export const QUESTIONS = [
  {
    heading: "WHO ARE YOU?",
    title: "Please enter your name.",
    answerType: "freeText",
  },
  {
    heading: "QUESTION 1",
    title: "How often do you visit?",
    answerType: "radio",
    answers: [
      { title: "often", score: 5 },
      { title: "rearely", score: 3 },
      { title: "never", score: 0 },
    ],
  },
  {
    heading: "QUESTION 2",
    title: "Pls select at least one?",
    answerType: "checkbox",
    answers: [
      { title: "opt 1", score: 2 },
      { title: "opt 2", score: 2 },
      { title: "opt 3", score: 2 },
    ],
  },
  {
    heading: "QUESTION 3",
    title: "Where are you from?",
    answerType: "select",
    answers: [
      { title: "Italy", score: 5 },
      { title: "germany", score: 3 },
      { title: "sweeden", score: 5 },
      { title: "spain", score: 3 },
    ],
  },
];
