import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <h1>
          Bring Nature <br /> Into Your Home
        </h1>

        <p>
          Discover beautiful indoor and outdoor plants that
          make your space fresh and alive.
        </p>

        <button className={styles.btn}>Explore Plants</button>
      </div>

      <div className={styles.right}>
        <img src="" />
      </div>
    </div>
  );
}