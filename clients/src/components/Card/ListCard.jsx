import Card from './Card'
import Styles from './ListCard.module.css'
import { useSelector } from 'react-redux'

export default function ListCard() {
  let products = useSelector((state) => state.products)

  let aviability = products.map((pdt) => (pdt.stock > 0 ? true : false))

  return (
    <div className={Styles.wrapper}>
      <h2 className={Styles.h2}> Products </h2>
      <div className={Styles.list}>
        {products && products.length > 0 ? (
          products.map((pdt, idx) => (
            <Card
              key={idx}
              aviability={aviability[idx]}
              img={pdt.image}
              name={pdt.name}
              price={pdt.price}
              isFavorite={pdt.favorite}
            />
          ))
        ) : (
          <p> No products </p>
        )}
      </div>
    </div>
  )
}
