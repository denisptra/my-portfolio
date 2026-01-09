
import React, { createContext, useContext, useState } from 'react';
import { translations } from './translations';

type Language = 'en' | 'id';

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: any;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');

  const t = translations[lang];

  return (
    <AppContext.Provider value={{ lang, setLang, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
