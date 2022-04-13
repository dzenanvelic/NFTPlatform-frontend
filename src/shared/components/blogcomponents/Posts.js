import React from 'react'
import { Link } from 'react-router-dom'
import BlogPostCard from '../../../UIelements/BlogPostCard'
import './posts.css'
function Posts() {
    return (
        <div className='posts'>

            <BlogPostCard />
            <BlogPostCard />
            <BlogPostCard />
            <BlogPostCard />
            <BlogPostCard />



        </div>
    )
}

export default Posts