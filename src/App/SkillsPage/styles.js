import styled from "styled-components";

export default {
  Main: styled.div`
    width: 100%;
    height: 100%;
    color: #1a1a1a;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Header: styled.div`
    font-size: 5rem;
    font-weight: 700;
    padding: 4rem 0;
  `,

  Categories: styled.div`
    display: flex;
    padding-bottom: 1rem;
    width: 38%;
    margin: 0 auto;
    justify-content: space-evenly;
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

  Skills: styled.div`
    display: flex;
    width: 70%;
    height: -webkit-fill-available;
    margin: auto auto;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  `,
};
