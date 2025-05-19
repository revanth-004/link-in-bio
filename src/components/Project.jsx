import { projectDetails } from "../constants";

const Project = () => {
  return (
    <div className="flex flex-wrap gap-4 shadow-lg border-white/30 p-2  m-2  border-2 rounded-xl ">
      {projectDetails.map((project) => (
        <div className="flex h-24 w-full rounded-lg  border-2 border-gray-200">
          <img
            src={project.thumbnail}
            alt=""
            className="h-20 w-20 m-2 rounded-lg object-cover"
          />
          <div className="m-2 ">
            <a href={project.link} className="">
              <h2 className="font-bold text-gray-600">{project.title}</h2>
              <p className="text-xs text-gray-500">{project.desc}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
