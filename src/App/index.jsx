import React from "react";

import components from "./styles";
import TopBar from "./TopBar";
import WelcomePage from "./WelcomePage";
import AboutMe from "./AboutMePage";
import PortfolioPage from "./PortfolioPage";
import SkillsPage from "./SkillsPage";
import ContactPage from "./ContactPage";

const { Main } = components;

const App = () => {
  return (
    <Main>
      <TopBar />
      <WelcomePage />
      <AboutMe />
      <PortfolioPage />
      <SkillsPage />
      <ContactPage />
    </Main>
  );
};

export default App;
