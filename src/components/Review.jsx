import { Rating } from "@mui/material";
import React from "react";

function Review({review}) {
  return (
    <div className="m-3 p-6 bg-white dark:bg-lightdarkblue rounded-lg">
      <div className="flex items-center gap-4 mb-5">
        <div className="relative">
          <img
            alt="Marcus Lee"
            width="48"
            height="48"
            className="rounded-full"
            src={review.thumb}
          />
          <div className="absolute bottom-0 right-0">
            <img
              alt="tick"
              width="15"
              height="15"
              src="https://themewagon.github.io/Pixelize/images/banner/greentick.svg"
            />
          </div>
        </div>
        <div>
          <h6 className="font-bold">{review.name}</h6>
          <div>
            <Rating name="half-rating-read" defaultValue={review.rating} precision={0.2} readOnly size="small" />
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm lg:text-base text-gray-500 font-normal">
          {review.comment}
        </p>
      </div>
    </div>
  );
}

export default Review;
