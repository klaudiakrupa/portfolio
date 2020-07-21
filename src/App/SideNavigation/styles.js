import styled from "styled-components";

export default {
  Navigation: styled.div`
    position: fixed;
    z-index: 100;
    top: 50%;
    right: 3rem;
  `,
  NavigationDot: styled.div`
    cursor: pointer;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    border: 0.2rem solid #1a1a1a;
    background-color: #1a1a1a;
    margin: 0.5rem 0;
    opacity: 0.6;

    ${(props) =>
      props.active &&
      `
      opacity: 1;
      border: 0.2rem solid #fece2f;
      background-color: #fece2f;
  `}
  `,
};
