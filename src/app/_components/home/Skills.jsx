// "use client";
// import { useEffect, useRef } from 'react';
// import lottie from 'lottie-web';
import {
  SiJavascript,
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiBootstrap,
  SiDaisyui,
  SiShadcnui,
  SiExpress,
  SiMongoose,
  SiZod,
  SiMongodb,
  SiAppwrite,
  SiTypescript,
  SiGooglechrome,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiNpm,
  SiGithub,
  SiPostman,
  SiRedux,
  SiReact
} from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { getSkills } from "@/services/SkillService";
import Image from "next/image";

// import { useLottie } from "lottie-react";
// import animationData from "../../../assets/animationForSkills";

const Skills = async () => {

  const { data: skills } = await getSkills();
  
  // const animationContainer = useRef(null);
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: animationContainer.current,
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     path: 'animationForSkills.json'
  //   });
  // }, []);
  // const options = {
  //   animationData: animationData,
  //   loop: true,
  // };

  // const { View } = reactLottie.useLottie(options);
  return (
    <div className=" py-10 sm:py-28 px-4">
      <div className="">
        <h2 className="text-xl sm:text-3xl font-bold text-white text-center">
          Technologies I Work With
        </h2>
      </div>
      <div className="sm:flex gap-14 justify-center sm:justify-between items-center mt-4">
        {/* <div className="w-2/3 sm:w-1/3 mx-auto mb-10 sm:mb-0">
          <div ref={animationContainer}>
          </div>
        </div> */}
        <div className="flex-1">
          <p className="text-gray-300 text-sm sm:text-xl">
            I build dynamic, full-stack web applications using React, Next.js,
            and Node.js. From designing responsive front-ends with Tailwind CSS
            to developing robust back-ends with Express and MongoDB, I manage
            the entire development process. I use tools like Firebase, Appwrite,
            and Vercel for deployment and GitHub, Postman, and Figma to
            streamline my workflow
          </p>

          <div className="flex flex-wrap gap-5 justify-center mt-10 p-5 shadow-lg shadow-colorPrimary rounded-lg">
            {
              skills.map((skill) => (
                <div key={skill?._id} className="flex flex-col justify-center items-center shadow-md shadow-colorPrimary rounded-lg p-2">
                  <Image src={skill?.image} height={100} width={100} alt=""/>
                  <p className="text-white text-sm font-semibold">{skill?.name}</p>
                </div>
              ))
            }
            {/* <div className="bg-black p-5 flex flex-col justify-center items-center rounded-full shadow-lg shadow-colorPrimary">
              <SiJavascript
              className="text-yellow-500 "  
              size={50}
            />
            <p>JavaScript</p>
            </div>

            <div className="bg-black p-5 flex flex-col justify-center items-center rounded-full shadow-lg shadow-colorPrimary">
              <SiNextdotjs
              className="text-yellow-500 "
              size={50}
            />
            <p>Next.JS</p>
            </div> */}
            
            {/* <SiNextdotjs
              className="text-slate-500 bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            /> */}
            {/* <SiAstro
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <SiTailwindcss
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <SiBootstrap
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <SiDaisyui
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <SiShadcnui
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <RiNodejsLine
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <SiExpress
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <SiMongoose
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <SiZod
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <SiMongodb
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <SiAppwrite
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <IoLogoFirebase
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <SiTypescript
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <SiGooglechrome
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <SiVercel
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <SiNetlify
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <SiFigma
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <SiNpm
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <SiGithub
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <SiPostman
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <SiRedux 
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            />
            <SiReact 
              className="text-white bg-black p-2 rounded-full shadow-lg shadow-colorPrimary"
              size={50}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

