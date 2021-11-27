import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
