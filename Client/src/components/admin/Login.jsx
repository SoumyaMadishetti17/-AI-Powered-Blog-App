import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {
    const {axios, setToken} = useAppContext()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const {data} = await axios.post('/api/admin/login', {email, password})
            if(data.success){
                setToken(data.token)
                localStorage.setItem('token', data.token)
                axios.defaults.headers.common['Authorization']= data.token;
            } else{
                toast.error(data.message)
                }
        }catch (err){
            toast.error(err.message)
            }

    }

  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
           <div className='flex flex-col items-center justify-center'>
                <div className='w-full py-6 text-center'>
                    <h1 className='text-3xl font-bold'><span className='text-primary'>Admin</span> Login</h1>
                    <p className='font-light'>Enter your credentials to access the admin panel</p>
                </div>

                <form onSubmit={handleSubmit} className='w-full mt-6 sm:max-w-md text-gray-600'>
                    <div className='flex flex-col'>
                        <label >Email</label>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder=' Enter your email' className='p-2 border-b-2 border-gray-300 outline-none mb-6' />
                    </div>
                    <div className='flex flex-col'>
                        <label >Password</label>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required placeholder=' Enter your password' className='p-2 border-b-2 border-gray-300 outline-none mb-6' />
                    </div>
                    <button type='submit' className='w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all'>Login</button>
                </form>
           </div>

        </div>

    </div>
  )
}

export default Login