import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import QuizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizISComplete = activeQuestionIndex === QUESTIONS.length;
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  },
  []);
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );
  if (quizISComplete) {
    return (
      <div id="summary">
        <img src={QuizCompleteImg} alt="Quiz is completed" />
        <h2>Quiz completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        selectedAnswers={userAnswers[userAnswers.length - 1]}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}
