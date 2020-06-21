import React from "react";

import components from "./styles";
import TopBar from "./TopBar";
import WelcomePage from "./WelcomePage";

const { Main } = components;

const App = () => {
  return (
    <Main>
      <TopBar />
      <WelcomePage />
    </Main>
  );
};

export default App;
