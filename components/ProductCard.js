import Link from "next/link";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, onSelect, selected }) {
  return (
    <div className={styles.card}>
     <Link href={`/product/${product.slug.current}`}>
  <img
    src={product.images?.[0]}
    alt={product.name}
    className={styles.img}
  />

</Link>
      <div className={styles.info}>
        <h4>{product.name}</h4>
        <p className={styles.price}>₹ {product.price}</p>
      </div>

      <div className={styles.actions}>
        <button
          className={`${styles.selectBtn} ${
            selected ? styles.selected : ""
          }`}
          onClick={() => onSelect(product)}
        >
          {selected ? "✓ Selected" : "Select"}
        </button>

        <button
          className={styles.buyBtn}
          onClick={() => {
            const msg = `I want to buy ${product.name} for ₹${product.price}`;
            window.open(
              `https://wa.me/918421265523?text=${encodeURIComponent(msg)}`
            );
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
}