/* eslint-disable react/prop-types */
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useTheme must be used within a component wrapped with ThemeProvider. ' +
        'ThemeProvider sets up the theme context and provides a function for toggling the theme.',
    );
  }

  return context;
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(global.window?.__theme || 'light');

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    global.window.__onThemeChange = setTheme;
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
