'use client';

import styles from './HamburgerMenu.module.css';

import { useMenu } from '@providers/MenuContextProvider';
import { useTheme } from '@providers/ThemeContextProvider';

type OverlayProps = {
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
};

function Overlay({ children, isOpen, close }: OverlayProps) {
  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
      onClick={close}
    >
      {children}
    </div>
  );
}

export default function HamburgerMenu() {
  const { isMenuOpen, handleToggleMenu: closeMenu } = useMenu();

  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  function handleClick(
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) {
    e.stopPropagation();

    if (e.currentTarget instanceof HTMLButtonElement) {
      closeMenu();
    }
  }

  return (
    <Overlay isOpen={isMenuOpen} close={closeMenu}>
      <div
        className={`${styles.container} ${isDarkTheme ? styles.dark : ''}`}
        onClick={handleClick}
      >
        <button className={`icon-button ${styles.close}`} onClick={handleClick}>
          <div className="icon-container">
            <i className="fi fi-rs-cross-small"></i>
          </div>
        </button>
      </div>
    </Overlay>
  );
}
