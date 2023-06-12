import './App.css';
import React from "react";
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import { ToastContainer } from 'react-toastify'
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Signin from './pages/signin'
import Register from './pages/register'
import Welcome from './pages/welcome'
// import Test from './pages/test'
import About from './pages/about'
import Posts from './pages/posts'
import PostNew from './pages/postNew'

function App() {
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


  return (
    <>
    <Router>
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signin' element={<Signin />} />
        {/* <Route path='/signin' element={!user ? <Signin baseUrl={URL} /> : <Navigate to="/" />} /> */}
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/new' element={<PostNew />} />
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
