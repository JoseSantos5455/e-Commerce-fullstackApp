import  { useEffect, useState } from 'react'
import Styles from './BuyView.module.css'
import Categories from '../../components/Categories/Categories'
import OrderBy from '../../components/OrderBy/OrderBy'
import Filters from '../../components/Filters/Filters'
import ListCard from '../../components/Card/ListCard'
import Nav from '../../components/navBar/Nav'
import { useDispatch, useSelector } from 'react-redux'
import {
  getProducts,
  filterByGenres,
  orderByPrice,
  orderByValoration,
  getNameProducts,
} from '../../Redux/actions/actions'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
export default function BuyView() {
  let {name} = useParams()
  let dispatch = useDispatch()


  useEffect(()=>{
    dispatch(getProducts())
  },[])

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
