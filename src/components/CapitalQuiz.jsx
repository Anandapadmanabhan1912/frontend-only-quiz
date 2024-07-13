import React, { useState, useEffect } from "react";
import Map from "./Map";
import getQuestionData from "../questionFinder";
import QuestionComponent from "./QuestionComponent";
import abbrev from "../abbrev.json";

function findCountryCode(countryName) {
  const country = abbrev.find((entry) => entry.country === countryName);
  return country ? country.code : null;
}

function CapitalQuiz() {
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [data, setData] = useState(getQuestionData());
  const [score, setScore] = useState(0);

  useEffect(() => {
    setData(getQuestionData());
  }, [correctAnswers]);

  function handleCorrectAnswer(countryName) {
    const countryCode = findCountryCode(countryName);
    if (countryCode) {
      setCorrectAnswers((prevCorrectAnswers) => [
        ...prevCorrectAnswers,
        { country: countryCode, value: 1 },
      ]);
      setScore((prevScore) => prevScore + 1);
    }
  }

  return (
    <>
      <Map data={correctAnswers} />
      <QuestionComponent
        question={data.question}
        options={data.options}
        correctAnswer={data.correctAnswer}
        onCorrectAnswer={handleCorrectAnswer}
      />
      <div className="score">
        <h3>Score: {score}</h3>
      </div>
    </>
  );
}

export default CapitalQuiz;
