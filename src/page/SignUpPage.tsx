import {
  Container,
  Wrap,
  FormContainer,
  Form,
  Input,
  ChangeForm,
  NameLabel,
  MiniButton,
  GoPage,
} from "../styledComponents/SignUpIn";

import Logo from "../components/Logo";

const SignUp = () => {
  return (
    <Container>
      <Wrap>
        <FormContainer>
          <Logo />
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
            계정이 있으신가요? <GoPage to={"/logIn"}>로그인</GoPage>
          </p>
        </ChangeForm>
      </Wrap>
    </Container>
  );
};

export default SignUp;
