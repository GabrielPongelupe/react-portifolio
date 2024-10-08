import logo from "../assets/PongelupeLogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaChevronDown } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";
import { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import brasilFlag from "../assets/brasil.png"; // Bandeira do Brasil
import usaFlag from "../assets/usa.png"; // Bandeira dos EUA

const Navbar = () => {
  const { portuguese, toggleLanguage } = useContext(LanguageContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleLanguage = (language) => {
    if ((language === 'portuguese' && !portuguese) || (language === 'english' && portuguese)) {
      toggleLanguage();
    }
    setDropdownOpen(false); // Fecha o dropdown após a troca de idioma
  };

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="mb-20 mx-3 flex flex-col md:flex-row items-center justify-between mt-5">
      <div className="flex flex-shrink-0 items-center justify-center mb-4 md:mb-0">
        <p className="mx-2 w-auto pt-1 transition-transform duration-300 hover:scale-105 anton-regular text-3xl text-white text-center">GABRIEL<span className="text-orange-400">PONGELUPE</span></p>
      </div>

      <div className="m-8 flex items-center justify-center gap-5 text-3xl">
        <ul className="flex flex-wrap gap-6">
          <li>
            <a
              href="https://www.linkedin.com/in/gabriel-pongelupe-de-carvalho-2b2b372b4/"
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedin"
            >
              <FaLinkedin className="hover:cursor-pointer text-gray-300 transition-transform duration-300 hover:scale-110 hover:text-white hover:brightness-200" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/GabrielPongelupe"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub className="hover:cursor-pointer text-gray-300 transition-transform duration-300 hover:scale-110 hover:text-white hover:brightness-200" />
            </a>
          </li>

          <li>
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=gabrielpongelupee@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Gmail"
            >
              <SiGmail className="hover:cursor-pointer text-gray-300 transition-transform duration-300 hover:text-white hover:scale-110 hover:brightness-200" />
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/u/gabrielpongelupe/"
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode"
            >
              <SiLeetcode className="hover:cursor-pointer text-gray-300 transition-transform duration-300 hover:text-white hover:scale-110 hover:brightness-200" />
            </a>
          </li>
        </ul>
      </div>

      {/* Botão de Troca de Idioma com Dropdown */}
      <div className="relative mb-4 md:mb-0">
        <button
          onClick={handleDropdown}
          className="flex items-center gap-2 text-slate-300 hover:text-white"
        >
          <img
            src={portuguese ? brasilFlag : usaFlag}
            alt={portuguese ? "Bandeira do Brasil" : "USA Flag"}
            className="w-9 h-9 rounded-full shadow-md hover:shadow-md transition-transform duration-300 hover:shadow-slate-600"
          />
          {/* Adiciona a classe de rotação quando dropdownOpen for true */}
          <FaChevronDown className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        <div
          className={`absolute right-0 mt-2 w-32 bg-gray-800 rounded-md shadow-lg z-50 overflow-hidden transition-all duration-300 ${dropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <ul className="text-white">
            <li
              onClick={() => handleToggleLanguage('portuguese')}
              className="flex items-center px-2 py-2 hover:bg-neutral-200 cursor-pointer hover:text-gray-800"
            >
              <img src={brasilFlag} alt="Bandeira do Brasil" className="w-7 h-7 mr-2" />
              Português
            </li>
            <li
              onClick={() => handleToggleLanguage('english')}
              className="flex items-center px-2 py-2 hover:bg-neutral-200 cursor-pointer hover:text-gray-800"
            >
              <img src={usaFlag} alt="USA Flag" className="w-7 h-7 mr-2" />
              English
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
