import React from "react";

function Contact() {
  return (
    <div className="text-xl text-black h-full items-center mt-20 grid place-items-center">
      <div className="bg-gray-100 h-16 flex items-center w-full justify-center gap-2 text-base">
        <a
          href="/"
          className=" cursor-pointer text-gray-600 hover:text-cyan-800 transition-all duration-300"
        >
          <h1 className="font-sans">Home</h1>
        </a>
        <p>›</p>
        <h1 className="font-sans">Contact Us</h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-center px-10 md:px-20 lg:px-72 py-5 md:py-10 gap-10">
        <div className="lg:w-1/2">
          <h1 className="font-bold text-3xl md:text-4xl py-2 md:py-5">
            Keep in touch with us
          </h1>
          <p className="text-base py-2 md:py-5">
            If your requirements are outside or capabilities, we believe in
            turning away business with integrity. But if your requirements are
            within our capabilities, we're probably one of the few organizations
            that can guarantee satisfaction and results
          </p>
          <div className="flex flex-col md:flex-row w-full py-5">
            <div className="md:w-1/2">
              <h3 className="font-bold py-3 md:py-5">Address</h3>
              <p className="text-base md:w-1/2">
                155 Indra Park, New Delhi 110059
              </p>
            </div>
            <div className="md:w-1/2">
              <h3 className="font-bold py-3 md:py-5">Contact</h3>
              <p className="text-base">
                Mobile: <strong>+91-9910759139</strong>
              </p>
              <p className="text-base">
                E-mail: <strong>support@himvat.in</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h1 className="font-bold text-3xl md:text-4xl py-2 md:py-5">
            Send a message
          </h1>
          <div className="flex w-full py-5 justify-between gap-4 md:gap-8">
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-100 px-4 py-2 text-base  placeholder:text-gray-600  focus:outline-cyan-400 focus:outline rounded-md w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-100 px-4 py-2 text-base  placeholder:text-gray-600  focus:outline-cyan-400 focus:outline rounded-md w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="bg-gray-100 px-4 py-2 text-base  placeholder:text-gray-600  focus:outline-cyan-400 focus:outline rounded-md w-full"
          />
          <textarea
            rows="10"
            type="text"
            placeholder="Message"
            className="bg-gray-100 px-4 py-2 text-base  placeholder:text-gray-600  focus:outline-cyan-400 focus:outline rounded-md w-full mt-5"
          />
          <div className="w-full mt-5 flex items-center justify-center">
            <input
              type="submit"
              className="text-base bg-cyan-800 text-white px-16 py-2 rounded-lg shadow-lg cursor-pointer hover:bg-cyan-600 transition-all duration-300 active:bg-cyan-900"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 md:mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d309.5271101138193!2d77.30954042885176!3d28.632774140109593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4b2f79b09d5%3A0x158880a7f1a9f5c4!2sI.P.Extension%2C%20Patparganj%2C%20Delhi!5e0!3m2!1sen!2sin!4v1730644497140!5m2!1sen!2sin"
          height="600"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-screen"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
