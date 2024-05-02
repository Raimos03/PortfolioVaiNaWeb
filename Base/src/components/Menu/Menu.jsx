import React from "react";
import * as S from "./styled";
import link from "../../img/link.png";
import git from "../../img/git.png";
import face from "../../img/face.png";

import { Link } from "react-router-dom";

export default function Sobre() {
  return (
    <>
      <S.Header>
        <S.BoxLogo>
          <img src="https://a91mcico4j0e.avataruol.com.br/avatar.jpg" alt="" />
          <S.Title>Carlos</S.Title>
          <S.Text>Front-end Developer</S.Text>
        </S.BoxLogo>
        <S.BoxMenu>
          <ul>
            <S.Lista linha="solid 1px white">
              <Link to="/">Inicio</Link>
            </S.Lista>
            <S.Lista>
              <Link to="/sobre">Sobre</Link>
            </S.Lista>
            <S.Lista>
              <Link to="/projetos">Projetos</Link>
            </S.Lista>
          </ul>
        </S.BoxMenu>
        <S.BoxIcon>
          <a href="#">
            <img src={link} alt="" />
          </a>
          <a href="#">
            <img src={git} alt="" />
          </a>
          <a href="#">
            <img src={face} alt="" />
          </a>
        </S.BoxIcon>
      </S.Header>
    </>
  );
}
