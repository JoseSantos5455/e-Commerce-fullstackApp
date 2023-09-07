import Styles from './Info.module.css'
import Rating from '../Rating/Rating'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addToCart, removeFromCart,setQuantity } from '../../Redux/actions/actions'
import {
  AiFillPlusCircle,
  AiOutlineMinusCircle,
} from 'react-icons/ai'

// eslint-disable-next-line react/prop-types

export default function Info({id,name, description,stock,price,valoration}) {

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const [buyQ, setBuyQ] = useState(1)
  const [isCart, setIsCart] = useState(false);
  // funcion que detecte si el producto ya esta en el carrito
  let productInCart = cart.find((item) => item.id === id)

  useEffect(() => {
    const productInCart = cart.find((item) => item.id === id); // Declare it here
    if (productInCart) {
      setIsCart(true);
      setBuyQ(productInCart.buyQ);
    } else {
      setIsCart(false);
      setBuyQ(1);
    }
  }, [dispatch, id, cart]);


  const handleMoreQ = () => {
    if (stock > buyQ){
      setBuyQ(buyQ + 1)
      if (productInCart) {
        dispatch(setQuantity({ id, buyQ: buyQ + 1 }))
      }
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
      dispatch(addToCart({ id, name, price:parseFloat(price), buyQ }))
    }

  }

  return (
    <div className={Styles.wrapper}>
      <p className={Styles.pdt_description}>{description}</p>
      <div><Rating valoration={valoration}></Rating></div>
      <p className={Styles.pdt_stock}>Stock: {stock}</p>
      <p className={Styles.pdt_price}>${price}</p>
      <div className={Styles.div_input}>
        <AiOutlineMinusCircle onClick={handleLessQ} />
        <input type="number" value={buyQ} readOnly />
        <AiFillPlusCircle onClick={handleMoreQ} />
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
