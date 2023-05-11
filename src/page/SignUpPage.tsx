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
import { useState } from "react";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/firebaseSetup";
import { useNavigate } from "react-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import styled from "styled-components";

const SignUp = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmedPwd, setConfirmedPwd] = useState("");

  const navigate = useNavigate();

  const checkNickName = async (nickname: string) => {
    try {
      const que = query(
        collection(db, "user"),
        where("nickname", "==", nickname)
      );
      const queryDocs = await getDocs(que);
      return queryDocs.docs.length > 0;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  const handleJoin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pwd !== confirmedPwd) {
      setErrorMessage("비밀번호가 일치하지 않습니다");
      return;
    }
    const isNicknameDuplicated = await checkNickName(nickname);
    if (isNicknameDuplicated) {
      setErrorMessage("중복된 닉네임입니다.");
      return;
    }
    try {
      setErrorMessage("");
      const joinedUser = await createUserWithEmailAndPassword(auth, email, pwd);
      await updateProfile(joinedUser.user, { displayName: nickname });
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
      return joinedUser.user;
    } catch (error) {
      console.error(error);
      // console.log(error);
      // switch (error.code) {
      //   case "auth/weak-password":
      //     setErrorMessage("비밀번호는 6자리 이상이어야 합니다");
      //     break;
      //   case "auth/invalid-email":
      //     setErrorMessage("잘못된 이메일 형식입니다");
      //     break;
      //   case "auth/email-already-in-use":
      //     setErrorMessage("이미 가입되어 있는 계정입니다");
      //     break;
      //   default:
      //     setErrorMessage("회원가입 중 오류가 발생했습니다");
      //     break;
      // }
    }
  };
  return (
    <Container>
      <Wrap>
        <FormContainer>
          <Logo />
          <Form onSubmit={handleJoin}>
            <NameLabel htmlFor="email">
              이메일
              <Input
                id="email"
                type="email"
                placeholder="이메일을 입력해주세요"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </NameLabel>
            <NameLabel>
              비밀번호
              <Input
                type="password"
                placeholder="비밀번호을 입력해주세요"
                required
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
              />
            </NameLabel>
            <NameLabel>
              비밀번호 확인
              <Input
                type="password"
                placeholder="비밀번호을 다시 입력해주세요"
                required
                value={confirmedPwd}
                onChange={(e) => setConfirmedPwd(e.target.value)}
              />
            </NameLabel>
            {errorMessage == "비밀번호가 일치하지 않습니다" ||
              (errorMessage == "이미 가입되어 있는 계정입니다" && (
                <Err>{errorMessage}</Err>
              ))}
            <NameLabel>
              닉네임
              <Input
                type="text"
                placeholder="닉네임을 입력해주세요"
                required
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </NameLabel>
            {errorMessage === "중복된 닉네임입니다." && <p>{errorMessage}</p>}
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
  );
};
const Err = styled.p`
  font-size: 12px;
  color: red;
`;

export default SignUp;
