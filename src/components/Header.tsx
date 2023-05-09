import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-size: 15px;
`;
const Nav = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  padding: 0 0.5rem;
  width: 100%;
  min-height: 5rem;
  z-index: 10;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 /0.1);
`;
const NavContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 3rem;
`;

const Title = styled(Link)`
  padding-top: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: 3rem;
  margin-right: 1rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  white-space: nowrap;
  color: #3ded97;
`;
const Input = styled.input`
  width: 10rem;
  font-size: 15px;
`;

const Header = () => {
  if (
    window.location.pathname === "/logIn" ||
    window.location.pathname === "/signUp"
  )
    return null;
  return (
    <Nav>
      <NavContainer>
        <Logo>
          <GiHamburgerMenu size={24} />
          <Title to={"/"}>LandomMeal</Title>
        </Logo>
        <label>
          <Input placeholder="검색창임" />
          <span></span>
        </label>
        <InfoContainer>
          <p>000님</p>
          <Link to={"/logIn"}>로그아웃</Link>
          <Link to={"/cs"}>고객센터</Link>
        </InfoContainer>
        <Link to={"/myPage"}>My Page</Link>
        <Link to={"/cart"}>Cart</Link>
      </NavContainer>
    </Nav>
  );
};
export default Header;
