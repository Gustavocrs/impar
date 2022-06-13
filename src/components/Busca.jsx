import { useState, useEffect } from "react";
import styled from "styled-components";
import dbLista from "./dbListaCards.json";
import Cards from "./Cards";
import {
  corPrimaria,
  corDestaque,
  corBranco,
  fonteMuli,
} from "../UI/variaveis";

import Fundo from "../img/fundo-busca.png";
import Lupa from "../img/lupa.svg";

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

const Box = styled.div`
  background: transparent url(${Fundo}) 0% 0% no-repeat padding-box;
  background-size: cover;
  background-position: 0 -70px;
  width: 100%;
  height: 240px;
  margin-top: 63px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    background-color: ${corBranco};
    margin-bottom: 75px;
    top: 147px;
    left: 168px;
    width: 1046px;
    height: 75px;
    cursor: pointer;
  }

  img {
    margin: 0 20px;
  }
`;

const Input = styled.input`
  background-color: ${corBranco};
  width: 80%;
  height: 30px;
  margin: auto 20px;
  border: 0;
  font-size: 24px;
  font-family: ${fonteMuli};
  font-weight: 100;
  opacity: 70%;
  outline: none;
  &:hover {
    opacity: 100%;
    cursor: pointer;
  }
`;

export default function Busca() {
  const [lista, setLista] = useState(dbLista);
  const [listaFilter, setListaFilter] = useState([]);
  const [busca, setBusca] = useState("");

  let listaBusca = [];

  useEffect(() => {
    listaBusca = lista.filter((item) => item.titulo == busca);
    setListaFilter(listaBusca);
  }, [busca]);

  return (
    <>
      <Container>
        <Box>
          <div>
            <Input
              type="text"
              placeholder="Digite aqui sua busca..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <img src={Lupa} alt="Lupa" />
          </div>
        </Box>
      </Container>
      <Container>
        <ContainerBusca>
          <h1>Resultado da Busca</h1>
          <button>Novo Card</button>
        </ContainerBusca>
        <ContainerCards>
          {busca ? <Cards itens={listaFilter} /> : <Cards itens={lista} />}
        </ContainerCards>
      </Container>
    </>
  );
}
