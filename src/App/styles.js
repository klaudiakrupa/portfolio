import styled from "styled-components";

export default {
  Main: styled.div`
    margin: 0 auto;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.08rem;
    background-color: #fafafa;

    overflow: scroll;
    height: 100vh;
    scroll-snap-type: mandatory;
    scroll-snap-points-y: repeat(100vh);
    scroll-snap-type: y mandatory;
  `,

  SectionContainer: styled.div`
    height: 100vh;
    scroll-snap-align: start;
    position: relative;
  `,
};
