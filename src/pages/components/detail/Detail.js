import React from "react";
import Button from "../../../components/button/Button";

const Detail = ({ props }) => {
  const {
    postId,
    profileImage,
    nickname,
    content,
    likeCount,
    comments,
    liked,
    setLiked,
  } = props;
  return (
    <div className="main-content">
      <div className="main-thread">
        <div className="main-profile">
          <div className="main-title">
            <img
              className="main-profile-img"
              src={profileImage}
              alt="profile_image"
            />
            <h4>{nickname}</h4>
          </div>
        </div>
        <div>
          <p>{content}</p>
        </div>
        <div className="main-profile-link">
          <div className="main-profile-btn">
            <Button shape="text">좋아요 {likeCount}</Button>
            <Button shape="text">댓글 {comments.length}</Button>
          </div>
          <Button
            shape="icon"
            onClick={() => {
              return setLiked(true);
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
    </div>
  );
};

export default Detail;
