import About from "../_components/home/About"
import Banner from "../_components/home/Banner"
import Blogs from "../_components/home/Blogs"
import Contact from "../_components/home/Contact"
import Experience from "../_components/home/experience"
import Projects from "../_components/home/Projects"
// import ResumeModal from "./_components/home/ResumeModal"
import Skills from "../_components/home/Skills"
import Footer from "./_components/Footer"


const page = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto">
        <div id="home">
          <Banner />
        </div>
        
        {/* <ResumeModal /> */}
        <div id="experiences">
          <Experience />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="blogs">
          <Blogs />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
        

      </div>
    </div>
  )
}

export default page