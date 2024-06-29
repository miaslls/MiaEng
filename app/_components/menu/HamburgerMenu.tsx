'use client';

import styles from './HamburgerMenu.module.css';

import React from 'react';
import Link from 'next/link';
import { useMenu } from '@providers/MenuContextProvider';
import { menuData } from '@/app/_data/menu';

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
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
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
          {menuData.map((category) => (
            <div key={category.title}>
              <div className={styles['category-header']}>
                <span>
                  {category.titleUrl ? (
                    <Link href={category.titleUrl} onClick={closeMenu}>
                      {category.title}
                    </Link>
                  ) : (
                    category.title
                  )}
                </span>
                <span className="icon-container">
                  <i className="fi fi-ss-angle-double-small-right"></i>
                </span>
              </div>

              {category.items && (
                <ul className={styles['category-items']}>
                  {category.items.map((item) => (
                    <li key={item.url}>
                      <Link href={item.url} onClick={closeMenu}>
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        <footer className={styles['menu-footer']}>
          <h3 className="title clippable">
            <span>MiaEng</span> &nbsp; tools & games
          </h3>
          <p className="clippable">
            © {new Date().getFullYear()} Camila Salles
          </p>
        </footer>
      </div>
    </Overlay>
  );
}
