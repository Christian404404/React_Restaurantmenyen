import Dish from "./Dishes.jsx";
import styles from "./Menu.module.css";

function Menu({ dishes }) {
  return (
    <div className={styles.displayGridMenu}>
      {dishes.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  );
}
export default Menu;
