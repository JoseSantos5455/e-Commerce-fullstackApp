import Rating from "../Rating/Rating";
import { useState } from 'react'
import PropTypes from 'prop-types'
import Styles from './Card.module.css'
import { NavLink } from 'react-router-dom'
import {
  AiOutlineHeart,
  AiFillPlusCircle,
  AiOutlineMinusCircle,
} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addToCart, removeFromCart, setQuantity } from '../../Redux/actions/actions'

Card.propTypes = {
  aviability: PropTypes.bool.isRequired,
  valoration: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
}

export default function Card({ aviability, valoration, img, name, price, id,stock }) {

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const [isCart, setIsCart] = useState(false);
  // funcion que detecte si el producto ya esta en el carrito
  let productInCart = cart.find((item) => item.id === id)

  const [buyQ, setBuyQ] = useState(1)
  useEffect(() => {
    productInCart = cart.find((item) => item.id === id)
    if (productInCart) {
      setBuyQ(productInCart.buyQ)
      setIsCart(true)

    }else{
      setIsCart(false)
      setBuyQ(1)
    }
    // dispatch(getDetail(id))
  }, [dispatch, id])



  const handleMoreQ = () => {
    if (stock > buyQ) {
      setBuyQ(buyQ + 1)
      if (productInCart) {
        dispatch(setQuantity({ id, buyQ: buyQ + 1 }))
      }
    }
  }

  const handleLessQ = () => {
    if (buyQ > 1) {
      setBuyQ(buyQ - 1)
      if (productInCart){
        dispatch(setQuantity({id, buyQ : buyQ-1}))
      }
    } else {
      setBuyQ(buyQ)
    }
  }
  const handleAddToCart = () => {

    if (productInCart) {
      setIsCart(false)

      setBuyQ(1)
      dispatch(removeFromCart(id))
    }else{

      setIsCart(true)
      dispatch(addToCart({ id, name, price, buyQ }))
    }

  }

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.stock}>
        <p>{aviability ? 'Available' : 'Unavailable'}</p>
        <AiOutlineHeart />
      </div>
      <div className={Styles.div_image}>
        <NavLink to={`/products/detail/${id}`}>
          <img className={Styles.img_product} src={img} alt="Image product" />
        </NavLink>
      </div>
      
      <div className={Styles.description_card}>

        <div className={Styles.price}>
          <p className={Styles.name_card}>{name}</p>
          <div>
            <Rating valoration={valoration}></Rating>
          </div>  
          <p className={Styles.price_number}>${price}</p>
        </div>
        <div className={Styles.add}>
          <div className={Styles.div_input}>
            <AiFillPlusCircle onClick={handleMoreQ} />
            <input type="number" value={buyQ} readOnly />
            <AiOutlineMinusCircle onClick={handleLessQ} />
          </div>
          {
            !isCart ?
              (
                <button onClick={handleAddToCart}>Add to cart</button>
              ) :
              (
                <button onClick={handleAddToCart}>Remove from cart</button>
              )
          }
          {/* <button>Add to cart</button> */}
        </div>
      </div>
    </div>
  )
}
