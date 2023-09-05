import Styles from './Info.module.css'

// eslint-disable-next-line react/prop-types

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addToCart, removeFromCart,setQuantity } from '../../Redux/actions/actions'
import {
  AiFillPlusCircle,
  AiOutlineMinusCircle,
} from 'react-icons/ai'


export default function Info({id,name, description,stock,price}) {

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const [isCart, setIsCart] = useState(false);
  // funcion que detecte si el producto ya esta en el carrito
  let productInCart = cart.find((item) => item.id === id)
  const [buyQ, setBuyQ] = useState(1)

  useEffect(() => {
    productInCart = cart.find((item) => item.id === id)
    if (productInCart) {
      setIsCart(true)
      setBuyQ(productInCart.buyQ)
    }else{
      setIsCart(false)
      setBuyQ(1)
    }
  }, [dispatch, id])



  const handleMoreQ = () => {

    setBuyQ(buyQ + 1)
    if (productInCart) {
      dispatch(setQuantity({ id, buyQ: buyQ + 1 }))
    }
  }

  const handleLessQ = () => {
    if (buyQ > 1) {
      setBuyQ(buyQ - 1)
      if (productInCart) {
        dispatch(setQuantity({ id, buyQ: buyQ - 1 }))
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
      <h3 className={Styles.pdt_name}>{name} </h3>
      <p className={Styles.pdt_description}>{description}</p>
      <p className={Styles.pdt_stock}>stock: {stock}</p>
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
