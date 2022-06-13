import styled from "styled-components";

import { corDestaque, fonteMuli } from "../UI/variaveis";

export const InputFile = styled.input`
  display: none;
`;

export const LabelFile = styled.label`
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
