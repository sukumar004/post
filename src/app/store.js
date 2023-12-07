import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice.js'
import postReducer from '../features/post/postSlice.js'

export const store =  configureStore({
    reducer:{
        counter : counterReducer,
        post : postReducer,

    }
})