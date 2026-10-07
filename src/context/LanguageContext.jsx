import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("retinacare-language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("retinacare-language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "hi" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}