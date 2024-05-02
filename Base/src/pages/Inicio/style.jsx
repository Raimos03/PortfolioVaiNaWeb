import styled, { css } from "styled-components";

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  /* border: solid 2px red; */
  height: 100vh;
  display: flex;
  background-color: #839697;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
export const Container = styled.section`
  width: 100%;
  ${center}/* border: solid 2px red; */
`;

export const BoxInicio = styled.div`
  /* border: solid 2px red; */
  ${center}
  h1 {
    font-size: clamp(0.5rem, 10vw, 3rem);
    /* border: solid 1px white; */
    width: 40vw;
    color: white;
  }
  p {
    font-size: 2rem;
    /* border: solid 1px black; */
    width: 45vw;
    color: white;
  }
  img {
    width: 20vw;
    border-radius: 20px;
  }
`;
