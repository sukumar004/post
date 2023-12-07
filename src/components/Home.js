import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllPost } from '../features/post/postSlice'
import './style.css'
import TimeAgo from '../features/post/TimeAgo'
import ReactionButton from '../features/post/ReactionButton'
import { deletePost } from '../features/post/postSlice'

function Home() {
    const posts = useSelector(selectAllPost);
    const orderedPost= posts.slice().sort((a,b)=>b.time.localeCompare(a.time))
    const dispatch = useDispatch()

    const handleDelete = (postId) => {
      dispatch(deletePost(postId))
    }
  
    const postDetail = orderedPost.map((post,index)=>{
        return(
        <div className='post-page' key={post.id}>
          <div className="fullPost">
              <h1>{post.title.length <=35 ? post.title : `${post.title.substring(0,35)}...`}</h1>
              <h3>{post.content.length <=60 ? post.content : `${post.content.substring(0,60)}...`}</h3>
          </div>
          <div className="bottom-flex">
            <div className="author-time">
              <ReactionButton post={post} />
              <TimeAgo timeStamp={post.time} />
            </div>
            <div className="post-btns">
             <Link to={`/editpost/${post.id}`}><button id='edit-btn'>Edit Post</button></Link>
              <button id='delete-btn' onClick={()=>(handleDelete(post.id))}>Delete Post</button>
            </div>
            
          </div>
        </div>)
    })


  return (
    <>
      <header>
      <div className="top-header">
        <input type="text" placeholder='search post'/>
        <Link to='/post'><button>Create new post</button></Link>
      </div>
      </header>
      
      {posts && <div className='top-class'>{postDetail}</div> }
      {!posts && <p>No post available to show</p>}
    </>
  )
}

export default Home