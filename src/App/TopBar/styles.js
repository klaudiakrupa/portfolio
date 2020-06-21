import styled from "styled-components";

export default {
  TopBar: styled.div`
    width: 100%;
    padding: 2rem;
    display: flex;
    align-items: center;
  `,

  LogoBox: styled.div`
    width: 50%;
  `,

  Logo: styled.img`
    width: 20rem;
  `,

  Menu: styled.nav`
    width: 50%;
    min-width: 600px;
    display: flex;
    justify-content: space-around;
  `,

  MenuItem: styled.a`
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 600;
    font-size: 1.1rem;
    color: #917e41;
    padding-bottom: 3px;
    border-bottom: 8px solid rgba(0, 0, 0, 0);
    text-decoration: none;

    &:hover {
      border-bottom: 8px solid #fece2f;
    }
  `,
};
