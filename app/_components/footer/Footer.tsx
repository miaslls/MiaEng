'use client';

import styles from './Footer.module.css';

import { useDevice } from '@providers/DeviceContextProvider';
import GithubIcon from './icons/GithubIcon';
import LinkedinBoxIcon from './icons/LinkedinBoxIcon';
import PortfolioIcon from './icons/PortfolioIcon';

type FooterLinkObj = {
  url: string;
  text: string;
  icon: JSX.Element;
};

export default function Footer() {
  const device = useDevice();
  const isDesktop = device === 'desktop';

  const links: FooterLinkObj[] = [
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
          <li>link</li>
          <li>link</li>
          <li>link</li>
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
