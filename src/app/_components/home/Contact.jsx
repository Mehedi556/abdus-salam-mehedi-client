import React from 'react'

const Contact = () => {
  return (
    <section className="relative text-white py-20 px-4 sm:px-0">
    {/* Background with overlay */}
    <div className="absolute inset-0 "></div>
    <div className="relative max-w-4xl mx-auto text-center mb-10 sm:mb-16">
      <h2 className="text-xl sm:text-3xl font-bold mb-4">Say Hi Anytime</h2>
      <p className=" text-sm sm:text-lg text-gray-300">
       {" Whether it’s a project idea or just a friendly hello, I’d love to hear from you!"}
      </p>
    </div>
  
    <div className="relative grid gap-5 sm:gap-10 lg:grid-cols-2 items-start max-w-full text-center sm:text-left mx-auto">
      {/* Contact Info Card */}
      <div className="p-8 space-y-3 sm:space-y-6">
        <h3 className=" text-xl sm:text-2xl font-semibold">Contact Information</h3>
        <p className="text-gray-300 text-sm sm:text-base">Feel free to reach out through any of the methods below:</p>
        <div className="space-y-2 sm:space-y-4">
          <p className='text-sm sm:text-base'><span className="font-bold">📧 Email:</span> salam.mehedi99@gmail.com</p>
          <p className='text-sm sm:text-base'><span className="font-bold">📱 Phone:</span> +880 179 109 7139</p>
          <p className='text-sm sm:text-base'><span className="font-bold">📍 Location:</span> Dhaka, Bangladesh</p>
        </div>
        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
  
      {/* Message Form Card */}
      <div className="p-4 sm:p-8 rounded-lg shadow-lg shadow-colorPrimary space-y-3 sm:space-y-6">
        <h3 className="text-lg sm:text-2xl font-semibold">Send a Message</h3>
        <p className="text-sm sm:text-base text-gray-300">{"I'd love to hear from you! Please fill out the form below:"}</p>
        <form className="space-y-4">
          <input
            type="text"
            className="w-full p-2 sm:p-3 rounded-md bg-gray-900 text-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="w-full p-2 sm:p-3 rounded-md bg-gray-900 text-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Your Email"
          />
          <textarea
            className="w-full p-2 sm:p-3 rounded-md bg-gray-900 text-gray-300 h-32 focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="w-full py-1 sm:py-3 rounded-md bg-colorPrimary hover:bg-colorSecondary text-black hover:text-white font-semibold transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
  


  
  )
}

export default Contact