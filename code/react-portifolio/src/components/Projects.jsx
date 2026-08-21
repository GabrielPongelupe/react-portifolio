import { useContext, useState } from "react";
import { IoRocketOutline } from "react-icons/io5";
import { PROJECTS } from "../constants";
import { LanguageContext } from "../contexts/LanguageContext";
import ProjectModal from "../common/ProjectModal";
import SectionHeading from "../common/SectionHeading";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { portuguese } = useContext(LanguageContext);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 pt-24 pb-16">
      <SectionHeading
        icon={IoRocketOutline}
        kicker={portuguese ? "Projetos" : "Projects"}
        title={
          <>
            {portuguese ? "Meus" : "My"}
            <span className="text-emerald-600"> {portuguese ? "Projetos" : "Projects"}</span>
          </>
        }
      />

      <div className="grid gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id || index}
            project={project}
            index={index}
            onClick={() => handleProjectClick(project)}
            portuguese={portuguese}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeModal}
          isOpen={!!selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
