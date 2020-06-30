import React, { useState } from "react";

import components from "./styles";
import Skill from "./SkillComponent";
import { graphicDesigner, developer } from "./skills";

const { Main, Header, Categories, Category, Skills } = components;

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState("developer");
  return (
    <Main id="skills">
      <Header>umiejętności</Header>
      <Categories>
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
      </Categories>
      {activeCategory === "developer" && (
        <Skills>
          {developer.map((x, idx) => (
            <Skill
              key={`skill-dev-${idx}`}
              name={x.name}
              fileName={x.fileName}
            />
          ))}
        </Skills>
      )}
      {activeCategory === "designer" && (
        <Skills>
          {graphicDesigner.map((x, idx) => (
            <Skill
              key={`skill-design-${idx}`}
              name={x.name}
              fileName={x.fileName}
            />
          ))}
        </Skills>
      )}
    </Main>
  );
};

export default SkillsPage;
