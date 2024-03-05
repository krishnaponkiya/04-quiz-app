import { useState } from "react";
import Answer from "./Answer";
import QuestionTimer from "./QuestionTimer";
import QUESTION from "../questions";
export default function Question({
  questionIndex,
  onSelectAnswer,
  onSkipAnswer,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAnswer() {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTION[questionIndex].answers[0] === answer,
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }
  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "Correct" : "wrong";
  }
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeOut={onSkipAnswer} />
      <h2>{QUESTION[questionIndex].text}</h2>
      <Answer
        answers={QUESTION[questionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answerstate={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
