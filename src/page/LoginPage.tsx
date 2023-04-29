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
  return (
    <Container>
      <Wrap>
        <FormContainer>
          <LogoTitle />
          <Form>
            <NameLabel>
              이메일
              <Input type="email" placeholder="이메일을 입력해주세요" />
            </NameLabel>
            <NameLabel>
              비밀번호
              <Input type="password" placeholder="비밀번호을 입력해주세요" />
            </NameLabel>
            <MiniButton>로그인</MiniButton>
            <Divider>
              <Line></Line>
              <Text>또는</Text>
              <Line></Line>
            </Divider>
            <button>구글로 로그인하기</button>
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
