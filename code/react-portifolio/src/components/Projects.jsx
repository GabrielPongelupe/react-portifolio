import { PROJECTS } from "../constants";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";
import { RiLinksFill } from "react-icons/ri";

const Projects = () => {
  const { portuguese } = useContext(LanguageContext);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-24 text-center text-4xl">
        {portuguese ? "Meus" : "My"}
        <span className="text-green-400"> {portuguese ? "Projetos" : "Projects"}</span>
      </h1>

      {PROJECTS.map((project, index) => (
        <a href={project.link} target="blank" key={index}>
          <div
            className="p-0 py-5 rounded-xl flex flex-col lg:flex-row lg:justify-between transition-transform duration-300 hover:cursor-pointer lg:hover:scale-105 lg:hover:bg-neutral-600 lg:hover:bg-opacity-20 mb-12" // Flex-col em telas menores, flex-row em telas maiores
            style={{ maxWidth: "100%", margin: "0 auto" }} // Margem automática para centralizar
          >
            <div className="w-full lg:w-1/4 md:w-full">
              <img
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
                className="mb-4 ml-5 lg:mb-0 rounded-2xl shadow-md" // Margem inferior apenas em telas menores
              />
            </div>

            <div className="w-full lg:w-3/4 md:w-full lg:ml-0">
              <h6 className="mb-2 font-semibold">
                {project.title}
                <span className="ml-2 absolute opacity-100 transition-opacity duration-300 lg:hover:opacity-100">
                  <RiLinksFill className="text-white lg:hover:text-blue-400 text-lg mt-0.5" />
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">
                {portuguese ? project.description : project.description_eng}
              </p>

              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded-3xl bg-yellow-800 bg-opacity-25 px-2 py-1 text-sm font-medium text-yellow-500"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;
