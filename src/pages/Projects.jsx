import PageHeader from '../components/PageHeader'
import { projects } from '../data/data'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <div className='main-wrap'>
      <PageHeader align="center" pageTitle="Discover my projects showcase" headerText="View real-world projects built with a focus on usability, performance, and results." />
      <div className="project-wrap">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {projects && projects.map((item) => <ProjectCard key={item.title}  item={item} shadow="shadow-xl" />)}
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Projects