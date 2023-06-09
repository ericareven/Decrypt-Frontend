import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/editposts.css'
import Button from '../components/button'

const BASE_URL = process.env.REACT_APP_BASE_URL;

function EditPost({ posts = [], editPost, deletePost }) {
  const navigate = useNavigate();
  const { id } = useParams()
  const [isClicked, setIsClicked] = useState(false);
//   const params = useParams()
//   const id = params.id
//   const posts = props.posts
  const post = posts.find((p) => p._id === id)

  const [postData, setPostData] = useState(
    post
      ? {
          text: post.text,
          image: post.image,
        }
      : {
          text: "",
          image: "",
        }
  );

  useEffect(() => {
    // Fetch the post data from the backend
    const fetchPost = async () => {
      try {
        const response = await fetch(`${BASE_URL}`); 
        const data = await response.json();
        // setPosts(data.data);
        setPostData({
          text: data.text,
          image: data.image,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!post) {
      console.error("Post not found");
      return;
    }
    try {
      await editPost(postData, id);
      navigate('/posts');
    } catch (error) {
      console.error(error);
    }
  };

//   const handleDelete = async () => {
//     try {
//       await deletePost(post._id);
//       navigate('/posts');
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await editPost(postData, post._id);
      
//       navigate('/posts');
//     } catch (error) {
//       console.error(error);
//     }
//   };
  const toggleColor = () => {
    setIsClicked(!isClicked);
  };
  const formClassName = isClicked ? 'white' : '';

 
//   useEffect(() => {
//     fetchPosts();
//   }, []);

  return (
    <div className='edit-page'>
      <section className='new'>
      <div className='new-container'>
      <form className={formClassName} onSubmit={handleSubmit}>
      <div className={`toggle-bar ${isClicked ? 'active' : ''}`} onClick={toggleColor}>
            <div className="toggle-handle"></div>
          </div>
      <h1>Edit Post</h1>
        <textarea
          className='textarea third-input'
          name="text"
          value={postData.text}
          placeholder="text"
          onChange={handleChange}
        /><br></br>
        <input
          className='fourth-input'
          type="text"
          name="image"
          value={postData.image}
          placeholder="Image URL"
          onChange={handleChange}
        /><br></br>
        <button type="submit" className="button add" style={{width:'20vw', color:'black', marginTop:'3rem'}} role="button">Post</button>
      </form>
      </div>
      </section>
    </div>
  );
}

export default EditPost;