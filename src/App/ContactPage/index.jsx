import React from "react";

import { faMapMarkerAlt, faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import components from "./styles";

const {
  Main,
  Heading,
  SmallText,
  Header,
  ContactBox,
  Contact,
  Text,
  SocialMedia,
  Icon,
} = components;

const WelcomePage = () => {
  return (
    <Main id="contact">
      <Heading>
        <SmallText>Zapraszam do</SmallText>
        <Header>kontaktu</Header>
      </Heading>
      <ContactBox>
        <Contact>
          <Icon icon={faAt} />
          <Text>eklaudiakrupa@gmail.com</Text>
        </Contact>
        <Contact>
          <Icon icon={faMapMarkerAlt} />
          <Text>Rzeszów</Text>
        </Contact>
      </ContactBox>
      <SocialMedia>
        <a
          href="https://github.com/klaudiakrupa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={faGithub} link />
        </a>

        <a
          href="https://www.linkedin.com/in/klaudiakrupa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={faLinkedinIn} link />
        </a>
      </SocialMedia>
    </Main>
  );
};

export default WelcomePage;
