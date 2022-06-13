import { createGlobalStyle } from "styled-components";
import { corFundo, fonteMuli } from "../UI/variaveis";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    background-color: ${corFundo};
  }

  .swal2-popup {
    font-size: 0.8rem !important;
    font-family: ${fonteMuli} !important;
  }
`;
