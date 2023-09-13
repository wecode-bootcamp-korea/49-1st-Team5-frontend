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

  // console.log(createData);
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
          <Button scale="small" shape="fill">
            게시
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateThread;
