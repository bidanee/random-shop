// const navigate = useNavigate();
// const [email, setEmail] = useState("");
// const [pwd, setPwd] = useState("");

// const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
//   e.preventDefault();
//   setEmail(e.target.value);
// };

// const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
//   e.preventDefault();
//   setPwd(e.target.value);
// };

// const handleSubmit = (e: React.FormEvent) => {
//   e.preventDefault();
//   createUserWithEmailAndPassword(auth, email, pwd)
//     .then(() => {
//       alert("회원가입 성공");
//       navigate("/logIn");
//     })
//     .catch((e) => {
//       alert(e);
//     });
// };
/* 
  return (
    <Container>
      <Wrap>
        <FormContainer>
          <Logo />
          <Form onSubmit={handleSubmit}>
            <NameLabel htmlFor="email">
              이메일
              <Input
                id="email"
                type="email"
                placeholder="이메일을 입력해주세요"
                onChange={handleEmail}
                value={email}
              />
            </NameLabel>
            <NameLabel>
              비밀번호
              <Input
                type="password"
                placeholder="비밀번호을 입력해주세요"
                onChange={handlePwd}
                value={pwd}
              />
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
            <MiniButton type="submit">회원가입</MiniButton>
          </Form>
        </FormContainer>
        <ChangeForm>
          <p>
            계정이 있으신가요? <GoPage to={"/logIn"}>로그인</GoPage>
          </p>
        </ChangeForm>
      </Wrap>
    </Container>
  ); */
