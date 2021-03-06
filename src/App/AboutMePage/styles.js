import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect";

export default {
  Main: styled.div`
    width: 88%;
    padding: 5rem;
    margin: auto;
    color: #1a1a1a;
    background-color: #fff;
    display: flex;
    align-items: center;
  `,
  PhotoBox: styled.div`
    width: 50%;
  `,
  Photo: styled.img`
    width: 40rem;
  `,
  Text: styled.div``,
  Header: styled(ReactTypingEffect)`
    font-family: "Montserrat", sans-serif;
    font-size: 5rem;
    font-weight: 700;
  `,
  Description: styled.h6`
    font-size: 1.4rem;
    line-height: 2.6rem;
    font-weight: 400;
  `,
  Button: styled.div`
    cursor: pointer;
    background-color: #917e41;
    color: #fff;
    height: 3.6rem;
    width: 22rem;
    text-align: center;
    line-height: 3.6rem;
    font-size: 1.2rem;
    transition: all 0.3s;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);

    &:hover {
      background-color: #1a1a1a;
    }
  `,

  CVLink: styled.a`
    text-decoration: none;
  `,
};
