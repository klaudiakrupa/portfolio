import React, { useState } from "react";

import components from "./styles";
import { sections } from "./SectionsToNavigate";

const { Navigation, NavigationDot } = components;

const SideNavigation = () => {
  const [activeDot, setActiveDot] = useState("welcome");

  const onClickHandler = (item) => {
    setActiveDot(item);
    var elmnt = document.getElementById(item);
    elmnt.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navigation>
      {sections.map((x, idx) => (
        <NavigationDot
          key={`section-${idx}`}
          onClick={() => onClickHandler(x.name)}
          active={activeDot === x.name}
        />
      ))}
    </Navigation>
  );
};

export default SideNavigation;
