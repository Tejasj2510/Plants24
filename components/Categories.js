import styles from "./Categories.module.css";

export default function Categories({ setCategory }) {
  return (
    <div className={styles.wrapper}>
      <div onClick={() => setCategory("indoor")} className={styles.card}>
        🌿 Indoor
      </div>

      <div onClick={() => setCategory("outdoor")} className={styles.card}>
        🌳 Outdoor
      </div>

      <div onClick={() => setCategory("cactus")} className={styles.card}>
        🌵 Cactus
      </div>
    </div>
  );
}