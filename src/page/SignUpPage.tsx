import styled from "styled-components";
import logo from "../assets/random.png";
import {
  Container,
  Wrap,
  FormContainer,
  Form,
  Input,
  ChangeForm,
  NameLabel,
  MiniButton,
} from "../styledComponents/SignUpIn";
import { Image } from "./LoginPage";

const Title = styled.h1`
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;
const SignUp = () => {
  return (
    <Container>
      <Wrap>
        <FormContainer>
          <Image src={logo} />
          <Form>
            <NameLabel htmlFor="email">
              이메일
              <Input
                id="email"
                type="email"
                placeholder="이메일을 입력해주세요"
              />
            </NameLabel>
            <NameLabel>
              비밀번호
              <Input type="password" placeholder="비밀번호을 입력해주세요" />
            </NameLabel>
            <NameLabel>
              비밀번호 확인
              <Input
                type="password"
                placeholder="비밀번호을 다시 입력해주세요"
              />
            </NameLabel>
            <NameLabel>
              이름
              <Input type="text" placeholder="이름을 입력해주세요" />
            </NameLabel>
            <MiniButton>회원가입</MiniButton>
          </Form>
        </FormContainer>
        <ChangeForm>
          <p>
            계정이 있으신가요? <a>로그인</a>
          </p>
        </ChangeForm>
      </Wrap>
    </Container>
  );
};

export default SignUp;
