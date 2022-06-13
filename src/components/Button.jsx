import styled from "styled-components";
import { corDestaque, corBranco, fonteMuli } from "../UI/variaveis";

const Button = styled.button`
  width: 173px;
  height: 48px;
  color: ${corBranco};
  font-size: 1rem;
  font-family: ${fonteMuli};
  font-weight: 600;
  background: ${corDestaque} 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #92207242;
  border-radius: 8px;
  border: none;
  opacity: 1;
  &:hover {
    cursor: pointer;
  }
`;

export default function Botao(props) {
  return <Button onClick={props.onClick}>{props.text}</Button>;
}
