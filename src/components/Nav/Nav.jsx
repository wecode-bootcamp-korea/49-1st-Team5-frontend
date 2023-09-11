import React from "react";
import "./Nav.scss";

const Nav = (props) => {
  return (
    <div className="header">
      <div className="back">
        <button
          className="prev"
          type="submit"
          onClick={() => {
            console.log(props.onClick);
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
        <label className="label" for="prev">
          뒤로
        </label>
      </div>
    </div>
  );
};

export default Nav;
