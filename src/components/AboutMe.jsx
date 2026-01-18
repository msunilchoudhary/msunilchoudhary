import React from 'react'

function AboutMe() {
  return (
    <div className="container mx-auto max-w-7xl px-4 pt-6">
        <div className="md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center">
        <div className="flex gap-2 items-center">
          <span className="w-3 h-3 rounded-full bg-orange-400"></span>
          <span className="font-medium text-midnight_text text-sm dark:text-white/50">
            about me
          </span>
        </div>
        <h1 className="font-bold dark:text-white text-4xl md:text-5xl md:leading-[1.15]">
          Who am I?
        </h1>
        <p className="text-base lg:text-xl font-medium">
            I am a Web Designer and Frontend Developer with 13+ years of experience creating intuitive, high-performing, and visually compelling digital experiences. I specialize in designing user-centric interfaces and developing scalable frontend architectures that balance aesthetics, usability, and performance.
        </p>
        <p>
            Over the years, I have worked across diverse industries, delivering responsive websites, web applications, and 2,000+ marketing landing pages that support branding, lead generation, and business growth. My expertise lies in transforming design concepts into clean, maintainable code using modern frontend technologies, with a strong focus on React and modern CSS frameworks.
        </p>
        <p>
            I collaborate closely with designers, marketers, and backend teams to ensure seamless integration, accessibility, and performance optimization. With a deep understanding of UI/UX principles and frontend best practices, I consistently deliver solutions that enhance user engagement and drive measurable results.
        </p>
      </div>
    </div>
  )
}

export default AboutMe