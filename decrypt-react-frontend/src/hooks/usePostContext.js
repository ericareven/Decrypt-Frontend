import {PostsContext} from '../context/postsContext'
import {useContext} from 'react'

export const usePostsContext = () => {
    const context = useContext(PostsContext)

    if(!context) {
        throw Error('useJobsContext has been taken out of context lol.  Needs to be inside JobsContextProvider')
    }
return context
}






// import { createContext, useReducer } from 'react';

// export const usePostsContext = createContext();

// export const postsReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_POSTS':
//       return {
//         posts: action.payload,
//       };
//     case 'CREATE_POST':
//       return {
//         posts: [action.payload, ...state.posts],
//       };
//     case 'DELETE_POST':
//       return {
//         posts: state.posts.filter((p) => p._id !== action.payload._id),
//       };
//     case 'EDIT_POST': {
//       if (!action.payload) {
//         return state;
//       }

//       return {
//         posts: state.posts.map((post) =>
//           post._id === action.payload._id ? action.payload : post
//         ),
//       };
//     }
//     case 'CLEAR_POSTS':
//       return {
//         posts: [],
//       };
//     default:
//       return state;
//   }
// };

// export const PostsContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(postsReducer, {
//     posts: [],
//   });

//   const editPost = (updatedPost) => {
//     dispatch({ type: 'EDIT_POST', payload: updatedPost });
//   };

//   console.log('PostContext state:', state);

//   return (
//     <usePostsContext.Provider value={{ ...state, dispatch, editPost }}>
//       {children}
//     </usePostsContext.Provider>
//   );
// };
