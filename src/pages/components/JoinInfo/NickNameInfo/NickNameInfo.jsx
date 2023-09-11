import React from "react";
import "./NickNameInfo.scss";

const NickNameInfo = (props) => {
  return (
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
          onChange={props.onChange}
          name="nickname"
        />
        <div className="profile-upLoad">
          <input
            type="file"
            id="file"
            onChange={props.onChange}
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
            value={props.profileImg}
          />
        </div>
      </div>
    </form>
  );
};

export default NickNameInfo;
