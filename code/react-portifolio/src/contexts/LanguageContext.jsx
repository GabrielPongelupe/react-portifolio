import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [portuguese, setPortuguese] = useState(true);

    const toggleLanguage = () => {
        setPortuguese((prev) => !prev);
    };

    return (
        <LanguageContext.Provider value={{ portuguese, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
