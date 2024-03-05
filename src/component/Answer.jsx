import { useRef } from "react";

export default function Answer({
  answers,
  selectedAnswer,
  answerstate,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        let cssClasses = "";
        const isselected = selectedAnswer === answer;
        if (answerstate === "answer" && isselected) {
          cssClasses = "selected";
        }
        if (
          (answerstate === "correct" || answerstate === "wrong") &&
          isselected
        ) {
          cssClasses = answerstate;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClasses}
              disabled={answerstate != ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
