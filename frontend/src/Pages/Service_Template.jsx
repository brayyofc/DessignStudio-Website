import { Breadcrumbs, Button } from '@material-tailwind/react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useState } from 'react';
import { FaMailBulk } from 'react-icons/fa';
import { MdCall, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

function ServiceTemplate() {
  const location = useLocation();
  const slug = location.pathname.slice(10);
  console.log(slug);

  const clientImages = [
    { image: "https://himvat.in/wp-content/uploads/2024/06/b1.jpg" },
    { image: "https://himvat.in/wp-content/uploads/2024/06/b2.jpg" },
    { image: "https://himvat.in/wp-content/uploads/2024/06/b3.jpg" },
    { image: "https://himvat.in/wp-content/uploads/2024/06/b4.jpg" },
  ];

  const [img, setImage] = useState(clientImages[0].image);

  function handleImage(img) {
    console.log(img);
    setImage(img);
  }

  return (
    <div className='pt-20'>
      {/* Breadcrumbs */}
          <Breadcrumbs separator={<MdOutlineKeyboardArrowRight />} className='bg-gray-300 w-screen flex justify-center py-4 mb-16'>
              <Link to="/" className="opacity-60">
                  Home
              </Link>
              <Link to="/services" className="opacity-60">
                  Our Services
              </Link>
              <Link to="/services" className="capitalize">{slug}</Link>
          </Breadcrumbs>

      {/* Main Content */}
      <div className='flex flex-col md:flex-row justify-center items-start gap-8 px-4 md:px-16'>
        {/* Image Section */}
        <div className='flex flex-col items-center gap-4 w-full lg:w-5/12'>
          <img src={img} alt="Selected" className='w-full aspect-[6/4] rounded-xl' />
          <Splide options={{
            rewind: true,
            gap: 10,
            arrows: false,
            fixedWidth: 80,
            fixedHeight: 80,
            breakpoints: {
              640: { fixedWidth: 60, fixedHeight: 60 },
              768: { fixedWidth: 80, fixedHeight: 80 },
              1024: { fixedWidth: 100, fixedHeight: 100 },
            }
          }} aria-label="Service Images Carousel" className="w-full flex justify-center">
            {clientImages.map((data, index) => (
              <SplideSlide key={index} onClick={() => handleImage(data.image)}>
                <img src={data.image} alt={`Thumbnail ${index + 1}`} className="cursor-pointer" />
              </SplideSlide>
            ))}
          </Splide>
        </div>

        {/* Text and Button Section */}
        <div className='text-left md:w-1/2 lg:w-1/3 flex flex-col gap-6'>
          <h1 className='text-2xl md:text-4xl font-bold'>Banner Printing</h1>
          <p className='text-gray-500 tracking-wide leading-6 text-sm md:text-base'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus corporis voluptatem veritatis repudiandae sit sint consequatur, fugiat deserunt reiciendis soluta ea explicabo debitis porro repellat nemo adipisci obcaecati alias voluptas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis delectus ipsam quibusdam quae, eaque facilis, soluta voluptatibus sequi ad, distinctio atque autem ipsum adipisci libero assumenda enim nesciunt officiis accusantium!
          </p>
          <div className='flex flex-col md:flex-row gap-2 w-full'>
            <Button variant='outlined' className='rounded-none w-auto md:w-full flex gap-2 items-center justify-center'><MdCall/> Request a Call</Button>
            <Button className='bg-blue-500 w-auto md:w-full rounded-none flex gap-2 items-center justify-center'><FaMailBulk/> Send Enquiry</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceTemplate;
