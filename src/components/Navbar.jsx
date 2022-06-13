import styled from "styled-components";
import { corPrimaria, corSecundaria } from "../UI/variaveis";
import { fonteMuli } from "../UI/variaveis";
import Logo from "../img/logo-teste.svg";

const Nav = styled.nav`
  background: transparent
    linear-gradient(272deg, ${corSecundaria} 0%, ${corPrimaria} 100%) 0% 0%
    no-repeat padding-box;
  width: 100%;
  height: 64px;
  position: fixed;
  display: flex;
  align-items: center;
  font-family: ${fonteMuli};
  z-index: 2;

  img {
    margin-left: 23px;
  }
`;

export default function Navbar() {
  return (
    <>
      <Nav>
        <img src={Logo} alt="Logo" />
      </Nav>
    </>
  );
}
