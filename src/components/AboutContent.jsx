import processWork from '../assets/images/progress-work.png'

function AboutContent() {
  return (
    <section className='w-full bg-white py-13'>
        <div className="container mx-auto max-w-7xl px-4">
            <div className="grid md:grid-cols-12 items-center gap-7 ">
            <div className="md:col-span-5">
              <img
                alt="logo"
                width="425"
                height="0"
                src={processWork}
              />
            </div>
            <div className="md:col-span-7">
              <div className="flex gap-2 items-center">
                <span className="w-3 h-3 rounded-full bg-orange-400"></span>
                <span className="font-medium text-midnight_text text-sm dark:text-white/50">
                  build everything
                </span>
              </div>
              <h2 className="pt-9 pb-8 text-midnight_text font-bold dark:text-white text-4xl">
                Build amazing websites and landing pages with ease
              </h2>
              <p className="text-gray dark:text-white/70 text-base font-semibold">
                Created 2,000+ data-driven landing pages tailored for digital marketing, improving campaign performance through user-focused design, A/B-ready layouts, and performance optimization.           
                
              </p>
              <div className="block mx-auto pt-12">
                <div className="progress_bar_item flex flex-wrap mb-8">
                  <div className="flex-1 w-auto text-sm font-normal text-grey mb-2 dark:text-white/50">
                    UX Research and Testing
                  </div>
                  <div className="item_value shrink text-sm font-normal text-grey mb-2 dark:text-white/50">
                    95%
                  </div>
                  <div className="relative h-1 w-full bg-green-400/40 rounded-md">
                    <div
                      className="progress absolute left-0 top-0 bottom-0 h-full bg-green-600 rounded-md duration-100 ease-in-out"
                      style={{width: "95%"}}
                    ></div>
                  </div>
                </div>
                <div className="progress_bar_item flex flex-wrap mb-8">
                  <div className="flex-1 w-auto text-sm font-normal text-grey mb-2 dark:text-white/50">
                    Product Management
                  </div>
                  <div className="item_value shrink text-sm font-normal text-grey mb-2 dark:text-white/50">
                    84%
                  </div>
                  <div className="relative h-1 w-full bg-orange-400blue-600/30 rounded-md">
                    <div
                      className="progress absolute left-0 top-0 bottom-0 h-full bg-orange-400 rounded-md duration-100 ease-in-out"
                      style={{width: "84%"}}
                    ></div>
                  </div>
                </div>
                <div className="progress-bar-item flex flex-wrap mb-8">
                  <div className="flex-1 w-auto text-sm font-normal text-grey mb-2 dark:text-white/50">
                    UI &amp; Visual Design
                  </div>
                  <div className="item_value shrink text-sm font-normal text-grey mb-2 dark:text-white/50">
                    90%
                  </div>
                  <div className="relative h-1 w-full bg-blue-600/30 rounded-md">
                    <div
                      className="progress absolute left-0 top-0 bottom-0 h-full bg-blue-600 rounded-md duration-100 ease-in-out"
                      style={{width: "90%"}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutContent