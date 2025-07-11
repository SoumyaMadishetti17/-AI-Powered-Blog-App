import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
           <div className='flex flex-col items-center justify-center'>
                <div className='w-full py-6 text-center'>
                    <h1 className='text-3xl font-bold'><span className='text-primary'>Admin</span>Login</h1>
                    <p className='font-light'>Enter your credentials to access the admin panel</p>
                </div>
                <form >
                    <div className='flex flex-col'>
                        <label >Email</label>
                        <input type="email" placeholder=' Enter your email' className='p-2 border-b-2 border-gray-300 outline-none mb-6' />
                    </div>
                </form>
           </div>

        </div>

    </div>
  )
}

export default Login