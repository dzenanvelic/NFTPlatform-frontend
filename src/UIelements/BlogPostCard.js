import React from 'react'
import './blogpostcard.css'
function BlogPostCard() {
    return (
        <div className='blogPostCard'>

            <img className='blogPostImage' src="/images/20220319_101025_copy_3935x6338.jpg" alt="blog-post-image" />
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategorie">Nft</span>
                    <span className="postCategorie">Masters of The Universe</span>
                </div>
                <span className="postTitle">This NFT must have</span>
                <hr />
                <span className="postDate">1 hour ago</span>
                <p className='blogPostDescription'>
                    One of the most sought-after NFT drops which investors made sure was on their NFT calendar is Bored Ape Yacht Club. This collection comprises 10,000 unique NFTs that represent ‘Bored Apes’. As the name suggests, these Apes are pieces of digital art that look bored yet have garnered incredible attention from high net worth investors worldwide.
                </p>
            </div>
        </div>
    )
}

export default BlogPostCard