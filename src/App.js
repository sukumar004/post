import React from 'react'
import Post from './features/post/Post'
import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'
import EditPost from './features/editPost/EditPost'

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/post' element={<Post />} />
    <Route path='/editpost/:id' element={<EditPost />} />
    </Routes>
    </>
  )
}

export default App