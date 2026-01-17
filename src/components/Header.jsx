import { IoCall } from 'react-icons/io5'
import MSCLogo from '../assets/images/msunilchoudhary.png'
import { Link } from 'react-router-dom'
import { BiDownArrowCircle } from 'react-icons/bi'

function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 py-1 z-50 w-full  transition-all">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">

        <div className="flex items-center">
          <img src={MSCLogo} alt="Logo" className=" w-auto mr-2" />
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
          <Link to="/projects" className="text-gray-700 hover:text-blue-600 font-medium">Projects</Link>
          <Link to="/experties" className="text-gray-700 hover:text-blue-600 font-medium">Expertise</Link>
          <Link to="/assignments" className="text-gray-700 hover:text-blue-600 font-medium">Assignments</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link to="tel:+91 98918 99198" className='flex h-10 px-4 gap-2 bg-amber-600 items-center justify-center text-md text-white hover:bg-blue-900 rounded-full transition-all duration-300'><BiDownArrowCircle className='text-xl' />Download CV</Link>
          <Link to="tel:+91 98918 99198" className='flex h-10 px-4 gap-2 border-2 border-blue-900  items-center justify-center text-md text-blue-900  hover:text-white hover:bg-blue-900 rounded-full transition-all duration-300'><IoCall />Call Me</Link>
        </div>

      </div>
    </div>
  </header>
  )
}

export default Header