import React from 'react'
import '../index.css'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate();

  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer'>      
      <div onClick={()=>navigate('/')} className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text">
        DevBlogs
      </div>
      <button onClick={()=> navigate('/admin')} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>Login ➡️</button>
    </div>
  )
}

export default Navbar