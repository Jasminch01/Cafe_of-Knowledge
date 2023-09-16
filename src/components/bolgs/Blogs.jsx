import PropTypes from 'prop-types'
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({bookmarkHandler, markAsReadHandler}) => {
    const [blogs, setBlogs] =useState([]) 
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));

    },[])
    return (
        <div className="w-2/3">
            <h1>Blogs : {blogs.length} </h1>
            <div className=" gap-4">
            {
                blogs.map((blog, idx) => <Blog key={idx} blog = {blog} bookmarkHandler = {bookmarkHandler} markAsReadHandler = {markAsReadHandler}></Blog>)
            }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    bookmarkHandler :PropTypes.func,
    markAsReadHandler : PropTypes.func,

}

export default Blogs;