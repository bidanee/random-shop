import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  padding: 0.5rem;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  top: 2rem;
  padding: 0.5rem;
  width: 100%;
  min-height: 5rem;
  z-index: 10;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 /0.1);
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Title = styled(Link)`
  display: flex;
  flex-shrink: 0;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  white-space: nowrap;
  color: #3ded97;
`;

const Header = () => {
  if (
    window.location.pathname === "/logIn" ||
    window.location.pathname === "/signUp"
  )
    return null;
  return (
    <div>
      <InfoContainer>
        <p>000님</p>
        <Link to={"/logIn"}>로그인</Link>
        <Link to={"/cs"}>고객센터</Link>
      </InfoContainer>
      <Nav>
        <Container>
          <GiHamburgerMenu size={24} />
          <Title to={"/"}>LandomMeal</Title>
          <input placeholder="검색창임" />
          <Link to={"/myPage"}>My Page</Link>
          <Link to={"/cart"}>Cart</Link>
        </Container>
      </Nav>
    </div>
  );
};
export default Header;
