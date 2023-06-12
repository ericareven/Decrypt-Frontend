import './App.css';
import React from "react";
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import { useAuthContext } from './hooks/useAuthContext'
import { ToastContainer } from 'react-toastify'
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
// import Home from './pages/home'
import Signin from './pages/signin'
import Register from './pages/register'
// import Test from './pages/test'
import About from './pages/about'
import Posts from './pages/posts'

function App() {

  // const [posts, setPosts] = useState(null)
  // const [user, setUser] = useState(null)
  // const [userPosts, setUserPosts] = React.useState([]) 
  // const URL = process.env.REACT_APP_BASE_URL

  return (
    <>
//  <Router>
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signin' element={<Signin />} />
        {/* <Route path='/signin' element={!user ? <Signin baseUrl={URL} /> : <Navigate to="/" />} /> */}
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
      {/* <Main /> */}
      <Footer />
    </div>
    </Router>
    <ToastContainer />
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
