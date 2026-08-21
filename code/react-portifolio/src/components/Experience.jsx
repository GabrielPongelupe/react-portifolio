import { useContext } from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { EXPERIENCES } from "../constants";
import { LanguageContext } from "../contexts/LanguageContext";
import SectionHeading from "../common/SectionHeading";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const { portuguese } = useContext(LanguageContext);

  return (
    <section id="experience" className="mx-auto max-w-4xl px-4 pt-24 pb-16">
      <SectionHeading
        icon={IoBriefcaseOutline}
        kicker={portuguese ? "Trajetória Profissional" : "Professional Journey"}
        title={
          <>
            {portuguese ? "Minhas" : "My"}
            <span className="text-emerald-600"> {portuguese ? "Experiências" : "Experiences"}</span>
          </>
        }
      />

      <div className="relative">
        {/* Linha vertical da timeline */}
        <div className="absolute left-[7px] top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-emerald-200 via-neutral-300 to-transparent" />

        <div className="space-y-14">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${index}`}
              experience={experience}
              index={index}
              portuguese={portuguese}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
