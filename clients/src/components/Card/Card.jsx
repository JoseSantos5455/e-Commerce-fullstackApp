import { useState } from 'react'
import PropTypes from 'prop-types'
import Styles from './Card.module.css'
import {NavLink} from 'react-router-dom'
import {
  AiOutlineHeart,
  AiFillPlusCircle,
  AiOutlineMinusCircle,
} from 'react-icons/ai'

Card.propTypes = {
  aviability: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default function Card({ aviability, img, name, price }) {
  const [buyQ, setBuyQ] = useState(1)

  const handleMoreQ = () => {
    setBuyQ(buyQ + 1)
  }

  const handleLessQ = () => {
    if (buyQ > 0) {
      setBuyQ(buyQ - 1)
    } else {
      setBuyQ(buyQ)
    }
  }

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.stock}>
        <p>{aviability ? 'Available' : 'Unavailable'}</p>
        <AiOutlineHeart />
      </div>
      <div className={Styles.div_image}>
        <div className={Styles.img_container}>
          <img className={Styles.img_product} src={img} alt="Image product" />
        </div>
      </div>
      <div className={Styles.description_card}>
        <div className={Styles.price}>
          <p>{name}</p>
          <p className={Styles.price_number}>${price}</p>
        </div>
        <div className={Styles.add}>
          <div className={Styles.div_input}>
            <AiFillPlusCircle onClick={handleMoreQ} />
            <input type="number" value={buyQ} readOnly />
            <AiOutlineMinusCircle onClick={handleLessQ} />
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
