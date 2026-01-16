import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { assinments } from "../data/data";

function AssignmentSection() {
    const assignmentSettings ={
        dots:false,
        arrows:false,
        speed:2000,
        slidesToShow:5,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000
    }
  return (
    <section className="bg-white dark:bg-darklight assignments py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="section-title mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-bold heading-font mb-6">
            Explore my assignments showcase
          </h2>
          <p className="text-lg max-w-lg mx-auto text-gray-600">
            Dive into a curated collection of my finest work, showcasing expertise across various industries.
          </p>
        </div>
        <div className="project-container mt-10">
          <Slider {...assignmentSettings}>
            {assinments.map((assignment) => (
              <Link key={assignment.name} tabindex="-1" to={assignment.link}>
                <div className="px-3 group">
                  <div className="relative overflow-hidden rounded-xl bg-blue-300 p-3">
                    <img
                      alt="Portfolio"
                      loading="lazy"
                      width="1200"
                      height="800"
                      className="group-hover:scale-110 group-hover:cursor-pointer transition-all duration-500"
                      src={assignment.thumb}
                    />
                  </div>
                  <h4 className="pb-1 pt-6 group-hover:text-primary group-hover:cursor-pointer text-2xl text-midnight_text font-bold dark:text-white">
                    {assignment.name}
                  </h4>
                  <p className="text-secondary font-normal text-lg group-hover:text-primary group-hover:cursor-pointer dark:text-white/50">
                    Designation
                  </p>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default AssignmentSection;
