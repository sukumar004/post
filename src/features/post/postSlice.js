import { createSlice, nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";


const initialState  = [
    {
        id:1,
        title:'This is first data',
        content:'Learning redux toolkit is the best practice that makes effective for every moment for that in this scenerio.',
        time:sub(new Date(),{minutes:25}).toISOString(),
        reactions:{
            thumbsUp:0,
            heart:0,
            angry:0
        }
    },
    {
        id:2,
        title:'This is second data',
        content:'Learning the being comlpicated the commercial planeted the maintained microsystem',
        time:sub(new Date(),{minutes:55}).toISOString(),
        reactions:{
            thumbsUp:0,
            heart:0,
            angry:0
        }
        
    }
]



export const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
        addPost:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title,content){
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        time:new Date().toISOString(),
                        reactions:{
                            thumbsUp:0,
                            heart:0,
                            angry:0
                        }
                    }
                }
            }

        },

        addReactions(state,action){
            const {postId,reaction} = action.payload;
            const existingPost = state.find(post=>post.id===postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        },

        deletePost(state,action){
            const {postId} = action.payload;
            const filteredPost = state.filter(post=>(post.id === postId))
            const indexValue = state.indexOf(filteredPost)
            if(filteredPost) state.pop(indexValue)
            // Also give like that
            // state.pop(filteredPost)
        },

        editPost(state,action){
            const {id,newEditPost} = action.payload;
            const filteredPost = state.filter(post=>post.id===id)
            const indexValue = state.indexOf(filteredPost)
            if(filteredPost) state.splice(indexValue,1,newEditPost)
            // if(filteredPost) state[indexValue] = newEditPost

        }

        
    }
})
export const selectAllPost = (state) => state.post
export const {addPost,addReactions,deletePost,editPost} = postSlice.actions
export default postSlice.reducer