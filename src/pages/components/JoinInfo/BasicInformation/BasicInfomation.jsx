import React from "react";
import "./BasicInfomation.scss";
import Input from "../../../../components/Input/Input";

const BasicInfomation = (props) => {
  const isPasswordSame =
    props.password === (props.passwordCheck && props.password.length >= 1) ||
    (props.password === "" && props.passwordCheck === "");

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
          type="password"
          placeholder="비밀번호"
          onChange={props.onChange}
          name="password"
          shape={isPasswordSame ? "done" : "error"}
        />
        <Input
          type="password"
          placeholder="비밀번호 확인"
          onChange={props.onChange}
          name="passwordCheck"
          shape={isPasswordSame ? "done" : "error"}
        />
        {isPasswordSame ? (
          <p className="pwDoneMessage">
            <img
              className="doneImg"
              src="/images/done.png"
              alt="비밀번호 일치"
            />
            &nbsp;비밀번호가 일치합니다
          </p>
        ) : (
          <p className="pwErrorMessage">
            <img
              className="errorImg"
              src="/images/ic_caption.png"
              alt="비밀번호 불일치"
            />
            &nbsp;비밀번호가 일치하지 않습니다
          </p>
        )}
      </div>
    </form>
  );
};

export default BasicInfomation;
