import { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { IoMailOutline, IoLogoLinkedin, IoCopyOutline, IoArrowForward } from "react-icons/io5";
import SectionHeading from "../common/SectionHeading";

const Contact = () => {
  const { portuguese } = useContext(LanguageContext);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pt-24 pb-32">
      <SectionHeading
        icon={IoMailOutline}
        kicker={portuguese ? "Contato" : "Contact"}
        title={
          <>
            {portuguese ? "Vamos" : "Let's"}
            <span className="text-emerald-600"> {portuguese ? "Conversar?" : "Talk?"}</span>
          </>
        }
        subtitle={
          portuguese
            ? "Tem um projeto, uma vaga ou só quer trocar uma ideia sobre tecnologia? Fica à vontade pra chamar."
            : "Got a project, a role, or just want to talk tech? Feel free to reach out."
        }
      />

      <motion.div
        className="mx-auto max-w-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
      >
        <motion.div
          className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm"
          variants={fadeInUp}
        >
          <div className="flex flex-col space-y-3">
            {/* LinkedIn */}
            <motion.a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="flex items-center gap-4 rounded-2xl p-3 hover:bg-neutral-50 transition-colors duration-300"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-emerald-600">
                <IoLogoLinkedin className="text-lg" />
              </span>
              <div className="flex-grow">
                <p className="text-xs text-neutral-500">LinkedIn</p>
                <p className="font-medium text-neutral-900">gabrielpongelupe</p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.div
              variants={fadeInUp}
              onClick={() => copyToClipboard(CONTACT.email)}
              className="group flex items-center gap-4 rounded-2xl p-3 cursor-pointer hover:bg-neutral-50 transition-colors duration-300"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-emerald-600">
                <IoMailOutline className="text-lg" />
              </span>
              <div className="flex-grow">
                <p className="text-xs text-neutral-500">Email</p>
                <p className="font-medium text-neutral-900">{CONTACT.email}</p>
              </div>
              <div>
                {copied ? (
                  <span className="rounded-full bg-emerald-600 px-2 py-1 text-xs font-medium text-white">
                    {portuguese ? "Copiado!" : "Copied!"}
                  </span>
                ) : (
                  <IoCopyOutline className="text-neutral-400 transition-colors duration-300 group-hover:text-neutral-600" />
                )}
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.div variants={fadeInUp} className="pt-4 text-center">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-emerald-700"
              >
                {portuguese ? "Enviar email agora" : "Send email now"}
                <IoArrowForward />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
