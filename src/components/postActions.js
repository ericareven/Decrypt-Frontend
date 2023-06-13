// // import React from 'react';


// const BASE_URL = process.env.REACT_APP_BASE_URL; 

// export const getPosts = () => async (dispatch) => {
//   console.log('dispatch posts -> ', dispatch);
//   try {
//     const response = await fetch(BASE_URL);
//     if (response.ok) {
//       const postData = await response.json();
//       dispatch({ type: "FETCH_POSTS", payload: postData });
//     } else {
//       throw new Error('Failed to fetch posts');
//     }
//   } catch (error) {
//     console.log(`Error in actions -> newPosts.js -> getPosts() ${error.message}`);
//   }
// };


// export const createPost = (post) => async (dispatch) => {
//   try {
//     console.log("post -> " + post);

//     const response = await fetch(BASE_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(post)
//     });

//     if (response.ok) {
//       const data = await response.json();
//       dispatch({ type: "CREATE_POST", payload: data });
//       console.log('data -> ', data);
//     } else {
//       throw new Error('Failed to create post');
//     }
//   } catch (error) {
//     console.log(`Error in actions -> newPosts.js -> createPost() ${error.message}`);
//   }
// }


