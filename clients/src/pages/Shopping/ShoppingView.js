import { NavCart } from "../../components/ShoppingCar/NavCart"
import ShoppingCar from "../../components/ShoppingCar/ShoppingCar"
import { Static } from "../../components/ShoppingCar/Static"
import styles from './Shopping.module.css'
export const ShoppingView = ()=>{
return (
    < div className={styles.container_view}>
        <NavCart />
        <div className={styles.container_shopping}>
            <ShoppingCar /> 
            <Static /> 
        </div>
    </div>
)
}