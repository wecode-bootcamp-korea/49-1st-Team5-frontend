import React, { useState } from "react";
import "./CreateThread.scss";
import Button from "../../components/button/Button";

const CreateThread = () => {
  const [createData, setCreateData] = useState({
    textArea: "",
  });

  const { textArea } = createData;

  const onChangeCreateData = (e) => {
    const { name, value } = e.target;

    setCreateData({ ...createData, [name]: value });
  };

  const fetchReq = () => {
    // fetch("http://10.58.52.134:8000/users/ ", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //     authorization: localStorage.getItem("token");
    //   },
    //   body: JSON.stringify({
    //     content: createData
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    // if (result.status === 200) {
    //   alert("게시글이 등록되었습니다")
    //   navigate("/");
    //   console.log(createData);
    // } else (result.status === 400) {
    //   alert("게시글이 등록되지 않았습니다");
    // }
    // });
  };

  return (
    <div className="thread-container">
      <div className="thread-main">
        <div className="thread-enter">
          <div className="thread-title-image">
            <img src="/images/cat.jpeg" alt="profile_image" />
          </div>

          <div className="thread-content">
            <div className="thread-name">Name</div>
            <textarea
              className="thread-textArea"
              placeholder="스레드를 시작하세요."
              name="textArea"
              onChange={onChangeCreateData}
            />
          </div>
        </div>

        <div className="thread-footer">
          <Button scale="small" shape="outLine">
            취소
          </Button>
          <Button scale="small" shape="fill" onClick={fetchReq}>
            게시
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateThread;
