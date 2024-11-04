import { getProjectDetails } from '@/services/ProjectService'
import Image from 'next/image';
import React from 'react'

const page = async ({params}) => {
    const id = await params;
    const { data } = await getProjectDetails(id?.projectId)
  return (
    <div className="min-h-screen flex flex-col items-center text-gray-800 font-sans max-w-[1280px] mx-auto">
      {/* Hero Section */}
      <header className="text-center py-6 w-full text-white ">
        <Image
        height={100}
        width={100}
          src={data?.logo}
          alt="Project Logo"
          className=" mx-auto mb-4 animate-pulse"
        />
        <h1 className="text-4xl font-bold">{data?.title}</h1>
        {/* <p className="text-lg opacity-90">
          Your Go-To Platform for Discovering and Sharing Amazing Recipes
        </p> */}
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center pt-10 pb-16 w-full max-w-full px-6">
        {/* Project Image */}
        <div className="w-full  rounded-lg overflow-hidden shadow-lg">
          <img
            src={data?.projectImage}
            alt="project image"
            className="w-full h-auto transform transition duration-500 hover:scale-105"
          />
        </div>

        {/* Technologies Used */}
        <section className="sm:my-12 my-28 text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Technologies Used</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {data?.technologies?.map((tech, index) => (
              <div
                key={index}
                className="bg-colorSecondary rounded-full px-6 py-2 shadow-lg shadow-colorPrimary text-white font-medium hover:bg-indigo-100 hover:text-black transition duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* Project Description */}
        <section className="text-white leading-relaxed text-lg max-w-full">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">Project Overview</h2>
          <p className="mb-4">{data?.description}</p>

          <h2 className="text-3xl font-semibold text-white mb-6 text-center">Features</h2>
          <ul className="list-disc pl-8 space-y-3 mt-4 mt-">
            {
                data?.features?.map((feature, index) => (
                    <li className='shadow-md shadow-colorPrimary rounded-lg px-4 py-3' key={index}>{feature}</li>
                ))
            }
            
            
          </ul>
        </section>
      </main>
    </div>
  )
}

export default page