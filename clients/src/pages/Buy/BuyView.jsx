import { useEffect } from 'react'
import Styles from './BuyView.module.css'
import Categories from '../../components/Categories/Categories'
import OrderBy from '../../components/OrderBy/OrderBy'
import Filters from '../../components/Filters/Filters'
import ListCard from '../../components/Card/ListCard'
import Nav from '../../components/navBar/Nav'
import { useDispatch } from 'react-redux'
import {
  getProducts,
  filterByGenres,
  orderByPrice,
  orderByValoration,
} from '../../Redux/actions/actions'
import Footer from '../../components/Footer/Footer'
export default function BuyView() {
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  function handlerCategories(e) {
    e.preventDefault()
    dispatch(filterByGenres(e.target.value))
  }

  function handlerByValoration(e) {
    dispatch(orderByValoration(e))
  }

  function handlerByPrice(e) {
    dispatch(orderByPrice(e))
  }

  return (
    <div>
      <div className={Styles.container_buy}>
        <Nav />
        <div className={Styles.wrapper}>
          <div className={Styles.filters}>
            <OrderBy
              handlerByValoration={handlerByValoration}
              handlerByPrice={handlerByPrice}
            />
            <Filters handlerCategories={handlerCategories} />
            <div className={Styles.categories}>
              <Categories />
            </div>
          </div>
          <div className={Styles.listCard}>
            <ListCard />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
