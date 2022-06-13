import styled from "styled-components";
import { corBranco, fonteMuli } from "../UI/variaveis";

export const InputStyled = styled.input`
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

export default function Input(props) {
  return(
  <InputStyled
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
  />
  )
}
