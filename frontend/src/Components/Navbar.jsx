import React from 'react'

export function Navbar() {
  return (
    <nav className='py-2 bg-white shadow-md flex justify-between'>
        <h1 className='text-black font-bold text-2xl'>LOGO</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Our Services</li>
            <li>Contact Us</li>
        </ul>
    </nav>
  )
}
