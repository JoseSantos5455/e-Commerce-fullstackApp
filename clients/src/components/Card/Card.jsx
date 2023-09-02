import {Cloudinary} from "@cloudinary/url-gen";
import GalleryProduct from "./GalleryProduct";
import { useState } from 'react'
import PropTypes from 'prop-types'
import Styles from './Card.module.css'
import { NavLink } from 'react-router-dom'
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
  id: PropTypes.string.isRequired,
}

export default function Card({ aviability, img, name, price, id }) {
  const cldInstance = new Cloudinary({cloud: {cloudName: 'dckiqiqjl'}});

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

  const myImage = cldInstance
  .image(`${img}`)
  .setDeliveryType('fetch')
//<GalleryProduct/><img className={Styles.img_product} src={myImage.toURL()} alt="Image product" />
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.stock}>
        <p>{aviability ? 'Available' : 'Unavailable'}</p>
        <AiOutlineHeart />
      </div>
      <div className={Styles.div_image}>
        <NavLink to={`/products/detail/${id}`}>
          <img className={Styles.img_product} src={myImage.toURL()} alt="Image product" />
        </NavLink>
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
