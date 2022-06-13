import styled from "styled-components";
import { useState } from "react";
import Swal from "sweetalert2";
import Botao from "./Button";
import IconeCriar from "../img/icone_criar.svg";

import {
  corBranco,
  corPrimaria,
  corDestaque,
  corTexto,
  fonteMuli,
} from "../UI/variaveis";

const Section = styled.section`
  .esconder {
    display: none;
  }
`;

const Container = styled.div`
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

const DivTransparente = styled.div`
  background-color: ${corBranco};
  width: 65%;
  height: 100vh;
  opacity: 70%;
`;

const DivCriar = styled.div`
  background-color: ${corBranco};
  width: 35%;
  padding: 30px;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
`;

const TituloCard = styled.h1`
  color: ${corPrimaria};
  font-family: ${fonteMuli};
  font-size: 32px;
  font-weight: bold;
  margin: 0 15px;
`;

const Ptext = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${corTexto};
  font-family: ${fonteMuli};
  text-transform: uppercase;
  margin: 30px 0 10px 0;
`;

const MiniBox = styled.div`
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

const Hr = styled.hr`
  margin: 20px 0 30px 0;
`;

const InputFile = styled.input`
  display: none;
`;

const LabelFile = styled.label`
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-family: ${fonteMuli};
  font-weight: bold;
  color: ${corDestaque};
  text-align: right;
  border: 1px solid ${corDestaque};
  box-shadow: 0px 3px 6px #e763162e;
`;

export default function CriarCard() {
  const [esconde, setEsconde] = useState(false);

  function Alert() {
    Swal.fire("Esta funcionalidade ainda não foi implementada");
  }

  return (
    <Section>
      <Container className={esconde ? "esconder" : ""}>
        <DivTransparente onClick={() => setEsconde(!esconde)}></DivTransparente>
        <DivCriar>
          <div>
            <img src={IconeCriar} alt="Imagem criar card" />
            <TituloCard>Criar card</TituloCard>
          </div>
          <Hr />
          <Ptext>Digite um nome para o card</Ptext>
          <MiniBox>
            <input type="text" placeholder="Digite o título" />
          </MiniBox>
          <Ptext>Inclua uma imagem para aparecer no card</Ptext>
          <MiniBox>
            <div className="alinhar">
              <span id="file-name"></span>
              <LabelFile for="selecao-arquivo">Escolher arquivo</LabelFile>
              <InputFile type="file" id="selecao-arquivo" />
            </div>
          </MiniBox>
          <Hr />
          <div className="alinhar">
            <Botao text="Criar card" onClick={Alert} />
          </div>
        </DivCriar>
      </Container>
    </Section>
  );
}
