import React from 'react'
import { FaCopyright, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import ReadyTouch from "../assets/illustrations/GetInTouch.png"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <footer className="flex justify-center py-24 text-black items-center gap-6">
        <img src={ReadyTouch} className="w-96 aspect-square"/>
        <div>
          <h1 className="text-3xl">Ready for Magic?</h1>
          <h1 className="text-6xl font-bold tracking-tighter">Get in Touch</h1>
          <Link to="/contact"><HiOutlineArrowLongRight className="text-9xl text-blue-500"/></Link>
        </div>
      </footer>
    <div className='w-full text-white bg-black pt-4'>
        <div className='text-2xl flex justify-between px-64 items-center py-12 gap-4'>
        <svg className='w-40' viewBox="0 0 112 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10.5" cy="23.5" r="8.5" stroke="#00AEEF" stroke-width="4" />
                  <rect x="17" width="5" height="29" fill="#00AEEF" />
                  <mask id="path-3-inside-1_45_351" fill="white">
                      <path d="M39.898 24.4944C40.2173 22.1663 39.7826 19.7972 38.6577 17.7341C37.5328 15.671 35.7767 14.0224 33.6469 13.0297C31.517 12.037 29.1252 11.7525 26.8219 12.2178C24.5185 12.6831 22.4247 13.8738 20.8472 15.6154C19.2697 17.357 18.2914 19.5581 18.0555 21.896C17.8197 24.234 18.3388 26.5861 19.5367 28.6077C20.7346 30.6293 22.5485 32.2141 24.7125 33.13C26.8765 34.0459 29.2769 34.2448 31.5621 33.6975L30.7216 30.1882C29.1861 30.556 27.5731 30.4224 26.119 29.8069C24.6649 29.1914 23.446 28.1265 22.6411 26.7681C21.8361 25.4097 21.4874 23.8292 21.6458 22.2582C21.8043 20.6872 22.4617 19.2082 23.5217 18.0379C24.5817 16.8676 25.9887 16.0675 27.5364 15.7549C29.0841 15.4422 30.6913 15.6334 32.1225 16.3004C33.5537 16.9675 34.7336 18.0753 35.4895 19.4616C36.2454 20.8479 36.5375 22.4398 36.323 24.0042L39.898 24.4944Z" />
                  </mask>
                  <path d="M39.898 24.4944C40.2173 22.1663 39.7826 19.7972 38.6577 17.7341C37.5328 15.671 35.7767 14.0224 33.6469 13.0297C31.517 12.037 29.1252 11.7525 26.8219 12.2178C24.5185 12.6831 22.4247 13.8738 20.8472 15.6154C19.2697 17.357 18.2914 19.5581 18.0555 21.896C17.8197 24.234 18.3388 26.5861 19.5367 28.6077C20.7346 30.6293 22.5485 32.2141 24.7125 33.13C26.8765 34.0459 29.2769 34.2448 31.5621 33.6975L30.7216 30.1882C29.1861 30.556 27.5731 30.4224 26.119 29.8069C24.6649 29.1914 23.446 28.1265 22.6411 26.7681C21.8361 25.4097 21.4874 23.8292 21.6458 22.2582C21.8043 20.6872 22.4617 19.2082 23.5217 18.0379C24.5817 16.8676 25.9887 16.0675 27.5364 15.7549C29.0841 15.4422 30.6913 15.6334 32.1225 16.3004C33.5537 16.9675 34.7336 18.0753 35.4895 19.4616C36.2454 20.8479 36.5375 22.4398 36.323 24.0042L39.898 24.4944Z" stroke="#00AEEF" stroke-width="34" mask="url(#path-3-inside-1_45_351)" />
                  <rect x="21" y="24.7082" width="16" height="4.4785" transform="rotate(-28.8005 21 24.7082)" fill="#00AEEF" />
                  <path d="M53 17.5C48.5 14.3333 38.9 11.1 36.5 23.5H54.5C53.5 28 49.5 36 40 29.5" stroke="#00AEEF" stroke-width="4" />
                  <path d="M71.5 17.5C67 14.3333 57.4 11.1 55 23.5H73C72 28 68 36 58.5 29.5" stroke="#00AEEF" stroke-width="4" />
                  <rect x="73" y="12" width="5" height="22" fill="#00AEEF" />
                  <rect x="73" y="1" width="5" height="5" fill="#00AEEF" />
                  <circle cx="85" cy="23" r="8.5" stroke="#00AEEF" stroke-width="5" />
                  <path d="M94 12.5V36.5C93.3333 38 91.4 41.1 89 41.5" stroke="#00AEEF" stroke-width="4" />
                  <path d="M94 18C97.6667 15 105.9 10.8 109.5 18V34" stroke="#00AEEF" stroke-width="4" />
              </svg>
          <div className='flex justify-between w-16 items-center'>
          <FaLinkedinIn/>
          <FaInstagram/>
          </div>
        </div>
        <hr className='mx-64 border-gray-400'/> 
        
        <div className='flex justify-center gap-16 py-12 pb-24 items-start'>
          
          <div>
            
            <ul className='italic font-extralight'>
              <li className='font-semibold'>Call us</li>
              <li>+91 0000000000</li>
              <li>+91 0000000000</li>
              <li className='pt-6 font-semibold'>Our Address</li>
              <li className='w-52'>Plot no-3,Hasnpur, I.P.Ext, Patparganj, Delhi, 110092</li>
              <li className='pt-6 font-semibold'>Email Us</li>
              <li>hello@mail.com</li>
            </ul>
          </div>
          <div>
            <h1 className='font-semibold'>Information</h1>
            <ul className='italic font-extralight pt-4 grid gap-2'>
              <li>Home</li>
              <li>About</li>
              <li>Our Work</li>
              <li>Let's Catch Up</li>
            </ul>
          </div>
          <div>
            <h1 className='font-semibold'>Services</h1>
            <ul className='italic font-extralight pt-4 grid gap-2'>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
              <li>Service 4</li>
              <li>Service 5</li>
            </ul>
          </div>
          <div>
            <iframe className='rounded-lg h-72 aspect-video' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7003.782445162371!2d77.30505946990519!3d28.633022087975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb35f4aa5cdb%3A0xacb11442f9e99d05!2sDessign%20Studio!5e0!3m2!1sen!2sin!4v1730462917090!5m2!1sen!2sin"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <hr className='mx-64 border-gray-400'/>
        <p className='py-2 text-gray-500 italic flex gap-2 items-center justify-center'><FaCopyright /> 2021. Dessign Studios. All rights reserved</p>
      </div>
    </>
  )
}

export default Footer