import React from "react";
import "./BasicInfomation.scss";

const BasicInfomation = (props) => {
  return (
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
          onChange={props.onChange}
          name="email"
        />
        <input
          className="text-input"
          type="password"
          placeholder="비밀번호"
          onChange={props.onChange}
          name="password"
        />
        <input
          className="text-input"
          type="password"
          placeholder="비밀번호 확인"
          onChange={props.onChange}
          name="passwordCheck"
        />
      </div>
    </form>
  );
};

export default BasicInfomation;
