import styled from "styled-components";

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
  Header: styled.div`
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
    text-decoration: none;

    &:hover {
      background-color: #1a1a1a;
    }
  `,
};
