import React from 'react'
import './blogheader.css'
function BlogHeader() {
    return (
        <div className='blogheader'>
            <div className="headerTitles">
                <span className='header-title-sm'>NFT-s & Other Stuff</span>
                <span className='header-title-lg'>Blog</span>
            </div>

            <img className='blog-header-image' src="/Images/20220319_101025_copy_3935x6338.jpg" alt="blog-header-image" />
        </div>
    )
}

export default BlogHeader