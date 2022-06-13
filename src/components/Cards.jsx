import styled from "styled-components";
import { corBranco, corErro, corFundo, fonteMuli } from "../UI/variaveis";

import IconeLixeira from "../img/Icon-trash.svg";
import IconeEditar from "../img/Icon-edit.svg";
import Icone from "../img/icone.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 234px;
  height: 267px;
  border: 1px solid ${corBranco};
  border-radius: 8px;
  background-color: ${corBranco};
  margin: 20px;
  box-shadow: 0px 3px 6px #e5e5e5;
`;

const CardTopo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    background-color: ${corFundo};
    padding: 18px;
    border-radius: 50px;
    border: 1px solid #e4e4e4;
    margin: 20px 0;
  }

  p {
    font-family: ${fonteMuli};
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    color: #263238;
    width: 191px;
  }
`;

const CardBase = styled.div`
  display: flex;
  width: 200px;
  margin: -7px auto;
`;

const DivOpcoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 0px;
  padding: 7px;

  img {
    padding: 0 5px;
  }
  p {
    font-size: 15px;
    font-family: ${fonteMuli};
    text-align: center;
    opacity: 50%;
    &:hover {
      opacity: 100%;
      color: ${corErro};
      cursor: pointer;
    }
  }
`;

const Hr = styled.hr`
  width: 169.23px;
  border-color: #f0eff0;
  opacity: 30%;
  margin: 10px 0;
`;

const Hrg = styled(Hr)`
  width: 237px;
  margin: 18px 0;
`;

export default function Cards({ itens }) {
  return (
    <>
      {itens.map((item, index) => (
        <Container key={index}>
          <div>
            <CardTopo>
              <img src={Icone} alt="Icone" />
              <Hr />
              <p>{item.titulo}</p>
            </CardTopo>
            <Hrg />
            <CardBase>
              <DivOpcoes>
                <img src={IconeLixeira} alt="Icone Lixeira" />
                <p>Excluir</p>
              </DivOpcoes>

              <DivOpcoes>
                <img src={IconeEditar} alt="Icone Editar" />
                <p>Editar</p>
              </DivOpcoes>
            </CardBase>
          </div>
        </Container>
      ))}
    </>
  );
}
