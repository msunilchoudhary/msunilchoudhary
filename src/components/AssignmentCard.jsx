import React from "react";
import { Link } from "react-router-dom";

function AssignmentCard({assignment}) {
  return (
    <Link target="_blank" to={assignment.link}>
      <div className="px-3 group">
        <div className="relative overflow-hidden rounded-xl bg-blue-300 p-3">
          <img
            alt="Portfolio"
            loading="lazy"
            width="1200"
            height="800"
            className="group-hover:scale-110 group-hover:cursor-pointer transition-all duration-500"
            src={assignment?.thumb}
          />
        </div>
        <h4 className="pb-1 pt-5 group-hover:text-primary group-hover:cursor-pointer text-xl font-bold dark:text-white">
          {assignment?.name}
        </h4>
        {assignment?.technologies && <p className="text-secondary font-normal text-lg group-hover:text-primary group-hover:cursor-pointer dark:text-white/50">
          {assignment?.technologies.map((technology) => <span className="inline-flex text-[10px] bg-blue-200 font-medium text-black/75 py-[2px] px-2 rounded-xl mr-1">{technology}</span>)}
        </p>}
      </div>
    </Link>
  );
}

export default AssignmentCard;
