import Styles from './Info.module.css'

// eslint-disable-next-line react/prop-types
export default function Info({name, description,stock,price}) {
  return (
    <div className={Styles.wrapper}>
      <h3 className={Styles.pdt_name}>{name} </h3>
      <p className={Styles.pdt_description}>{description}</p>
      <p className={Styles.pdt_stock}>stock: {stock}</p>
      <p className={Styles.pdt_price}>${price}</p>
      <button className={Styles.btn_buy}>Buy now</button>
    </div>
  )
}
