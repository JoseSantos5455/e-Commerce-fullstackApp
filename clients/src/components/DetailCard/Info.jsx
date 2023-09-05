import Styles from './Info.module.css'
import Rating from '../Rating/Rating'

// eslint-disable-next-line react/prop-types
export default function Info({name, description, price, valoration, stock,}) {
  return (
    <div className={Styles.wrapper}>
      <h3 className={Styles.pdt_name}>{name} </h3>
      <p className={Styles.pdt_description}>{description}</p>
      <div><Rating valoration={valoration}></Rating></div>
      <p className={Styles.pdt_stock}>Stock: {stock}</p>
      <p className={Styles.pdt_price}>${price}</p>
      <button className={Styles.btn_buy}>Buy now</button>
    </div>
  )
}
