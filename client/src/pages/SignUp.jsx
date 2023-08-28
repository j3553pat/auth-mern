import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-5 max-w-lg mx-auto'>
      <h1 className='text-4xl text-center font-semibold my-8'>Create An Account</h1>
      <form className='flex flex-col gap-5 '>
        <input type='text' placeholder='username' id='username' className='bg-slate-200 p-4 rounded-lg'/>
        <input type='email' placeholder='email' id='email' className='bg-slate-200 p-4 rounded-lg'/>
        <input type='password' placeholder='password' id='password' className='bg-slate-200 p-4 rounded-lg'/>
        <button className='bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-70'> Sign Up</button>
      </form>
      <div className='flex gap-3 mt-4'>
        <Link to='/signin'>
        <span className='text-blue-500'>Sign In</span>
        </Link>
        <p> Have an account?</p>
      </div>
    </div>
  )
}
