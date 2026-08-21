import { useContext, useState, useEffect } from "react";
import {
  IoHomeOutline,
  IoBriefcaseOutline,
  IoFolderOpenOutline,
  IoHardwareChipOutline,
  IoMailOutline,
  IoChevronDown,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { LanguageContext } from "../contexts/LanguageContext";
import brasilFlag from "../assets/brasil.png";
import usaFlag from "../assets/usa.png";

const Navbar = () => {
  const { portuguese, toggleLanguage } = useContext(LanguageContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { id: "hero", label: portuguese ? "Início" : "Home", icon: IoHomeOutline },
    { id: "experience", label: portuguese ? "Experiências" : "Experience", icon: IoBriefcaseOutline },
    { id: "projects", label: portuguese ? "Projetos" : "Projects", icon: IoFolderOpenOutline },
    { id: "technologies", label: portuguese ? "Tecnologias" : "Tech Stack", icon: IoHardwareChipOutline },
    { id: "contact", label: portuguese ? "Contato" : "Contact", icon: IoMailOutline },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActiveSection(navLinks[navLinks.length - 1].id);
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portuguese]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  const handleToggleLanguage = (language) => {
    if ((language === "portuguese" && !portuguese) || (language === "english" && portuguese)) {
      toggleLanguage();
    }
    setDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 backdrop-blur-md transition-colors duration-300 ${
        isScrolled ? "border-b border-neutral-200 bg-white/90" : "bg-white/80"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between py-4">
        {/* Logo */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }} className="flex items-center gap-2">
          <span className="flex h-9 w-9 -rotate-6 items-center justify-center rounded-xl border-2 border-black bg-emerald-500 anton-regular text-lg text-neutral-950 transition-transform duration-300 hover:rotate-0">
            G
          </span>
          <span className="anton-regular hidden text-xl text-neutral-950 sm:block">
            PONGELUPE<span className="text-emerald-600"></span>
          </span>
        </a>

        {/* Nav pill - desktop */}
        <div className="hidden items-center gap-1 rounded-full border border-neutral-200 bg-neutral-100/80 p-1.5 backdrop-blur-md md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-white text-neutral-950 shadow-sm"
                    : "text-neutral-500 hover:text-neutral-950"
                }`}
              >
                <link.icon className="text-base" />
                {isActive && <span>{link.label}</span>}
              </button>
            );
          })}
        </div>

        {/* Seletor de idioma - desktop */}
        <div className="hidden md:block relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100/80 py-2 pl-2 pr-3 text-neutral-500 transition-colors duration-300 hover:text-neutral-950"
          >
            <img
              src={portuguese ? brasilFlag : usaFlag}
              alt={portuguese ? "Bandeira do Brasil" : "USA Flag"}
              className="h-7 w-7 rounded-full"
            />
            <IoChevronDown className={`text-sm transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
          </button>

          <div
            className={`absolute right-0 mt-2 w-40 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl transition-all duration-300 ${
              dropdownOpen ? "max-h-40 opacity-100" : "pointer-events-none max-h-0 opacity-0"
            }`}
          >
            <ul className="text-neutral-950">
              <li
                onClick={() => handleToggleLanguage("portuguese")}
                className="flex items-center gap-2.5 px-3.5 py-3 cursor-pointer text-sm hover:bg-neutral-100"
              >
                <img src={brasilFlag} alt="Bandeira do Brasil" className="h-6 w-6 rounded-full" />
                Português
              </li>
              <li
                onClick={() => handleToggleLanguage("english")}
                className="flex items-center gap-2.5 px-3.5 py-3 cursor-pointer text-sm hover:bg-neutral-100"
              >
                <img src={usaFlag} alt="USA Flag" className="h-6 w-6 rounded-full" />
                English
              </li>
            </ul>
          </div>
        </div>

        {/* Hamburger - mobile */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-neutral-100/80 p-2 text-neutral-700 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <IoClose className="text-xl" /> : <IoMenu className="text-xl" />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="mx-auto max-w-6xl space-y-1 rounded-2xl border border-neutral-200 bg-white p-3 mb-4 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
                activeSection === link.id
                  ? "bg-neutral-100 text-neutral-950"
                  : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950"
              }`}
            >
              <link.icon className="text-lg" />
              {link.label}
            </button>
          ))}

          <div className="flex justify-center gap-2 border-t border-neutral-200 pt-3 mt-3">
            <button
              onClick={() => handleToggleLanguage("portuguese")}
              className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm ${
                portuguese ? "bg-neutral-100 text-neutral-950" : "text-neutral-400"
              }`}
            >
              <img src={brasilFlag} alt="Bandeira do Brasil" className="h-5 w-5 rounded-full" />
              PT
            </button>
            <button
              onClick={() => handleToggleLanguage("english")}
              className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm ${
                !portuguese ? "bg-neutral-100 text-neutral-950" : "text-neutral-400"
              }`}
            >
              <img src={usaFlag} alt="USA Flag" className="h-5 w-5 rounded-full" />
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
