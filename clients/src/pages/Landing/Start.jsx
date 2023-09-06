import Styles from './Start.module.css'
import NavBar from '../../components/navBar/Nav'
import Featured from '../../components/Featured/Featured'
import Carrousel from '../../components/Carrousel/Carrousel'
import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, validateSuccessOrder, createOrderSuccess } from '../../Redux/actions/actions'



export default function Start() {
  const dispatch = useDispatch()
  const currentURL = window.location.href;
  const cart = useSelector((state) => state.cart)
  const userId = useSelector((state) => state.user.id)
  const validate_order = useSelector((state) => state.validate_order)
  const productsIds = {
    productIds: cart
  }
  // Parsea los parámetros de la URL
  const urlParams = new URLSearchParams(currentURL);

  // Obtiene los valores de payment_id y status de los parámetros
  const paymentIdValue = urlParams.get('payment_id');
  const statusValue = urlParams.get('status');

  // verificar que validate_order sea diferente al payment_id
  const  validate =  validate_order !== paymentIdValue


  useEffect(() => {
    if (statusValue === 'approved' && validate === true && cart.length > 0) {
      dispatch(validateSuccessOrder(paymentIdValue))
      dispatch(clearCart())
      dispatch(createOrderSuccess({ userId: userId , productsIds }))
      // dispatch(createOrderSuccess({ userId: userId || "6e32721a-c13b-4c0c-836c-21ab54668e8d", productsIds }))
      
    }
    
  }, []  )

  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <NavBar />
      </div>
      <div className={Styles.content}>
        <div className={Styles.featured}>
          <Featured />
        </div>
        <div className={Styles.carrousel}>
          <Carrousel />
        </div>
      </div>
      <Footer />
    </div>
  )
}
