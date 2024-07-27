import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div 
      className='h-screen flex items-center justify-center flex-col 
                 font-sans bg-slate-400 font-mono '>
        <h1 className='font-extrabold text-5xl mb-5'>
          404! This page does not exist
        </h1>
        <Link 
          className='text-2xl border border-black bg-blue-500 
                     text-white p-3 rounded-full font-bold hover:underline' 
          href='/'>
          Go back to home page
        </Link>
    </div>
  )
}

export default NotFound