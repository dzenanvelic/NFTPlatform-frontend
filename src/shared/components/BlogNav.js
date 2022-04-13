import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './blognav.css'
function BlogNav() {
    const user = false;
    return (
        <div className='blognav'>
            <div className="blog-left">
                <i className="blog-icon fa-brands fa-twitter"></i>

            </div>
            <div className="blog-center">
                <ul className='blog-list'>
                    <li className='bloglist-item'><NavLink to='/bloghome'>BLOGHOME</NavLink></li>
                    <li className='bloglist-item'><NavLink to='/blogwrite'>WRITE</NavLink></li>
                    <li className='bloglist-item'><NavLink to='/blogsign'>{user && "LOGOUT"}</NavLink></li>

                </ul>
            </div>
            <div className="blog-right">
                {
                    user ? <Link className='userImageLink' to='/usersettings'>
                        <img className='profile-image' src="https://images.unsplash.com/photo-1648389917269-b190e73d5404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="my-image" />
                    </Link> : (<ul className='blog-list blog-log'>
                        <li className='bloglist-item'>
                            <Link to="/blogsign">LOGIN</Link>
                        </li>
                        <li className='bloglist-item'>
                            <Link to="/blogregister">REGISTER</Link>
                        </li>



                    </ul>)


                }


                <i className="blog-search-icon fa-brands fa-searchengin"></i>
            </div>

        </div>
    )
}

export default BlogNav