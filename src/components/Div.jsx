import styled from "styled-components";
import { corBranco } from "../UI/variaveis";

export const DivTransparente = styled.div`
  background-color: ${corBranco};
  width: 55%;
  height: 100vh;
  opacity: 70%;
`;

export const DivCriar = styled.div`
  background-color: ${corBranco};
  width: 45%;
  padding: 30px;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
`;
export const Section = styled.section`
  .esconder {
    transform: translateX(100%);
    display: none;
  }
`;
