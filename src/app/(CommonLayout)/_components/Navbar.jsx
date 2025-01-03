"use client"
import Image from 'next/image'
import logo from '../../../assets/logo1.png'
import { Link } from 'react-scroll';
import Hamburger from './Hamburger';

const NavbarComponent = () => {
    return (
        <div className='w-full'>
            <nav className="bg-gray-800 border-b border-gray-600">
                <div className="flex items-center justify-between mx-auto p-4 max-w-[1280px]">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image width={180} height={120} src={logo} className="" alt="" />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AS MEHEDI</span> */}
                    </a>
                    <Hamburger>
                        <span type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none">
                        <span className="sr-only text-red-500">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </span>
                    </Hamburger>
                    
                    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
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
                </div>
            </nav>

        </div>
    )
}

export default NavbarComponent