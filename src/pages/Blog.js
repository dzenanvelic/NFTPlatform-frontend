import React from 'react'
import './blog.css'
function Blog(props) {
    return (
        <div className='blog-header'>{props.children}</div>
    )
}

export default Blog