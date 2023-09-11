import React, { useEffect, useState } from "react";
import "./Main.scss";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [userData, setUserData] = useState([]);
  const [showList, setShowList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetch("/data/ThreadMain.json")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  // 1. fetch를 통해 받아온 데이터를 userData 저장 초기 값은 빈 배열(전체데이터)
  // 2. 받아온 데이터틀 나눌 두 번째 useState 생성 초기값은 빈 배열  (showList)
  // 3. 페이지를 넘길 때마다 showList에 5개씩 데이터를 넣어주기 위해 pageNumber useState 생성  초기값은 1(pageNumber)
  // 4. useEffect를 통해 userData가 변경될 떄마다 showList에 5개씩 데이터를 넣어주기 (for문 사용)
  // 5. showList에 넣어줄 때는 배열로 넣어주어야 하기 때문에, 빈 배열로 된 변수를 하나 더 생성
  // 6. 만든 빈 배열 속에 push를 이용해서 userData를 넣어준다.
  // 7. storage에 넣은 데이터를 setShowList를 이용해 showList에 넣어준다.
  // 8. setShowList에 새로운 데이터를 넣어주기 위해 pageNumber가 변할 때도 useEffect를 재 렌더링하도록 해준다.
  // 9. userData가 안들어올 때를 대비해서 if 조건문을 추가해준다.
  // 10. pageNumber의 갯수보다 userData의 갯수가 적을 때를 대비해서 새로운 limit 변수를 만들어준다.
  // 11. map을 이용해 showList를 랜더링 해준다.

  useEffect(() => {
    const storage = [];
    const limit =
      userData.length > pageNumber * 5 ? pageNumber * 5 : userData.length;
    if (!userData) return;
    for (let i = 0; i < limit; i++) {
      storage.push(userData[i]);
    }
    setShowList(storage);
  }, [userData, pageNumber]);

  const navigator = useNavigate();

  console.log(showList);
  return (
    <div className="main-container">
      <div className="main-content">
        {showList.map((data) => {
          return (
            <div className="main-thread">
              <div className="main-title">
                <img
                  className="main-profile-img"
                  src={data.profile}
                  alt="profile-image"
                />
                <h4>{data.name}</h4>
              </div>
              <div>
                <p>{data.textarea}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="main-footer">
        <button
          className="main-create-btn"
          onClick={() => {
            navigator("/createthread");
          }}
        >
          글 쓰기
        </button>
      </div>
    </div>
  );
};

export default Main;
