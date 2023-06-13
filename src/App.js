import './App.css';
import React from "react";
import { useEffect, useState, useContext  } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from './context/authContext'
// import { ToastContainer } from 'react-toastify'
import Header from './components/header';
import Footer from './components/footer';
import Signin from './pages/signin'
import Register from './pages/register'
import Welcome from './pages/welcome'
import About from './pages/about'
import PostsPage from './pages/posts'
import NewPost from './pages/newPost'
import EditPost from './pages/editPost'
import DeletePost from './pages/deletePost'
// import Test from './pages/test'

function App() {


const { user } = useContext(AuthContext);
const [posts, setPosts] = useState([]);
const URL = process.env.REACT_APP_BASE_URL;
console.log(URL)


const fetchPosts = async () => {
  try {
    const response = await fetch(`${URL}`);
    const data = await response.json();
    setPosts(data.data);
  } catch (error) {
    console.error(error);
  }
};

const createPost = async (postData) => {
  try {
    await fetch(`${URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    fetchPosts();
  } catch (error) {
    console.error(error);
  }
};

const deletePost = async (id) => {
  try {
    await fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });
    fetchPosts();
  } catch (error) {
    console.error(error);
  }
};

const editPost = async (posts, id) => {
  try {
    await fetch(`${URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(posts),
    });
    fetchPosts();
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchPosts();
}, []);




  return (
    <>
    <Router>
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/signin' element={<Signin />} />
        {/* <Route path='/signin' element={!user ? <Signin baseUrl={URL} /> : <Navigate to="/" />} /> */}
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<PostsPage posts={posts} />} />
        <Route path='/posts/new' element={<NewPost createPost={createPost} setPosts={setPosts}/>} />
        <Route path='/posts/:id/edit' element={<EditPost posts={posts} editPost={editPost} />} />
        <Route path='/posts/:id' element={<DeletePost posts={posts} deletePost={deletePost}/>} />
      </Routes>
      <Footer />
    </div>
    </Router>
    {/* <ToastContainer /> */}
    </>
  );
}

export default App;
