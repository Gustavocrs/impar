import styled from "styled-components";

import dbLista from "./dbListaCards.json";

import { listaBusca } from "./Busca";

import Cards from "./Cards";

import {
  corPrimaria,
  corDestaque,
  corBranco,
  fonteMuli,
} from "../UI/variaveis";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ContainerBusca = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  margin-bottom: 15px;

  h1 {
    color: ${corPrimaria};
    font-family: ${fonteMuli};
    font-size: 32px;
    font-weight: 300;
  }

  button {
    width: 173px;
    height: 48px;
    color: ${corBranco};
    font-family: ${fonteMuli};
    font-weight: 600;
    background: ${corDestaque} 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #92207242;
    border-radius: 8px;
    border: none;
    opacity: 1;

    &:hover {
      cursor: pointer;
    }
  }
`;

const ContainerCards = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
`;

export const lista = dbLista;

export default function Resultado() {
  return (
    <Container>
      <ContainerBusca>
        <h1>Resultado da Busca</h1>
        <button>Novo Card</button>
      </ContainerBusca>
      <ContainerCards>
        {listaBusca ? <Cards itens={lista} /> : <Cards itens={listaBusca} />}
      </ContainerCards>
    </Container>
  );
}
