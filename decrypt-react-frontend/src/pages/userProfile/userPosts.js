import React from "react";
import Container from './components/Container'
// import './UserPosts.css';


const UserPosts = (props) => {
    const posts = props.posts;
    const loaded = () => {
        return (
            <section className="index">
                <Container posts={posts}/>
            </section>
        );
    };

    const loading = () => {
        return (
            <div className="loading-container">
                <h1 className="loading">Loading...</h1>
            </div>
        );
    };

    return (
        <>
        {props.posts.length >= 0 ? loaded() : loading()}
        </>
    );
};

export default UserPosts;
