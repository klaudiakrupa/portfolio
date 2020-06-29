import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
  Main: styled.div`
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: #1a1a1a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Heading: styled.div``,
  SmallText: styled.div`
    font-size: 2rem;
    font-weight: 400;
  `,
  Header: styled.div`
    font-size: 5rem;
    font-weight: 700;
  `,

  ContactBox: styled.div`
    font-size: 1.4rem;
    padding: 4rem;
    width: 45%;
    min-width: 400px;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-evenly;
  `,

  Contact: styled.div`
    display: flex;
  `,
  Text: styled.div``,

  SocialMedia: styled.div``,

  Icon: styled(FontAwesomeIcon)`
    font-size: 1.8rem;
    color: #fff;
    padding: 0 0.7rem;

    ${(props) =>
      props.link &&
      `
      font-size: 2rem;
    cursor: pointer;
    transition: all 0.3s;
    opacity: 0.3;
    
    &:hover {
      opacity: 0.8;
      color: #FECE2F;
    }
    `}
  `,
};
