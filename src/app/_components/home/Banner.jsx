"use client"
import React from 'react'
// import { useLottie } from "lottie-react";
// import animationData from '../../../assets/animationData';
// import { Button } from '../../../../components/ui/button';



const Banner = () => {
    // const options = {
    //     animationData: animationData,
    //     loop: true
    // };
    
    // const { View } = useLottie(options);
    return (
    <div className='flex gap-3 justify-between items-center my-24 sm:my-56'>
        <div className='flex-1'>
            <h1 className='text-4xl'>{"Hello There, It's"}</h1>
            <h2 className='text-7xl my-2'>Abdus Salam Mehedi</h2>
            <p className='text-gray-300 text-xl'>Web developer with a passion for discovering new tech and creating seamless, intuitive applications. Continuously learning and improving with each project.</p>

            <div className='flex gap-3 mt-10'>
                {/* <a href="/abdus-salam-mehedi-resume.pdf" download="My_Resume.pdf">
                    <Button className="bg-gray-500 shadow-lg shadow-slate-400 py-6">Download my resume</Button>
                </a>
                
                <Button className="bg-slate-300 shadow-lg shadow-slate-400 py-6 text-slate-700 font-bold hover:text-white">See my resume</Button> */}
            </div>
        </div>
        <div className='shadow-lg rounded-full shadow-slate-400'>
        {/* {View} */}
        </div>
    </div>
  )
}

export default Banner