import React from "react";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import { getProjects } from "@/services/ProjectService";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const Projects = async () => {
  const { data: projects } = await getProjects();
  return (
    <section id="projects" className="py-16 text-white">
      <div className="px-4 sm:px-0">
        {/* Section Title */}
        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
        {"Projects I've Built"}
        </h2>
          <p className="mt-4 text-lg text-gray-400">
            {
              "Explore the innovative projects I've built with modern tools and technologies."
            }
          </p>
        </div>

        {/* Projects Listing (Staggered Layout) */}
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            } mb-12 p-6 rounded-lg shadow-md shadow-colorPrimary`}
          >
            {/* Project Image */}
            <div className="relative w-full md:w-1/2 h-64 md:h-80 overflow-hidden rounded-lg shadow-md shadow-colorPrimary">
              <Image
                src={project.projectImage}
                alt={`${project.name} Homepage`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover shadow-lg shadow-colorPrimary"
              />
            </div>

            {/* Project Content */}
            <div className="w-full md:w-1/2 md:flex md:flex-col md:justify-center px-6 mt-3 md:mt-0">
              {/* Project Logo */}
              <div className="mb-4">
                <Image
                  src={project.logo}
                  alt={`${project.name} Logo`}
                  width={60}
                  height={60}
                  className="rounded-full shadow-md shadow-colorPrimary"
                />
              </div>

              {/* Project Name */}
              <h3 className="text-2xl font-bold text-white">
                {project?.title}
              </h3>

              {/* Project Description */}
              <p className="mt-2 text-gray-300">
                {project?.description?.substring(0, 170)}...
              </p>

              {/* Technologies */}
              <div className="mt-2 flex flex-wrap gap-2">
                {project?.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-colorSecondary text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

                <Link href={`/project-details/${project?._id}`} className="w-full">
                <Button className="bg-slate-300 shadow-lg shadow-slate-400  text-slate-700 font-bold hover:text-white hover:bg-colorSolid mt-8 w-full">See details</Button>
                </Link>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
