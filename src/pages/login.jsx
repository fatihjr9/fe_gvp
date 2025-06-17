import Auth from '@/layouts/auth'
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { CgArrowLongRight } from "react-icons/cg";
import { useNavigate } from 'react-router';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const getLoggedIn = async(e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/dashboard-user/LoginDashboard`,
                {username, password},
                {
                    headers: {
                      "Content-Type": "application/json",
                    },
                }
            );
            const user = res.data?.item || res.data?.data;

            if (res.data.responseResult && user) {
                localStorage.setItem("user", JSON.stringify(user));
                toast.success("Login berhasil!");
                navigate('/dashboard/index')
              } else {
                toast.error(res.data.message || "Login gagal");
            }
        } catch {
            toast.error('Login Error, please check your username and password')
        }
        setLoading(false)
    }
    
  return (
    <Auth>
        <form onSubmit={getLoggedIn} className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
                <label htmlFor="email">Enter Your Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="border border-gray-700 text-gray-400 text-sm rounded-xl block w-full p-2.5 bg-gray-900 placeholder:text-gray-500 focus:border-gray-700 focus:ring-gray-700" placeholder="John" required />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="email">Enter Your Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-700 text-gray-400 text-sm rounded-xl block w-full p-2.5 bg-gray-900 placeholder:text-gray-500 focus:border-gray-700 focus:ring-gray-700" placeholder="John" required />
            </div>
            <button disabled={loading} className="w-full bg-blue-600 py-2 rounded-xl font-medium cursor-pointer translation-all hover:bg-blue-700 flex flex-row justify-center items-center gap-x-2">
                {loading ? 'Loading...' : <>Continue <CgArrowLongRight /></>}
            </button>
        </form>
    </Auth>
  )
}

export default Login