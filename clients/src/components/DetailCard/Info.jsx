import Styles from './Info.module.css'
import Rating from '../Rating/Rating'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addToCart, getReviews, removeFromCart, setQuantity } from '../../Redux/actions/actions'
import {
  AiFillPlusCircle,
  AiOutlineMinusCircle,
} from 'react-icons/ai'

const initialReview = {
  id: 0,
  description: "",
  productId: "",
  userId: "",
  isActive: false,
  userFullName: ""
}

export default function Info({id,name, description,stock,price,valoration}) {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const [buyQ, setBuyQ] = useState(1)
  const [isCart, setIsCart] = useState(false);
  const [ setReview] = useState(initialReview);
  const [reviews, setReviews] = useState([]) // Use an array to store multiple reviews
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

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await dispatch(getReviews(id));
        setReviews(data.slice(0, 3));
        if (data.length > 0) {
          setReview(data[0]) // Set the first review as the default review
        }
      } catch (error) {
        // Manejar errores aquí
        console.error("Error fetching reviews", error);
      }
    };
  
    fetchReviews();
  }, [dispatch, id]);

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
      <h3 className={Styles.pdt_name}>{name} </h3>
      <p className={Styles.pdt_description}>{description}</p>
      <div><Rating valoration={valoration}></Rating></div>
      <p className={Styles.pdt_stock}>Stock: {stock}</p>
      <p className={Styles.pdt_price}>${price}</p>
      {/* <button className={Styles.btn_buy}>Buy now</button> */}
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
      <div>
      {reviews.length > 0 && (
      <div >
        <h2 className={Styles.centerText}>Reviews</h2> {/* Cambia la clase a la de tu componente */}
          {/* Map through the first three reviews and display them */}
          {reviews.map((r) => (
            <div key={r.id}>
              <textarea className={Styles.fullWidth} value={r.description} readOnly></textarea> {/* Cambia la clase a la de tu componente */}
            </div>
        ))}
      </div>
      )}
      </div>
    </div>
  )
}
