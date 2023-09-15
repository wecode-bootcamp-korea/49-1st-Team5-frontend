import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./JoinInfo.scss";
import Nav from "../../components/Nav/Nav";
import BasicInfomation from "../components/JoinInfo/BasicInformation/BasicInfomation";
import NickNameInfo from "../components/JoinInfo/NickNameInfo/NickNameInfo";
import Phone from "../components/JoinInfo/Phone/Phone";
import Birth from "../components/JoinInfo/Birth/Birth";
import Button from "../../components/button/Button";

const JoinInfo = () => {
  const [memberData, setMemberData] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    nickname: "",
    profileImg: "",
    nationalNumber: "",
    phoneNumber: "",
    birthDay: "",
  });

  const [dateForm, setDateForm] = useState({
    year: "1970",
    month: "01",
    day: "01",
  });

  const {
    email /*이메일*/,
    password /*비밀번호*/,
    passwordCheck /*비밀번호 확인*/,
    nickname /*닉네임*/,
    profileImg /*프로필 사진*/,
    phoneNumber /*휴대폰 번호*/,
    nationalNumber /*국번*/,
    birthYear /*년도*/,
    birthMonth /*월*/,
    birthDay /*일*/,
  } = memberData;

  /* 셀렉트 박스 날짜 선택 사항*/
  const { year, month, day } = dateForm;

  const now = new Date();

  let years = [];
  for (let i = now.getFullYear(); i >= 1970; i--) {
    years.push(i);
  }

  let months = [];
  for (let i = 1; i <= 12; i++) {
    if (i < 10) {
      months.push("0" + i.toString());
    } else {
      months.push(i.toString());
    }
  }
  // console.log(memberData);

  let days = [];
  let date = new Date(dateForm.year, dateForm.month, 0).getDate();
  for (let i = 1; i <= date; i++) {
    if (i < 10) {
      days.push("0" + i.toString());
    } else {
      days.push(i.toString());
    }
  }

  const navigator = useNavigate();

  const onChangeUserInfo = (e) => {
    const { name, value } = e.target;
    setMemberData({ ...memberData, [name]: value });
  };

  const FullNumber = nationalNumber + phoneNumber;
  const FullBirth = `${year}-${month}-${day}`;
  console.log(FullBirth);

  const JoinInfoBtn = () => {
    fetch("http://10.58.52.106:8000/Users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: email,
        nickname: nickname,
        password: password,
        phone_number: FullNumber,
        birth_day: FullBirth,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then((result) => {
        console.log(result);
        // if (result.message === "SUCCESS") {
        //   alert("로그인 완료");
        // }
      });
  };
  let regex = new RegExp(
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  );

  const idDataCheck =
    regex.test(email) && password.length >= 10 && nickname.length >= 1;

  console.log(memberData);
  return (
    <div className="join-info">
      <div className="join-info-container">
        <div className="header">
          <div
            className="handle-back"
            onClick={() => {
              navigator("/");
            }}
          >
            <Button shape="icon">
              <img src="/images/Back_arrow.svg" alt="Back_arrow" />
              <label for="prev">뒤로</label>
            </Button>
          </div>
        </div>

        <div className="joinInfo-container">
          <div className="join-infoTitle">
            <h1>회원가입</h1>
          </div>

          <BasicInfomation
            onChange={onChangeUserInfo}
            password={memberData.password}
            passwordCheck={memberData.passwordCheck}
          />

          <NickNameInfo onChange={onChangeUserInfo} profileImg={profileImg} />

          <Phone onChange={onChangeUserInfo} />

          <Birth
            year={year}
            years={years}
            month={month}
            months={months}
            day={day}
            days={days}
            dateForm={dateForm}
            setDateForm={setDateForm}
          />
        </div>
        <form
          className="join-button"
          onClick={() => {
            navigator("/joindone");
          }}
        >
          <Button
            scale="large"
            shape="fill"
            disabled={!idDataCheck}
            onClick={JoinInfoBtn}
          >
            회원 가입
          </Button>
        </form>
      </div>
    </div>
  );
};

export default JoinInfo;
