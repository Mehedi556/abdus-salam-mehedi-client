import Image from "next/image";
import React from "react";
import logo from "../../../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-300">
        {/* Quick Links Section */}
        <div>
          <p className="text-xl font-semibold text-white mb-3">Quick Links</p>
          <span className="mt-5 space-y-2">
            <p>About Me</p>
            <p>Projects</p>
            <p>Blog</p>
            <p>Contact</p>
          </span>
        </div>

        {/* Follow Me Section with Logo and Social Icons */}
        <div className="flex flex-col items-center">
          <Image
            src={logo}
            height={50}
            width={150}
            alt="Your Logo"
            className="mb-4"
          />
          <h3 className="text-xl font-semibold text-white">Follow Me</h3>
          <div className="mt-3 flex space-x-4">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.88 8.17 6.84 9.5.5.09.68-.22.68-.5v-1.75c-2.78.6-3.37-1.3-3.37-1.3-.45-1.14-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .08 1.52 1.03 1.52 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.38-2 1-2.71-.1-.24-.44-1.23.1-2.57 0 0 .83-.27 2.75 1.02.79-.22 1.64-.33 2.48-.33s1.69.11 2.48.33c1.92-1.29 2.75-1.02 2.75-1.02.54 1.34.2 2.33.1 2.57.63.71 1 1.62 1 2.71 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.75c0 .28.18.6.69.5C19.12 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
            </svg>

            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 20h-3v-10h3v10zm-1.5-11.3c-.96 0-1.74-.79-1.74-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm13.5 11.3h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69h-3v-10h2.87v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.6z" />
            </svg>

            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 4.56c-.89.39-1.84.65-2.83.77a4.93 4.93 0 002.16-2.72 9.83 9.83 0 01-3.13 1.2 4.92 4.92 0 00-8.4 4.49A13.95 13.95 0 011.64 3.16a4.92 4.92 0 001.52 6.57 4.87 4.87 0 01-2.23-.61v.06a4.92 4.92 0 003.95 4.83 4.95 4.95 0 01-2.21.08 4.93 4.93 0 004.6 3.42 9.88 9.88 0 01-6.1 2.1c-.4 0-.79-.02-1.18-.07A13.95 13.95 0 007.69 21c9.05 0 14-7.5 14-14v-.64A9.98 9.98 0 0024 4.56z" />
            </svg>
          </div>
        </div>









        {/* Newsletter Section */}
        <div className="w-4/5 ml-auto">
          <h3 className="text-xl font-semibold text-white">Newsletter</h3>
          <p className="mt-3">
            Stay updated with my latest projects and blog posts.
          </p>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-lg text-gray-900"
            />
            <button
              type="button"
              className="bg-colorSecondary text-white px-4 rounded-r-lg hover:bg-indigo-600 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>








      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-10">
        <p>&copy; 2024 AS Mehedi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
