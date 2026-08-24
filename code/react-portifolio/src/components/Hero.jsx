import { HERO_CONTENT } from "../constants";
import PongelupePic from "../assets/ReminiPicPongelupe.jpg";
import { motion } from "framer-motion";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";
import DownloadButton from "./DownloadButton";
import {
  IoLocationOutline,
  IoBriefcaseOutline,
  IoSchoolOutline,
  IoPeopleOutline,
  IoHardwareChipOutline,
  IoArrowForward,
} from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";

const Hero = () => {
  const container = (delay) => ({
    hidden: { y: 16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay, ease: "easeOut" },
    }
  });

  const { portuguese } = useContext(LanguageContext);

  const highlights = [
    { icon: IoSchoolOutline, text: portuguese ? "Eng. de Software — PUC Minas" : "Software Eng. — PUC Minas" },
    { icon: IoBriefcaseOutline, text: portuguese ? "Engenheiro de Software na Parfin" : "Software Engineer at Parfin" },
    { icon: IoPeopleOutline, text: portuguese ? "+4.2M usuários impactados" : "+4.2M users impacted" },
  ];

  const stats = [
    { icon: IoBriefcaseOutline, value: "3+", label: portuguese ? "Anos de Experiência" : "Years of Experience" },
    { icon: IoHardwareChipOutline, value: "15+", label: portuguese ? "Tecnologias" : "Technologies" },
    { icon: IoPeopleOutline, value: "4.2M+", label: portuguese ? "Usuários Impactados" : "Users Impacted" },
  ];

  const socials = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/gabriel-pongelupe-de-carvalho-2b2b372b4/", label: "Linkedin" },
    { icon: FaGithub, href: "https://github.com/GabrielPongelupe", label: "GitHub" },
    { icon: SiGmail, href: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=gabrielpongelupee@gmail.com", label: "Gmail" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/gabrielpongelupe/", label: "LeetCode" },
  ];

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="hero">
      <div className="mx-auto max-w-6xl px-4 pt-40 pb-20">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-14">
          {/* Coluna visual */}
          <div className="relative w-2/3 shrink-0 sm:w-1/2 lg:order-2 lg:w-[340px] xl:w-[380px]">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-emerald-100/70 lg:-inset-5" />
            <motion.img
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              src={PongelupePic}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
              alt="Gabriel Pongelupe"
            />
          </div>

          {/* Coluna de texto */}
          <div className="flex w-full min-w-0 flex-col items-center lg:order-1 lg:flex-1 lg:items-start">
            <motion.span
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600"
            >
              {portuguese ? "Desenvolvedor FullStack" : "FullStack Developer"}
            </motion.span>

            <motion.h1
              variants={container(0.1)}
              initial="hidden"
              animate="visible"
              className="mt-3 text-center text-5xl font-extrabold tracking-tight text-neutral-950 sm:text-6xl lg:text-left"
            >
              Gabriel Pongelupe
            </motion.h1>

            <motion.div
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-600 shadow-sm">
                <IoLocationOutline className="text-emerald-600" />
                Belo Horizonte, MG
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-600 shadow-sm">
                <IoBriefcaseOutline className="text-emerald-600" />
                {portuguese ? "Trabalhando @ Parfin" : "Working @ Parfin"}
              </span>
            </motion.div>

            <motion.p
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-center text-base leading-relaxed text-neutral-500 sm:text-lg lg:text-left"
            >
              {portuguese ? HERO_CONTENT.br : HERO_CONTENT.eng}
            </motion.p>

            <motion.div
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              {highlights.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-2 text-xs font-medium text-neutral-600 shadow-sm"
                >
                  <item.icon className="shrink-0 text-sm text-emerald-600" />
                  {item.text}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              <DownloadButton />
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition-colors duration-300 hover:border-neutral-300 hover:bg-neutral-50"
              >
                {portuguese ? "Ver Projetos" : "View Projects"}
                <IoArrowForward />
              </button>
            </motion.div>

            <motion.div
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-col items-center gap-3 lg:items-start"
            >
              <span className="text-xs uppercase tracking-wider text-neutral-400">
                {portuguese ? "Redes sociais" : "Find me online"}
              </span>
              <div className="flex items-center gap-4 text-xl text-neutral-400">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="transition-colors duration-300 hover:text-emerald-600"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Faixa de estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 grid grid-cols-3 divide-x divide-neutral-200 rounded-2xl border border-neutral-200 bg-white shadow-sm"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-2 px-2 py-4 sm:gap-3 sm:px-4 sm:py-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 sm:h-10 sm:w-10">
                <stat.icon className="text-sm text-emerald-600 sm:text-lg" />
              </span>
              <div className="flex min-w-0 flex-col items-start text-left">
                <p className="text-base font-extrabold leading-tight text-neutral-950 sm:text-2xl">{stat.value}</p>
                <p className="text-[10px] leading-snug text-neutral-500 sm:text-xs">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
