import React from 'react'
import BlogHeader from '../../shared/components/blogcomponents/BlogHeader'
import BlogNav from '../../shared/components/BlogNav'

import './bloghome.css'
import BlogPosts from '../../shared/components/blogcomponents/BlogPosts'
import BlogSidebar from '../../shared/components/blogcomponents/BlogSidebar'
function BlogHome() {
    return (<>
        <BlogNav />
        <BlogHeader />

        <div className='bloghome'>
            <BlogPosts />
            <BlogSidebar />
        </div>
    </>)
}

export default BlogHome