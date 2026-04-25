import { useRouter } from "next/router";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
    
  const router = useRouter();
  

  const handleBuy = (e) => {
    
    e.stopPropagation();
    const msg = `I want to buy ${product.name} for ₹${product.price}`;
    window.open(
      `https://wa.me/918421265523?text=${encodeURIComponent(msg)}`
    );
  };
  

  return (
    <div
      className={styles.card}
      onClick={() => router.push(`/product/${product.slug?.current}`)}
    >
      <img src={product.images?.[0]} className={styles.img} />

      <div className={styles.info}>
        <h4>{product.name}</h4>
        <p className={styles.price}>₹ {product.price}</p>
      </div>

      <button className={styles.buyBtn} onClick={handleBuy}>
        Buy Now
      </button>
    </div>
  );
}