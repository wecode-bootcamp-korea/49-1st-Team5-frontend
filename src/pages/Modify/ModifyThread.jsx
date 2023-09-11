import React, { useState } from "react";
import "./ModifyThread.scss";

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
          <button className="thread-footer-cancel">취소</button>
          <button className="thread-footer-create">게시</button>
        </div>
      </div>
    </div>
  );
};

export default ModifyThread;
