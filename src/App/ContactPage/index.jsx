import React from "react";

import components from "./styles";

const { Main, Heading, SmallText, Header, Contact, Icon, Text } = components;

const WelcomePage = () => {
  return (
    <Main>
      <Heading>
        <canva></canva>
        <SmallText>Zapraszam do</SmallText>
        <Header>kontaktu</Header>
      </Heading>
      <div>
        <Contact>
          <Icon></Icon>
          <Text>eklaudiakrupa@gmail.com</Text>
        </Contact>
        <Contact>
          <Icon></Icon>
          <Text>Rzeszów</Text>
        </Contact>
      </div>
    </Main>
  );
};

export default WelcomePage;
