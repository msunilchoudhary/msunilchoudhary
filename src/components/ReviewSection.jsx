import React from "react";
import { clientReviews } from "../data/data";
import Review from "./Review";
import Slider from "react-slick";

function ReviewSection() {
  const reviewSliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="bg-blue-50 dark:bg-darklight py-10 lg:py-20 mt-2 lg:mt-10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="section-title mx-auto max-w-3xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold heading-font mb-6">
            Client Reviews
          </h2>
          <p className="text-base lg:text-lg max-w-lg mx-auto text-gray-600">
            Presenting Next-Generation Designs and Solutions. Create, Innovate,
            and Elevate.
          </p>
        </div>
        <div className="project-container mt-6 lg:mt-10">
          <Slider {...reviewSliderSettings}>
            {clientReviews.map((review) => (
              <div key={review.name} className="project-item">
                <Review review={review} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
