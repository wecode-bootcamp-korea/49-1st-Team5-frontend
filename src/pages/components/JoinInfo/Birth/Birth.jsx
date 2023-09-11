import React from "react";
import "./Birth.scss";

const Birth = (props) => {
  return (
    <form className="user-information">
      <div className="option-information">
        <p>생일</p>
        <span>선택 사항</span>
      </div>

      <div className="birth-input">
        <select
          className="select-box-one"
          value={props.Birthyear}
          onChange={(e) => {
            props.setDateForm({ ...props.dateForm, year: e.target.value });
          }}
        >
          {props.years.map((item) => {
            return (
              <option value={item} key={item}>
                {item}년
              </option>
            );
          })}
        </select>
        <select
          className="select-box-two"
          value={props.month}
          onChange={(e) => {
            props.setDateForm({ ...props.dateForm, month: e.target.value });
          }}
        >
          {props.months.map((item) => {
            return (
              <option value={item} key={item}>
                {item}월
              </option>
            );
          })}
        </select>
        <select
          className="select-box-two"
          value={props.day}
          onChange={(e) => {
            props.setDateForm({ ...props.dateForm, day: e.target.value });
          }}
        >
          {props.days.map((item) => {
            return (
              <option value={item} key={item}>
                {item}일
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
};

export default Birth;
