import styles from './AppBar.module.css';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

export default function AppBar() {
  return (
    <header className={styles.header}>
      <Navigation />
      <UserMenu />
    </header>
  );
}
