import { Link } from "react-router-dom";
import pattern1 from "../assets/images/pattern1.svg";
import pattern2 from "../assets/images/pattern2.svg";
import HeroImg1 from "../assets/images/hero-image.webp";
import LogoFade from "../assets/images/msc-logo.webp";

function HomeHero() {
  return (
    <section className="w-full bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 container relative z-20 pt-28">
        <div className="relative z-20 grid lg:grid-cols-12 grid-cols-1 lg:justify-items-normal justify-items-center gap-13 lg:gap-20 pb-10 lg:pb-16">
          <div className="lg:col-span-7 col-span-1">
            <div className="flex flex-col lg:items-start items-center lg:text-start text-center gap-8">
              <h1 className="max-w-xl text-4xl lg:text-6xl font-bold leading-10 lg:leading-20">
                I'm Sunil<br />
                <span className="text-amber-500">Web</span> Designer & <span className="text-amber-500">Frontend</span> Developer
              </h1>
              <p className="text-gray-400 max-w-xl">With a strong focus on creating clean, responsive, and user-friendly interfaces. I specialize in translating design concepts into high-performance web experiences using modern frontend technologies.</p>
              <div className="flex item-center gap-5 mt-3">
                <Link to="/">
                  <button className="px-6 lg:px-12 py-3 font-medium text-white border rounded-lg border-text-amber-600 bg-amber-700 hover:bg-transparent hover:text-amber-600 hover:cursor-pointer duration-300">
                    Download CV
                  </button>
                </Link>
                <Link to="/">
                  <button className="px-6 lg:px-12 py-3 font-medium text-primary border rounded-lg border-primary bg-transparent hover:bg-blue-600 hover:text-white hover:cursor-pointer duration-300">
                    Contact me
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 col-span-1 lg:w-full sm:w-[80%] w-full">
            <img src={HeroImg1} alt="Sunil Choudhary" />
          </div>
        </div>
        <div className="absolute top-20 -left-10 opacity-10">
          <img src={pattern1} alt="pattern1" />
        </div>
        <div className="absolute bottom-0 left-[53%] opacity-10 z-10">
          <img src={pattern2} alt="pattern2" />
        </div>
        <div className="absolute top-[5%] bottom-0 left-[25%] opacity-5 z-10">
          <img src={LogoFade} alt="pattern2" />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
