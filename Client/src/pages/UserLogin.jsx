import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const UserLogin = () => {
    const { axios, setUserToken, setUser, navigate } = useAppContext();
    const [isRegister, setIsRegister] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const endpoint = isRegister ? '/api/user/register' : '/api/user/login';
            const payload = isRegister ? { name, email, password } : { email, password };

            const { data } = await axios.post(endpoint, payload);

            if (data.success) {
                setUserToken(data.token);
                setUser(data.user);
                localStorage.setItem('userToken', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                axios.defaults.headers.common['Authorization'] = data.token;
                toast.success(isRegister ? 'Account created!' : 'Welcome back!');
                navigate('/');
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-50'>
            <div className='w-full max-w-sm p-6 mx-4 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg bg-white'>
                <div className='flex flex-col items-center'>

                    <div className='w-full py-6 text-center'>
                        <h1 className='text-3xl font-bold'>
                            <span className='text-primary'>{isRegister ? 'Create' : 'User'}</span>{' '}
                            {isRegister ? 'Account' : 'Login'}
                        </h1>
                        <p className='font-light text-gray-500 mt-1'>
                            {isRegister ? 'Join to start reading blogs' : 'Welcome back, reader!'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className='w-full text-gray-600'>
                        {isRegister && (
                            <div className='flex flex-col mb-5'>
                                <label className='mb-1 text-sm font-medium'>Name</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    required
                                    placeholder='Enter your name'
                                    className='p-2 border-b-2 border-gray-300 outline-none focus:border-primary transition-colors'
                                />
                            </div>
                        )}

                        <div className='flex flex-col mb-5'>
                            <label className='mb-1 text-sm font-medium'>Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                required
                                placeholder='Enter your email'
                                className='p-2 border-b-2 border-gray-300 outline-none focus:border-primary transition-colors'
                            />
                        </div>

                        <div className='flex flex-col mb-6'>
                            <label className='mb-1 text-sm font-medium'>Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                required
                                placeholder='Enter your password'
                                className='p-2 border-b-2 border-gray-300 outline-none focus:border-primary transition-colors'
                            />
                        </div>

                        <button
                            type='submit'
                            disabled={loading}
                            className='w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all disabled:opacity-60'
                        >
                            {loading ? 'Please wait...' : isRegister ? 'Create Account' : 'Login'}
                        </button>
                    </form>

                    <p className='mt-5 text-sm text-gray-500'>
                        {isRegister ? 'Already have an account?' : "Don't have an account?"}
                        <button
                            onClick={() => setIsRegister(!isRegister)}
                            className='ml-1 text-primary font-medium hover:underline'
                        >
                            {isRegister ? 'Login' : 'Register'}
                        </button>
                    </p>

                    <div className='mt-3 text-center'>
                        <Link to='/admin' className='text-xs text-gray-400 hover:text-primary transition-colors'>
                            Admin login →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;