import { useState, useEffect } from 'react';
import * as themes from '@/styles/themes';
import type { DefaultTheme } from 'styled-components';

type ThemeType = 'darkTheme' | 'lightTheme';

export const useStorageTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("darkTheme");

  const getStoredTheme = () => {
    const stored = localStorage.getItem('selectedTheme');
    
    if (stored === "darkTheme" || stored === "lightTheme") {
      saveThemeToStorage(stored);
    }
  
    saveThemeToStorage("darkTheme");
  };
  
  const saveThemeToStorage = (theme: ThemeType) => {
    localStorage.setItem('selectedTheme', theme);
    setCurrentTheme(theme);
  };
  
  const toggleTheme = () => {
    const newTheme: ThemeType = currentTheme === "darkTheme" ? "lightTheme" : "darkTheme";
    saveThemeToStorage(newTheme);
  };
  
  const setTheme = (theme: ThemeType) => {
    saveThemeToStorage(theme);
  };
  
  const getTheme = (): DefaultTheme => {
    console.log('Tema salvo no localStorage:', );
    return themes[currentTheme];
  };

  useEffect(() => {
    getStoredTheme();
  }, []); 

  return {
    currentTheme,
    toggleTheme,
    setTheme,
    getTheme,
  };
};