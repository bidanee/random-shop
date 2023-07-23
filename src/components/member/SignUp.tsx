import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router";
import { ValidationFormProps } from "../../interface/member/interface";
import { validate } from "./singupValidate";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseSetup";

export default function SignUp() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [resultEmailMsg, setResultMsg] = useState("");
  const [resultNickNameMsg, setResultNickNameMsg] = useState("");
  const [usableEmail, setUsableEmail] = useState(false);
  const [usableNickName, setUsableNickName] = useState(false);
  const [onChangeEmail, setOnChangeEmail] = useState("");
  const [onChangeNickName, setOnChangeNickName] = useState("");
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationFormProps>({
    resolver: yupResolver(validate),
    mode: "onChange",
  });

  const CheckEmail = async () => {
    if (email === "") {
      alert("이메일을 입력하세요.");
      return;
    }
    try {
      const result = await fetchSignInMethodsForEmail(auth, email);
      if (result[0] === "password") {
        setErrorMessage("이미 사용중인 이메일입니다.");
      } else if (result.length === 0) {
        setErrorMessage("사용 가능한 이메일 입니다.");
      } else {
        setErrorMessage("구글로 가입된 이메일입니다.");
      }
    } catch (error) {
      console.error("이메일 에러", error);
    }
  };
  const handleJoin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setErrorMessage("");
      const joinedUser = await createUserWithEmailAndPassword(auth, email, pwd);
      await updateProfile(joinedUser.user, { displayName: nickname });

      alert("회원가입이 완료되었습니다.");
      navigate("/");
      return joinedUser.user;
    } catch (e: any) {
      console.error(e);
    }
  };
  return (
    <div className="mt-24">
      <div className="">
        <div />
        <form className="flex flex-col" onSubmit={handleSubmit(handleJoin)}>
          <label htmlFor="email">
            이메일
            <input
              id="email"
              type="email"
              placeholder="이메일을 입력해주세요"
              required
              {...register("email", {
                onChange: (e) => {
                  setOnChangeEmail(e.target.value);
                  setUsableEmail(false);
                  setResultMsg("중복확인을 눌러 주세요");
                },
              })}
            />
          </label>
          <button onClick={CheckEmail}>중복확인</button>
          <label>
            비밀번호
            <input
              id="pw"
              type="password"
              placeholder="비밀번호을 입력해주세요"
              required
              {...register("pw")}
            />
          </label>
          <label>
            비밀번호 확인
            <input
              id="checkPw"
              type="password"
              placeholder="비밀번호를 다시 입력해주세요."
              {...register("checkPw")}
            />
          </label>
          <label>
            닉네임
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              {...register("nickName", {
                onChange: (e) => {
                  setOnChangeNickName(e.target.value);
                },
              })}
            />
          </label>
          <button type="submit">회원가입</button>
        </form>
      </div>
      <div>
        <p>
          계정이 있으신가요?{" "}
          <button onClick={() => navigate("/")}>로그인</button>
        </p>
      </div>
    </div>
  );
}
