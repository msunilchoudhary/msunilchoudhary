import React from 'react'
import Education from './Education'
import Skill from './Skill'

function EducationSkills() {
  return (
    <section className='border-t border-t-gray-200 overflow-hidden'>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <img alt="vector" width="260" height="170" className="no-print absolute top-0 left-0 transform -translate-y-1/2" src="https://themewagon.github.io/Resume-Nextjs/images/home/education-skill/edu-skill-vector.svg" />

            <div className="section-title border-b border-b-gray-300 pb-8 pt-16 md:pt-32">
                <h2 className='text-5xl font-bold heading-font'>Education and Skills</h2>
                {/* <p className='text-lg text-gray-600'>Presenting Next-Generation Designs and Solutions. Create, Innovate, and Elevate.</p> */}
            </div>
            <div className="flex flex-col lg:flex-row gap-10 xl:gap-20 py-11">
                <Education />
                <Skill />
            </div>
            
        </div>
    </section>
  )
}

export default EducationSkills