import React from "react";
import Container from './userProfile/container'
// import './Plants.css';

const Posts = (props) => {
    const posts = props.posts
    const loaded = () => {
        return (
            <section className="index">
                <Container posts={posts}/>
            </section>
        )
    }

    const loading = () => {
        return (
            <div className="loading-container">
                <h1 className="loading">Loading...</h1>
            </div>
        )
    }

    return props.plants.length > 0 ? loaded() : loading()
}

export default Posts;