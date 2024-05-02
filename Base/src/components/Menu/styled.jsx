import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    text-decoration: none;
    list-style: none;
}
`;

export const Header = styled.header`
  /* border: solid 2px red; */
  height: 100vh;
  width: 15vw;
  background-color: #4a5051;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    width: 20vw;
  }
  @media (max-width: 451px) {
    height: 30vh;
    width: 100%;
  }
`;

export const BoxLogo = styled.div`
  /* border: solid 2px green; */
  height: 35vh;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  img{
    width: 10vw;
  }
  @media (max-width: 600px) {  
    img {
      width: 15vw;
    }
  @media (max-width: 450px) {
    flex-direction: row;
    width: 80vw;
    justify-content: space-between;
    /* border: solid 1px red; */
    img {
      width: 18vw;
    }
  }
`;

export const Title = styled.h2`
  /* border: solid 2px green; */
  width: 100%;
  text-align: center;
`;
export const Text = styled.p`
  /* border: solid 2px green; */
  width: 100%;
  text-align: center;
`;

export const BoxMenu = styled.nav`
  /* border: solid 1px yellow; */
  height: 35vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    width: 100%;
  }
  @media (max-width: 450px) {
    /* border: solid 1px green; */
    height: 30vh;
  }
`;

export const Lista = styled.li`
  /* border: solid 1px yellow; */
  height: 11.5vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px white;
  border-top: ${(props) => props.linha};
  a {
    color: white;
  }
  @media (max-width: 450px) {
    /* border: solid 1px blue; */
    height: 5vh;
    width: 100%;
  }
`;

export const BoxIcon = styled.div`
  height: 27vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 450px) {
    display: none;
  }
`;
