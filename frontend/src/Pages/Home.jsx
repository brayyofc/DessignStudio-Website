import React from "react";
import { Link } from "react-router-dom";
import HourGlass from "../assets/illustrations/hourglass.png";
import {
  Card,
  CardBody,
  Typography,
  CardFooter,
  Button,
  CardHeader,
  Spinner,
} from "@material-tailwind/react";
import {
  FaArrowRight,
  FaBook,
  FaRegHandshake,
  FaUsers,
} from "react-icons/fa";
import { BsFillMegaphoneFill, BsShop } from "react-icons/bs";
import { GiConversation } from "react-icons/gi";

function Home() {
  const whyChooseUsArray=[
    {
      icon: <FaUsers className="text-6xl text-blue-500" />,
      title: "Government Sector Expertise",
      description:"With years of experience, we excel in managing projects for PSUs, State, and Central Government clients. Our thorough understanding of government protocols ensures smooth collaboration and successful outcomes across sectors.",
    },
    {
      icon: <BsShop className="text-5xl text-blue-500" />,
      title: "Trusted Partners of Leading Private Enterprises",
      description:"We take pride in working with top retail and private organizations, delivering customized strategies that meet business goals while enhancing operational efficiency and brand value.",
    },
    {
      icon: <GiConversation className="text-6xl text-blue-500" />,
      title: "Election Campaign Specialists",
      description:"Our team specializes in orchestrating effective election campaigns, leveraging data-driven insights, media strategy, and grassroots engagement to deliver winning results for candidates and political parties.",
    },
    {
      icon: <BsFillMegaphoneFill className="text-5xl text-blue-500" />,
      title: "Digital & PR Management",
      description:"From social media strategies to public relations campaigns, we manage the digital and media presence of reputed national and international brands, ensuring high visibility and engagement across platforms.",
    },
    {
      icon: <FaRegHandshake className="text-6xl text-blue-500" />,
      title: "Strong Business Networks",
      description:"Our business relationships are built on trust and mutual success. We maintain cordial relations with associates and partners to ensure collaborative growth and seamless service.",
    },
    {
      icon: <FaBook className="text-5xl text-blue-500" />,
      title: "Cultural and Local Expertise",
      description:"Our in-depth knowledge of local cultures and traditions helps us navigate diverse environments, ensuring culturally sensitive strategies and impactful outreach.",
    },
  ]
  return (
    <div className="pt-20 grid place-items-center">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between w-11/12 lg:w-2/3 xl:w-1/2 pt-12 gap-6 lg:gap-12">
        <div className="text-blue-500 text-center lg:text-left text-2xl font-semibold">
          <h1>Unrivaled Creativity</h1>
          <h1 className="text-4xl lg:text-6xl font-extrabold">Unmatched Quality</h1>
        </div>
        <img src={HourGlass} className="aspect-square w-10/12 lg:w-6/12 xl:w-8/12" />
      </div>

      {/* Description Section */}
      <div className="py-12 grid gap-4 place-items-center w-11/12 md:w-8/12 lg:w-2/3">
        <h1 className="text-blue-500 font-medium text-lg lg:text-xl">Design Studio</h1>
        <h1 className="text-lg lg:text-3xl xl:text-4xl text-gray-800 font-light text-center">
          We transform your vision into reality by delivering turnkey{" "}
          <span className="text-blue-600 font-bold hover:underline">projects</span>.
          From defining your brand identity to crafting stunning{" "}
          <span className="text-blue-600 font-bold hover:underline">web design</span>, and{" "}
          <span className="text-blue-600 font-bold hover:underline">mobile app</span> we bring
          your ideas to life as fully functional products.
        </h1>
      </div>

      {/* Cards Section */}
      <div className="bg-black w-full py-12 lg:py-24">
        <div className="text-center px-6 lg:px-64">
          <h1 className="text-2xl lg:text-3xl font-bold text-white">What Makes Us</h1>
          <h1 className="text-blue-500 text-5xl lg:text-6xl font-extrabold">Stands Out!</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6 px-6 py-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {whyChooseUsArray.map((card, index) => (
            <Card
              key={index}
              className="w-full min-w-[250px] h-full min-h-80 rounded-none py-4"
              style={{ flex: '1 1 300px' }}
            >
              <CardBody className="flex flex-col justify-center items-start">
                {card.icon}
                <Typography variant="h5" color="blue-gray">
                  {card.title}
                </Typography>
                <Typography className="text-sm">{card.description}</Typography>
              </CardBody>
            </Card>
          ))}
        </div>

        <Link to="/about">
          <h1 className="flex gap-4 cursor-pointer justify-center items-center hover:underline underline-offset-4 text-white">
            All About Us <FaArrowRight />
          </h1>
        </Link>
      </div>

      {/* Products Section */}
      <div className="py-12 text-center w-11/12 lg:w-2/3 xl:w-1/2">
        <h1 className="font-extrabold text-blue-400 text-3xl lg:text-5xl">We can work out well together</h1>
        <h2 className="text-gray-500 text-lg lg:text-2xl">like we have with many others before</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <Card key={index} className="w-full md:w-96">
              <CardHeader shadow={false} floated={false} className="h-72 lg:h-96">
                <img
                  src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                  alt="product-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <div className="mb-2 flex items-center justify-between">
                  <Typography color="blue-gray" className="font-medium">
                    Apple AirPods
                  </Typography>
                  <Typography color="blue-gray" className="font-medium">
                    $95.00
                  </Typography>
                </div>
                <Typography variant="small" color="gray" className="font-normal opacity-75">
                  With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className="grid place-items-center pt-12">
          <Link to="/work" className="absolute z-10 cursor-pointer hover:underline underline-offset-4">
            View <b>More</b>
          </Link>
          <Spinner className="w-32 h-32 bg-transparent text-gray-900/50" />
        </div>
      </div>
    </div>
  );
}

export default Home;
