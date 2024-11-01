import { Button } from "@material-tailwind/react";

function About() {
  return (
    <div className=" pt-[20%] md:pt-[10%]">
      <div className=" text-3xl font-bold text-center p-2 m-2">About Us</div>
      <div className=" text-3xl  text-center m-2 p-2">
        We are well-known brand in the printing industry. which markets paper,
        printing & stationery products across India.
      </div>
      <div className=" lg:flex">
        <div className=" lg:w-[50%]">
          <p className=" text-lg font-semibold text-green-700 m-2 p-2 text-start">
            Himvat Business Solutions
          </p>

          <p className=" font-bold text-xl m-2 p-2 text-start">
            We started as a humble business in 2017 & bloomed into a service
            industry that embodied quality, innovation, and user-friendliness.
          </p>

          <p className=" text-xl m-2 p-2 text-start">
            Based in Delhi and supported by a team of professionals and trained
            employees, we have a network spread across India. We can execute
            large or small orders within a stipulated time adhering to the
            highest level of our quality standards.
          </p>

          <p className=" text-xl m-2 p-2 text-start">
            We provide a one-stop facility where a wide range of products
            related to school, universities and office printing & stationery
            solutions for corporate houses & educational institutions are
            offered under one roof.
          </p>

          <p className=" font-bold text-start m-2 p-2">
            For us, our motto is our guiding light “Great Value, Great Products”
          </p>

          <Button size="lg" className=" bg-green-700 m-2 font-bold">
            Contact Us Now
          </Button>
        </div>
        <div className=" m-2 p-2 lg:w-[50%]">
          <img
            className=" w-[100%] place-content-center items-center justify-center"
            src="https://himvat.in/wp-content/uploads/2023/11/banner-printing-service-500x500-1.webp"
            alt=""
          />
        </div>
      </div>

      <div className=" bg-gray-500 md:flex md:justify-between">
        <div className=" m-2 p-1">
          <p className=" font-bold text-lg">Talk To Us</p>
          <p>+91 0000000000</p>
        </div>
        <div className=" m-2 p-1">
          <p className=" font-bold text-lg">Mail Us</p>
          <p>info@dessign.in</p>
        </div>
        <div className=" m-2 p-1">
          <p className=" font-bold text-lg">Our Location</p>
          <p>Delhi, India</p>
        </div>
      </div>

      <div className=" lg:flex">
        <div className=" m-2 p-2 lg:w-[50%]">
          <img
            className=" w-[100%] place-content-center items-center justify-center"
            src="https://himvat.in/wp-content/uploads/2023/11/young-friendly-operator-woman-agent-600nw-712414813.webp"
            alt=""
          />
        </div>
        <div className=" lg:w-[50%]">
          <p className=" font-bold text-xl m-2 p-2 text-start">
            We are expert professionals
          </p>

          <p className=" text-xl m-2 p-2 text-start">
            Our team of expert professionals constantly endeavor to provide our
            customers with innovations and user-friendly products that make a
            perfect balance between quality, price, and environment.
          </p>

          <p className=" text-xl m-2 p-2 text-start">
            Not only do we supply our products to distributors & dealers, but we
            also provide customized work for offices, schools, and private and
            Government Organizations , concerning Designs, thickness, quality,
            and size.
          </p>
          <Button size="lg" className=" bg-green-700 m-2 font-bold">
            Contact Us Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;
