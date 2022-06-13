import { useState } from "react";
import styled from "styled-components";
import dbLista from "./dbListaCards.json";
import Cards from "./Cards";
import Botao from "../components/Button";
import Input from "../components/Input";
import NovoCard from "./NovoCard";
import { corPrimaria, corBranco, fonteMuli } from "../UI/variaveis";

import Fundo from "../img/fundo-busca.png";
import Lupa from "../img/lupa.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .sumir {
    transform: translateX(100%);
  }
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

export default function Busca() {
  let lista = dbLista;
  const [busca, setBusca] = useState("");
  const [teste, setTeste] = useState(false);

  const listaFiltrada = lista.filter(
    (item) =>
      item.titulo.toLocaleLowerCase().includes(busca.toLocaleLowerCase()) ||
      // eslint-disable-next-line
      item.id == busca
  );

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
          <Botao text="Novo Card" onClick={() => setTeste(!teste)} />
        </ContainerBusca>
        <ContainerCards>
          {busca ? <Cards itens={listaFiltrada} /> : <Cards itens={lista} />}
        </ContainerCards>
      </Container>
      {teste && <NovoCard />}
    </>
  );
}
