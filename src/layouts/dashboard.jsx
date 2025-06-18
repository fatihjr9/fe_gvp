import Logo from '@/components/logo'
import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router';

function Dashboard({children}) {
  const navigate = useNavigate();
  const logout = async() => {
    localStorage.clear("user")
    navigate("/")
  }
  return (
    <div className="dotted w-full h-screen">
        <div className="z-50 flex items-center justify-between px-4 lg:px-24 py-4 bg-white border-b border-slate-200 pb-4">
            <Logo />
            <button onClick={()=> logout()} className="p-2 rounded-xl bg-slate-100 cursor-pointer hover:bg-slate-200 hover:text-blue-600 transition-all">
                <IoIosLogOut className="size-6" />
            </button>
        </div>
        <div className="px-4 lg:px-24 mt-8 z-20 relative">
            {children}
        </div>
    </div>
  )
}

export default Dashboard