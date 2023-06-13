import './App.css';
import React from "react";
import { useEffect, useState, useContext } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './context/authContext'
// import { ToastContainer } from 'react-toastify'
import Header from './components/header';
import Footer from './components/footer';
// import Main from './components/main';
import Signin from './pages/signin'
import Register from './pages/register'
import Welcome from './pages/welcome'
// import Test from './pages/test'
import About from './pages/about'
import PostsPage from './pages/posts'
import NewPost from './pages/newPost'
import EditPost from './pages/editPost'

function App() {


const { user } = useContext(AuthContext);
const [posts, setPosts] = useState([]);
const URL = process.env.REACT_APP_BASE_URL;
console.log(URL)
const id = posts.id;

const fetchPosts = async () => {
  try {
    const response = await fetch(`${URL}/`);
    const data = await response.json();
    setPosts(data.data);
  } catch (error) {
    console.error(error);
  }
};

const createPost = async (postData) => {
  try {
    await fetch(`${URL}/posts/`, {
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
    await fetch(`${URL}/posts/${id}`, {
      method: 'DELETE',
    });
    fetchPosts();
  } catch (error) {
    console.error(error);
  }
};

const editPost = async (posts, id) => {
  try {
    await fetch(`${URL}/posts/${id}`, {
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
        <Route path='/posts/:id/edit' element={<EditPost posts={posts} editPost={editPost} deletePost={deletePost}  setPosts={setPosts}/>} />
        {/* <Route path='/posts/:id' element={<EditPost posts={posts} />} /> */}
      </Routes>
      <Footer />
    </div>
    </Router>
    {/* <ToastContainer /> */}
    </>
  );
}

export default App;

// function App() {
//   const [posts] = React.useState([])
//   const { user } = useAuthContext()
//   const BASE_URL = process.env.REACT_APP_BASE_URL; 
//   return (
//     <>
//     <Router>
//       <main className='App'>
//         <Header />
//         <Routes>
//           <Route path='/' element={<Main posts={posts} user={user}/>} />
//           <Route path='/about' element={<About posts={posts}/>} />
//           <Route path='/' element={!user ? <Home baseUrl={BASE_URL} /> : <Navigate to="/" />} />
//           <Route path='/signin' element={!user ? <Signin baseUrl={BASE_URL} /> : <Navigate to="/test" />} />
//           <Route path='/register' element={!user ? <Register baseUrl={BASE_URL} /> : <Navigate to="/test" />} />
//           <Route path='/test' element={!user ? <Test baseUrl={BASE_URL} /> : <Navigate to="/test" />} />
//         </Routes>
//         <Footer />
//       </main>
//     </Router>
//     <ToastContainer />
//     </>
//   );
// }

// export default App;


  // const { user } = useAuthContext()
  // const BASE_URL = process.env.REACT_APP_BASE_URL;
  // const [posts, setPosts] = useState(null)
  // const [user, setUser] = useState(null)
  // const [userPosts, setUserPosts] = React.useState([]) 
  // const URL = process.env.REACT_APP_BASE_URL

//   return (
//     <div className="App">
//       <Router>
//         <Header />
//         <div className="pages">
//           <Routes>
//             <Route 
//               path="/" 
//               element={!user ? <Main/> : <Navigate to="/" />} 
//             />
//             <Route 
//               path="/welcome" 
//               element={user ? <Welcome baseUrl={BASE_URL} /> : <Navigate to="/" />} 
//             /> 
//             <Route 
//               path="/signin" 
//               element={!user ? <Signin baseUrl={BASE_URL} /> : <Navigate to="/welcome" />} 
//             /> 
//             <Route 
//               path="/register" 
//               element={!user ? <Register baseUrl={BASE_URL} /> : <Navigate to="/welcome" />} 
//             /> 
//           </Routes>
//         </div>
//         <Footer />
//       </Router>
//       {/* <ToastContainer /> */}
//     </div>
//   );
// }