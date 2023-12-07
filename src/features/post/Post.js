import React from 'react'
import './post.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from './postSlice'
import { useNavigate } from 'react-router-dom'

function Post() {

  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [error,setError] = useState();
  const [errorState,setErrorState] = useState(false)
  const navigate = useNavigate()


  const dispatch = useDispatch()

  function handleSubmit(e){
    e.preventDefault()
    if(title &&  content){
      dispatch(addPost(title,content))
      setTitle('')
      setContent('')
      navigate('/')
    } else{
      setErrorState(true)
      setError('Please fill the fields')
    }
  }

    
  return (
    <div className='post'>
        <form >
            <h1>Post</h1>
            <input type="text" placeholder='Enter Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            {/* <input type="text" placeholder='Enter content...' value={content} onChange={(e)=>setContent(e.target.value)} /> */}
            <textarea placeholder='Enter content..' name="" id="" cols="30" style={{resize:'none'}} rows="10" value={content}  onChange={(e)=>setContent(e.target.value)}>{content}</textarea>
            <button onClick={handleSubmit} role='submit' type='button'>Post</button>
           
        </form>
        <div className="after-form">
        <Link to='/' id='link-id'><h3>Back to home</h3></Link>
        {errorState && <p style={{color:"red"}}>{error}</p>}
        </div>
    </div>
  )
}

export default Post