function ProjectCard({item}) {
  return (
    <div className="p-5 bg-white m-3 rounded-lg">
      <div className="w-full mb-4">
        <img
          alt={item.title}
          width="234"
          height="236"
          className="w-full rounded-lg"
          src={item.img}
        />
      </div>
      <div className="flex items-center gap-2">
        <img
          alt="logo"
          width="31"
          height="31"
          className="rounded-full"
          src={item.logo}
        />
        <p className="text-base font-medium text-darkblue dark:text-white">
          {item.title}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
