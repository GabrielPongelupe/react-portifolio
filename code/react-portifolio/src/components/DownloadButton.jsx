import { MdDownload } from "react-icons/md";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";
import {motion} from "framer-motion"

const DownloadButton = () => {

    const {portuguese, setPortuguese} = useContext(LanguageContext)

  return (
    <motion.div 
    initial={{x: -100, opacity:0}}
    animate={{
      x: 0,
      opacity: 0.8,
      transition:{duration: 0.5, delay: 1.5}
    }}
    className="mx-5 flex justify-start items-start border-b border-neutral-900 pb-10">
      <a
        href="/Curriculo_Gabriel.pdf" // Caminho do PDF dentro da pasta "public"
        download="Curriculo_GabrielPongelupe.pdf" // Nome sugerido para o download
        className="bg-gradient-to-r from-green-400 via-lime-400 to-yellow-500 text-black  hover:text-zinc-50
            font-bold px-6 py-4 rounded-lg hover:bg-green-600 transition-all flex items-center hover:scale-105 hover:border-neutral-100 text-xl "
      >
        <MdDownload className="mr-2" />
    {portuguese ? "Baixar CV" : "Download Resume"}
      </a>
    </motion.div>
  );
};

export default DownloadButton;
