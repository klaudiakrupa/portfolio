import React from "react";

import components from "./styles";
import Project from "./PortfolioProject";

const { Main, Header, Projects } = components;

const PortfolioPage = () => {
  return (
    <Main>
      <Header>portfolio</Header>
      <Projects>
        <Project />
        <Project />
        <Project />
      </Projects>
    </Main>
  );
};

export default PortfolioPage;
