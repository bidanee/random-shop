import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../service/atoms";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseSetup";
import Search from "./Search";

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
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MypageContainer = styled.div`
  display: flex;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 15px;
`;
const Info = styled.p`
  margin: 0 1.2rem 0 0.5rem;
  cursor: pointer;
  :hover {
    color:#3ded97
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  font-size: 2rem;
  line-height: 1.75rem;
  font-weight: 700;
  white-space: nowrap;
  color: #3ded97;
`;

const InfoLink = styled(Link)`
  margin: 0 5px;
  :hover{
    color:#3ded97;
  }
`;

const Header = () => {
  const isLogin = JSON.parse(localStorage.getItem("user"));
  const [, setLogin] = useRecoilState(loginState);
  const navigate = useNavigate();
  const handleLogout = () => {
    if (!isLogin) return;
    const logout = () => {
      signOut(auth);
    };
    logout();
    setLogin(false);
    navigate("/logIn");
  };
  const getPerson = JSON.parse(localStorage.getItem("user"));
  return (
    <Nav>
      <NavContainer>
        <Logo>
          <Title to={"/"}>LandomMeal</Title>
        </Logo>

        <Search />

        <InfoContainer>
          {JSON.parse(localStorage.getItem("user")) ? (
            <>
              <p>{getPerson.displayName}님</p>
              <Info onClick={handleLogout}>로그아웃</Info>
            </>
          ) : (
            <Link to={"/logIn"}>로그인</Link>
          )}
          <MypageContainer>
            <InfoLink to={"/myPage"}>MyPage</InfoLink>
            <InfoLink to={"/cart"}>Cart</InfoLink>
            <InfoLink to={"/cs"}>고객센터</InfoLink>
          </MypageContainer>
        </InfoContainer>
      </NavContainer>
    </Nav>
  );
};
export default Header;
