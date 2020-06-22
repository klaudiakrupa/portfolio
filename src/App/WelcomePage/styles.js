import styled from "styled-components";

export default {
  Main: styled.div`
    width: 88%;
    margin: auto;
    padding: 2rem;
    display: flex;
  `,
  Content: styled.div`
    width: 55%;
  `,
  WelcomeInLanguages: styled.h6`
    color: #1a1a1a;
    font-size: 1.2rem;
    font-weight: 400;
  `,
  BigWelcome: styled.div`
    color: #fece2f;
    font-weight: 700;
    font-size: 6.5rem;
  `,
  NameIs: styled.h1`
    color: #1a1a1a;
    font-size: 2.4rem;
    font-weight: 400;
  `,
  Name: styled.div`
    color: #1a1a1a;
    font-size: 3.4rem;
    font-weight: 700;
  `,
  ImageBox: styled.div`
    width: 45%;
  `,
  Image: styled.img`
    width: 100%;
  `,
  SocialMediaBox: styled.div`
    background-color: #1a1a1a;
    width: 40%;
    border-radius: 0 3rem 3rem 0;
    position: absolute;
    left: 0;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    margin: 6rem 0 2rem 0;
  `,
  SMService: styled.img`
    height: 3.5rem;
    opacity: 0.3;
    cursor: pointer;
    transition: all 0.3s;
    padding: 0 0.5rem;

    &:hover {
      opacity: 0.6;
    }
  `,
};
