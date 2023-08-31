import  { useEffect, useState } from 'react'
import Styles from './BuyView.module.css'
import Categories from '../../components/Categories/Categories'
import OrderBy from '../../components/OrderBy/OrderBy'
import Filters from '../../components/Filters/Filters'
import ListCard from '../../components/Card/ListCard'
import Nav from '../../components/navBar/Nav'
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux'
import {
  getProducts,
  filterByGenres,
  orderByPrice,
  orderByValoration,
  getNameProducts,
} from '../../Redux/actions/actions'
import Footer from '../../components/Footer/Footer'
import { useNavigate, useParams } from 'react-router-dom'


export default function BuyView() {
  const {  isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  let dispatch = useDispatch()
  let prods = useSelector(state => state.products)
 
  useEffect(()=>{
    if(!prods){
      console.log('no products')
      dispatch(getProducts())
    }
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
