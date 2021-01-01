import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <>
      <div className={styles.navwrapper}></div>
      <nav className={styles.nav}>
        <div className={styles.ulwrapper}>
          <Link href="/">
            <a className={styles.links}>ಠ_ಠ&nbsp;&nbsp;Grog&nbsp;Log</a>
          </Link>

          <Link href="/">
            <a className={styles.links}>About</a>
          </Link>
        </div>
      </nav>
    </>
  );
}
