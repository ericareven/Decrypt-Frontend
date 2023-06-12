// import React from "react";
// import Container from './userProfile/container'
// // import './Plants.css';

// const Posts = (props) => {
//     const posts = props.posts
//     const loaded = () => {
//         return (
//             <section className="index">
//                 <Container posts={posts}/>
//             </section>
//         )
//     }

//     const loading = () => {
//         return (
//             <div className="loading-container">
//                 <h1 className="loading">Loading...</h1>
//             </div>
//         )
//     }

//     return props.posts.length > 0 ? loaded() : loading()
// }

// export default Posts;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Container from './userProfile/container';

// const Posts = ({ posts }) => {
//   const postItemStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     position: 'relative',
//   };

//   return (
//     <div className="showAll">
//       <h2>Posts</h2>
//       <ul className="postList">
//         {posts.map((post) => (
//           <li key={post.id} style={postItemStyle} className="postItem">
//             <Link to={`/${post._id}`}>
//               <div className="postImages">
//                 <Container posts={posts} />
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Posts;

import React from 'react';
import { Link } from 'react-router-dom';
import Container from './userProfile/container'

const Posts = ({ post }) => {
  const postItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  };

  return (
    <div className="postItem" style={postItemStyle}>
      <Link to={`/${post.id}`}>
        <div className="postImages">
            <Container posts={posts} />
        </div>
        {/* <div className="postImages">
          <img src={post.img} alt={post.title} />
        </div> */}
        {/* <h3>{post.title}</h3> */}
      </Link>
    </div>
  );
};

export default Posts;
