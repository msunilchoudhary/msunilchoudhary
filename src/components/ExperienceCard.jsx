import { experiences } from "../data/data";

function ExperienceCard() {
  return (
    <div className="space-y-7 md:space-y-0">
      {experiences.map(({company,url,month,year,designation,role}) => (
        <div key={year} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
          <div className="extitle h-full">
            <h3 className="font-bold mb-2 text-3xl">
              <span className="text-sm text-gray-500">{month}</span>{year}
            </h3>
            <h4 className="text-lg font-normal">{designation}</h4>
          </div>
          <div className="h-full relative">
            <div className="absolute left-0 top-3 w-px h-full bg-gray-500"></div>
            <div className="absolute left-0 top-0 transform -translate-x-1/2">
              <div className="w-3.5 h-3.5 rounded-full border bg-white flex items-center justify-center border-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
              </div>
            </div>
            <div className="pl-4 lg:pl-7">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl text-black font-normal">
                  {company}
                </span>
              </div>
              {url && <p className="text-base font-normal">
                {url}
              </p>}
            </div>
          </div>
          <div className="lg:pl-8 pl-3.5 pb-6">
            <p className="leading-relaxed text-base">
              {role}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceCard;
