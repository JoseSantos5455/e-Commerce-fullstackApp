import  NavCart  from "../../components/ShoppingCart/ShoppingCart"
import ShoppingCar from "../../components/ShoppingCart/ShoppingCart"
import { Static } from "../../components/ShoppingCart/Static"
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