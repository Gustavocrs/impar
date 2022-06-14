import styled from "styled-components";
import { corBranco } from "../UI/variaveis";

export const DivTransparente = styled.div`
  background-color: ${corBranco};
  width: 55%;
  height: 100vh;
  opacity: 70%;
  @media screen and (max-width: 480px) {
    width: 10%;
  }
`;

export const DivCriar = styled.div`
  background-color: ${corBranco};
  width: 45%;
  padding: 30px;
  @media screen and (max-width: 480px) {
    width: 90%;
  }

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
