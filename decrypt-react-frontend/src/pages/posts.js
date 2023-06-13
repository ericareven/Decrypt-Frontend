
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from './userProfile/container'
import Button from '../components/button'
import '../styles/posts.css'

const BASE_URL = process.env.REACT_APP_BASE_URL;

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
    console.log(posts)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/`);
        if (response.ok) {
          const data = await response.json();
          setPosts(data.data);
          console.log(data)
        } else {
          console.error('Error fetching posts:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

//   const handleLike = (postId) => {
//     // Update the like status for the post with the given postId
//     // You can make an API request here to update the like status in the backend
//     // After updating the like status, you can refresh the posts list or update the specific post in the state
//     console.log('Liked post:', postId);
//   };

  return (
    <div className="posts-page">
      <h1>Timeline</h1>
      <Button to={`/`}  label="Home" />
      <Button to={`/posts/new`}  label="Add" className='button' />
      
      {Array.isArray(posts) && posts.map((post) => (
        <div key={post._id} className='container'>
            <Container post={post} />
            {/* <Button onClick={() => handleLike(post._id)} label="Like" /> */}
        </div>
    ))}
    </div>
  );
};

export default PostsPage;