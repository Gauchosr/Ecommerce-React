import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GeneralContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const GeneralContext = createContext<GeneralContextType | undefined>(undefined);

export const GeneralProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <GeneralContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneral = (): GeneralContextType => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error('useGeneral deve essere usato all\'interno di un GeneralProvider');
  }
  return context;
}; 