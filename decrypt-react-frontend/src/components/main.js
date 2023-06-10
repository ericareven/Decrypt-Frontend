import { useEffect, useState } from "react"
import { Route, Routes } from 'react-router-dom'
import Index from "../pages/index"
import Home from "../pages/home"
import About from '../pages/about'
// import Show from '../pages/Show'

const Main = (props) => {
  const [post, setPost] = useState(null)

  const URL = 'http://localhost:4000/decrypt'

  //fetches all posts from our API backend
  const getPost = async () => {
    const reponse = await fetch(URL)
    const data = await reponse.json()
    setPost(data.data)
  }

  const createPost = async (person) => {
    //make post request to create post
    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person),
    })
    // update our components list of posts
    getPost()
  }

  const updatePost = async (person, id) => {
    // make post request to create post
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });
    // update list of posts
    getPost();
  };
  
  const deletePost = async (id) => {
    // make post request to create post
    await fetch(URL + id, {
        method: "DELETE",
    });
    // update list of posts
    getPost();
  };

  useEffect(() => {
      getPost()
  }, []);

  return (
    <main className="main-container">
        <Routes>
            <Route path="/" element={<Home post={post}/>} />
            <Route path="/about" element={<About post={post}/>} />
            {/* <Route path="/contact" element={<Contact posts={posts}/>} /> */}
            {/* <Route path="/signin" element={<Auth/>} />
            <Route path="/register" element={<Auth/>} /> */}
        </Routes>
    </main>
  )
}

export default Main

