import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/admin/Layout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog/:id" element={<Blog/>}/>
        <Route path='/admin' element={<Layout/>}
      </Routes>
    </div>
  )
}

export default App