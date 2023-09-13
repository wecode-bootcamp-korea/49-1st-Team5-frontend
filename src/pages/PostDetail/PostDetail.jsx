import React, { useEffect, useState } from "react";
import "./PostDetail.scss";
import Button from "../../components/button/Button";
// import axios from "axios";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { postId } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  // const getData = async () => {
  //   const resp = await (await axios.get(`/localhost:3000/main/${postId}`)).data;
  //   setData(resp.data);
  //   setLoading(false);
  // };

  // useEffect(() => {

  // }, []);

  console.log(data);

  return (
    <div className="postdetail">
      <div className="postdetail-container">
        <div className="postdetail-back">
          <Button scale="small" shape="icon">
            <img src="/images/Back_arrow.svg" alt="Back_arrow" />
            <label for="prev">뒤로</label>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
