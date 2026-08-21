import { MdDownload } from "react-icons/md";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

const DownloadButton = () => {
  const { portuguese } = useContext(LanguageContext);

  return (
    <a
      href="/Curriculo_Gabriel.pdf"
      download="Curriculo_GabrielPongelupe.pdf"
      className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-neutral-800"
    >
      <MdDownload className="text-lg" />
      {portuguese ? "Baixar CV" : "Download Resume"}
    </a>
  );
};

export default DownloadButton;
