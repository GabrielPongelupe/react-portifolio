import { useContext, useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaChevronDown } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";
import { LanguageContext } from "../contexts/LanguageContext";
import brasilFlag from "../assets/brasil.png";
import usaFlag from "../assets/usa.png";

const Navbar = () => {
  const { portuguese, toggleLanguage } = useContext(LanguageContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Verifica se a página foi rolada para adicionar efeito de background no navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      handleNavClick(); // Fecha o menu mobile se estiver aberto
  };

  const handleToggleLanguage = (language) => {
    if ((language === 'portuguese' && !portuguese) || (language === 'english' && portuguese)) {
      toggleLanguage();
    }
    setDropdownOpen(false);
  };

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "hero", label: portuguese ? "Início" : "Home" },
    {id: "experience", label: portuguese ? "Experiências": "Experiences"},
    { id: "projects", label: portuguese ? "Projetos" : "Projects" },
    { id: "technologies", label: portuguese ? "Tecnologias" : "Technologies" },
    { id: "contact", label: portuguese ? "Contato" : "Contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${
        isScrolled 
          ? "bg-neutral-900/90 backdrop-blur-sm shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <a href="#hero" className="mx-2 transition-transform duration-300 hover:scale-105">
            <p className="anton-regular text-2xl md:text-3xl text-white">
              GABRIEL<span className="text-orange-400">PONGELUPE</span>
            </p>
          </a>
        </div>

        {/* Hamburger menu para mobile */}
        <button 
          type="button" 
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg 
            className="h-6 w-6" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

        {/* Menu navegação para desktop */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <ul className="flex space-x-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.id} className="relative group">
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className="block pt-2 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social links para desktop */}
        <div className="hidden md:flex items-center space-x-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/gabriel-pongelupe-de-carvalho-2b2b372b4/"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
            className="text-gray-300 hover:text-orange-400 transition-transform hover:scale-110 duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/GabrielPongelupe"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-gray-300 hover:text-orange-400 transition-transform hover:scale-110 duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=gabrielpongelupee@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Gmail"
            className="text-gray-300 hover:text-orange-400 transition-transform hover:scale-110 duration-300"
          >
            <SiGmail />
          </a>
          <a
            href="https://leetcode.com/u/gabrielpongelupe/"
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode"
            className="text-gray-300 hover:text-orange-400 transition-transform hover:scale-110 duration-300"
          >
            <SiLeetcode />
          </a>
        </div>

        {/* Seletor de idioma */}
        <div className="hidden md:block relative ml-6">
          <button
            onClick={handleDropdown}
            className="flex items-center gap-2 text-slate-300 hover:text-white"
          >
            <img
              src={portuguese ? brasilFlag : usaFlag}
              alt={portuguese ? "Bandeira do Brasil" : "USA Flag"}
              className="w-8 h-8 rounded-full shadow-md hover:shadow-slate-600 transition-transform duration-300"
            />
            <FaChevronDown className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          <div
            className={`absolute right-0 mt-2 w-32 bg-neutral-800 rounded-md shadow-lg z-50 overflow-hidden transition-all duration-300 ${dropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <ul className="text-white">
              <li
                onClick={() => handleToggleLanguage('portuguese')}
                className="flex items-center px-2 py-2 hover:bg-neutral-700 cursor-pointer"
              >
                <img src={brasilFlag} alt="Bandeira do Brasil" className="w-6 h-6 mr-2" />
                Português
              </li>
              <li
                onClick={() => handleToggleLanguage('english')}
                className="flex items-center px-2 py-2 hover:bg-neutral-700 cursor-pointer"
              >
                <img src={usaFlag} alt="USA Flag" className="w-6 h-6 mr-2" />
                English
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div 
        className={`${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-neutral-900 mt-2 rounded-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-neutral-800 rounded-md transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          
          {/* Social links para mobile */}
          <div className="flex flex-wrap justify-center gap-6 py-4 text-2xl border-t border-neutral-800 mt-4">
            <a
              href="https://www.linkedin.com/in/gabriel-pongelupe-de-carvalho-2b2b372b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-transform hover:scale-110 duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/GabrielPongelupe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-transform hover:scale-110 duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=gabrielpongelupee@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-transform hover:scale-110 duration-300"
            >
              <SiGmail />
            </a>
            <a
              href="https://leetcode.com/u/gabrielpongelupe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-transform hover:scale-110 duration-300"
            >
              <SiLeetcode />
            </a>
          </div>
          
          {/* Seletor de idioma para mobile */}
          <div className="flex justify-center py-4 border-t border-neutral-800">
            <button
              onClick={() => handleToggleLanguage('portuguese')}
              className={`flex items-center px-3 py-2 rounded-md mr-2 ${portuguese ? 'bg-neutral-700' : 'bg-neutral-800'}`}
            >
              <img src={brasilFlag} alt="Bandeira do Brasil" className="w-6 h-6 mr-2" />
              PT
            </button>
            <button
              onClick={() => handleToggleLanguage('english')}
              className={`flex items-center px-3 py-2 rounded-md ${!portuguese ? 'bg-neutral-700' : 'bg-neutral-800'}`}
            >
              <img src={usaFlag} alt="USA Flag" className="w-6 h-6 mr-2" />
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;