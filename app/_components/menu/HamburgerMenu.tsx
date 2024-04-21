'use client';

import styles from './HamburgerMenu.module.css';
import { useTheme } from '@providers/ThemeContextProvider';

type OverlayProps = {
  children: React.ReactNode;
};

function Overlay({ children }: OverlayProps) {
  return <div className={`${styles.overlay} ${styles.open}`}>{children}</div>;
}

export default function HamburgerMenu() {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <Overlay>
      <div className={`${styles.container} ${isDarkTheme ? styles.dark : ''}`}>
        MENU
      </div>
    </Overlay>
  );
}
