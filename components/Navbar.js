import { useState } from "react";
import styles from "./Navbar.module.css";
import ContactForm from "./ContactForm";
import { FaSearch } from "react-icons/fa";

export default function Navbar({ onSearch }) {
  const [showForm, setShowForm] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch?.(value); // send to parent (Home.js)
  };

  return (
    <>
      <nav className={styles.nav}>
        <h2 className={styles.logo} onClick={scrollToTop}>
          🌿 Plants24
        </h2>

        <div className={styles.links}>
          <button onClick={() => (window.location.href = "/")}>
            Home
          </button>
          <button onClick={scrollToTop}>Shop</button>
          <button onClick={() => setShowForm(true)}>Contact</button>

          {/* 🔍 SEARCH ICON */}
          <FaSearch
            className={styles.searchIcon}
            onClick={() => setShowSearch((prev) => !prev)}
          />
        </div>
      </nav>

      {/* 🔍 SEARCH BAR DROPDOWN */}
      {showSearch && (
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search plants or price..."
            value={search}
            onChange={handleSearch}
          />
        </div>
      )}

      {showForm && (
        <ContactForm onClose={() => setShowForm(false)} />
      )}
    </>
  );
}