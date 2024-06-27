import React from 'react'

import logo from '../assets/icons/logo.png';
import devs from '../assets/icons/devs.png'

const Header = () => {
  return (
    <div>
      <nav className='flex justify-between h-20 items-center sticky shadow-[0_25px_20px_-29px_rgba(0,0,0,0.3)] '>
        <div className="logo flex gap-2 ml-6">
            <img src={logo} alt="LOGO" className='cursor-pointer' />
           <img src={devs} alt="" className='cursor-pointer'/>
        </div>
        <ul className='flex justify-between gap-7 font-semibold text-[#4A5568] text-base'>
            <li className='cursor-pointer'>About us</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Case Studies</li>
            <li className='cursor-pointer'>Blog</li>
            <li className='cursor-pointer'>How it Works</li>
            <li className='cursor-pointer'>Hire</li>
        </ul>
        <button className='mr-6 bg-gradient-to-r from-custom-6675F7 to-custom-57007B text-white py-3 px-6 rounded'>Contact Us</button>
      </nav>
    </div>
  )
}

export default Header
