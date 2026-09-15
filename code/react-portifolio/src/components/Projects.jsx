import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoRocketOutline } from "react-icons/io5";
import { PROJECTS } from "../constants";
import { LanguageContext } from "../contexts/LanguageContext";
import SectionHeading from "../common/SectionHeading";
import ProjectRow from "./ProjectRow";

const Projects = () => {
  const { portuguese } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    if (project.detailSlug) {
      navigate(`/projetos/${project.detailSlug}`);
    } else if (project.link?.startsWith("/")) {
      navigate(project.link);
    }
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

      <div className="divide-y divide-neutral-200">
        {PROJECTS.map((project, index) => (
          <ProjectRow
            key={project.id || index}
            project={project}
            index={index}
            onClick={() => handleProjectClick(project)}
            portuguese={portuguese}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
