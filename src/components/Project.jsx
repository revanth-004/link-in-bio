import { projectDetails } from "../constants";
import { FaSquareArrowUpRight } from "react-icons/fa6";

const Project = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 border-btnBorder p-6 m-2  border-2 rounded-xl ">
      {projectDetails.map((project) => (
        <div className="h-40 p-3 lg:w-5/12 w-full rounded-lg border-2 border-btnBorder even:-rotate-2 odd:rotate-2 hover:rotate-0 trasition duration-500">
          <h2 className="mb-2 font-bold text-secondaryHeading">
            {project.title}
          </h2>
          <div className="flex">
            <img
              src={project.thumbnail}
              alt=""
              className="h-20 w-20 rounded-lg object-cover"
            />
            <div className=" ">
              <a href={project.link} className="">
                <p className="ml-4 text-xs text-secondaryPara">
                  {project.desc}
                </p>
              </a>
            </div>
          </div>
          <FaSquareArrowUpRight className="absolute bottom-2 right-2 text-colorTheme" />
        </div>
      ))}
    </div>
  );
};

export default Project;
