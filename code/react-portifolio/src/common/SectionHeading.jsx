import { motion } from "framer-motion";

const SectionHeading = ({ icon: Icon, kicker, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: -24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="mb-16 flex flex-col items-center text-center"
  >
    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-medium text-neutral-500 shadow-sm">
      {Icon && <Icon className="text-emerald-600" />}
      {kicker}
    </span>
    <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-4 max-w-xl text-neutral-500">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
