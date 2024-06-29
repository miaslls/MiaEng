'use client';

import styles from './Header.module.css';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useMenu } from '@providers/MenuContextProvider';

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

      <Link href="/" className={`${styles.title} title clippable`}>
        <span>MiaEng</span> &nbsp; tools & games
      </Link>

      <ToggleThemeButton disabled={isMenuOpen} />
    </div>
  );
}
