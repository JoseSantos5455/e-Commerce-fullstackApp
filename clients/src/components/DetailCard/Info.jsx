import Styles from './Info.module.css'
import Rating from '../Rating/Rating'

// eslint-disable-next-line react/prop-types

export default function Info({name, description, price, valoration, stock,}) {
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addToCart, removeFromCart } from '../../Redux/actions/actions'
import {
  AiFillPlusCircle,
  AiOutlineMinusCircle,
} from 'react-icons/ai'


export default function Info({cart,id,name, description,stock,price}) {

  const dispatch = useDispatch()

  // const cart = useSelector((state) => state.cart)

  const [isCart, setIsCart] = useState(false);
  // funcion que detecte si el producto ya esta en el carrito
  let productInCart

  useEffect(() => {
    productInCart = cart.find((item) => item.name === name)
    if (productInCart) {
      setIsCart(true)
      setBuyQ(productInCart.buyQ)
    }
  }, [dispatch,name])


  const [buyQ, setBuyQ] = useState(1)

  const handleMoreQ = () => {

    setBuyQ(buyQ + 1)
  }

  const handleLessQ = () => {
    if (buyQ > 1) {
      setBuyQ(buyQ - 1)
    } else {
      setBuyQ(buyQ)
    }
  }

  const handleAddToCart = () => {
    if (productInCart) {
      setIsCart(false)

      setBuyQ(1)
      dispatch(removeFromCart(id))
      return
    }
    setIsCart(true)
    dispatch(addToCart({ id, name, price, buyQ }))

  }

  return (
    <div className={Styles.wrapper}>
      <h3 className={Styles.pdt_name}>{name} </h3>
      <p className={Styles.pdt_description}>{description}</p>
      <div><Rating valoration={valoration}></Rating></div>
      <p className={Styles.pdt_stock}>Stock: {stock}</p>
      <p className={Styles.pdt_price}>${price}</p>
      {/* <button className={Styles.btn_buy}>Buy now</button> */}
      <div className={Styles.div_input}>
        <AiFillPlusCircle onClick={handleMoreQ} />
        <input type="number" value={buyQ} readOnly />
        <AiOutlineMinusCircle onClick={handleLessQ} />
      </div>
      {
        !isCart ?
          (
            <button className={Styles.btn_buy} onClick={handleAddToCart}>Add to cart</button>
          ) :
          (
            <button className={Styles.btn_buy} onClick={handleAddToCart}>Remove from cart</button>
          )
      }
    </div>
  )
}
