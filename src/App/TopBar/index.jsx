import React from "react";

import components from "./styles";
const { TopBar, LogoBox, Logo, Menu, MenuItem } = components;

const TopBarComponent = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element)
      element.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  return (
    <TopBar>
      <LogoBox>
        <Logo src="/logo_eklaudiakrupa.png" />
      </LogoBox>
      <Menu>
        <MenuItem onClick={() => scrollTo("aboutMe")}>o mnie</MenuItem>
        <MenuItem onClick={() => scrollTo("portfolio")}>portfolio</MenuItem>
        <MenuItem onClick={() => scrollTo("skills")}>umiejętności</MenuItem>
        <MenuItem
          href="/CV_Klaudia_Krupa.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          pobierz CV
        </MenuItem>
        <MenuItem onClick={() => scrollTo("contact")}>kontakt</MenuItem>
      </Menu>
    </TopBar>
  );
};

export default TopBarComponent;
