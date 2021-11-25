import styles from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";

export default function AppBar() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
