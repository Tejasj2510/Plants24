import { useState } from "react";
import styles from "./Navbar.module.css";
import ContactForm from "./ContactForm";

export default function Navbar() {
  const [showForm, setShowForm] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToShop = () => {
    const section = document.getElementById("shop");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={styles.nav}>
        <h2 className={styles.logo} onClick={scrollToTop}>
          🌿 Plants24
        </h2>

        <div className={styles.links}>
          <button onClick={scrollToTop}>Home</button>
          <button onClick={scrollToShop}>Shop</button>
          <button onClick={() => setShowForm(true)}>Contact</button>
        </div>

        <div className={styles.cart}></div>
      </nav>

      {showForm && (
        <ContactForm onClose={() => setShowForm(false)} />
      )}
    </>
  );
}