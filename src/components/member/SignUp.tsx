import { useRef, useState } from "react";

import { auth } from "../../firebase/firebaseSetup";
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
} from "../../styledComponents/SignUpIn";
import Logo from "../Logo";
import { useNavigate } from "react-router";
import firebase from "firebase/compat/app";
import InformModal from "../Common/InformModal";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [checkPwd, setCheckPwd] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [check, setCheck] = useState(true);
  const [msg, setMsg] = useState("");

  const dialogRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();

  const onChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "displayName") {
      setDisplayName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "pwd") {
      setPwd(value);
    } else if (name === "checkPwd") {
      setCheckPwd(value);
    }
  };
  const handleJoin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (pwd !== checkPwd) {
      setCheck(false);
      return;
    } else {
      setCheck(true);
    }
    try {
      const data = await auth.createUserWithEmailAndPassword(email, pwd);
      await data.user.updateProfile({
        displayName: displayName,
      });
      alert(`${displayName}님, 환영합니다. 회원가입 되었습니다.`);
      navigate("/");
      return;
    } catch (error) {
      const authError = error as firebase.auth.Error;
      if (!dialogRef.current) return;
      dialogRef.current.showModal();
      setTimeout(() => {
        if (!dialogRef.current) return;
        dialogRef.current.close();
      }, 1000);
      if (authError.code === "auth/email-already-in-use") {
        setMsg("이미 가입된 이메일입니다.");
      } else if (authError.code === "auth/weak-password") {
        setMsg("비밀번호는 6자리 이상 입력해주세요.");
      } else if (authError.code === "auth/wrong-password") {
        setMsg("비밀번호를 잘못 입력하였습니다. 다시 입력해주세요.");
      }
    }
  };
  return (
    <Container>
      <Wrap>
        <FormContainer>
          <Logo />
          <Form onSubmit={handleJoin}>
            <NameLabel>
              <span className="flex justify-start mb-1">이메일</span>
              <Input
                name="email"
                type="email"
                value={email}
                onChange={onChanged}
                placeholder="이메일을 입력해주세요"
                required
              />
            </NameLabel>
            <NameLabel>
              <span className="flex justify-start mb-1">비밀번호</span>
              <Input
                name="pwd"
                type="password"
                value={pwd}
                onChange={onChanged}
                placeholder="비밀번호을 입력해주세요"
                required
              />
            </NameLabel>
            <NameLabel>
              <span>비밀번호 확인</span>
              <Input
                name="checkPwd"
                type="password"
                value={checkPwd}
                onChange={onChanged}
                placeholder="비밀번호를 다시 입력해주세요."
              />
              <span className="text-sm text-error">
                {check === true ? "" : "비밀번호가 일치하지 않습니다."}
              </span>
            </NameLabel>
            <NameLabel>
              <span>닉네임</span>
              <Input
                type="text"
                name="displayName"
                value={displayName}
                onChange={onChanged}
                placeholder="닉네임을 입력해주세요"
              />
            </NameLabel>
            <MiniButton type="submit">회원가입</MiniButton>
          </Form>
        </FormContainer>
        <ChangeForm>
          <p className="p-2">
            계정이 있으신가요? <GoPage to={"/"}>로그인</GoPage>
          </p>
        </ChangeForm>
      </Wrap>
      <InformModal inform={msg} dialogRef={dialogRef} />
    </Container>
  );
}
