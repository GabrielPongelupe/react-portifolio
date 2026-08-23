import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";
import { LanguageContext } from "../contexts/LanguageContext";
import brasilFlag from "../assets/brasil.png";
import usaFlag from "../assets/usa.png";

const Navbar = () => {
  const { portuguese, toggleLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pagesMenuOpen, setPagesMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pagesMenuRef = useRef(null);
  const languageMenuRef = useRef(null);
  // Enquanto true, ignora o scroll-spy: evita que ele sobrescreva a seção
  // ativa com um valor "de trânsito" durante um scroll suave disparado por clique.
  const isClickScrollRef = useRef(false);
  const clickScrollTimeoutRef = useRef(null);

  const navLinks = [
    { id: "hero", label: portuguese ? "Início" : "Home" },
    { id: "experience", label: portuguese ? "Experiências" : "Experience" },
    { id: "projects", label: portuguese ? "Projetos" : "Projects" },
    { id: "technologies", label: portuguese ? "Tecnologias" : "Tech Stack" },
    { id: "movies-books", label: portuguese ? "Filmes/Livros" : "Movies/Books", path: "/filmes-livros" },
    { id: "blog", label: "Blog", path: "/blog" },
    { id: "contact", label: portuguese ? "Contato" : "Contact" },
  ];

  // Grupo 1: navegação dentro da própria página (scroll). Grupo 2: páginas separadas (rotas próprias).
  const mainLinks = navLinks.filter((link) => !link.path);
  const secondaryLinks = navLinks.filter((link) => link.path);

  // Marca o início de um scroll suave disparado por clique e agenda a liberação
  // do scroll-spy assim que ele terminar (via evento nativo, com timeout de segurança).
  const beginClickScroll = () => {
    isClickScrollRef.current = true;
    if (clickScrollTimeoutRef.current) clearTimeout(clickScrollTimeoutRef.current);
    clickScrollTimeoutRef.current = setTimeout(() => {
      isClickScrollRef.current = false;
    }, 1000);
  };

  useEffect(() => {
    const endClickScroll = () => {
      isClickScrollRef.current = false;
      if (clickScrollTimeoutRef.current) clearTimeout(clickScrollTimeoutRef.current);
    };

    const handleScroll = () => {
      // O fundo/borda "com scroll" da navbar vale para qualquer página, não só a home.
      setIsScrolled(window.scrollY > 20);

      if (location.pathname !== "/") return;

      // Um scroll suave disparado por clique já sabe qual é o alvo — não deixa
      // o cálculo por posição competir e sobrescrever com uma seção de trânsito.
      if (isClickScrollRef.current || location.state?.scrollTo) return;

      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActiveSection("contact");
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const scrollLinks = navLinks.filter((link) => !link.path);
      for (let i = scrollLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(scrollLinks[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(scrollLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scrollend", endClickScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", endClickScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portuguese, location.pathname]);

  // Se acabamos de navegar para a home vindos de outra página com um alvo de scroll pendente, rola até ele
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      setActiveSection(targetId);
      beginClickScroll();
      requestAnimationFrame(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      navigate(location.pathname, { replace: true, state: {} });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // Fecha os menus suspensos (Explorar / idioma) ao clicar fora deles
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (pagesMenuRef.current && !pagesMenuRef.current.contains(e.target)) {
        setPagesMenuOpen(false);
      }
      if (languageMenuRef.current && !languageMenuRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleNavClick = (link) => {
    if (link.path) {
      navigate(link.path);
      window.scrollTo(0, 0);
    } else if (location.pathname !== "/") {
      beginClickScroll();
      navigate("/", { state: { scrollTo: link.id } });
    } else {
      const element = document.getElementById(link.id);
      if (element) {
        setActiveSection(link.id);
        beginClickScroll();
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setMobileMenuOpen(false);
    setPagesMenuOpen(false);
  };

  const isLinkActive = (link) =>
    link.path
      ? location.pathname === link.path || location.pathname.startsWith(`${link.path}/`)
      : location.pathname === "/" && activeSection === link.id;

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
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick({ id: "hero" });
          }}
          className="flex items-center gap-2"
        >
          <span className="geist-sans flex h-11 w-11 -rotate-6 items-center justify-center rounded-xl border-2 border-black bg-emerald-500 text-2xl font-extrabold text-neutral-950 transition-transform duration-300 hover:rotate-0">
            G
          </span>
          <span className="geist-sans hidden text-xl font-extrabold tracking-tight text-neutral-950 sm:block">
            PONGELUPE<span className="text-emerald-600"></span>
          </span>
        </a>

        {/* Navegação - desktop, separada em 2 grupos: seções da home (scroll) e páginas próprias */}
        <div className="hidden items-center gap-6 md:flex">
          {/* Grupo 1: seções da home */}
          <ul className="flex items-center gap-7">
            {mainLinks.map((link) => {
              const isActive = isLinkActive(link);
              return (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link)}
                    className={`whitespace-nowrap border-b-2 pb-1 font-mono text-sm uppercase tracking-wide transition-colors duration-200 ${
                      isActive
                        ? "border-emerald-600 text-neutral-950"
                        : "border-transparent text-neutral-400 hover:text-neutral-950"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Separador visual entre os dois grupos de navegação */}
          <span className="h-4 w-px bg-neutral-300" aria-hidden="true" />

          {/* Grupo 2: páginas próprias (Filmes/Livros, Blog) agrupadas num menu compacto */}
          <div className="relative" ref={pagesMenuRef}>
            <button
              onClick={() => {
                setPagesMenuOpen((prev) => !prev);
                setDropdownOpen(false);
              }}
              className={`flex items-center gap-1.5 whitespace-nowrap border-b-2 pb-1 font-mono text-sm uppercase tracking-wide transition-colors duration-200 ${
                secondaryLinks.some(isLinkActive)
                  ? "border-emerald-600 text-neutral-950"
                  : "border-transparent text-neutral-400 hover:text-neutral-950"
              }`}
            >
              <span>{portuguese ? "Explorar" : "Explore"}</span>
              <IoChevronDown className={`text-xs transition-transform duration-200 ${pagesMenuOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl transition-all duration-300 ${
                pagesMenuOpen ? "max-h-40 opacity-100" : "pointer-events-none max-h-0 opacity-0"
              }`}
            >
              <ul className="text-neutral-950">
                {secondaryLinks.map((link) => (
                  <li
                    key={link.id}
                    onClick={() => handleNavClick(link)}
                    className={`cursor-pointer px-3.5 py-3 font-mono text-xs uppercase tracking-wide hover:bg-neutral-100 ${
                      isLinkActive(link) ? "text-emerald-600" : "text-neutral-600"
                    }`}
                  >
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Seletor de idioma - desktop */}
        <div className="hidden md:block relative" ref={languageMenuRef}>
          <button
            onClick={() => {
              setDropdownOpen(!dropdownOpen);
              setPagesMenuOpen(false);
            }}
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
          className="p-2 text-neutral-950 md:hidden"
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
          {mainLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link)}
              className={`flex w-full items-center rounded-xl px-3 py-2.5 font-mono text-sm uppercase tracking-wide transition-colors duration-200 ${
                isLinkActive(link)
                  ? "bg-neutral-100 text-neutral-950"
                  : "text-neutral-400 hover:bg-neutral-100 hover:text-neutral-950"
              }`}
            >
              {link.label}
            </button>
          ))}

          <p className="border-t border-neutral-200 px-3 pb-1 pt-3 font-mono text-xs uppercase tracking-wide text-neutral-400">
            {portuguese ? "Explorar" : "Explore"}
          </p>
          {secondaryLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link)}
              className={`flex w-full items-center rounded-xl px-3 py-2.5 font-mono text-sm uppercase tracking-wide transition-colors duration-200 ${
                isLinkActive(link)
                  ? "bg-neutral-100 text-neutral-950"
                  : "text-neutral-400 hover:bg-neutral-100 hover:text-neutral-950"
              }`}
            >
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
