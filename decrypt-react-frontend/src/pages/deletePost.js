import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/delete.css'

const BASE_URL = process.env.REACT_APP_BASE_URL;

function DeletePost({ posts = [], editPost, deletePost }) {
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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!post) {
//       console.error("Post not found");
//       return;
//     }
//     try {
//       await editPost(postData, id);
//       navigate('/posts');
//     } catch (error) {
//       console.error(error);
//     }
//   };

  const handleDelete = async () => {
    try {
      await deletePost(post._id);
      navigate('/posts');
    } catch (error) {
      console.error(error);
    }
  };
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
      <h3>Are you sure you want to delete this post? It cannot be recovered!</h3>
      <button type='button' className='button delete' style={{ marginTop: '1rem' }} onClick={handleDelete}>
            Delete
      </button>
      </div>
      </section>
    </div>
  );
}

export default DeletePost;