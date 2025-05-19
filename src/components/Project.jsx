import { projectDetails } from "../constants";

const Project = () => {
  return (
    <div className="flex flex-wrap gap-4  shadow-md  shadow-primaryShadow border-btnBorder p-2  m-2  border-2 rounded-xl ">
      {projectDetails.map((project) => (
        <div className="flex h-24 w-full rounded-lg  border-2 shadow-inner   shadow-primaryShadow border-btnBorder">
          <img
            src={project.thumbnail}
            alt=""
            className="h-20 w-20 m-2 rounded-lg object-cover"
          />
          <div className="m-2 ">
            <a href={project.link} className="">
              <h2 className="font-bold text-secondaryHeading">
                {project.title}
              </h2>
              <p className="text-xs text-secondaryPara">{project.desc}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
