import React from "react";

import components from "./styles";
import TopBar from "./TopBar";
import WelcomePage from "./WelcomePage";
import AboutMe from "./AboutMePage";
import ContactPage from "./ContactPage";

const { Main } = components;

const App = () => {
  return (
    <Main>
      <TopBar />
      <WelcomePage />
      <AboutMe />
      <ContactPage />
    </Main>
  );
};

export default App;
