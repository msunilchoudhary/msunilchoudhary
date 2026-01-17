import Slider from 'react-slick'
import ProjectCard from './ProjectCard'
import { projects } from '../data/data'

function ProjectSection() {
  const projectSliderSettings = {
    dots:true,
    infinite:true,
    speed:1000,
    slidesToShow:4,
    slidesToScroll:1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    cssEase:"linear"

  }
  return (
    <section className='bg-orange-50 dark:bg-darklight py-20 mt-20'>
        <div className="container mx-auto max-w-7xl px-4">
            <div className="section-title mx-auto max-w-3xl text-center">
                <h2 className='text-5xl font-bold heading-font mb-6'>Popular Projects</h2>
                <p className='text-lg max-w-lg mx-auto text-gray-600'>Presenting Next-Generation Designs and Solutions. Create, Innovate, and Elevate.</p>
            </div>
            <div className="project-container mt-10">
              <Slider {...projectSliderSettings}>
                {projects.slice(0, 6).map((project) => <div key={project.title} className="project-item"><ProjectCard item={project} /></div>)}
              </Slider>              
            </div>
        </div>
    </section>
  )
}

export default ProjectSection