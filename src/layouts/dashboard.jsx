import Logo from '@/components/logo'
import React from 'react'
import { IoIosLogOut } from "react-icons/io";

function Dashboard({children}) {
  return (
    <div className="dotted w-full h-screen">
        <div className="z-50 flex items-center justify-between px-24 py-4 bg-white border-b border-slate-200 pb-4">
            <Logo />
            <button className="p-2 rounded-xl bg-white/10 hover:bg-blue-600 text-white transition-all">
                <IoIosLogOut className="size-6" />
            </button>
        </div>
        <div className="px-24 mt-8 z-20 relative">
            {children}
        </div>
    </div>
  )
}

export default Dashboard