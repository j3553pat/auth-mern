import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="bg-cyan-300">
      <div className='flex justify-between items-center max-w-6xl mx-auto'>
        <Link to='/'><h1>MusicMate</h1></Link>
        <ul className='flex gap-4'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/signin'><li>Sign In</li></Link>
        </ul>
        </div>
    </div>
  );
}
