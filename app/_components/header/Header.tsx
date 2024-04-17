import styles from './Header.module.css';
import dynamic from 'next/dynamic';

const ToggleThemeButton = dynamic(() => import('./ToggleThemeButton'), {
  ssr: false,
});

export default function Header() {
  return (
    <div className={styles.container}>
      <div className="icon-container">
        <i className="fi fi-ss-menu-burger"></i>
      </div>

      <p className={`${styles.title} clippable`}>
        <span>MiaEng</span> &nbsp; tools & games
      </p>

      <ToggleThemeButton />
    </div>
  );
}
