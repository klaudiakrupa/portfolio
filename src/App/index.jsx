import React from "react";

import components from "./styles";
import TopBar from "./TopBar";
import WelcomePage from "./WelcomePage";
import AboutMe from "./AboutMePage";
import PortfolioPage from "./PortfolioPage";
import SkillsPage from "./SkillsPage";
import ContactPage from "./ContactPage";

const { Main, SectionContainer } = components;

const App = () => {
  return (
    <Main>
      <SectionContainer>
        <TopBar />
        <WelcomePage />
      </SectionContainer>
      <SectionContainer>
        <AboutMe />
      </SectionContainer>
      <SectionContainer>
        <PortfolioPage />
      </SectionContainer>
      <SectionContainer>
        <SkillsPage />
      </SectionContainer>
      <SectionContainer>
        <ContactPage />
      </SectionContainer>
    </Main>
  );
};

export default App;
