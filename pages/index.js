import { useState } from "react";
import styles from "../styles/Home.module.css";
import { client } from "../lib/sanity";
import ProductCard from "../components/ProductCard";
// import styles from "../styles/Home.module.css";
// import cardStyles from "../styles/ProductCard.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa"; 


export default function Home({ products }) {
  const safeProducts = Array.isArray(products) ? products : [];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(1000);

  const filtered = safeProducts.filter((p) => {
    return (
      p?.name?.toLowerCase().includes(search.toLowerCase()) &&
      (category === "all" || p?.category === category) &&
      p?.price <= price
    );
  });

  return (
    <div className={styles.container}>
     <Navbar />
<Hero />
{/* <Categories setCategory={setCategory} /> */}
      {/* FILTERS */}
      <div className={styles.filters}>
        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("indoor")}>Indoor</button>
        <button onClick={() => setCategory("outdoor")}>Outdoor</button>
      </div>

      {/* PRICE */}
      <div className={styles.price}>
        <span>Max Price: ₹{price}</span>
        <input
          type="range"
          min="0"
          max="1000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {filtered.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/918421265523"
        target="_blank"
        className={styles.whatsapp}
      >
        💬
      </a>

      {/* FOOTER */}
   

<footer className={styles.footer}>
  <div className={styles.footerContent}>
    <h3>🌿 Plants24</h3>
    <p>Bring nature closer to your home</p>

    <div className={styles.socials}>
      <a href="https://www.instagram.com/plants24.shop?igsh=NWNobTR5N2gwbG94" target="_blank">
        <FaInstagram />
      </a>

      <a href="https://facebook.com" target="_blank">
        <FaFacebook />
      </a>

      <a href="https://wa.me/918421265523" target="_blank">
        <FaWhatsapp />
      </a>
    </div>

    <span>© 2026 Plants24. All rights reserved.</span>
  </div>
</footer>
    </div>
  );
}

export async function getServerSideProps() {
  const products = await client.fetch(`
    *[_type == "product"]{
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