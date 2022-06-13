import styled from "styled-components";

import { corPrimaria, corBranco, fonteMuli } from "../UI/variaveis";

import Fundo from "../img/fundo-busca.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .sumir {
    transform: translateX(100%);
  }
`;

export const ContainerBusca = styled(Container)`
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

export const ContainerCards = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
`;

export const ContainerNovoCard = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  height: 100vh;
  transition: 500ms;
  z-index: 3;

  .alinhar {
    width: 100%;
    margin: auto 5px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const Box = styled.div`
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

export const MiniBox = styled.div`
  background-color: ${corBranco};
  border: 1px solid gray;
  border-radius: 8px;
  width: 100%;
  height: 60px;

  input {
    outline: none;
    border: none;
    padding: 10px;
    width: 100%;
    height: 23px;
    font-size: 18px;
    font-family: ${fonteMuli};
  }
`;
