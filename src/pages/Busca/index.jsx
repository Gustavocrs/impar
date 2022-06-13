import { useState } from "react";
import {
  Container,
  ContainerBusca,
  ContainerCards,
  ContainerNovoCard,
  Box,
  MiniBox,
} from "../../components/Container";
import { DivTransparente, DivCriar, Section } from "../../components/Div";
import { InputFile, LabelFile } from "../../components/Form";
import { TituloCard, Ptext, Hr } from "../../components/Basicos";
import Cards from "../../components/Cards";
import Botao from "../../components/Button";
import Input from "../../components/Input";
import dbLista from "../../database/dbListaCards.json";
import Swal from "sweetalert2";
import Lupa from "../../img/lupa.svg";
import IconeCriar from "../../img/icone_criar.svg";

export default function Busca() {
  let lista = dbLista;
  const [busca, setBusca] = useState("");
  const [esconde, setEsconde] = useState(true);

  const listaFiltrada = lista.filter(
    (item) =>
      item.titulo.toLocaleLowerCase().includes(busca.toLocaleLowerCase()) ||
      // eslint-disable-next-line
      item.id == busca
  );

  function Alert() {
    Swal.fire("Esta funcionalidade ainda não foi implementada");
  }

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
          <Botao text="Novo Card" onClick={() => setEsconde(!esconde)} />
        </ContainerBusca>
        <ContainerCards>
          {busca ? <Cards itens={listaFiltrada} /> : <Cards itens={lista} />}
        </ContainerCards>
      </Container>

      <Section>
        <ContainerNovoCard className={esconde ? "esconder" : ""}>
          <DivTransparente
            onClick={() => setEsconde(!esconde)}
          ></DivTransparente>
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
                <LabelFile htmlFor="selecao-arquivo">
                  Escolher arquivo
                </LabelFile>
                <InputFile type="file" id="selecao-arquivo" />
              </div>
            </MiniBox>
            <Hr />
            <div className="alinhar">
              <Botao text="Criar card" onClick={Alert} />
            </div>
          </DivCriar>
        </ContainerNovoCard>
      </Section>
    </>
  );
}
