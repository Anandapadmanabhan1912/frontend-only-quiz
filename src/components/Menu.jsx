import React from "react";
import ListElem from "./ListElem";

function Menu(props) {
  return (
    <main>
      <div className="quiz-content">
        <h2 id="question">{props.data.question}</h2>
        <ul className="list-group" id="answers">
          {props.data.options.map((option, index) => (
            <ListElem key={index} content={option} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Menu;
