import "./styles.css";
import React, { useState } from "react";
import Welcome from "./Welcome";
import OptionPage from "./OptionPage";
import CapitalQuiz from "./CapitalQuiz";

export default function App() {
  const [page, setPage] = useState(0);

  function nextPage() {
    setPage((prevPage) => (prevPage + 1) % pageArray.length);
  }

  const pageArray = [<Welcome click={nextPage} />, <OptionPage />];

  return (
    <div className="App">
      <CapitalQuiz />
    </div>
  );
}
