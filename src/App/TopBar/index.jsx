import React from "react";

import components from "./styles";
const { TopBar, LogoBox, Logo, Menu, MenuItem } = components;

const TopBarComponent = () => {
  return (
    <TopBar>
      <LogoBox>
        <Logo src="/logo_eklaudiakrupa.png" />
      </LogoBox>
      <Menu>
        <MenuItem>o mnie</MenuItem>
        <MenuItem>portfolio</MenuItem>
        <MenuItem>umiejętności</MenuItem>
        <MenuItem
          href="/CV_Klaudia_Krupa.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          pobierz CV
        </MenuItem>
        <MenuItem>kontakt</MenuItem>
      </Menu>
    </TopBar>
  );
};

export default TopBarComponent;
