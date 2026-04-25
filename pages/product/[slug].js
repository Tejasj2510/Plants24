import { useState } from "react";
import { client } from "../../lib/sanity";
import styles from "../../styles/Product.module.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Product({ product }) {
  const [selected, setSelected] = useState(product.images?.[0]);

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.wrapper}>

          {/* LEFT - IMAGES */}
          <div className={styles.images}>
            <img src={selected} className={styles.mainImg} />

            <div className={styles.thumbRow}>
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={styles.thumb}
                  onClick={() => setSelected(img)}
                />
              ))}
            </div>
          </div>

          {/* RIGHT - INFO */}
          <div className={styles.info}>
            <h1>{product.name}</h1>
            <p className={styles.price}>₹ {product.price}</p>

            <p className={styles.desc}>{product.description}</p>

            <a
              href={`https://wa.me/918421265523?text=I want ${product.name} for ₹${product.price}`}
              target="_blank"
              className={styles.buyBtn}
            >
              Order on WhatsApp
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const query = `*[_type == "product" && slug.current == "${params.slug}"][0]{
    name,
    price,
    description,
    "images": images[].asset->url
  }`;

  const product = await client.fetch(query);

  return { props: { product } };
}