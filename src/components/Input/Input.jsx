import React from "react";
import "./Input.scss";

const Input = (props) => {
  const {
    className = "inputBox",
    type,
    placeholder,
    onChange,
    name,
    id,
    value,
    disabled,
    scale,
    shape,
  } = props;

  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      id={id}
      value={value}
      disabled={disabled}
      scale={scale}
      shape={shape}
    />
  );
};

// props

// className : "string"
// type : "string" text / email / password / file
// placeholder: "string"
// onChange: {function}
// name: "string"
// id: "string"
// value: "string"
// disabled: {boolean} true or false, 입력 필드 활성화 또는 비활성화
// status: {boolean} 입력 상태에 관한 추가 정보, 예: "error", "success" 등
// scale:
// shape:

// 1. props name 재배치

export default Input;
