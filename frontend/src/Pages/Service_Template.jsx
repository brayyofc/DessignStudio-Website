import { Breadcrumbs, Button, ButtonGroup } from '@material-tailwind/react';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import React, { useState } from 'react'
import {  MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { Link, useLocation } from 'react-router-dom';

function Service_Template() {
    const location=useLocation();
    const slug=location.pathname.slice(9);
    console.log(slug)
    const clientImages=[
        {image:"https://himvat.in/wp-content/uploads/2024/06/b1.jpg"},
        {image:"https://himvat.in/wp-content/uploads/2024/06/b2.jpg"},
        {image:"https://himvat.in/wp-content/uploads/2024/06/b3.jpg"},
        {image:"https://himvat.in/wp-content/uploads/2024/06/b4.jpg"},
        
    ]
    const [img,setImage]=useState(clientImages[0].image);
    function handleImage(img){
        console.log(img)
        setImage(img)
    }

  return (
    <div className='pt-20'>
        <Breadcrumbs separator={<MdOutlineKeyboardArrowRight/>} className='bg-gray-300 w-screen flex justify-center py-4 mb-16'>
                <Link to="/" className="opacity-60">
                    Home
                </Link>
                <Link to="/services" className="opacity-60">
                    Our Services
                </Link>
                <Link to={`/services/:${slug}`} className='capitalize'>{slug}</Link>
        </Breadcrumbs>
        <div className='flex justify-center items-start gap-24 w-full'>
            <div className='grid place-items-center gap-2'>
            <img src={img} className='w-full  aspect-[6/4]'/>
            <Splide  options={{
                rewind: true, 
                gap:30,
                arrows:false,
                fixedWidth : 100,
                fixedHeight: 100,
              }} aria-label="React Splide Example" className="w-full">
                {clientImages.map(data => <SplideSlide onClick={()=>handleImage(data.image)}>
                  <img src={data.image} alt="Image 1" />
                </SplideSlide>)}
              </Splide>
            </div>
            <div className='text-left w-1/3 grid gap-6'>
                <h1 className='text-4xl font-bold'>Banner Printing</h1>
                <p className='text-gray-500 tracking-wider leading-6 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus corporis voluptatem veritatis repudiandae sit sint consequatur, fugiat deserunt reiciendis soluta ea explicabo debitis porro repellat nemo adipisci obcaecati alias voluptas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis delectus ipsam quibusdam quae, eaque facilis, soluta voluptatibus sequi ad, distinctio atque autem ipsum adipisci libero assumenda enim nesciunt officiis accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde maiores consequatur suscipit culpa quas, reiciendis ea, laborum id veritatis ad, recusandae quod laboriosam labore. Molestiae asperiores quis maiores itaque eius!</p>
                <div className='flex gap-2 w-full'>
                    <Button variant="outlined" className='w-full'>Request a Call</Button>
                    <Button className='w-full bg-blue-500'>Send Enquiry</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service_Template