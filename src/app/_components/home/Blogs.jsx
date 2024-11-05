import { getBlogs } from '@/services/BlogService';
import Image from 'next/image'
import React from 'react'

// const blogs = [
//     {
//       title: "Project One",
//       description: "A brief description of Project One showcasing its features.",
//       image: "https://i.ibb.co.com/hYR5nTc/project.png",
//     },
//     {
//       title: "Project Two",
//       description: "A brief description of Project Two showcasing its features.",
//       image: "https://i.ibb.co.com/hYR5nTc/project.png",
//     },
//     {
//       title: "Project Two",
//       description: "A brief description of Project Two showcasing its features.",
//       image: "https://i.ibb.co.com/hYR5nTc/project.png",
//     },
//   ];

const Blogs = async () => {
  const { data: blogs } = await getBlogs();
  return (
    <section id="blog" className="py-10 sm:py-16 ">
  <div className=" px-4 sm:px-0">
    {/* Section Title */}
    <div className="text-center mb-12">
    <h2 className="text-xl sm:text-3xl font-bold text-white">
    Insights & Stories
        </h2>
      <p className="mt-4 text-sm sm:text-lg text-gray-300">
        Discover the latest articles on development, tech, and more.
      </p>
    </div>

    {/* Masonry Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 masonry-grid">
      {blogs.map((blog, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg shadow-colorPrimary">
          {/* Blog Image */}
          <div className="h-64 overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Floating Title & Description */}
          <div className={`absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
            <h3 className="text-3xl font-bold text-white mb-2">{blog.title?.substring(0, 15)}</h3>
            <p className="text-gray-300 mb-4">{blog.description?.substring(0, 100)}</p>
            <a
              href={`/blog-details/${blog?._id}`}
              className="inline-block text-indigo-400 hover:text-indigo-600 transition-colors"
            >
              Read More &rarr;
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>





  )
}

export default Blogs