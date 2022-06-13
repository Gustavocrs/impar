import styled from "styled-components";
import { corPrimaria, corTexto, fonteMuli } from "../UI/variaveis";

export const TituloCard = styled.h1`
  color: ${corPrimaria};
  font-family: ${fonteMuli};
  font-size: 32px;
  font-weight: bold;
  margin: 0 15px;
`;

export const Ptext = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${corTexto};
  font-family: ${fonteMuli};
  text-transform: uppercase;
  margin: 30px 0 10px 0;
`;

export const Hr = styled.hr`
  margin: 20px 0 30px 0;
`;
