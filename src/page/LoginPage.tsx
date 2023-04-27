import styled from "styled-components";
import logo from "../assets/random.png";
import {
  ChangeForm,
  Container,
  Form,
  FormContainer,
  Input,
  MiniButton,
  NameLabel,
  Wrap,
} from "../styledComponents/SignUpIn";

export const Image = styled.img`
  width: 10rem;
  height: 10rem;
`;

const Divd = styled.div`
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
const Login = () => {
  return (
    <Container>
      <Wrap>
        <FormContainer>
          <Image src={logo} />
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
            <Divd>
              <Line></Line>
              <Text>또는</Text>
              <Line></Line>
            </Divd>
            <button>구글로 로그인하기</button>
          </Form>
        </FormContainer>
        <ChangeForm>
          <p>
            계정이 없으신가요? <a>회원가입</a>
          </p>
        </ChangeForm>
      </Wrap>
    </Container>
  );
};

export default Login;
