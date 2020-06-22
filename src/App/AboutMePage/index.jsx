import React from "react";

import components from "./styles";

const { Main, PhotoBox, Photo, Text, Header, Description, Button } = components;

const AboutMePage = () => {
  return (
    <Main>
      <PhotoBox>
        <Photo src="/photo.png" />
      </PhotoBox>
      <Text>
        <Header>o mnie</Header>
        <Description>
          Jestem <b>React.JS Developerem</b> od około roku.
          <br />
          Przez większość tego czasu pracowałam
          <br />
          w czteroosobowym zespole przy komercyjnej
          <br />
          aplikacji. Oprócz <b>programowania</b> interesuję się
          <br />
          sztuką - od najstarszych obrazów po digital
          <br />
          painting, web designem, architekturą.
          <br />
          W wolnym czasie lubię gotować, zajmować się
          <br />
          roślinami, poszerzać swoje horyzonty i literaturę faktu.
        </Description>
        <a
          href="/CV_Klaudia_Krupa.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>pobierz CV</Button>
        </a>
      </Text>
    </Main>
  );
};

export default AboutMePage;
