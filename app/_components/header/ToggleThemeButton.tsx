'use client';

import React from 'react';
import { useTheme } from '@/app/_providers/ThemeContextProvider';

export default function ToggleThemeButton({ disabled }: { disabled: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <button
      className={`icon-button ${disabled ? 'disabled-button' : ''}`}
      onClick={toggleTheme}
    >
      <div className='icon-container'>
        <i
          className={`fi fi-ts-${isDarkTheme ? 'bulb' : 'lightbulb-slash'}`}
        ></i>
      </div>
    </button>
  );
}
