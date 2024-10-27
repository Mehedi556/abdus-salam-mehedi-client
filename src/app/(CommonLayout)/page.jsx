import Banner from "../_components/home/Banner"
import Blogs from "../_components/home/Blogs"
import Experience from "../_components/home/experience"
import Projects from "../_components/home/Projects"
// import ResumeModal from "./_components/home/ResumeModal"
import Skills from "../_components/home/Skills"


const page = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto">
        <Banner />
        {/* <ResumeModal /> */}
        <Experience />

        <Skills />

        <Projects />

        <Blogs />
      </div>
    </div>
  )
}

export default page