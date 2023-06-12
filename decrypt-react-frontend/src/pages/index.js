// import React, { useEffect, useState } from 'react';
// import { usePostContext } from '../hooks/usePostContext';
// import { useAuthContext } from '../hooks/useAuthContext';
// import PostDisplay from '../components/postDisplay';
// import PostForm from '../components/postForm';
// import Header from '../components/header'
// // import './Home.css'

// const Home = () => {
//   const { posts, dispatch } = usePostContext();
//   const { user } = useAuthContext();
//   const [postInEdit, setPostInEdit] = useState(null);
//   const [showPostForm, setShowPostForm] = useState(false);

//   useEffect(() => {
//     if (!user) return;

//     const fetchPosts = async () => {
//       const response = await fetch(`${process.env.REACT_APP_BASE_URL}/posts`, {
//         headers: { 'Authorization': `Bearer ${user.token}` },
//       });
//       const json = await response.json();

//       if (response.ok) {
//         dispatch({ type: 'SET_POSTS', payload: json });
//       }
//     };

//     fetchPosts();
//   }, [dispatch, user]);

//   const handleDeletePost = async (postId) => {
//     const response = await fetch(`${process.env.REACT_APP_BASE_URL}/posts/delete/${postId}`, {
//       method: 'DELETE',
//       headers: {
//         'Authorization': `Bearer ${user.token}`
//       }
//     });

//     if (response.ok) {
//       dispatch({ type: 'DELETE_POST', payload: { _id: postId } });
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
//       dispatch({ type: 'EDIT_Post', payload: { updatedPost } });
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

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { Link, useNavigate } from "react-router-dom";
// import style from "./PostList.module.scss";

// const PostList = ({ posts, onClickReply, onClickLike, onClickLink }) => {
//   const navigate = useNavigate();

//   return (
//     <div className="postList">
//       {
//         posts.map(post => {
//           return (
//             <div className={style.post + ' ' + style.pointer} key={post.id} onClick={() => onClickLink?.(post.id)}>
//               <div className={style.avatar} onClick={(e) => { e.stopPropagation(); navigate('/userSelf/' + post.User.id); }}>
//                 <img src={post.User.avatar} alt="" />
//               </div>
//               <div className={style.info}>
//                 <div className={style.top}>
//                   <div className={style.name} onClick={(e) => { e.stopPropagation(); navigate('/userSelf/' + post.User.id); }}>
//                     {post.User.name}
//                   </div>
//                   <div className={style.account} onClick={(e) => { e.stopPropagation(); navigate('/userSelf/' + post.User.id); }}>
//                     @{post.User.account}
//                   </div>
//                   <div className={style.time}>{post.createdAt}</div>
//                 </div>
//                 <div className={style.description}>
//                   {post.description}
//                 </div>
//                 <div className={style.toolbar}>
//                   <button onClick={(e) => { e.stopPropagation(); onClickReply?.({ ...post }); }} className={style.toolButton + ' ' + style.replyCount}>
//                     {post.replyCount}
//                   </button>
//                   <button onClick={(e) => { e.stopPropagation(); onClickLike?.({ ...post }); }} className={style.toolButton + ' ' + style.likeCount + ' ' + (!!post.isLiked ? style.active : '')}>
//                     {post.likeCount}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })
//       }
//     </div>
//   );
// }

// export default PostList;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
import { Link, useNavigate } from "react-router-dom";
// import style from "./PostList.module.scss";

const PostList = ({ posts, onClickReply, onClickLike, onClickLink }) => {
  const navigate = useNavigate();

  return (
    <div className="postList">
      {posts.map((post) => (
        <Link
          to={`/post/${post.id}`}
          className={style.post + " " + style.pointer}
          key={post.id}
          onClick={() => onClickLink?.(post.id)}
        >
          {/* <div
            className={style.avatar}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/profile/${post.User.id}`);
            }}
          >
            <img src={post.User.avatar} alt="" />
          </div> */ //} 
          /*
          <div className={style.info}>
            <div className={style.top}>

              {/* <div
                className={style.name}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/profile/${post.User.id}`);
                }}
              >
                {post.User.name}
              </div> */ //}
              /*{/* <div
                className={style.account}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/profile/${post.User.id}`);
                }}
              >
                @{post.User.username}
              </div> */ //} 
              /*
            </div>
            <div className={style.description}>{post.description}</div>
            <div className={style.toolbar}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClickComment?.({ ...post });
                }}
                className={style.toolButton + " " + style.replyCount}
              >
                {post.commentCount}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClickRecryptt?.({ ...post });
                }}
                className={style.toolButton + " " + style.recryptCount}
              >
                {post.recryptCount}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClickLike?.({ ...post });
                }}
                className={
                  style.toolButton +
                  " " +
                  style.likeCount +
                  " " +
                  (!!post.isLiked ? style.active : "")
                }
              >
                {post.likeCount}
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PostList; */

