'use client';

import { useTheme } from '@/app/_providers/ThemeContextProvider';

export default function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <button className="icon-button" onClick={toggleTheme}>
      <div className="icon-container">
        <i
          className={`fi fi-ts-${isDarkTheme ? 'bulb' : 'lightbulb-slash'}`}
        ></i>
      </div>
    </button>
  );
}
