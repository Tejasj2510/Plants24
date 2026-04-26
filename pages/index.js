import { useState } from "react";
import styles from "../styles/Home.module.css";
import { client } from "../lib/sanity";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Home({ products }) {
  const safeProducts = Array.isArray(products) ? products : [];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState([]);

  // ✅ FILTER (SAFE)
  const filtered = safeProducts.filter((p) => {
    return (
      (p?.name || "").toLowerCase().includes(search.toLowerCase()) &&
      (category === "all" ||
        (p?.category || "").toLowerCase() === category.toLowerCase())
    );
  });

  // ✅ SELECT TOGGLE
  const toggleSelect = (product) => {
    setSelected((prev) => {
      const exists = prev.find((p) => p._id === product._id);
      if (exists) {
        return prev.filter((p) => p._id !== product._id);
      } else {
        return [...prev, product];
      }
    });
  };

  // ✅ WHATSAPP BULK SEND
  const sendBulkToWhatsApp = () => {
    if (selected.length === 0) {
      alert("Select at least one plant");
      return;
    }

    const message = selected
      .map((p, i) => `${i + 1}. ${p.name} - ₹${p.price}`)
      .join("\n");

    const text = `🌿 Plants24 Bulk Enquiry\n\n${message}`;

    window.open(
      `https://wa.me/918421265523?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />

      {/* FILTERS */}
      <div className={styles.filters}>
        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("indoor")}>Indoor</button>
        <button onClick={() => setCategory("outdoor")}>Outdoor</button>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {filtered.map((p) => {
          // ✅ SAFETY (prevents hydration crash)
          if (!p?._id || !p?.slug?.current) return null;

          return (
            <ProductCard
              key={p._id}
              product={p}
              onSelect={toggleSelect}
              selected={selected.some((item) => item._id === p._id)}
            />
          );
        })}
      </div>

      {/* BULK BUTTON */}
      {selected.length > 0 && (
        <button className={styles.enquireBtn} onClick={sendBulkToWhatsApp}>
          <span className={styles.count}>{selected.length}</span>
          Enquire Now
        </button>
      )}

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/918421265523"
        target="_blank"
        className={styles.whatsapp}
      >
        <FaWhatsapp />
      </a>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.left}>
            <h3>🌿 Plants24</h3>

            <p>
              <strong>📍 Address:</strong> Somatane Phata, Parandwadi Road,
              Near Blue Dart Office, Tal. Maval, Dist. Pune-410506
            </p>
            <p>
              <strong>📞 Contact:</strong> +91 8421265523
            </p>
            <p>
              <strong>✉️ Email:</strong> patilyoge625@gmail.com
            </p>
          </div>

          <div className={styles.right}>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/plants24.shop" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/PlantSpot3113/" target="_blank">
                <FaFacebook />
              </a>
              <a href="https://wa.me/918421265523" target="_blank">
                <FaWhatsapp />
              </a>
            </div>

            <span>© 2026 Plants24. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

//////////////////////////////////////////////////////
// ✅ VERY IMPORTANT (YOU BROKE THIS EARLIER)
//////////////////////////////////////////////////////

export async function getServerSideProps() {
  const products = await client.fetch(`
    *[_type == "product"] | order(_createdAt asc) {
      _id,
      name,
      price,
      category,
      slug,
      "images": images[].asset->url
    }
  `);

  return {
    props: {
      products: products || [],
    },
  };
}