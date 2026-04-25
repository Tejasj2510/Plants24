import styles from "./Footer.module.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>🌿 Plants24</h3>
      <p>Bring nature closer to your home</p>

      <div className={styles.socials}>
        <a href="https://instagram.com" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank">
          <FaFacebook />
        </a>
        <a href="https://wa.me/918421265523" target="_blank">
          <FaWhatsapp />
        </a>
      </div>

      <span>© 2026 Plants24</span>
    </footer>
  );
}