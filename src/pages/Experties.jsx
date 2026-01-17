import React from 'react'
import PageHeader from '../components/PageHeader'

function Experties() {
  return (
    <div className='main-wrap'>
      <PageHeader align="center" pageTitle="Experties specifically designed to meet your business needs" headerText="Transforming ideas into engaging digital products using clean design, React-driven frontend architecture, and performance-first development"/>
      <div className="experties">
        <div className="container mx-auto max-w-7xl px-4 pt-4 pb-12">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <div className="bg-gray-100 dark:bg-darklight rounded-lg p-8">
                <div className="p-3 rounded-lg bg-orange-400 w-fit mb-8 shadow-lg shadow-primary/30">
                  <img
                    alt="Web Design"
                    loading="lazy"
                    width="24"
                    height="24"
                    src="https://themewagon.github.io/Pixelize/images/specialization/webdesign.svg"
                  />
                </div>
                <div>
                  <h5 className="font-bold mb-2">Web Design</h5>
                  <p className="text-base font-normal max-w-xs">
                    Modern, responsive websites built to engage users and convert
                    leads.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 dark:bg-darklight rounded-lg p-8">
                <div className="p-3 rounded-lg bg-orange-400 w-fit mb-8 shadow-lg shadow-primary/30">
                  <img
                    alt="Logo Design"
                    loading="lazy"
                    width="24"
                    height="24"
                    src="https://themewagon.github.io/Pixelize/images/specialization/logodesign.svg"
                  />
                </div>
                <div>
                  <h5 className="font-bold mb-2">Logo Design</h5>
                  <p className="text-base font-normal max-w-xs">
                    Distinct, memorable logos crafted to define and elevate your
                    brand.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 dark:bg-darklight rounded-lg p-8">
                <div className="p-3 rounded-lg bg-orange-400 w-fit mb-8 shadow-lg shadow-primary/30">
                  <img
                    alt="Mobile App Development"
                    loading="lazy"
                    width="24"
                    height="24"
                    src="https://themewagon.github.io/Pixelize/images/specialization/mobileapp.svg"
                  />
                </div>
                <div>
                  <h5 className="font-bold mb-2">Mobile App Development</h5>
                  <p className="text-base font-normal max-w-xs">
                    Custom iOS and Android apps with seamless flow and
                    functionality.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 dark:bg-darklight rounded-lg p-8">
                <div className="p-3 rounded-lg bg-orange-400 w-fit mb-8 shadow-lg shadow-primary/30">
                  <img
                    alt="Content Writing"
                    loading="lazy"
                    width="24"
                    height="24"
                    src="https://themewagon.github.io/Pixelize/images/specialization/contentwrite.svg"
                  />
                </div>
                <div>
                  <h5 className="font-bold mb-2">Content Writing</h5>
                  <p className="text-base font-normal max-w-xs">
                    SEO-driven content designed to educate, engage, and boost
                    visibility.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 dark:bg-darklight rounded-lg p-8">
                <div className="p-3 rounded-lg bg-orange-400 w-fit mb-8 shadow-lg shadow-primary/30">
                  <img
                    alt="SEO Optimization"
                    loading="lazy"
                    width="24"
                    height="24"
                    src="https://themewagon.github.io/Pixelize/images/specialization/seooptimize.svg"
                  />
                </div>
                <div>
                  <h5 className="font-bold mb-2">SEO Optimization</h5>
                  <p className="text-base font-normal max-w-xs">
                    Proven SEO strategies that increase rankings, traffic, and
                    brand reach.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 dark:bg-darklight rounded-lg p-8">
                <div className="p-3 rounded-lg bg-orange-400 w-fit mb-8 shadow-lg shadow-primary/30">
                  <img
                    alt="Digital Marketing"
                    loading="lazy"
                    width="24"
                    height="24"
                    src="https://themewagon.github.io/Pixelize/images/specialization/digitalmarketing.svg"
                  />
                </div>
                <div>
                  <h5 className="font-bold mb-2">Digital Marketing</h5>
                  <p className="text-base font-normal max-w-xs">
                    Targeted digital campaigns to build awareness and grow your
                    audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experties