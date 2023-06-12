// import React from 'react';


const BASE_URL = process.env.REACT_APP_BASE_URL; 

export const getPosts = () => async (dispatch) => {
  console.log('dispatch posts -> ', dispatch);
  try {
    const response = await fetch(BASE_URL);
    if (response.ok) {
      const postData = await response.json();
      dispatch({ type: "FETCH_POSTS", payload: postData });
    } else {
      throw new Error('Failed to fetch posts');
    }
  } catch (error) {
    console.log(`Error in actions -> newPosts.js -> getPosts() ${error.message}`);
  }
};


export const createPost = (post) => async (dispatch) => {
  try {
    console.log("post -> " + post);

    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    });

    if (response.ok) {
      const data = await response.json();
      dispatch({ type: "CREATE_POST", payload: data });
      console.log('data -> ', data);
    } else {
      throw new Error('Failed to create post');
    }
  } catch (error) {
    console.log(`Error in actions -> newPosts.js -> createPost() ${error.message}`);
  }
}

































// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Linkedin from "../images/bluelinkedin.png"
// import Github from "../images/bluegithub.png"
// import { Context } from "./../context/authContext";
// import { useContext } from 'react';

// function NewPost({ createPost }) {
//   const navigate = useNavigate();
//   const { user } = useContext(Context)

//   const [postData, setPostData] = useState({
//     username: user.username,
//     text: '',
//     image: '',
//     likes: '',
//     recrypts: '',
//     comments: '',
//   });

//   const handleChange = (e) => {
//     setPostData({ ...postData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createPost(postData);
//       setPostData({
//         username: user.username,
//         text: '',
//         image: '',
//         likes: '',
//         recrypts: '',
//         comments: '',
//       });
//       navigate('/posts');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className='newPost'>
//       <section className='new'>
//       <div className='new-container'>
//       <h2>????</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           className='username-input' 
//           type="text"
//           name="username"
//           value={postData.username}
//           placeholder="Username"
//           onChange={handleChange}
//         /><br></br>
//         <input
//           className='text-input'
//           type="text"
//           name="text"
//           value={postData.text}
//           placeholder="Text"
//           onChange={handleChange}
//         /><br></br>
//         <input
//           className='image-input'
//           type="text"
//           name="image"
//           value={postData.image}
//           placeholder="Image URL"
//           onChange={handleChange}
//         /><br></br>
//         <label name='Likes-icon'>
//           <img className='likes-icon-input' src={likes}></img>
//         </label>
//         <textarea
//           className='likes-input'
//           name="likes"
//           value={postData.likes}
//           placeholder="Description"
//           onChange={handleChange}
//         /><br></br>
//         <label name='recrypts-icon'>
//           <img className='recrypt-icon-input' src={recrypts}></img>
//         </label>
//         <input
//           className='recrypts-input'
//           type="text"
//           name="recrypts"
//           value={postData.recrypts}
//           placeholder="Recrypts"
//           onChange={handleChange}
//         /><br></br>
//         <label name='comments-icon'>
//           <img className='comments-icon-input' src={comments}></img>
//         </label>
//         <input
//           className='sixth-input'
//           type="text"
//           name="comments"
//           value={postData.comments}
//           placeholder="Comments"
//           onChange={handleChange}
//         /><br></br>
//         <button type="submit" className="button-27 add" style={{width:'20vw', color:'black', marginTop:'3rem'}} role="button">Post</button>
//       </form>
//       </div>
//       </section>
//     </div>
//   );
// }

// export default NewPost;