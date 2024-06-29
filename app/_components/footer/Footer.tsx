'use client';

import styles from './Footer.module.css';

import React from 'react';
import Link from 'next/link';
import { type Device, useDevice } from '@providers/DeviceContextProvider';

import GithubIcon from './icons/GithubIcon';
import LinkedinBoxIcon from './icons/LinkedinBoxIcon';
import PortfolioIcon from './icons/PortfolioIcon';

type FooterLinkProps = {
  url: string;
  text: string;
  icon: JSX.Element;
  device: Device;
};

function FooterLink({ url, text, icon, device }: FooterLinkProps) {
  return (
    <Link
      className={styles['link-container']}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={`icon-container ${styles['link-icon']}`}>{icon}</div>

      {device !== 'mobile' && (
        <>
          <span className={styles['link-text']}>{text}</span>

          {device === 'desktop' && (
            <div className={styles['external-link']}>
              <i className="fi fi-bs-arrow-up-right"></i>
            </div>
          )}
        </>
      )}
    </Link>
  );
}

export default function Footer() {
  const device = useDevice();
  const isDesktop = device === 'desktop';

  const links = [
    {
      url: 'https://camilasalles.dev',
      text: isDesktop ? 'camilasalles.dev' : 'portfolio',
      icon: <PortfolioIcon />,
    },
    {
      url: 'https://linkedin.com/in/salles-camila',
      text: isDesktop ? 'in/salles-camila' : 'linkedin',
      icon: <LinkedinBoxIcon />,
    },
    {
      url: 'https://github.com/miaslls',
      text: isDesktop ? '/miaslls' : 'github',
      icon: <GithubIcon />,
    },
  ];

  return (
    <footer className={styles.container}>
      <div className={`title clippable ${styles.title}`}>
        <span>MiaEng</span> &nbsp; tools & games
      </div>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          {links.map((link) => (
            <li key={link.text}>
              <FooterLink {...link} device={device} />
            </li>
          ))}
        </ul>
      </nav>

      {device !== 'mobile' && (
        <p className={styles.legal}>{`© ${new Date().getFullYear()} ${
          device === 'desktop' ? 'Camila Salles' : 'miaslls'
        }`}</p>
      )}
    </footer>
  );
}
