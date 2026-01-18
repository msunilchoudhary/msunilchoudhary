import { Link } from "react-router-dom";
import ftrLogo from '../assets/images/msc-dark.png';
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-blue-950 relative z-1 border-t border-blue-900">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-12 grid-cols-1 sm:grid-cols-12">
          <div className="md:col-span-4 sm:col-span-6 col-span-12 sm:border-r border-b border-solid border-blue-900 flex items-center sm:border-b-0 sm:min-h-25 py-10 shrink-0 ">
            <div className="sm:content-normal sm:text-start text-center content-center sm:w-auto w-full">
              <Link className="md:block flex justify-center" to="/">
                <img
                  alt="logo"
                  width="auto"
                  height="50"
                  src={ftrLogo}
                />
              </Link>
              <h2 className="text-white py-10 sm:pr-2 xl:pr-10 lg:text-2xl text-xl leading-tight font-bold">
                Ready to turn ideas into fast, reliable user experiences.
              </h2>
              <Link className="px-9 py-3 text-lg font-bold rounded-lg bg-orange-400 text-white hover:bg-blue-700 hover:shadow-none"
                to="/"
              >
                Hire me
              </Link>
            </div>
          </div>
          <div className="md:col-span-4 sm:col-span-6 col-span-12 sm:flex items-center sm:min-h-25 py-6 justify-center shrink-0 md:border-r border-b sm:border-b-0 border-solid border-blue-900">
            <div className="flex flex-col md:items-start items-center">
              <span className="text-xl font-bold text-white pb-4 inline-block">
                Support
              </span>
              <div className="pb-5 sm:block flex text-base gap-3 lg:text-xl">
                <p className="font-bold text-white">Phone</p>
                <Link
                  className="text-white/50 hover:text-white"
                  to="tel:+(91) 98918 99198"
                >
                  +(91) 98918 99198
                </Link>
              </div>
              <div className="sm:block flex items-center gap-3 text-lg lg:text-xl">
                <p className=" font-bold text-white">Email:</p>
                <a
                  className="text-white/50 hover:text-white"
                  to="mailto:msunilkchoudhary@gmail.com"
                >
                  msunilkchoudhary@gmail.com
                </a>
              </div>
              <div>
                <ul className="flex items-center gap-3 mt-8">
                  <li className="group">
                    <Link title="Facebook" className="text-3xl text-white/50 hover:text-white" to="/">
                      <FaFacebookSquare />
                    </Link>
                  </li>
                  <li className="group">
                    <Link title="Linkedin" href="/" className="text-3xl text-white/50 hover:text-white">
                      <FaLinkedin />
                    </Link>
                  </li>
                  <li className="group">
                    <Link title="Twitter" className="text-3xl text-white/50 hover:text-white" to="/">
                      <FaXTwitter />
                    </Link>
                  </li>
                  <li className="group">
                    <Link title="youtube" className="text-3xl text-white/50 hover:text-white" to="/">
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12 border-t md:border-none border-solid border-blue-900 sm:flex items-center justify-end md:min-h-25 py-6 shrink-0">
            <div className="pl-0 lg:pl-13 w-full sm:text-start text-center">
              <span className="font-bold text-white pb-4 inline-block text-2xl">
                Subscribe newsletter
              </span>
              <p className="text-MistyBlue text-base pb-7 text-white/50">
                To be updated with all the latest trends and product
              </p>
              <form className="newsletter-form flex rounded-lg w-full sm:mx-0 mx-auto">
                <input
                  type="email"
                  placeholder="Email*"
                  className="p-4 text-base border-transparent rounded-s-lg rounded-e-none! outline-0 focus:border-primary dark:focus:border-primary w-52 flex bg-white dark:bg-midnight_text dark:text-white dark:border-solid dark:border dark:border-border_color"
                />
                <button
                  type="submit"
                  className="p-2 text-base font-medium bg-orange-400 text-white border-none cursor-pointer rounded-e-lg outline-0 text-center w-36 hover:bg-blue-700 hover:shadow-none"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm gap-4 md:gap-0 flex-wrap p-7 border-t border-solid border-blue-900">
        <div>
          <ul className="flex justify-center flex-wrap mb-4 items-center sm:gap-7 gap-3">
            <li className="text-sm text-white/50">
              <Link className="hover:text-primary" to="/">
                Home
              </Link>
            </li>
            <li className="text-sm text-white/50">
              <Link className="hover:text-primary" to="/about">
                About
              </Link>
            </li>
            <li className="text-sm text-white/50">
              <Link className="hover:text-primary" to="/projects">
                Projects
              </Link>
            </li>
            <li className="text-sm text-white/50">
              <a className="hover:text-primary" to="/experties">
                Experties
              </a>
            </li>
            <li className="text-sm text-white/50">
              <a className="hover:text-primary" href="/assignments">
                Assignments
              </a>
            </li>
            <li className="text-sm text-white/50">
              <a className="hover:text-primary" href="/assignments">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-white/50">
            © 2011-2026 <Link
              target="_blank"
              className="text-yellow-400 hover:text-white"
              to="/"
            >
              msunilchoudhary
            </Link>. All rights reserved.
            
           
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
