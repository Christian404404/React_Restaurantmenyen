import styles from "./Dishes.module.css";

function Dish({ dish }) {
  return (
    <div className={styles.menuCard}>
      <h2 className={styles.title}>{dish.tittel}</h2>
      <p className={styles.category}>{dish.kategori}</p>
      <p className={styles.ingredients}>{dish.ingredienser}</p>
      <p className={styles.price}>{dish.pris}</p>
    </div>
  );
}

export default Dish;
