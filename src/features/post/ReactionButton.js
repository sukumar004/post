import React from 'react'
import { useDispatch } from 'react-redux'
import '../../components/style.css'
import { addReactions } from './postSlice'
import { FaHeart } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaFaceAngry } from "react-icons/fa6";


const reactionEmoj = {
    thumbsUp:<FaRegThumbsUp />,
    heart:<FaHeart />,
    angry:<FaFaceAngry />
}

function ReactionButton({post}) {
    
    const dispatch = useDispatch()
    const reactionButtons = Object.entries(reactionEmoj)
   const displayEmoj = reactionButtons.map(([key,value])=>{
    return(
        <button key={key} type='button' className='reactions-button' onClick={()=>
            
            dispatch(addReactions({
            postId:post.id,reaction:key
        }))}>
            {value} {post.reactions[key]}

        </button>
    )
   })

   



  return (
    <div className='reaction-img'>
        {displayEmoj}
    </div>
  )
}

export default ReactionButton