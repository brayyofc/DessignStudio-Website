import React from 'react'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className='w-full text-white bg-black pt-12'>
        <div className='text-2xl flex justify-center py-12 gap-4'>
          <FaLinkedinIn/>
          <FaInstagram/>
        </div>
        <hr className='mx-64 border-gray-400'/> 
        <div className='flex justify-center gap-16 py-12 pb-24 items-start'>
          <div>
            <h1 className='font-semibold'>Where To Find Us</h1>
            <ul className='italic font-extralight pt-4'>
              <li>Home</li>
              <li>About</li>
              <li>Our Work</li>
              <li>Let's Catch Up</li>
            </ul>
          </div>
          <div>
            <h1 className='font-semibold'>How To Get In Touch</h1>
            <ul className='italic font-extralight pt-4'>
              <li className='font-semibold'>Call us</li>
              <li>+91 0000000000</li>
              <li>+91 0000000000</li>
              <li className='pt-6 font-semibold'>Email Us</li>
              <li>hello@mail.com</li>
            </ul>
          </div>
          <div>
            <iframe className='rounded-lg h-72 aspect-video' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7003.782445162371!2d77.30505946990519!3d28.633022087975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb35f4aa5cdb%3A0xacb11442f9e99d05!2sDessign%20Studio!5e0!3m2!1sen!2sin!4v1730462917090!5m2!1sen!2sin"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <hr className='mx-64 border-gray-400'/>
        <p className='text-center py-2 text-gray-500 italic'>2024@dessignStudios.com</p>
      </div>
  )
}

export default Footer