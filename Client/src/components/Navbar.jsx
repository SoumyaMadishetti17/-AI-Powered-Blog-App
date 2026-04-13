// import React from 'react'
// import '../index.css'
// import {useNavigate} from 'react-router-dom'
// import { useAppContext } from '../context/AppContext';

// const Navbar = () => {
//     const {navigate,token}= useAppContext()

//   return (
//     <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer'>      
//       <div onClick={()=>navigate('/')} className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text">
//         DevBlogs
//       </div>
//       <button onClick={()=> navigate('/admin')} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>{ token?'Dashboard': 'Login ➡️'}</button>
//     </div>
//   )
// }

// export default Navbar

// 
import React from 'react'
import '../index.css'
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
    const { navigate, token, userToken, user, logoutUser } = useAppContext()

    return (
        <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>

            {/* Logo */}
            <div
                onClick={() => navigate('/')}
                className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text cursor-pointer"
            >
                DevBlogs
            </div>

            {/* Right side */}
            <div className='flex items-center gap-3'>

                {/* Logged in user */}
                {userToken ? (
                    <div className='flex items-center gap-3'>
                        <span className='text-sm text-gray-600 hidden sm:block'>
                            Hi, <span className='font-medium text-gray-800'>{user?.name}</span>
                        </span>
                        <button
                            onClick={logoutUser}
                            className='text-sm px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all cursor-pointer'
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className='text-sm px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all cursor-pointer'
                    >
                        Login
                    </button>
                )}

                {/* Admin button */}
                <button
                    onClick={() => navigate('/admin')}
                    className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 py-2.5 hover:bg-primary/90 transition-all'
                >
                    {token ? 'Dashboard' : 'Admin ➡️'}
                </button>

            </div>
        </div>
    )
}

export default Navbar