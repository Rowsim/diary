import React from "react";
import { Navigation } from "../../components/navigation/navigation";
import { TypeWriter } from "../../components/typewriter/typewriter";

import "./home-page.scss";

const HomePage = () => (
  <div className="home">
    <Navigation pageTitle="RO" />

    <TypeWriter
      additionalClass="home__description"
      delay={60}
      pauseFor={1100}
      typeString="Hi, I'm a software developer based in Manchester, UK."
    />

    <TypeWriter
      additionalClass="home__name"
      delay={50}
      typeString="Rowan Okanlawon"
    />
  </div>
);

export default HomePage;
