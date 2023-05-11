import styled from "styled-components";

import {
  ChangeForm,
  Container,
  Form,
  FormContainer,
  GoPage,
  Input,
  MiniButton,
  NameLabel,
  Wrap,
} from "../styledComponents/SignUpIn";
import Logo from "../components/Logo";
import { FormEvent, useState } from "react";
import { auth } from "../firebase/firebaseSetup";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { loginState, nickNameState } from "../atoms";

const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0.2rem 18px;
`;
const Line = styled.div`
  flex-shrink: 1;
  height: 1px;
  flex-grow: 1;
  display: block;
  background-color: black;
`;
const Text = styled.div`
  margin: 0 18px;
`;
const LogoTitle = styled(Logo)`
  width: 8rem;
  height: 3rem;
`;
const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [, setLogIn] = useRecoilState(loginState);
  const [, setNickName] = useRecoilState(nickNameState);
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pwd);
      alert("로그인되었습니다.");
      setLogIn(true);
      setNickName(auth.currentUser.displayName);

      navigate("/");
    } catch (error) {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("구글 로그인이 성공적으로 되었습니다.");
      navigate("/");
      setLogIn(true);
      setNickName(auth.currentUser.displayName);
    } catch (error: any) {
      if (error.code === "로그인 실패") {
        alert("로그인에 실패 하였습니다.");
      } else {
        alert(error.message);
      }
    }
  };
  return (
    <Container>
      <Wrap>
        <FormContainer>
          <LogoTitle />
          <Form onSubmit={handleSubmit}>
            <NameLabel>
              이메일
              <Input
                type="email"
                placeholder="이메일을 입력해주세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </NameLabel>
            <NameLabel>
              비밀번호
              <Input
                type="password"
                placeholder="비밀번호을 입력해주세요"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
            </NameLabel>
            <MiniButton>로그인</MiniButton>
            <Divider>
              <Line></Line>
              <Text>또는</Text>
              <Line></Line>
            </Divider>
            <button onClick={handleGoogleLogin}>구글로 로그인하기</button>
          </Form>
        </FormContainer>
        <ChangeForm>
          <p>
            계정이 없으신가요? <GoPage to={"/signUp"}>회원가입</GoPage>
          </p>
        </ChangeForm>
      </Wrap>
    </Container>
  );
};

export default Login;
