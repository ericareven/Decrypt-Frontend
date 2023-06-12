import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import './PostNew.css';
import { Link } from 'react-router-dom';

const PostNew = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const posts = props.posts;
    const user = props.user;
    console.log(props);

    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 10); 
   
    const post = posts.find((p) => p.id === id);
    console.log(post);
    // state to hold all form data
    const [form, setForm] = useState({
        name: `${user.name}`,
        username: `${user.username}`,
        text: `${post.text}`,
        image: `${post.image}`,
        date: formattedDate,
        likes: `${post.likes}`,
        recrypts: `${post.recrypts}`,
        comments: `${post.comments}`,
        
    });
     // handleChanges function for form
    const handleChanges = (event) => {
        setForm({ ...form, [event.target.text]: event.target.value });
    };

    // handle the submission of the form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPost(form).then(() => {
            navigate('/userPosts');
        }).catch((err) => {
            console.log(err);
        });
    };

    const loaded = () => {
        return (
            <div className="post-new">
                <div className="container">
                    <Link to='/posts' className='return-link'>
                        <i className="bi bi-arrow-left"></i> Return
                    </Link>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="post-new-data">
                                {/* <img src={user.profileimg} /> */}
                                <p><span>Name: </span>{user['name']}</p>
                                <p><span>Username: </span>{user['username']}</p>
                                <p><span>Date: </span>{post['date']}</p>
                                <p><span>Text: </span>{post['text']}</p>
                                <p><span>image: </span>{post['image']}</p>
                                <p><span>likes: </span>{post['likes']}</p>
                                <p><span>recrypts: </span>{post['recrypts']}</p>
                                <p><span>commants: </span>{post['comments']}</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <h1 className="post-new-user-name">Add {form.commonName}</h1>
                            <form onSubmit={handleSubmit} className="form">
                                <label htmlFor="nickname">Name</label>
                                <input
                                    id="name"
                                    className="pure-u-1"
                                    type="text"
                                    value={form.name}
                                    name="name"
                                    // placeholder="Post Nickname"
                                    onChange={handleChanges}
                                />
                                <label htmlFor="username">Username</label>
                                <input
                                    id="username"
                                    className="pure-u-1"
                                    type="text"
                                    value={form.username}
                                    name="username"
                                    // placeholder="Post Nickname" 
                                    onChange={handleChanges}
                                />
                                <label htmlFor="text">Date</label>
                                <input
                                    id="date"
                                    className="pure-u-1"
                                    type="text"
                                    value={form.date}
                                    name="nickname"
                                    // placeholder="Post Nickname"
                                    onChange={handleChanges}
                                />
                                <label htmlFor="text">Text</label>
                                <input
                                    id="text"
                                    className="pure-u-1"
                                    type="text"
                                    value={form.text}
                                    name="nickname"
                                    // placeholder="Post Nickname" 
                                    onChange={handleChanges}
                                />
                                <label htmlFor="image">Image</label>
                                <input
                                    id="image"
                                    className="pure-u-1"
                                    type="text"
                                    value={form.image}
                                    name="image"
                                    // placeholder="Image Link"   
                                    onChange={handleChanges}
                                />
                                <label htmlFor="size">Likes</label>
                                <input
                                    id="likes"
                                    className="pure-u-1"
                                    type="text"
                                    value={form.likes}
                                    name="size"
                                    // placeholder="0"   
                                    onChange={handleChanges}
                                />
                                <label htmlFor="size">Recrypts</label>
                                <input
                                    id="recrypts"
                                    className="pure-u-1"
                                    type="text"
                                    value={form.recrypts}
                                    name="size"
                                    // placeholder="0"
                                    onChange={handleChanges}
                                />
                                <label htmlFor="size">Comments</label>
                                <input
                                    id="comments"
                                    className="pure-u-1"
                                    type="text"
                                    value={form.comments}
                                    name="size"
                                    // placeholder="0"
                                    onChange={handleChanges}
                                />
                                {/* <div className="hidden-fields">
                                    <input
                                        id="comments"
                                        className="pure-u-1"
                                        type="text"
                                        value={form.commonName}
                                        name="commonName"
                                        placeholder="Common Name"
                                        
                                        onChange={handleChanges}
                                    />
                                    <input
                                        id="climate"
                                        className="pure-u-1"
                                        type="text"
                                        value={form.climat}
                                        name="climat"
                                        placeholder="Climat"
                                        
                                        onChange={handleChanges}
                                    />
                                    <input
                                        id="category"
                                        className="pure-u-1"
                                        type="text"
                                        value={form.category}
                                        name="category"
                                        placeholder="Category"
                                        
                                        onChange={handleChanges}
                                    />
                                    <input
                                        id="family"
                                        className="pure-u-1"
                                        type="text"
                                        value={form.family}
                                        name="family"
                                        placeholder="Family"
                                        
                                        onChange={handleChanges}
                                    />
                                    <input
                                        id="defaultImage"
                                        className="pure-u-1"
                                        type="text"
                                        value={form.defaultImage}
                                        name="defaultImage"
                                        placeholder="Default Image Link"
                                        
                                        onChange={handleChanges}
                                    />
                                </div> */}
                                <input className="new-button" type="submit" value="Create Post" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

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

export default PostNew;