import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./JoinInfo.scss";
import Nav from "../../components/Nav/Nav";

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
    email,
    password,
    passwordCheck,
    nickname,
    profileImg,
    phoneNumber,
    nationalNumber,
    birthDay,
  } = memberData;

  const now = new Date();

  let years = [];
  for (let i = now.getFullYear(); i >= 1970; i--) {
    years.push(i);
  }

  let months = [];
  for (let i = 1; i <= 12; i++) {
    if (i < 10) {
      months.push("0" + i.toString());
    }
    months.push(i.toString());
  }

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

  console.log(memberData, nationalNumber + phoneNumber);

  return (
    <div className="join-info">
      <div className="join-info-container">
        {/* <Nav
        onClick={() => {
          Navigate("/");
        }}
      /> */}

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

          <form className="user-information">
            <div className="basic-information">
              <p>기본 정보</p>
              <span>필수 사항</span>
            </div>
            <div className="input-infomation">
              <input
                className="text-input"
                type="email"
                placeholder="이메일"
                onChange={onChangeUserInfo}
                name="email"
              />
              <input
                className="text-input"
                type="password"
                placeholder="비밀번호"
                onChange={onChangeUserInfo}
                name="password"
              />
              <input
                className="text-input"
                type="password"
                placeholder="비밀번호 확인"
                onChange={onChangeUserInfo}
                name="passwordCheck"
              />
            </div>
          </form>

          <form className="user-information" encType="multipart/form-data">
            <div className="basic-information">
              <p>닉네임</p>
              <span>필수 사항</span>
            </div>
            <div className="input-infomation">
              <input
                className="text-input"
                type="text"
                placeholder="닉네임"
                onChange={onChangeUserInfo}
                name="nickname"
              />
              <div className="profile-upLoad">
                <input
                  type="file"
                  id="file"
                  onChange={onChangeUserInfo}
                  name="profileImg"
                />
                {/* <label className="file-upLoadBtn" for="file">
                  파일 선택
                </label> */}
                <label for="file">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M24.3959 11.7678L12.0206 24.1431C10.9975 25.1662 10.9972 26.8294 12.0211 27.8533C13.045 28.8772 14.7096 28.8783 15.7327 27.8551L30.2735 13.3143C32.4925 11.0954 32.4911 7.49108 30.2712 5.27117C28.0527 3.05271 24.4486 3.05144 22.2296 5.27039L7.68879 19.8112C4.27406 23.2259 4.27542 28.77 7.68989 32.1845C11.1044 35.5989 16.6484 35.6003 20.0632 32.1856L29.9636 22.2851"
                      stroke="#CCCCCC"
                      stroke-width="2"
                      stroke-miterlimit="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </label>
                <input
                  className="file-input"
                  type="text"
                  placeholder="파일을 선택해주세요."
                  accept="image/*"
                  value={profileImg}
                />
              </div>
            </div>
          </form>

          <form className="user-information">
            <div className="option-information">
              <p>전화번호</p>
              <span>선택 사항</span>
            </div>
            <div className="phoneNumber-input">
              <select
                className="select-box"
                onChange={onChangeUserInfo}
                name="nationalNumber"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#CCCCCC"
                    stroke-miterlimit="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <option>010</option>
                <option>011</option>
                <option>016</option>
                <option>017</option>
              </select>
              <input
                className="phone-input"
                type="text"
                placeholder="휴대폰 번호를 입력해주세요."
                onChange={onChangeUserInfo}
                name="phoneNumber"
              />
            </div>
          </form>

          <form className="user-information">
            <div className="option-information">
              <p>생일</p>
              <span>선택 사항</span>
            </div>

            <div className="birth-input">
              <select className="select-box-one">
                <option>1998년</option>
              </select>
              <select className="select-box-two">
                <option>1월</option>
              </select>
              <select className="select-box-two">
                <option>1일</option>
              </select>
            </div>
          </form>
        </div>
        <form className="join-button">
          <button
            className="btn"
            type="button"
            style={{ background: idDataCheck ? "#2d71f7" : "gray" }}
            disabled={idDataCheck ? false : true}
          >
            회원 가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinInfo;
