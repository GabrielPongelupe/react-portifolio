import { useContext } from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import { LanguageContext } from "../contexts/LanguageContext";
import ExperienceCard from "./ExperienceCard";

// Animações reutilizáveis
const animations = {
  title: {
    whileInView: { opacity: 1, y: 0 },
    initial: { y: -100, opacity: 0 },
    transition: { duration: 1, ease: "easeOut" },
  },
  fadeInLeft: {
    whileInView: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: -100 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  fadeInRight: {
    whileInView: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: 100 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Experience = () => {
  const { portuguese } = useContext(LanguageContext);

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 pt-24 pb-16 border-b border-neutral-900">
      <motion.h1
        {...animations.title}
        className="mb-16 text-center text-4xl font-bold"
      >
        {portuguese ? "Minhas" : "My"}
        <span className="text-green-400"> {portuguese ? "Experiências" : "Experiences"}</span>
      </motion.h1>

      <div className="grid gap-8 md:gap-12">
        {EXPERIENCES.map((experience, index) => (
          <ExperienceCard 
            key={`${experience.company}-${index}`}
            experience={experience}
            index={index}
            portuguese={portuguese}
            animations={animations}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;