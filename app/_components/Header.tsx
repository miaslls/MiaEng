import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className="icon-container">
        <i className="fi fi-ss-menu-burger"></i>
      </div>

      <p className={`${styles.title} clippable`}>
        <span>MiaEng</span> &nbsp; tools & games
      </p>

      <div className="icon-container">
        <i className="fi fi-ts-bulb"></i>
      </div>
    </div>
  );
}
