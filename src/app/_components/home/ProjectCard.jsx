import Image from 'next/image'
import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 perspective-1000">
      {/* 3D Tilt Effect */}
      <div className="transform group-hover:rotate-y-6 group-hover:translate-z-4 transition-transform duration-500">
        
        {/* Project Logo and Name */}
        <div className="flex items-center p-4">
          <Image src={project.logo} alt={project.name} width={50} height={50} className="w-12 h-12 rounded-full shadow-md" />
          <h3 className="ml-4 text-2xl font-semibold text-gray-800">{project.name}</h3>
        </div>

        {/* Project Image */}
        <div className="relative h-64 overflow-hidden rounded-md shadow-inner transition-transform transform group-hover:scale-110">
          <Image
            src={project.image}
            alt={`${project.name} Homepage`}
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Description */}
        <div className="p-4">
          <p className="text-gray-600 text-lg">{project.description}</p>
        </div>

        {/* Technologies Used */}
        <div className="px-4 pb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gradient-to-r from-indigo-400 to-purple-600 text-white text-sm px-3 py-1 rounded-xl shadow-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard