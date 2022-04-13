import React from 'react'
import './singleblogpage.css'
import BlogSidebar from '../../shared/components/blogcomponents/BlogSidebar'
import SingleBlog from '../../shared/components/blogcomponents/SingleBlog'
function SingleBlogPage() {
    return (
        <div className='single'>
            <SingleBlog />
            <BlogSidebar />
        </div>
    )
}

export default SingleBlogPage