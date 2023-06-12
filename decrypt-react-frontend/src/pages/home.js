// import React from "react";


// const Home = (props) => {
//     return (
//         <div className="home">
//             <div className="transparent-box">
//                 <div className="home-content">
//                     <h1>Welcome to Decrypt</h1>
//                     <p></p>
//                     <div className="home-content-buttons">
//                         {/* <Button to="/register" label="Join"/> */}
//                     </div>
//                 </div>
//                 {/* <img className="home-img" src="/home15.png"></img> */}
//             </div>
//         </div>
//     )
// }

// export default Home;

// import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import PostForm from '../components/PostForm'
// import PostShow from '../components/PostShow'
// import Spinner from '../components/Spinner'
// import { getGoals, reset } from '../features/goals/goalSlice'

// function Home() {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const { user } = useSelector((state) => state.auth)
//   const { goals, isLoading, isError, message } = useSelector(
//     (state) => state.posts
//   )

//   useEffect(() => {
//     if (isError) {
//       console.log(message)
//     }

//     if (!user) {
//       navigate('/login')
//     }

//     dispatch(getGoals())

//     return () => {
//       dispatch(reset())
//     }
//   }, [user, navigate, isError, message, dispatch])

//   if (isLoading) {
//     return <Spinner />
//   }

//   return (
//     <>
//       <section className='heading'>
//         <h1>Welcome {user && user.name}</h1>
//         <p>Goals Dashboard</p>
//       </section>

//       <GoalForm />

//       <section className='content'>
//         {goals.length > 0 ? (
//           <div className='goals'>
//             {goals.map((goal) => (
//               <GoalItem key={goal._id} goal={goal} />
//             ))}
//           </div>
//         ) : (
//           <h3>You have not set any goals</h3>
//         )}
//       </section>
//     </>
//   )
// }

// export default Home

// import React, { useEffect, useState } from 'react';
// // import News from '../components/News';
// // import axios from 'axios';
// // import Logo from "../images/logo.png"

// function Home() {
//   const [posts, setPostss] = useState([]);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const res = await axios.get('/posts');
//       setTweets(res.data);
//     } catch (error) {
//       // console.error(error);
//     }
//   };

//   return (
//     <div className="home">
      
//       <section className='first'>
//         <div className='title'>
//           <h1 className='tech'>Tech</h1>
//           <h1 className='tweet'>Tweet</h1>
//           <img className='logo'src={Logo}/>
//           {/* <video autoPlay loop muted playsInline>
//             <source src="../techbackground.mp4" />
//           </video> */}
//         </div> 
//         <div className='hello'>
//           {/* <h1 className='first'>def hello_world(): print("Welcome to Tech Tweet") hello_world()</h1> */}
//         </div>
//       </section>
//       <section>
//         <News />
       
//       </section>
//     </div>
//   );
// }

// export default Home;

// import React, { useState, useEffect } from 'react';
// import { useAuthContext } from '../hooks/useAuthContext';
// import PostDisplay from '../components/postDisplay';
// import PostForm from '../components/newPost';
// import Header from '../components/header';

// const Home = () => {
//   const { user } = useAuthContext();
//   const [posts, setPosts] = useState([]);
//   const [postInEdit, setPostInEdit] = useState(null);
//   const [showPostForm, setShowPostForm] = useState(false);

//   useEffect(() => {
//     if (!user) return;

//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(`${process.env.REACT_APP_BASE_URL}/posts`, {
//           headers: { 'Authorization': `Bearer ${user.token}` },
//         });

//         if (response.ok) {
//           const json = await response.json();
//           setPosts(json);
//         }
//       } catch (error) {
//         console.error('Failed to fetch posts:', error);
//       }
//     };

//     fetchPosts();
//   }, [user]);

//   const handleDeletePost = async (postId) => {
//     try {
//       const response = await fetch(`${process.env.REACT_APP_BASE_URL}/posts/delete/${postId}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${user.token}`
//         }
//       });

//       if (response.ok) {
//         setPosts(prevPosts => prevPosts.filter(post => post._id !== postId));
//       }
//     } catch (error) {
//       console.error('Failed to delete post:', error);
//     }
//   };

//   const handleEditPost = (post) => {
//     setPostInEdit(post);
//     setShowPostForm(true);
//   };

//   const handleAddPost = () => {
//     setPostInEdit(null);
//     setShowPostForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowPostForm(false);
//   };

//   const handleSubmit = async () => {
//     if (!postInEdit) return;

//     try {
//       const response = await fetch(`${process.env.REACT_APP_BASE_URL}/posts/${postInEdit._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${user.token}`,
//         },
//         body: JSON.stringify(postInEdit),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to edit post');
//       }

//       const updatedPost = await response.json();
//       setPosts(prevPosts => prevPosts.map(post => post._id === updatedPost._id ? updatedPost : post));
//       handleCloseForm();
//     } catch (error) {
//       console.error('Failed to edit post:', error);
//     }
//   };

//   return (
//     <div className="home">
//       <Header />  
//       <div className="button-container">
//         <button onClick={handleAddPost} className="add-post-btn">Display Post Form</button>
//         {showPostForm && (
//           <button onClick={handleCloseForm} className="hide-form-btn">Hide Form</button>
//         )}
//       </div>
//       {showPostForm && (
//         <PostForm 
//           post={postInEdit || null}
//           BASE_URL={process.env.REACT_APP_BASE_URL} 
//           onSubmit={handleSubmit}
//           onClose={handleCloseForm}
//         />
//       )}
//       <div className="posts">
//         {posts && posts.map((post) => (
//           <PostDisplay key={post._id} post={post} onDeletePost={handleDeletePost} onEditPost={handleEditPost} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;