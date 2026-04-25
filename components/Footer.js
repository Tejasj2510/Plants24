import styles from "./Footer.module.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.container}>

        {/* LEFT SIDE */}
        <div className={styles.left}>
          <h3>🌿 Plants24</h3>
          <p>Bring nature closer to your home</p>

          <p><strong>📍 Address:</strong> Somatane Phata, Parandwadi Road, Near Blue Dart Office, Tal. Maval, Dist. Pune-410506</p>
          <p ><strong>📞 Contact:</strong> +91 8421265523</p>
          <p><strong>✉️ Email:</strong> patilyoge625@gmail.com</p>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/plants24.shop?igsh=NWNobTR5N2gwbG94" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            {/* FIXED FACEBOOK LINK (you had https://https://) */}
            <a href="https://www.facebook.com/PlantSpot3113/" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>

            <a href="https://wa.me/918421265523" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </div>

          <span>© 2026 Plants24</span>
        </div>

      </div>

    </footer>
  );
}