import { getBlogDetails } from '@/services/BlogService';
import React from 'react'

const page = async ({params}) => {
    const blogId = await params;

    const { data } = await getBlogDetails(blogId?.blogId)

    const formattedCreatedAt = new Date(data?.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      
      const formattedUpdatedAt = new Date(data?.updatedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
  return (
    <div className="min-h-screen bg-colorSolid text-white flex items-center justify-center p-4">
      <div className=" max-w-[1260px] mx-5 rounded-lg overflow-hidden shadow-lg shadow-colorPrimary">
        {/* Image Section */}
        <div className="relative h-[400px]">
          <img
            src={data?.image}
            alt="Blog visual"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75" />
          <div className="absolute bottom-4 left-4">
            <p className="text-gray-300 font-medium">Published on {formattedCreatedAt}</p>
            <p className="text-gray-400 text-sm">Last updated: {formattedUpdatedAt}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
            {data?.title}
          </h1>
          <p className="text-gray-400 mt-2">by Abdus Salam Mehedi</p>
          <div className="border-b border-gray-700 my-4"></div>
          <article className="text-gray-300 leading-relaxed whitespace-pre-line">
            {data?.description}
          </article>
        </div>
      </div>
    </div>
  )
}

export default page