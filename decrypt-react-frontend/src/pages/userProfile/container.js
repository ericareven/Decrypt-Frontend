import React from "react";
import { Link } from "react-router-dom";
import Button from '../../components/button'

const Container = (props) => {
  const posts = props.posts;
  const user = props.user;

  return (
    <div className="container">
      <div className="heading-container">
        <h1>My Posts</h1>
        <Button to={`/userPosts/new`}  label="NEW" />
      </div>
      <div className="row g-4">
        {posts.map((post) => {
          return (
            <div key={post._id} className="col-12 col-lg-4 col-xxl-3">
              <div className="post">
                <div className="post-body">
                  <h5 className="user-username">{user.username}</h5>
                  <p className="post-text">{post.text}</p>
                  <p className="post-image">{post.image}</p>
                  <div className="post-icons">
                    <p className="post-likes">{post.likes}</p>
                    <p className="post-recyrpts">{post.recrypts}</p>
                    <p className="post-comments">{post.comments}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;


