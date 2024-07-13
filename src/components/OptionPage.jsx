import React from "react";
import Menu from "./Menu";

function OptionPage() {
  const data = {
    question: "Enter a choice: ",
    options: ["Flag-Quiz", "Capital-Quiz"],
  };
  return (
    <>
      <img
        className="world"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotating_earth_animated_transparent.gif"
        alt="World Map"
      />
      <Menu data={data} />
    </>
  );
}

export default OptionPage;
