import React, { useEffect, useState } from "react";
import "./Main.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

const Main = () => {
  const [userData, setUserData] = useState([]);
  const [showList, setShowList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [liked, setLiked] = useState(false);

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

  // useEffect(() => {

  // },[])

  const navigator = useNavigate();
  const isLiked = () => {
    if (!liked) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  };

  // console.log(showList);
  return (
    <div className="main-container">
      <div className="main-content">
        {showList.map((data, i) => {
          return (
            <div className="main-thread" key={data}>
              <div className="main-profile">
                <div className="main-title">
                  {/* <p>{data.postId}</p> */}
                  <img
                    className="main-profile-img"
                    src={data.profileImage}
                    alt="profile_image"
                  />
                  <h4>{data.nickname}</h4>
                </div>
                {data.isMyPost ? (
                  <div className="upDate">
                    <span>{data.createdAt}</span>
                    <Button shape="text" color="red">
                      삭제
                    </Button>
                    <Button
                      shape="text"
                      onClick={() => {
                        navigator("/ModifyThread");
                      }}
                    >
                      수정
                    </Button>
                  </div>
                ) : (
                  <span>{data.createdAt}</span>
                )}

                <span />
              </div>
              <div>
                <Button
                  shape="content"
                  onClick={() => {
                    navigator(`/main/${data.postId}`);
                  }}
                >
                  {data.content}
                </Button>
              </div>
              <div className="main-profile-link">
                <div className="main-profile-btn">
                  <Button shape="text">좋아요 {data.likeCount}</Button>
                  <Button shape="text">댓글 {data.comments.length}</Button>
                </div>
                <Button
                  shape="icon"
                  onClick={() => {
                    return setLiked(i);
                  }}
                >
                  {!liked ? (
                    <img src="/images/heart.svg" alt="nonColor_heart" />
                  ) : (
                    <img src="/images/heartColor.svg" alt="color_herat" />
                  )}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="main-footer">
        <Button
          scale="small"
          shape="fill"
          onClick={() => {
            navigator("/createthread");
          }}
        >
          글 쓰기
        </Button>
      </div>
    </div>
  );
};

export default Main;
