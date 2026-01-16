import React from "react";
import { education } from "../data/data";

function Education() {
  return (
    <div className="w-full lg:max-w-md flex flex-col gap-0 xl:gap-8">
      {education.map((item) => (<div key={item.year} className="flex items-start gap-6">
        <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border bg-white flex items-center justify-center border-orange-400">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h5 className="text-2xl font-bold">{item.title} | {item.year}</h5>
          <p className="font-normal">
            {item.text}
          </p>
        </div>
      </div>))}
    </div>
  );
}

export default Education;
