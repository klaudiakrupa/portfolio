import React from "react";

import components from "./styles";

const { Skill, Logo, Name } = components;

const SkillComponent = ({ fileName, name }) => {
  return (
    <Skill>
      <Logo fileName={fileName} />
      <Name>{name}</Name>
    </Skill>
  );
};

export default SkillComponent;
