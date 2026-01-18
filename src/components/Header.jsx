import { IoCall } from "react-icons/io5";
import MSCLogo from "../assets/images/msunilchoudhary.png";
import { Link } from "react-router-dom";
import { BiDownArrowCircle } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <header className="bg-white shadow-md fixed top-0 py-1 z-50 w-full  transition-all">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/"><img src={MSCLogo} alt="Logo" className="w-auto mr-2" /></Link>
            </div>

            <nav className="hidden lg:flex space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Projects
              </Link>
              <Link
                to="/experties"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Expertise
              </Link>
              <Link
                to="/assignments"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Assignments
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <Link
                to="/"
                className="hidden md:flex h-10 px-4 gap-2 bg-[#d28204] items-center justify-center text-md text-white hover:bg-blue-900 rounded-full transition-all duration-300"
              >
                <BiDownArrowCircle className="text-xl" />
                Download CV
              </Link>
              <Link
                to="tel:+91 98918 99198"
                className="hidden md:flex h-10 px-4 gap-2 border-2 border-blue-900  items-center justify-center text-md text-blue-900  hover:text-white hover:bg-blue-900 rounded-full transition-all duration-300"
              >
                <IoCall />
                Call Me
              </Link>
              <button
                onClick={() => setShowMobileMenu(true)}
                className="text-3xl cursor-pointer inline-block lg:hidden"                
                title="Menubar"
              >
                <FiMenu />
              </button>
            </div>
          </div>
        </div>
      </header>

      
      <div className={`backdrop absolute top-0 left-0 w-full bg-black/80 h-full z-50 ${showMobileMenu ? '': "hidden"} transition-all duration-400`}></div>      
      <div className={`moblie-menu-wrap fixed top-0 w-72 bg-white h-full ${showMobileMenu ? 'right-0' : '-right-full'} transition-all duration-400 z-50`}>
            <div className="flex items-center justify-between p-4">
              <Link href="/Pixelize/">
                <img
                  alt="logo"
                  style={{ width: "auto", height: "40px" }}
                  className="w-full block dark:hidden"
                  src={MSCLogo}
                />
              </Link>
              <button onClick={() => setShowMobileMenu(false)} className="text-3xl text-black/40 hover:text-black cursor-pointer" title="Close Menu sidebar">                
                <LiaTimesSolid />
              </button>
            </div>
            <nav className="flex flex-col p-5 space-y-3">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setShowMobileMenu(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setShowMobileMenu(false)}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setShowMobileMenu(false)}
              >
                Projects
              </Link>
              <Link
                to="/experties"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setShowMobileMenu(false)}
              >
                Expertise
              </Link>
              <Link
                to="/assignments"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setShowMobileMenu(false)}
              >
                Assignments
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setShowMobileMenu(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center flex-col gap-5 p-5">
              <Link
                to="/"
                className="flex w-full h-10 px-4 gap-2 bg-amber-600 items-center justify-center text-md text-white hover:bg-blue-900 rounded-full transition-all duration-300"
              >
                <BiDownArrowCircle className="text-xl" />
                Download CV
              </Link>
              <Link
                to="tel:+91 98918 99198"
                className="flex w-full h-10 px-4 gap-2 border-2 border-blue-900  items-center justify-center text-md text-blue-900  hover:text-white hover:bg-blue-900 rounded-full transition-all duration-300"
              >
                <IoCall />
                Call Me
              </Link>
            </div>
          </div>
    </>
  );
}

export default Header;
