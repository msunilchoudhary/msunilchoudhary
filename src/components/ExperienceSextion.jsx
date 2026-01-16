import ExperienceCard from "./ExperienceCard"

function ExperienceSextion() {
  return (
    <section className='bg-white dark:bg-darklight py-20'>
        <div className="container mx-auto max-w-7xl px-4">
            <div className="section-title border-b border-b-gray-300 pb-8">
                <h2 className='text-5xl font-bold heading-font mb-6'>Experience</h2>
                <p className='text-lg text-gray-600'>My work spans UI design, frontend architecture, and performance optimization, with a strong focus on React, and modern CSS frameworks.</p>
            </div>
            <div className="experiences mt-8">
              <ExperienceCard />
            </div>
        </div>
    </section>
  )
}

export default ExperienceSextion