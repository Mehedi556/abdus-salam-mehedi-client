import React from 'react'

const Contact = () => {
  return (
    <section className="relative text-white py-20 px-4 sm:px-0">
    {/* Background with overlay */}
    <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/path-to-background-image.jpg')" }}></div>
    <div className="relative max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-extrabold mb-4">Get in Touch</h2>
      <p className="text-lg text-gray-300">
       {" Interested in working together or just want to say hello? Let's start a conversation!"}
      </p>
    </div>
  
    <div className="relative grid gap-10 lg:grid-cols-2 items-start max-w-full mx-auto">
      {/* Contact Info Card */}
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg space-y-6">
        <h3 className="text-2xl font-semibold">Contact Information</h3>
        <p className="text-gray-400">Feel free to reach out through any of the methods below:</p>
        <div className="space-y-4">
          <p><span className="font-bold">📧 Email:</span> mehedi@example.com</p>
          <p><span className="font-bold">📱 Phone:</span> +880 123 456 789</p>
          <p><span className="font-bold">📍 Location:</span> Dhaka, Bangladesh</p>
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
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg space-y-6">
        <h3 className="text-2xl font-semibold">Send a Message</h3>
        <p className="text-gray-400">{"I'd love to hear from you! Please fill out the form below:"}</p>
        <form className="space-y-4">
          <input
            type="text"
            className="w-full p-3 rounded-md bg-gray-900 text-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="w-full p-3 rounded-md bg-gray-900 text-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Your Email"
          />
          <textarea
            className="w-full p-3 rounded-md bg-gray-900 text-gray-300 h-32 focus:outline-none focus:ring focus:ring-indigo-500"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition duration-200"
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