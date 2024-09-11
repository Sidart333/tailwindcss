import React from 'react'
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center justify-center gap-4'>
            <img src="./assets/Logo.svg" alt="logo" />
            <button className='bg-gradient-to-r from-orange-400 to-red-400 rounded-xl text-xs px-1.5 py-1.5 text-white font-bold'>Hoster is hiring </button>
        </div>
        <ul className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6'>
          <li><a href="#">plans</a></li>
          <li><a href="#">Domains</a></li>
          <li><a href="#">why Hosterr</a></li>
        </ul>
        <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
          <a href="#" className='text-gray-400'>Sign In</a>
          <button className='rounded-lg px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
        </div>
        <div className='lg:hidden'>
        <FaBars />
        </div>
    </div>
    
  )
}

export default Header