import React from "react";
import { useEffect, useState } from "react"
import { Route, Routes, Navigate } from 'react-router-dom'
// import Index from "../pages/index"
import Welcome from "../pages/welcome"
import About from '../pages/about'
import PostShow from '../pages/show'
import Register from '../pages/register'
import Signin from '../pages/signin'
import PostNew from '../pages/postNew'
import Posts from '../pages/posts'

const Main = (props) => {
  const [posts, setPosts] = useState(null)
  const [user, setUser] = useState(null)
  const [userPosts, setUserPosts] = React.useState([]) 
  const URL = process.env.REACT_APP_BASE_URL

  //fetches all posts from our backend
  const getPosts = async () => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        setPosts(data)
        console.log(data)
    } catch (error) {
        console.error(error.message);
        }
    }

  //fetches all user posts from our backend
  const getUserPosts = async () => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        setUserPosts(data)
        console.log(data)
    } catch (error) {
        console.error(error.message);
        }
    }

  const createPost = async (post) => {
    //make post request to create post
    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post),
    })
    // update our components list of posts
    getUserPosts()
    }

  const updatePost = async (post, id) => {
    // make post request to create post
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    // update list of posts
    getUserPosts();
    };
  
  const deletePost = async (id) => {
    if (!user || !user.token) {
        console.log('User token not available');
        return;
      }
    // make post request to create post
    await fetch(URL + id, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${user.token}`
          }
    });
    // update list of posts
    getUserPosts();
  };

  useEffect(() => {
      getPosts()
      getUserPosts()
  }, []);

  return (
    <main className="main-container">
        <Routes>
            <Route path="/" element={<Welcome posts={posts}/>} />    
            {/* <Route path="/welcome" element={<Welcome posts={posts}/>} /> */}
            <Route path="/about" element={<About posts={posts}/>} />
            <Route path="/signin" element={<Signin/>} />
            {/* <Route path='/signin' element={!user ? <Signin baseUrl={URL} /> : <Navigate to="/" />} /> */}
            <Route path="/register" element={<Register/>} />
            <Route path="/posts" element={<Posts posts={posts}/>} />
            <Route path="/posts/new" element={<PostNew posts={posts} createPost={createPost}/>} />
            {/* <Route path="/posts/:id/edit" element={<PostEdit posts={posts} updatePost={updatePost}/>} /> */}
            <Route path="/posts/:id" element={<PostShow posts={posts} deletePost={deletePost}/>} />
        </Routes>
    </main>
  )
}

export default Main

