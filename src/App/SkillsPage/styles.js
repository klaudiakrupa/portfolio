import styled from "styled-components";

export default {
  Main: styled.div`
    width: 100%;
    color: #1a1a1a;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Header: styled.div`
    font-size: 5rem;
    font-weight: 700;
  `,
  Category: styled.div`
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1rem;
    padding-bottom: 3px;
    border-bottom: 8px solid rgba(0, 0, 0, 0);
    text-decoration: none;

    &:hover {
      border-bottom: 8px solid #fece2f;
    }

    ${(props) =>
      props.active &&
      `
    border-bottom: 8px solid #fece2f;
    `}
  `,
};
