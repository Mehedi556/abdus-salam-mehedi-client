"use client"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-scroll";

const Hamburger = ({children}) => {
  return (
    <Sheet>
      <SheetTrigger >{children}</SheetTrigger>
      <SheetContent className="bg-colorSolid">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
          </SheetDescription>
        </SheetHeader>
        <div className="w-full">
                        <ul className="flex gap-x-5 flex-col font-medium mt-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li>
                                <Link to="home" smooth={true} duration={500} className="block py-2 px-3 md:p-0 text-white cursor-pointer">Home</Link>
                            </li>
                            
                            
                            <li>
                                <Link to="experiences" smooth={true} duration={500} className="block py-2 px-3 md:p-0 text-white cursor-pointer">Experience</Link>
                            </li>
                            <li>
                                <Link to="skills" smooth={true} duration={1000} className="block py-2 px-3 md:p-0 text-white cursor-pointer">Skills</Link>
                            </li>
                            <li>
                                <Link to="projects" smooth={true} duration={1500} className="block py-2 px-3 md:p-0 text-white cursor-pointer">Projects</Link>
                            </li>
                            
                            <li>
                                <Link to="blogs" smooth={true} duration={1500} className="block py-2 px-3 md:p-0 text-white cursor-pointer">Blogs</Link>
                            </li>
                            <li>
                                <Link to="about" smooth={true} duration={2000} className="block py-2 px-3 md:p-0 text-white cursor-pointer">About</Link>
                            </li>
                            <li>
                                <Link to="contact" smooth={true} duration={2000} className="block py-2 px-3 md:p-0 text-white cursor-pointer">Contact</Link>
                            </li>
                            
                        </ul>
                    </div>
      </SheetContent>
    </Sheet>
  );
};

export default Hamburger;
