import React, { useState, useEffect } from "react";
import "./styles.css";

function QuestionComponent({
  question,
  options,
  correctAnswer,
  onCorrectAnswer,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [question]);

  function handleAnswer(option) {
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === correctAnswer) {
      onCorrectAnswer(correctAnswer);
    } else {
      setTimeout(() => {
        onCorrectAnswer(correctAnswer);
      }, 1000); // Wait for 1 second before showing the next question
    }
  }

  function getButtonClass(option) {
    if (!isAnswered) return "option-button";
    if (option === correctAnswer) return "option-button correct";
    if (selectedAnswer === option) return "option-button incorrect";
    return "option-button";
  }

  return (
    <div className="question-container">
      <h2>{question}</h2>
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={getButtonClass(option)}
            disabled={isAnswered}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionComponent;
