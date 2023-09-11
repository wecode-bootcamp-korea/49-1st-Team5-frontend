import React, { useState } from "react";
import "./CreateThread.scss";

const CreateThread = () => {
  const [createData, setCreateData] = useState({
    textarea: "",
  });

  const { textarea } = createData;

  const onChangeCreateData = (e) => {
    const { name, value } = e.target;

    setCreateData({ ...createData, [name]: value });
  };

  console.log(createData);
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
              placeholder="스레드를 시작하세요."
              name="textarea"
              onChange={onChangeCreateData}
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

export default CreateThread;
