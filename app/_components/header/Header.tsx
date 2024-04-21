'use client';

import styles from './Header.module.css';

import { useMenu } from '@providers/MenuContextProvider';
import dynamic from 'next/dynamic';

const ToggleThemeButton = dynamic(() => import('./ToggleThemeButton'), {
  ssr: false,
});

export default function Header() {
  const { isMenuOpen, handleToggleMenu: openMenu } = useMenu();

  return (
    <div className={styles.container}>
      <button
        className={`icon-button ${isMenuOpen ? 'disabled-button' : ''}`}
        onClick={openMenu}
      >
        <div className="icon-container">
          <i className="fi fi-ss-menu-burger"></i>
        </div>
      </button>

      <p className={`${styles.title} clippable`}>
        <span>MiaEng</span> &nbsp; tools & games
      </p>

      <ToggleThemeButton disabled={isMenuOpen} />
    </div>
  );
}
