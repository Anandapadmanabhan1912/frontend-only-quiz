import React from "react";
import WelcomeContent from "./WelcomeContent";
import Footer from "./Footer";
import Header from "./Header";

function Welcome(props) {
  return (
    <>
      <Header />
      <WelcomeContent click={props.click} />
      <Footer />
    </>
  );
}

export default Welcome;
