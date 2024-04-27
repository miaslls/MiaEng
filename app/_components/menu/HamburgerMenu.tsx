'use client';

import styles from './HamburgerMenu.module.css';
import { useMenu } from '@providers/MenuContextProvider';

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
      <div className={styles.container} onClick={handleClick}>
        <button className={`icon-button ${styles.close}`} onClick={handleClick}>
          <div className="icon-container">
            <i className="fi fi-rs-cross-small"></i>
          </div>
        </button>

        <nav className={styles['menu-nav']}>
          <ul>
            <h2>
              <span>TOOLS</span>
              <span className="icon-container">
                <i className="fi fi-ss-angle-double-small-right"></i>
              </span>
            </h2>
            <li>
              <a>Lorem ipsum</a>
            </li>
            <li>
              <a>Dolor sit</a>
            </li>
            <li>
              <a>Amet</a>
            </li>
          </ul>

          <ul>
            <h2>
              <span>GAMES</span>
              <span className="icon-container">
                <i className="fi fi-ss-angle-double-small-right"></i>
              </span>
            </h2>
            <li>
              <a>Lorem ipsum</a>
            </li>
            <li>
              <a>Dolor sit</a>
            </li>
            <li>
              <a>Amet</a>
            </li>
          </ul>
        </nav>

        <footer className={styles['menu-footer']}>
          <h3 className={`${styles.title} clippable`}>
            <span>MiaEng</span> &nbsp; tools & games
          </h3>
          <p>© {new Date().getFullYear()} Camila Salles</p>
        </footer>
      </div>
    </Overlay>
  );
}
