import React from "react";

import components from "./styles";

const {
  Main,
  PhotoBox,
  Photo,
  Text,
  Header,
  Description,
  Button,
  CVLink,
} = components;

const AboutMePage = () => {
  return (
    <Main id="aboutMe">
      <PhotoBox>
        <Photo src="/photo.png" />
      </PhotoBox>
      <Text>
        <canvas></canvas>
        <Header text="o mnie" />
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
        <CVLink
          href="/CV_Klaudia_Krupa.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>pobierz CV</Button>
        </CVLink>
      </Text>
    </Main>
  );
};

export default AboutMePage;
