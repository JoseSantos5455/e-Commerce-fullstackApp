import { Link } from "react-router-dom";
import styles from "./ShoppingCart.module.css";

export const Static = () => {
  return (
    <div className={styles.static_container}>
      <h1 className={styles.static_title}>Don&lsquo;t pass up these offers.</h1>
      <Link to="/products" className={styles.back_static}>Back to products</Link>
    </div>
  );
};
