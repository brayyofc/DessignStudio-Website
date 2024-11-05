import { Button } from "@material-tailwind/react";
import { FaBullseye, FaLightbulb } from "react-icons/fa";
import { useState } from "react";

function About() {
  const clientImages = [
    "https://himvat.in/wp-content/uploads/2023/11/png-1-150x150.png",
    "https://himvat.in/wp-content/uploads/2023/11/logo4-1-150x150.jpg",
    "https://himvat.in/wp-content/uploads/2023/11/logo3-1-150x150.jpg",
    "https://himvat.in/wp-content/uploads/2023/11/logo1-1-150x150.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === clientImages.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? clientImages.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="md:py-24 px-4 grid place-items-center bg-gray-50">
      {/* About Us Section */}
      <div className="pt-8 pb-12 px-6 bg-black text-white rounded-lg shadow-lg w-full md:w-3/4">
        <h1 className="text-4xl font-extrabold text-center mb-4">About Us</h1>
        <p className="text-xl text-center max-w-2xl mx-auto">
          We are a renowned brand in the printing industry, providing a wide
          range of printing and stationery products across India.
        </p>
      </div>

      {/* Company Info Section */}
      <div className="mt-12 text-center lg:text-start lg:flex items-center justify-between w-full md:w-3/4 gap-8">
        <div className=" space-y-6">
          <p className="text-lg font-semibold text-green-700">
            Himvat Business Solutions
          </p>
          <p className="text-xl font-bold text-gray-800">
            Since our start in 2017, we've grown into a quality-driven,
            innovative printing service that prioritizes user satisfaction.
          </p>
          <p className="text-md text-gray-700">
            Based in Delhi with a network across India, we handle both large and
            small orders, ensuring the highest quality standards every time.
          </p>
          <p className="text-md text-gray-700">
            We are a one-stop solution for all printing and stationery needs,
            offering products for schools, universities, and corporate offices
            under one roof.
          </p>
          <p className="font-bold text-gray-800">
            “Great Value, Great Products” – Our Guiding Motto
          </p>
          <Button size="lg" className="bg-green-700 mt-4 font-bold">
            Contact Us Now
          </Button>
        </div>
        <img
          className="w-full rounded-lg shadow-lg mt-6 lg:mt-0 lg:w-2/3"
          src="https://himvat.in/wp-content/uploads/2023/11/banner-printing-service-500x500-1.webp"
          alt="Printing Services"
        />
      </div>

      {/* Our Mission & Vision Section */}
      <div className="mt-16 bg-black text-white py-10 rounded-lg shadow-lg w-full md:w-3/4 grid md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center md:items-start space-y-4 px-6">
          <FaBullseye className="text-4xl text-green-500" />
          <h2 className="text-3xl font-extrabold">Our Mission</h2>
          <p className="text-md text-center md:text-left">
            We aim to offer innovative, user-friendly products that strike a
            perfect balance between quality, price, and environmental
            responsibility.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end space-y-4 px-6">
          <FaLightbulb className="text-4xl text-yellow-500" />
          <h2 className="text-3xl font-extrabold">Our Vision</h2>
          <p className="text-md text-center md:text-right">
            Our vision is to consistently bring new ideas and improvements to
            our products, making them more accessible and eco-friendly for all.
          </p>
        </div>
      </div>

      {/* Our Clients Section */}
      <div className="mt-16 w-full md:w-3/4">
        <h2 className="text-3xl font-extrabold text-center mb-8">
          Our Clients
        </h2>
        <div className="relative flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-4 bg-white text-gray-800 p-2 rounded-full shadow-md focus:outline-none"
          >
            ❮
          </button>

          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {clientImages.map((src, index) => (
                <div
                  key={index}
                  className="min-w-full flex justify-center items-center"
                >
                  <img
                    src={src}
                    alt={`Client ${index + 1}`}
                    className="w-40 h-40 object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-4 bg-white text-gray-800 p-2 rounded-full shadow-md focus:outline-none"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
