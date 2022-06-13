import { createGlobalStyle } from "styled-components";
import { corFundo } from "../UI/variaveis";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    background-color: ${corFundo};
  }
`;
