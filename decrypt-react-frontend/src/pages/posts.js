
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from './userProfile/container'
import Button from '../components/button'

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

  return (
    <div>
      <h1>Posts Page</h1>
      <Button to={`/`}  label="Home" />
      <Button to={`/posts/new`}  label="Add" />
      
      {Array.isArray(posts) && posts.map((post) => (
        <div key={post._id}>
            <Container post={post} />
            
        </div>
    ))}
    </div>
  );
};

export default PostsPage;