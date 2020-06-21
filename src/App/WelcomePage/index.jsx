import React from "react";

import components from "./styles";

const {
  Main,
  Content,
  WelcomeInLanguages,
  BigWelcome,
  NameIs,
  Name,
  ImageBox,
  Image,
  SocialMediaBox,
  SMService,
} = components;

const WelcomePage = () => {
  return (
    <Main>
      <Content>
        <WelcomeInLanguages>
          Good morning! / Ciao! / Guten Morgen! / Привет!
        </WelcomeInLanguages>
        <BigWelcome>Dzień dobry!</BigWelcome>
        <div>
          <NameIs>Nazywam się</NameIs>
          <Name>Klaudia Krupa</Name>
        </div>
        <SocialMediaBox>
          <a
            href="https://github.com/klaudiakrupa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SMService src="/GitHub.png" />
          </a>
          <a
            href="https://www.linkedin.com/in/klaudiakrupa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SMService src="/LinkedIn.png" />
          </a>
        </SocialMediaBox>
      </Content>
      <ImageBox>
        <Image src="/welcome_image.png" />
      </ImageBox>
    </Main>
  );
};

export default WelcomePage;
