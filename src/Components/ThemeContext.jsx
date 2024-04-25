import React, { createContext, useState, useContext } from 'react';


const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [white, setWhite] = useState(false);

  const toggleTheme = () => {
    setWhite(prevState => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ white, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
