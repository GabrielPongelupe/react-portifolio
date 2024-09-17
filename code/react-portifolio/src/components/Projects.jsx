import { PROJECTS } from "../constants";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";
import { IoLink } from "react-icons/io5";
import { useState } from "react";

const Projects = () => {

  const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null);

  const { portuguese } = useContext(LanguageContext);

  return (
    <div className="m-4 border-b border-neutral-900 pb-4">
      <h1 className="my-24 text-center text-4xl">
        {portuguese ? "Meus" : "My"}
        <span className="text-green-400"> {portuguese ? "Projetos" : "Projects"}</span>
      </h1>

      {PROJECTS.map((project, index) => (
        <a href={project.link} target="blank" key={index}>
          <div 
            key={index} 
            className="mb-8 flex flex-wrap justify-center rounded-xl hover:border-t hover:border-white/20 hover:cursor-pointer transition-transform duration-300 scale-101 lg:hover:bg-gradient-to-br from-white/10 to-white/1  px-4 py-6 max-w-4xl mx-auto"
            onMouseEnter={() => setHoveredProjectIndex(index)}
            onMouseLeave={() => setHoveredProjectIndex(null)}
          >
            <div className="w-full lg:w-1/4 flex justify-center">
              <img 
                src={project.image} 
                width={150} 
                height={150}
                alt={project.title}
                className="mb-6 rounded-xl"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {project.title} 
                <span className="ml-2 absolute transition-opacity duration-[3000ms] lg:hover:opacity-100">
                  {hoveredProjectIndex == index ? (
                    <IoLink className="text-white lg:hover:text-blue-400 text-lg mt-0.5 scale-105" />
                  ) : ""}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{portuguese ? project.description : project.description_eng}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    className="rounded-3xl bg-yellow-800 bg-opacity-25 px-3 py-1 text-sm font-medium text-yellow-500 whitespace-nowrap"
                    key={index}
                  > 
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;
