import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { selectAllPost } from '../post/postSlice'
import { useEffect } from 'react'
import { useState } from 'react'
import { editPost } from '../post/postSlice'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import sub from 'date-fns/sub'

function EditPost() {

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [time,setTime] = useState('')
    const [reaction,setReaction] = useState()

    const [error,setError] = useState();
    const [errorState,setErrorState] = useState(false);
    const {id}  = useParams()
    const post = useSelector(selectAllPost)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // filter the post based on the id

    const editedPost = post.find(post=>(post.id.toString())===id)
   


    useEffect(()=>{
        if(editedPost){
            setTitle(editedPost.title)
            setContent(editedPost.content)
            setTime(editPost.time)
            setReaction(editPost.reactions)

        }
    },[])

    const handleEdit = (e) => {
      e.preventDefault()
        const newEditPost = {
            id:id,
            title:title,
            content:content,
            time:new Date().toISOString(),
            reactions:{
              thumbsUp:0,
              heart:0,
              angry:0
          }
       }

    
        if(title && content){
            dispatch(editPost({id,newEditPost}))
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
            <h1>Edit Post</h1>
            <input type="text" placeholder='Enter Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            {/* <input type="text" placeholder='Enter content...' value={content} onChange={(e)=>setContent(e.target.value)} /> */}
            <textarea placeholder='Enter content..' name="" id="" cols="30" style={{resize:'none'}} rows="10" value={content}  onChange={(e)=>setContent(e.target.value)}>{content}</textarea>
            <button onClick={handleEdit} role='submit' type='button'>Edit changes</button>
           
        </form>
        <div className="after-form">
        <Link to='/' id='link-id'><h3>Back to home</h3></Link>
        {errorState && <p style={{color:"red"}}>{error}</p>}
        </div>
    </div>
  )
}

export default EditPost