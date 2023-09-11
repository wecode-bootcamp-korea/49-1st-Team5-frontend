import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./JoinInfo.scss";
import Nav from "../../components/Nav/Nav";
import BasicInfomation from "../components/JoinInfo/BasicInformation/BasicInfomation";
import NickNameInfo from "../components/JoinInfo/NickNameInfo/NickNameInfo";
import Phone from "../components/JoinInfo/Phone/Phone";
import Birth from "../components/JoinInfo/Birth/Birth";

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

  console.log(year, month, day);

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

  const idDataCheck =
    email.includes("@") &&
    email.includes(".") &&
    password.length >= 10 &&
    nickname.length >= 1;
  const passwordDataCheck = password === passwordCheck;

  // console.log(memberData, nationalNumber + phoneNumber);

  return (
    <div className="join-info">
      <div className="join-info-container">
        <div className="header">
          <div className="handle-back">
            <button
              className="prev"
              type="submit"
              onClick={(e) => {
                e.preventDefault();

                navigator("/");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M22.5 10L12.5 20L22.5 30"
                  stroke="black"
                  stroke-width="2"
                  stroke-miterlimit="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <label for="prev">뒤로</label>
          </div>
        </div>

        <div className="joinInfo-container">
          <div className="join-infoTitle">
            <h1>회원가입</h1>
          </div>

          <BasicInfomation onChange={onChangeUserInfo} />

          <NickNameInfo onChange={onChangeUserInfo} profileImg={profileImg} />

          <Phone onChange={onChangeUserInfo} />

          <Birth
            year={year}
            month={month}
            day={day}
            years={years}
            months={months}
            days={days}
            dateForm={dateForm}
            setDateForm={setDateForm}
          />
        </div>
        <form className="join-button">
          <button
            className="btn"
            type="button"
            // style={{
            //   background: idDataCheck && passwordDataCheck ? "#2d71f7" : "gray",
            // }}
            disabled={idDataCheck && passwordDataCheck ? false : true}
          >
            회원 가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinInfo;
