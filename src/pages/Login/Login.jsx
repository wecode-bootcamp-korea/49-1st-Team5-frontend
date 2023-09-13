import React, { useState } from "react";
import "./Login.scss";
import logo from "../../assets/images/Logo.png";
import name from "../../assets/images/logo_wecode.png";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";

const Login = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userInfo;

  const handleUserInfo = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  let regex = new RegExp(
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  );
  const isActiveButton = regex.test(email) && password.length >= 10;

  console.log(userInfo);

  const goToMain = () => {
    // navigate("/");

    // const JoinToken = localStorage.getItem("JoinToken");

    // if (!JoinToken) {
    //   alert("회원가입을 먼저 진행해주세요");
    navigate("/JoinInfo");
    // }

    //////////////////////////

    // fetch("http://10.58.52.106:8000/users/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     if (result.message === "LOGIN_COMPLETE") {
    //       localStorage.setItem("token", result.token);
    //       navigate("/");
    //     } else if (result.message === "EMAIL_OR_PASSWORD_ERROR") {
    //       alert("아이디, 비밀번호를 확인해주세요");
    //     } else if (result.message === "PASSWORD_LENGTHERROR") {
    //       alert("비밀번호를 확인해주세요");
    //     } else {
    //       alert("로그인 실패");
    //     }
    //   });
  };

  return (
    <div className="main">
      <div className="login">
        <div className="login_img">
          <img className="logo" src={logo} alt="위코드 로고" />
          <img className="name" src={name} alt="위코드 이름" />
        </div>
        <form className="login_form">
          <Input
            type="text"
            placeholder="이메일"
            name="email"
            value={email}
            onChange={handleUserInfo}
            required
          />
          <Input
            type="password"
            placeholder="비밀번호"
            name="password"
            value={password}
            onChange={handleUserInfo}
            required
          />
          <button
            type="button"
            onClick={goToMain}
            className={`loginButton ${isActiveButton ? "" : "disabled"}`}
            disabled={!isActiveButton}
          >
            로그인
          </button>
        </form>
        <ul className="search">
          <li>
            <Link to="/joininfo">회원가입</Link>
          </li>
          <li> 비밀번호 찾기</li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
