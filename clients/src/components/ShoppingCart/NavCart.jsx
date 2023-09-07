import styles from "./ShoppingCart.module.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

export const NavCart = () => {
  return (
    <div className={styles.container_nav}>
      <div className={styles.orderTitle}>
      <Link to="/products">
          <IoArrowBackOutline className={styles.backIcon}/>
        </Link>        
        <h1 className={styles.title}>Your order</h1>
        </div>
        <div className={styles.logo}>
          <img src={logo} alt="logo" className={`${styles.logo}`} />
        </div>
    </div>
  );
};
