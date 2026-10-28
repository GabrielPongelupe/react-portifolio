import { createContext, useEffect, useState } from "react";
import { detectLanguage } from "../utils/detectLanguage";

export const LanguageContext = createContext();

const STORAGE_KEY = "language";

const readStoredLanguage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "pt" || stored === "en" ? stored : null;
  } catch {
    return null;
  }
};

export const LanguageProvider = ({ children }) => {
  // null while the visitor's country is still being detected.
  const [language, setLanguage] = useState(readStoredLanguage);

  useEffect(() => {
    if (language !== null) return;
    let cancelled = false;
    detectLanguage().then((detected) => {
      if (!cancelled) setLanguage(detected);
    });
    return () => {
      cancelled = true;
    };
  }, [language]);

  useEffect(() => {
    if (language !== null) {
      document.documentElement.lang = language === "pt" ? "pt-BR" : "en-US";
    }
  }, [language]);

  // Only called from the navbar selector, so a stored value always means an explicit choice.
  const toggleLanguage = () => {
    const next = language === "pt" ? "en" : "pt";
    setLanguage(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable (e.g. private mode): the choice just won't persist.
    }
  };

  if (language === null) return null;

  return (
    <LanguageContext.Provider value={{ portuguese: language === "pt", toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
