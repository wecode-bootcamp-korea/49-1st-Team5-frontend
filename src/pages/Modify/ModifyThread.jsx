import React, { useState } from "react";
import "./ModifyThread.scss";
import Button from "../../components/button/Button";

const ModifyThread = () => {
  const [modifyData, setModifyData] = useState({
    textarea: "",
  });

  const { textarea } = modifyData;

  const onChangeModifyData = (e) => {
    const { name, value } = e.target;

    setModifyData({ ...modifyData, [name]: value });
  };

  console.log(modifyData);
  return (
    <div className="thread-container">
      <div className="thread-main">
        <div className="thread-enter">
          <div className="thread-title-image">
            <img src="/images/cat.jpeg" alt="profile-image" />
          </div>

          <div className="thread-content">
            <div className="thread-name">Name</div>
            <textarea
              className="thread-textarea"
              placeholder="내용 수정하기"
              name="textarea"
              onChange={onChangeModifyData}
            />
          </div>
        </div>

        <div className="thread-footer">
          <Button scale="small" shape="outLine">
            취소
          </Button>
          <Button scale="small" shape="fill">
            게시
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModifyThread;
