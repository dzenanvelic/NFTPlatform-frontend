import React from 'react'
import BlogNav from '../shared/components/BlogNav'
import Blog from './Blog'
import './blogpage.css'
import BlogHome from './blogpages/BlogHome'
import SingleBlogPage from './blogpages/SingleBlogPage'
function Blogpage() {
    return (
        <Blog>
            <BlogNav />
            <BlogHome />

        </Blog>
    )
}

export default Blogpage