import Slider from "react-slick";
import { assinments } from "../data/data";
import AssignmentCard from "./assignmentCard";

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
              <AssignmentCard key={assignment.name} assignment={assignment} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default AssignmentSection;
