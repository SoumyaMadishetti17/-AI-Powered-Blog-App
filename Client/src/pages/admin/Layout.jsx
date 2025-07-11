import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar';

const Layout = () => {
    const navigate=useNavigate();
    const logout=()=>{
        navigate('/');
    }

  return (
    <div>
        <div className=' flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
            <div onClick={()=>navigate('/')} className="cursor-pointer text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text">
                DevBlogs
            </div>            
            <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>Logout</button>
        </div>

        <div className='flex h-[calc(100vh-70px)]'>
            <Sidebar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout