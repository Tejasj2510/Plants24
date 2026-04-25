import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.logo}>🌿 Plants24</h2>

      <div className={styles.links}>
        <a>Home</a>
        <a>Shop</a>
        <a>Contact</a>
      </div>

      <div className={styles.cart}>🛒</div>
    </nav>
  );
}