import React from "react";
import "./JoinDone.scss";
import { Link, useNavigate } from "react-router-dom";
import banner_square from "../../assets/images/banner_square.png";
import Button from "../../components/button/Button";
// import back from "../../assets/images/back.png"

const JoinDone = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/login");
  };

  return (
    <div className="main">
      <div className="joinDoneMain">
        <header className="deadHeader">
          {/* <Link to="/">
            <img className="backToLogin" src={back} alt="뒤로"/>
          </Link>뒤로 */}
        </header>
        <div className="joinDoneImg">
          <img src={banner_square} alt="회원가입 완료" />
          <div>
            <p>회원 가입되었습니다!</p>
            <p>이제 로그인해주세요.</p>
          </div>
        </div>
        <footer>
          <div className="joinDonefooter">
            <Button
              scale="large"
              shape="fill"
              onClick={() => {
                navigate("/");
              }}
            >
              확인
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default JoinDone;