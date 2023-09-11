import React from "react";
import "./Phone.scss";

const Phone = (props) => {
  return (
    <form className="user-information">
      <div className="option-information">
        <p>전화번호</p>
        <span>선택 사항</span>
      </div>
      <div className="phoneNumber-input">
        <select
          className="select-box"
          onChange={props.onChange}
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
          onChange={props.onChange}
          name="phoneNumber"
        />
      </div>
    </form>
  );
};

export default Phone;
