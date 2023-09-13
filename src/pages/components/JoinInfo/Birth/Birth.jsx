import React from "react";
import "./Birth.scss";

const Birth = (props) => {
  const { year, years, month, months, day, days, dateForm, setDateForm } =
    props;
  return (
    <form className="user-information">
      <div className="option-information">
        <p>생일</p>
        <span>선택 사항</span>
      </div>

      <div className="birth-input">
        <select
          className="select-box-one"
          value={year}
          onChange={(e) => {
            setDateForm({ ...dateForm, year: e.target.value });
          }}
        >
          {years.map((item) => {
            return (
              <option value={item} key={item}>
                {item}년
              </option>
            );
          })}
        </select>
        <select
          className="select-box-two"
          value={month}
          onChange={(e) => {
            setDateForm({ ...dateForm, month: e.target.value });
          }}
        >
          {months.map((item) => {
            return (
              <option value={item} key={item}>
                {item}월
              </option>
            );
          })}
        </select>
        <select
          className="select-box-two"
          value={day}
          onChange={(e) => {
            setDateForm({ ...dateForm, day: e.target.value });
          }}
        >
          {days.map((item) => {
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
