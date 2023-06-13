import React from "react";
import { Link } from "react-router-dom";
import Button from '../../components/button';
import '../../styles/container.css'

const Container = (props) => {
  const { post } = props;
  // const user = props.user

  return (
    <div className="container">
      <div className="row g-4">
        <div key={post._id} className="col-12 col-lg-4 col-xxl-3">
          <div className="post">
            <div className="post-body">
              <div className="user-info">
                {/* <h5 className="user-info-name">{post.name}</h5> */}
                <h5>{post.username}</h5>
              </div>
              <div className="container-content">
                <p className="post-text">{post.text}</p>
                <p className="post-image">{post.image}</p>
                <div className="post-icons">
                    <p className="post-likes">{post.likes}</p>
                    <p className="post-recyrpts">{post.recrypts}</p>
                    <p className="post-comments">{post.comments}</p>
                </div>
              </div>
              <div className="postButtons">
              <Button to={`/posts/new`} label="NEW" className='button' />
              <Button to={`/posts/:id/edit`} label="Edit" className='button' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
