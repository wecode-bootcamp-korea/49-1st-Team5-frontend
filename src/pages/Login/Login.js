
import React, { useState } from "react";
import "./Login.scss";
import logo from "../../assets/images/Logo.png";
import name from "../../assets/images/logo_wecode.png";
import { Link, useNavigate }  from 'react-router-dom'


const Login = () => {

  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/main") 
 }
    // fetch("http://10.58.52.134:8000/users/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify({
    //     email: "mjpark@gmail.com",
    //     name: "mjpark",
    //     password: "123456789@",
    //   }),
    // });
    


  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  
  const saveUserId = (event) =>{setUserId(event.target.value)};
  const saveUserPw = (event) =>{setUserPw(event.target.value)};

  const activeButton = userId.includes('@') && userId.includes('.') && userPw.length >= 10;
  console.log(activeButton);


  return (
    <div className="main">
      <div className="login">
        <div className="login_img">
          <img className="logo" src={logo} alt="위코드 로고" />
          <img className="name" src={name} alt="위코드 이름" />
        </div>       
        <form className="login_form">
          <input type="text" placeholder="이메일" className="mail" onChange={saveUserId} required/>
          <input type="password" placeholder="비밀번호" className="password" onChange={saveUserPw} required/>
          <button type="button" 
                  onClick={goToMain} 
                  // className={`${activeButton ? "active" : "disabled"}`}
                  style={{backgroundColor: activeButton ? "" : "gray" }} 
                  disabled = {!activeButton}>로그인
          </button>
        </form>          
        <ul className="search">
          <li><Link to="/main">회원가입</Link></li>
          <li> 비밀번호 찾기</li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
