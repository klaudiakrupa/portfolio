import React, { useState } from "react";

import components from "./styles";

const { Project, Photo, DarkLayer, Title, Description, Button } = components;

const PortfolioProjectComponent = () => {
  // const [isMouseOn, setIsMouseOn] = useState(false);
  return (
    <Project>
      <Photo></Photo>
      <DarkLayer>
        <Title>
          Wsiąść do pociągu
          <br />- Gra
        </Title>
        <div>
          <Description>Webdesign, UI/UX, Kod </Description>
          <Button>></Button>
        </div>
      </DarkLayer>
    </Project>
  );
};

export default PortfolioProjectComponent;
