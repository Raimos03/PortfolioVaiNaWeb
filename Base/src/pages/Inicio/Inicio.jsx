import Menu from "../../components/Menu/Menu";
import * as S from "./style";

export default function Inicio() {
  return (
    <S.Main>
      <Menu />
      <S.Container>
        <S.BoxInicio>
          <div>
            <h1>Olá meu nome e Marquinho sou dev front-end</h1>
            <p>
              Não é a linguagem de programação que define o programador, mas sim
              sua lógica.
            </p>
          </div>
          <img
            src="https://img.odcdn.com.br/wp-content/uploads/2024/03/mark-zuckerberg.jpg"
            alt=""
          />
        </S.BoxInicio>
      </S.Container>
    </S.Main>
  );
}
