import styled from "styled-components";

export default {
  Skill: styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
  `,
  Logo: styled.div`
    width: 11rem;
    height: 11rem;
    border-radius: 50%;
    background-image: url("skills/${(props) => props.fileName}");
    background-size: cover;
    background-position: center;
  `,
  Name: styled.div`
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #1a1a1a;
    padding: 1rem 0;
  `,
};
