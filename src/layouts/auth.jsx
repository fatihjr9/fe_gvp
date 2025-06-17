import Logo from '@/components/logo'
import React from 'react'

function Auth({children}) {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-black to-slate-900'>
        <Logo/>
        <div className="bg-gray-950 border border-gray-800 w-8/12 lg:w-3/12 mx-auto p-6 rounded-xl text-white mt-8">
            {children}
        </div>
    </div>
  )
}

export default Auth