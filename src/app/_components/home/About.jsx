import React from 'react'

const About = () => {
  return (
    <section className=" text-gray-200 py-16 px-4 sm:px-0">
        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
        {"Behind the Code"}
        </h2>
          <p className="mt-4 text-lg text-gray-300">
            <span className='font-semibold text-white'>Meet the developer behind the code: </span> my story, my skills, and what I can do for you!
          </p>
        </div>
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Section - Image & Name */}
        <div className="flex flex-col items-center  text-center lg:text-left space-y-4">
          <div className="w-44 h-44 rounded-full border-4 border-colorPrimary overflow-hidden shadow-xl">
            <img
              src="https://i.ibb.co.com/tMz68dh/20221208-135537.jpg"
            //   src="https://i.ibb.co.com/WF6BYyt/abdus-salam-mehedi.jpg"
              alt="Abdus Salam Mehedi"
              className="object-cover w-full h-full "
            />
          </div>
          
          <h2 className="text-4xl font-bold text-white">Abdus Salam Mehedi</h2>
          <p className="text-lg font-medium text-gray-300">Full-Stack Developer based in Dhaka, Bangladesh</p>
        </div>

        {/* Right Section - Bio & Technologies */}
        <div className="space-y-6">
          <p className="text-gray-400 leading-relaxed text-lg">
            I began my journey with a deep enthusiasm for creating digital solutions, starting with a 3-month internship at <span className="text-white">INVOROCKET</span> and eventually joining their team full-time. I gained valuable experience in both independent and collaborative project development.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg">
            My skills include front-end technologies like <span className="text-white">HTML5, CSS3, JavaScript</span>, and frameworks like <span className="text-white">React, Next.js,</span> and <span className="text-white">Astro</span>. For state management, I utilize <span className="text-white">Redux</span> and the <span className="text-white">Context API</span>. On the backend, I work with <span className="text-white">Node.js, Express.js,</span> and <span className="text-white">MongoDB</span>. I follow MVC and modular design principles for maintainable and scalable code.
          </p>

          <p className="text-gray-400 text-lg">
            Technologies: <span className="text-white">HTML5, CSS3, JavaScript, React, Next.js, Astro, Node.js, Express.js, MongoDB, Mongoose, Zod, Appwrite, Figma, Postman</span>
          </p>

        </div>
      </div>
    </section>
  )
}

export default About