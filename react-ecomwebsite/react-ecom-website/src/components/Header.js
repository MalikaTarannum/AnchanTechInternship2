import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return <MainHeader>
    <NavLink to="/">
        <img src="./images/logo.png" />
    </NavLink>
    <Nav />
  </MainHeader>;
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;
