import { useState } from "react";
import {useParams, useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';

const PostShow= (props) => {
    const params = useParams()
    console.log(props)
    const navigate = useNavigate()
    const id = params.id
    const posts = props.posts
    const user = props.user
    const post = posts.find((p) => p.id === id)

    const [editForm, setEditForm] = useState(post);

    const loaded = () => {

        const handleChange = (event) => {
            setEditForm({ ...editForm, [event.target.name]: event.target.value });
          };
        
          const handleSubmit = (event) => {
            event.preventDefault();
            props.updatePost(editForm, post._id);
            navigate("/");
          };
        
          const deletePost = (e) => {
            e.preventDefault();
            props.deletePost(post._id);
            navigate("/");
          };

        return (
            <div className="post-show">
                <div className="container">
                    <Link to='/' className='return-link'>
                        <i class="bi bi-arrow-left"></i> Return
                    </Link>
                    <div className="row">
                        <div className="post-show-data col-12 col-md-6">
                            <h1 className="post-show-user-name">{user['name']}</h1>  
                            <h1 className="post-show-username">{user['username']}</h1>
                            <p>{post['date']}</p>
                            <p>{post['text']}</p>
                            <p>{post['image']}</p>
                            <p><span>{"likes icon"}</span>{post['likes']}</p>
                            <p><span>{"recrypts icon"}</span>{post['recrypts']}</p>
                            <p><span>{"comments icon"}</span>{post['comments']}</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={editForm.post}
                            name="name"
                            placeholder="name"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            value={editForm.image}
                            name="image"
                            placeholder="image URL"
                            onChange={handleChange}
                        />
                        <input type="submit" value="Update Post" />
                    </form>
                    <button id="delete" onClick={deletePost} className='button' >DELETE</button>
                </div>
            </div>
        )
    }

    const loading = () => {
        return (
            <div className="loading-container">
                <h1 className="loading">Loading...</h1>
            </div>
        )
    }

    return (
        <>
        {props.posts.length > 0 ? loaded() : loading()}
        </>
    )
}

export default PostShow;