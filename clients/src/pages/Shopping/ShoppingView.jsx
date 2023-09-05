// import { NavCart } from "../../components/ShoppingCart/NavCart"
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart"
import { Static } from "../../components/ShoppingCart/Static"
import styles from './Shopping.module.css'
export const ShoppingView = () => {
    return (
        // <NavCart />
        < div className={styles.container_view}>
            <div className={styles.container_shopping}>
                <ShoppingCart />
                <Static />
            </div>
        </div>
    )
}