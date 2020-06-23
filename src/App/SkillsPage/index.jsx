import React, { useState } from "react";

import components from "./styles";

const { Main, Header, Category } = components;

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState("developer");
  return (
    <Main>
      <Header>umiejętności</Header>
      <Category
        onClick={() => setActiveCategory("developer")}
        active={activeCategory === "developer"}
      >
        Front-end Developer
      </Category>
      <Category
        onClick={() => setActiveCategory("designer")}
        active={activeCategory === "designer"}
      >
        Graphic Designer/ Web Designer
      </Category>
    </Main>
  );
};

export default SkillsPage;
