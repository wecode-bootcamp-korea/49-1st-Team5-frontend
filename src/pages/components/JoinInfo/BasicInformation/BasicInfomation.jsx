import React from "react";
import "./BasicInfomation.scss";
import Input from "../../../../components/Input/Input";

const BasicInfomation = (props) => {
  return (
    <form className="user-information">
      <div className="basic-information">
        <p>기본 정보</p>
        <span>필수 사항</span>
      </div>
      <div className="input-infomation">
        <Input
          className="text-input"
          type="email"
          placeholder="이메일"
          onChange={props.onChange}
          name="email"
        />
        <Input
          className="text-input"
          type="password"
          placeholder="비밀번호"
          onChange={props.onChange}
          name="password"
        />
        <Input
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
