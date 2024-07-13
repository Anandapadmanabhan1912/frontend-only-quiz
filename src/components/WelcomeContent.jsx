import React from "react";

function WelcomeContent(props) {
  return (
    <main>
      <div className="quiz-image">
        <img
          className="world"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotating_earth_animated_transparent.gif"
          alt="World Map"
        />
      </div>
      <button onClick={props.click} id="start-quiz-btn">
        Start Quiz
      </button>
    </main>
  );
}

export default WelcomeContent;
