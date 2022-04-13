import React from 'react'
import './blogsidebar.css'
function BlogSidebar() {
    return (
        <div className='blogsidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className='sidebarImage' src="/images/20220319_101025_copy_3935x6338.jpg" alt="my-pic" />
                <p className='sidebarItemAbout'>I am passionate NFT art collector and artist.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className='sidebarList'>
                    <li className="sidebarListItem">NFT</li>
                    <li className="sidebarListItem">MASTERS OF THE UNIVERSE</li>
                    <li className="sidebarListItem">CRYPTO VALUTES</li>
                    <li className="sidebarListItem">PROMOTING</li>
                    <li className="sidebarListItem">NEWS</li>
                    <li className="sidebarListItem">TECHNOLOGIES</li>


                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebar-blog-icon fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar