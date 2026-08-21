import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";

const MAGNITUDE_WORDS = "milhões|milhão|bilhões|bilhão|millions|million|thousands|thousand|billions|billion|mil";
const NUMBER_PATTERN = new RegExp(`(\\d+(?:[.,]\\d+)?\\+?%?(?:\\s(?:${MAGNITUDE_WORDS}))?)`, "gi");
const NUMBER_TEST = new RegExp(`^\\d+(?:[.,]\\d+)?\\+?%?(?:\\s(?:${MAGNITUDE_WORDS}))?$`, "i");

const highlightNumbers = (text) =>
  text.split(NUMBER_PATTERN).map((part, idx) =>
    NUMBER_TEST.test(part) ? (
      <strong key={idx} className="font-bold text-emerald-700">
        {part}
      </strong>
    ) : (
      <span key={idx}>{part}</span>
    )
  );

const ExperienceCard = ({ experience, portuguese, index }) => {
  const description = portuguese ? experience.description.br : experience.description.eng;
  const highlights = portuguese ? experience.highlights.br : experience.highlights.eng;
  const duration = portuguese ? experience.duration.br : experience.duration.eng;
  const images = experience.images ?? [];

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -20 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative pl-9 sm:pl-12"
    >
      {/* Marcador na timeline */}
      <span className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center">
        {experience.current && (
          <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-500/40" />
        )}
        <span
          className={`relative h-3 w-3 rounded-full ring-4 ring-white ${
            experience.current ? "bg-emerald-500" : "bg-neutral-400"
          }`}
        />
      </span>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
          {experience.period}
        </span>
        {experience.current && (
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
            {portuguese ? "Atual" : "Current"}
          </span>
        )}
        <span className="text-xs text-neutral-400">· {duration}</span>
      </div>

      <h3 className="mt-2 text-xl font-bold text-neutral-950">
        {portuguese ? experience.role.br : experience.role.eng}
      </h3>
      <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        <span className="font-semibold text-emerald-600">{experience.company}</span>
        <span className="flex items-center gap-1 text-neutral-500">
          <IoLocationOutline className="text-xs" />
          {experience.location}
        </span>
      </div>

      <p className="mt-4 leading-relaxed text-neutral-500">{highlightNumbers(description)}</p>

      <ul className="mt-3 space-y-2">
        {highlights.map((highlight, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-500">
            <span className="mt-0.5 shrink-0 text-neutral-400">—</span>
            <span>{highlightNumbers(highlight)}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {experience.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600"
          >
            {tech}
          </span>
        ))}
      </div>

      {images.length > 0 && (
        <div className={`mt-5 grid gap-3 ${images.length > 1 ? "grid-cols-2" : "max-w-sm grid-cols-1"}`}>
          {images.map((img, imgIdx) => (
            <div key={imgIdx} className="overflow-hidden rounded-xl ring-1 ring-neutral-200">
              <img
                src={img}
                alt={`${experience.company} ${imgIdx + 1}`}
                className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ExperienceCard;
